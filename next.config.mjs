/** @type {import('next').NextConfig} */
const nextConfig = {
    //para hacer el npm run build y genera carpeta aout
    //folder out si estoy seguro que mi app va ser estatica si o si
   // output: 'export',   <----------

//El problema parece estar relacionado con cómo Next.js maneja las imágenes cuando se usa el componente <Image /> y se exporta estáticamente.
//tenia problemas con el componente image de next 
//deshabilitar la optimización de imágenes para evitar problemas con las rutas generadas automáticamente por Next.js para las imágenes
    images: {
        unoptimized: true,
    },
};

export default nextConfig;