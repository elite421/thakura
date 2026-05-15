import type { Metadata } from 'next';
import './globals.css';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: 'Thakura Infratech | Villa Society, Plotting, Construction & Trading',
  description:
    'Thakura INFRATECH PRIVATE LIMITED provides villa society plotting, construction, manufacturing, import-export, trading and contractor services in Fatehpur, Uttar Pradesh.',
  icons:{
    icon:'/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
