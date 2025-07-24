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
import { Eye, EyeOff, UserPlus } from "lucide-react";

const registerSchema = z.object({
  nik: z.string().regex(/^\d{16}$/, { message: "NIK harus 16 digit angka." }),
  nama: z.string().min(2, { message: "Nama lengkap harus diisi." }),
  email: z.string().email({ message: "Format email tidak valid." }),
  telepon: z.string().min(10, { message: "Nomor telepon minimal 10 digit." }).regex(/^[0-9]+$/, { message: "Hanya boleh berisi angka." }),
  password: z.string().min(8, { message: "Password minimal 8 karakter." }),
  confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
  message: "Konfirmasi password tidak cocok.",
  path: ["confirmPassword"],
});

export default function Register() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
    defaultValues: { nik: "", nama: "", email: "", telepon: "", password: "", confirmPassword: "" },
  });

  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    console.log("Registered user:", values);
    
    // Simpan data pendaftaran ke localStorage sebagai database sementara
    // Dalam aplikasi nyata, ini adalah panggilan API ke backend
    const registeredUsers = JSON.parse(localStorage.getItem('mppRegisteredUsers') || '[]');
    const userExists = registeredUsers.some((user: any) => user.nik === values.nik || user.email === values.email);

    if (userExists) {
        toast({
            variant: "destructive",
            title: "Pendaftaran Gagal",
            description: "NIK atau Email sudah terdaftar.",
        });
        return;
    }

    registeredUsers.push(values);
    localStorage.setItem('mppRegisteredUsers', JSON.stringify(registeredUsers));

    toast({
        title: "✅ Pendaftaran Berhasil!",
        description: "Anda akan diarahkan ke halaman login.",
    });

    setTimeout(() => navigate('/login'), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-lg">
          <CardHeader className="text-center">
            <div className="mx-auto bg-green-100 p-3 rounded-full w-fit mb-4">
              <UserPlus className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle>Buat Akun Baru</CardTitle>
            <CardDescription>Lengkapi data di bawah untuk mendaftar.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField control={form.control} name="nik" render={({ field }) => (
                  <FormItem>
                    <FormLabel>NIK</FormLabel>
                    <FormControl>
                        <Input 
                        placeholder="16 digit NIK" 
                        {...field} 
                        onChange={e => field.onChange(e.target.value.replace(/\D/g, ''))} // Hanya angka
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="nama" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama Lengkap</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Sesuai KTP" 
                        {...field} 
                        onChange={e => field.onChange(e.target.value.toUpperCase())} // Kapital
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="telepon" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nomor HP</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="08xxxxxxxxxx" 
                        {...field} 
                        onChange={e => field.onChange(e.target.value.replace(/\D/g, ''))} // Hanya angka
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl><Input type="email" placeholder="nama@email.com" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="password" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl><Input type="password" placeholder="Minimal 8 karakter" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="confirmPassword" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Konfirmasi Password</FormLabel>
                    <FormControl><Input type="password" placeholder="Ketik ulang password" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" size="lg">
                  Daftar
                </Button>
              </form>
            </Form>
            <p className="text-center text-sm text-gray-600 mt-6">
              Sudah punya akun?{" "}
              <Link to="/login" className="font-medium text-green-600 hover:underline">
                Masuk di sini
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}