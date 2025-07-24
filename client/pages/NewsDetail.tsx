import { useLocation, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { ArrowLeft, Calendar, Eye, User } from "lucide-react";
import { motion } from "framer-motion";

export default function NewsDetail() {
  const location = useLocation();
  const { news } = location.state; // Mengambil data berita yang dikirim melalui Link

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (!news) {
    return <div>Berita tidak ditemukan.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/berita"
          className="inline-flex items-center text-green-600 hover:text-green-800 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Kembali ke semua berita
        </Link>
        
        <article>
          <motion.div layoutId={`news-image-${news.id}`} className="aspect-video w-full overflow-hidden rounded-lg mb-6">
             <img
                src={news.image}
                alt={news.title}
                className="w-full h-full object-cover"
              />
          </motion.div>
         
          <motion.h1 layoutId={`news-title-${news.id}`} className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            {news.title}
          </motion.h1>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500 mb-6 border-b pb-4">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1.5" /> Admin MPP
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1.5" /> {formatDate(news.date)}
            </div>
            <div className="flex items-center">
              <Eye className="h-4 w-4 mr-1.5" /> {news.views.toLocaleString()} kali dilihat
            </div>
          </div>
          
          <div 
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: news.content }}
          />
        </article>
      </div>
    </div>
  );
}