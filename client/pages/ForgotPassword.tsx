import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"; // Import OTP Input
import { KeyRound, CheckCircle, MailCheck } from "lucide-react";

// Definisikan skema untuk setiap langkah
const stepOneSchema = z.object({
  identifier: z.string().min(1, { message: "NIK atau Email harus diisi." }),
});

const stepTwoSchema = z.object({
  code: z.string().length(6, { message: "Kode verifikasi harus 6 digit." }),
});

const stepThreeSchema = z.object({
  password: z.string().min(8, { message: "Password baru minimal 8 karakter." }),
  confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
  message: "Konfirmasi password tidak cocok.",
  path: ["confirmPassword"],
});


// Kode verifikasi palsu yang akan kita gunakan
const FAKE_VERIFICATION_CODE = "123456";

export default function ForgotPassword() {
  const [step, setStep] = useState(1);
  const [userToReset, setUserToReset] = useState<any>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const stepOneForm = useForm<z.infer<typeof stepOneSchema>>({
    resolver: zodResolver(stepOneSchema),
    defaultValues: { identifier: "" },
  });

  const stepTwoForm = useForm<z.infer<typeof stepTwoSchema>>({
    resolver: zodResolver(stepTwoSchema),
    defaultValues: { code: "" },
  });

  const stepThreeForm = useForm<z.infer<typeof stepThreeSchema>>({
    resolver: zodResolver(stepThreeSchema),
    defaultValues: { password: "", confirmPassword: "" },
  });

  const handleStepOneSubmit = (values: z.infer<typeof stepOneSchema>) => {
    const registeredUsers = JSON.parse(localStorage.getItem('mppRegisteredUsers') || '[]');
    const foundUser = registeredUsers.find(
        (user: any) => user.nik === values.identifier || user.email === values.identifier
    );

    if (foundUser) {
        setUserToReset(foundUser);
        setStep(2); // Lanjut ke langkah verifikasi kode
    } else {
        toast({ variant: "destructive", title: "Pengguna Tidak Ditemukan", description: "Pastikan NIK atau Email Anda sudah benar." });
    }
  };
  
  const handleStepTwoSubmit = (values: z.infer<typeof stepTwoSchema>) => {
    if (values.code === FAKE_VERIFICATION_CODE) {
        setStep(3); // Lanjut ke langkah input password baru
    } else {
        stepTwoForm.setError("code", { type: "manual", message: "Kode verifikasi salah." });
    }
  };

  const handleStepThreeSubmit = (values: z.infer<typeof stepThreeSchema>) => {
    const registeredUsers = JSON.parse(localStorage.getItem('mppRegisteredUsers') || '[]');
    const userIndex = registeredUsers.findIndex(
        (user: any) => user.nik === userToReset.nik
    );
    
    if (userIndex > -1) {
        registeredUsers[userIndex].password = values.password;
        localStorage.setItem('mppRegisteredUsers', JSON.stringify(registeredUsers));
        setStep(4); // Lanjut ke halaman sukses
    } else {
        toast({ variant: "destructive", title: "Terjadi Kesalahan", description: "Gagal memperbarui password, silakan coba lagi." });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex items-center justify-center py-16 px-4">
        <Card className="w-full max-w-md">
          {step === 1 && (
            <>
              <CardHeader className="text-center">
                <div className="mx-auto bg-yellow-100 p-3 rounded-full w-fit mb-4">
                  <KeyRound className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle>Lupa Password</CardTitle>
                <CardDescription>Masukkan NIK atau Email Anda untuk melanjutkan.</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...stepOneForm}>
                  <form onSubmit={stepOneForm.handleSubmit(handleStepOneSubmit)} className="space-y-4">
                    <FormField control={stepOneForm.control} name="identifier" render={({ field }) => (
                      <FormItem>
                        <FormLabel>NIK atau Email</FormLabel>
                        <FormControl><Input placeholder="Masukkan NIK atau Email terdaftar" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">Cari Akun</Button>
                  </form>
                </Form>
              </CardContent>
            </>
          )}

          {step === 2 && (
             <>
              <CardHeader className="text-center">
                <div className="mx-auto bg-blue-100 p-3 rounded-full w-fit mb-4">
                  <MailCheck className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Verifikasi Email</CardTitle>
                <CardDescription>
                    Kami telah "mengirimkan" kode verifikasi ke email Anda.
                </CardDescription>
                <div className="mt-4 text-sm bg-yellow-50 p-2 rounded-md">
                    <p className="text-yellow-800">Untuk sementara, gunakan kode ini:</p>
                    <p className="font-bold text-lg tracking-widest text-yellow-900">{FAKE_VERIFICATION_CODE}</p>
                </div>
              </CardHeader>
              <CardContent>
                <Form {...stepTwoForm}>
                  <form onSubmit={stepTwoForm.handleSubmit(handleStepTwoSubmit)} className="space-y-6 flex flex-col items-center">
                    <FormField control={stepTwoForm.control} name="code" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Kode Verifikasi</FormLabel>
                        <FormControl>
                          <InputOTP maxLength={6} {...field}>
                            <InputOTPGroup>
                              <InputOTPSlot index={0} />
                              <InputOTPSlot index={1} />
                              <InputOTPSlot index={2} />
                              <InputOTPSlot index={3} />
                              <InputOTPSlot index={4} />
                              <InputOTPSlot index={5} />
                            </InputOTPGroup>
                          </InputOTP>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">Verifikasi</Button>
                  </form>
                </Form>
              </CardContent>
            </>
          )}

          {step === 3 && (
            <>
              <CardHeader className="text-center">
                <CardTitle>Atur Ulang Password</CardTitle>
                <CardDescription>Masukkan password baru Anda.</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...stepThreeForm}>
                  <form onSubmit={stepThreeForm.handleSubmit(handleStepThreeSubmit)} className="space-y-4">
                    <FormField control={stepThreeForm.control} name="password" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password Baru</FormLabel>
                        <FormControl><Input type="password" placeholder="Minimal 8 karakter" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={stepThreeForm.control} name="confirmPassword" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Konfirmasi Password Baru</FormLabel>
                        <FormControl><Input type="password" placeholder="Ketik ulang password baru" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">Atur Ulang Password</Button>
                  </form>
                </Form>
              </CardContent>
            </>
          )}

          {step === 4 && (
            <CardContent className="text-center p-8">
                <div className="mx-auto bg-green-100 p-3 rounded-full w-fit mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-green-600">Password Berhasil Diubah!</CardTitle>
                <CardDescription className="mt-2 mb-6">
                    Sekarang Anda dapat masuk dengan password baru Anda.
                </CardDescription>
                <Button onClick={() => navigate('/login')} className="bg-green-600 hover:bg-green-700">
                    Kembali ke Halaman Login
                </Button>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
}