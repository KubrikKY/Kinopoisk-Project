import TheHeader from '@/components/TheHeader';
import './globals.css';
import TheFooter from '@/components/TheFooter';

export const metadata = {
  title: 'Kinopoisk',
  description: 'My version Kinopoisk site',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TheHeader />
        <main>{children}</main>
        <TheFooter />
      </body>
    </html>
  );
}
