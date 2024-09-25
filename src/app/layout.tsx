// src/app/layout.tsx
import Navbar from './components/Navbar';
import './globals.css';


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
    <html lang="en">
      <head>
      </head>
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
