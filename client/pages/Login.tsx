import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/hooks/useAuth";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Building, Eye, EyeOff, Shield } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const loginSchema = z.object({
  identifier: z.string().min(1, { message: "NIK atau Email harus diisi." }),
  password: z.string().min(1, { message: "Password harus diisi." })
});

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", formData);
  };

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
    defaultValues: { identifier: "", password: "" },
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    const registeredUsers = JSON.parse(localStorage.getItem('mppRegisteredUsers') || '[]');
    const foundUser = registeredUsers.find(
        (user: any) => 
            (user.nik === values.identifier || user.email === values.identifier) &&
            user.password === values.password
    );

    if (foundUser) {
        toast({ title: "✅ Login Berhasil!", description: "Selamat datang kembali." });
        login(foundUser);
        navigate("/");
    } else {
        toast({
            variant: "destructive",
            title: "Login Gagal",
            description: "NIK/Email atau password salah. Silakan coba lagi.",
        });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
      <Navbar />

      {/* Content */}
      <div className="flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-md">
          <Card className="border-green-100 shadow-xl">
            <CardHeader className="text-center">
              <div className="mx-auto bg-green-100 p-3 rounded-full w-fit mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Masuk ke Akun
              </CardTitle>
              <CardDescription className="text-gray-600">
                Masuk untuk mengakses layanan dan riwayat antrian Anda
              </CardDescription>
            </CardHeader>
            <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField control={form.control} name="identifier" render={({ field }) => (
                      <FormItem>
                          <FormLabel>NIK atau Email</FormLabel>
                          <FormControl><Input placeholder="Masukkan NIK atau Email" {...field} /></FormControl>
                          <FormMessage />
                      </FormItem>
                    )} />

                  <FormField control={form.control} name="password" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                            <div className="relative">
                                <Input type={showPassword ? "text" : "password"} placeholder="Masukkan password" {...field} />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                            </div>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                  )} />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="remember"
                        className="rounded border-green-300 text-green-600 focus:ring-green-500"
                      />
                      <Label htmlFor="remember" className="text-sm text-gray-600">
                        Ingat saya
                      </Label>
                    </div>
                    <Link
                      to="/forgot-password"
                      className="text-sm text-green-600 hover:text-green-500"
                    >
                      Lupa password?
                    </Link>
                  </div>

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" size="lg">
                    Masuk
                  </Button>
                </form>
              </Form>

              <Separator className="my-6" />

              <div className="text-center space-y-4">
              <p className="text-sm text-gray-600">
                  Belum memiliki akun?{" "}
                  <Link to="/register" className="text-green-600 hover:text-green-500 font-medium">
                    Daftar sekarang
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
