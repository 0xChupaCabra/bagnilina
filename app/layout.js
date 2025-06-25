import "./globals.css";

export const metadata = {
  title: 'Bagni Lina - Celle Ligure',
  description: 'Stabilimento balneare a Celle Ligure con bar, ristorante e servizi completi.',
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
