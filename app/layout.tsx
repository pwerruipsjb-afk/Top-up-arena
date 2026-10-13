import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'TOPUP ARENA - บริการเติมเกมออนไลน์ 24 ชม.',
  description: 'เติมเกมออนไลน์ รวดเร็ว ปลอดภัย ราคาถูก',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="th">
      <body className="bg-[#0b0b0e] text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
