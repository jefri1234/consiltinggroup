// src/app/layout.tsx
import Navbar from './components/Navbar';
import './globals.css';
import Head from 'next/head';




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
     <Head>
        <title>Mi página Next.js</title>
        <meta name="description" content="Descripción de la página" />
        
        {/* Favicon */}
        <link rel="icon" href="/img/aulavirtual.png" />
        
        {/* Otros tamaños de icono para diferentes dispositivos */}
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Si tienes un manifiesto de la web */}
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
