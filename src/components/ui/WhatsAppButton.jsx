import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton({ 6285280001567 }) {
  const message = encodeURIComponent(
    'Halo BPD Desa Jeruk, saya ingin menyampaikan aspirasi/pertanyaan...'
  );
  const waUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-200"
      aria-label="Hubungi BPD via WhatsApp"
      title="Chat WhatsApp BPD"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
