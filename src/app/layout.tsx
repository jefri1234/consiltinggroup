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

      <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js"></script>
      </head>
      <body>
        <Navbar/>
        {children}
      </body>
      
    </html>
  );
}
