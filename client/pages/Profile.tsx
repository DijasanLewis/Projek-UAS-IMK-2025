import Navbar from "@/components/Navbar";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LogOut, User, Mail, Shield, Phone } from "lucide-react";
import { Navigate } from "react-router-dom";

const profileSchema = z.object({
    nama: z.string().min(2, { message: "Nama lengkap harus diisi." }),
    email: z.string().email({ message: "Format email tidak valid." }),
    telepon: z.string().min(10, { message: "Nomor telepon minimal 10 digit." }).regex(/^[0-9]+$/, { message: "Hanya boleh berisi angka." }),
  });

export default function Profile() {
    const { user, isLoggedIn, logout, login } = useAuth();
    const [isEditing, setIsEditing] = useState(false);
    const { toast } = useToast();

    const form = useForm<z.infer<typeof profileSchema>>({
        resolver: zodResolver(profileSchema),
        values: {
            nama: user?.nama || "",
            email: user?.email || "",
            telepon: user?.telepon || "",
        }
        });

    const onProfileSubmit = (values: z.infer<typeof profileSchema>) => {
    const registeredUsers = JSON.parse(localStorage.getItem('mppRegisteredUsers') || '[]');
    const userIndex = registeredUsers.findIndex((u: any) => u.nik === user?.nik);

    if (userIndex > -1) {
        const updatedUser = { ...registeredUsers[userIndex], ...values };
        registeredUsers[userIndex] = updatedUser;
        localStorage.setItem('mppRegisteredUsers', JSON.stringify(registeredUsers));
        login(updatedUser); // Update context
        toast({ title: "✅ Profil Berhasil Diperbarui" });
        setIsEditing(false);
    }
    };

    if (!isLoggedIn) return <Navigate to="/login" replace />;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto bg-green-100 p-3 rounded-full w-fit mb-4">
                <User className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle>{user?.nama}</CardTitle>
            <CardDescription>Profil Pengguna</CardDescription>
          </CardHeader>
          <CardContent>
            {isEditing ? (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onProfileSubmit)} className="space-y-4">
                  <FormField control={form.control} name="nama" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nama Lengkap</FormLabel>
                      <FormControl><Input {...field} onChange={e => field.onChange(e.target.value.toUpperCase())} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl><Input type="email" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="telepon" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nomor HP</FormLabel>
                      <FormControl><Input {...field} onChange={e => field.onChange(e.target.value.replace(/\D/g, ''))} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <div className="flex gap-2 pt-4">
                    <Button type="button" variant="outline" onClick={() => setIsEditing(false)} className="w-full">Batal</Button>
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">Simpan Perubahan</Button>
                  </div>
                </form>
              </Form>
            ) : (
              <>
                <div className="space-y-4">
                    <div className="flex items-center">
                        <Shield className="h-5 w-5 mr-3 text-gray-400" />
                        <span className="text-sm text-gray-500">NIK:</span>
                        <span className="ml-auto font-medium text-gray-800">{user?.nik}</span>
                    </div>
                    <div className="flex items-center">
                        <Mail className="h-5 w-5 mr-3 text-gray-400" />
                        <span className="text-sm text-gray-500">Email:</span>
                        <span className="ml-auto font-medium text-gray-800">{user?.email}</span>
                    </div>
                    <div className="flex items-center">
                        <Phone className="h-5 w-5 mr-3 text-gray-400" />
                        <span className="text-sm text-gray-500">Nomor HP:</span>
                        <span className="ml-auto font-medium text-gray-800">{user?.telepon}</span>
                    </div>
                </div>
                <Button onClick={() => setIsEditing(true)} className="w-full mt-8 bg-green-600 hover:bg-green-700">
                    Edit Profil
                </Button>
                <Button onClick={logout} variant="destructive" className="w-full mt-2">
                  <LogOut className="h-4 w-4 mr-2" />
                  Keluar
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
