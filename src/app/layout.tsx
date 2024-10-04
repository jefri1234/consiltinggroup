// src/app/layout.tsx
import Navbar from './components/Navbar';
import './globals.css';
import Head from 'next/head';


export const metadata = {
  title: 'Consulting Group',
  description: 'consulting group',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <Head>
      <meta name="google" content="notranslate" />
        {/* Título de la página */}
        <title>CertificaCursos - Cursos online con certificados</title>
        
        {/* Metadatos generales */}
        <meta name="description" content="Ofrecemos una amplia variedad de cursos online con la posibilidad de obtener certificados al finalizar." />
        <meta name="keywords" content="cursos online, certificados, educación en línea, certificación de cursos, aprender en línea , consultinggroup" />
        <meta name="author" content="CertificaCursos" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        

        {/* Open Graph para redes sociales */}
        <meta property="og:title" content="CertificaCursos - Cursos online con certificados" />
        <meta property="og:description" content="Obtén tu certificado en cualquier curso que elijas al completar las lecciones. Inscríbete hoy." />
        <meta property="og:image" content="/img/grupo-consultinggroup.jpg" />
        <meta property="og:url" content="https://www.facebook.com/groupconsultingperu" />
        <meta property="og:type" content="https://consultinggroup.com.pe" />



        {/* Favicon */}
        <link rel="icon" href="/img/aulavirtual.png" />
        
      </Head>
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
