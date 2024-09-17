import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';//instale esta libreria por que el otro habia problemas 

const SECRET_KEY = new TextEncoder().encode(process.env.SECRET_KEY || 'tu_secreto_aqui');

export async function middleware(req: NextRequest) {
    console.log('Middleware ejecutándose'); // Agregar esta línea para ver si funciona el mid

    const token = req.cookies.get('token')?.value;

    console.log('Token en middleware:',token);
    console.log('Secret Key:', SECRET_KEY);

    if (token) {
        try {
            await jwtVerify(token, SECRET_KEY);
            return NextResponse.next(); // Si el token es válido, permite el acceso
        } catch (err) {
            if (err instanceof Error) {
                console.log('Token inválido', err.message); // Imprimir el mensaje de error
            } else {
                console.log('Token inválido', String(err)); // Si no es una instancia de Error, convertirlo a string
            }
        }
    }
    // Si no hay token o es inválido, redirige a la página de login
    return NextResponse.redirect(new URL('/login', req.url));
}

//PROTECCION DE RUTAS
export const config = {
    matcher: [
        '/pages/aula/:path*',
        '/pages/panel',
        '/pages/panel/cursos/:path*',//protege esta ruta todo lo que sigue de la ruta cursos esta protegido con la expresion path
        '/pages/panel/usuarios/:path*',
    ], // Agrega todas las rutas que quieres proteger
    
};

