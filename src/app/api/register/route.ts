import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
const prisma = new PrismaClient();

const userSchema = z.object({
  nombre: z.string().min(1, { message: "Nombre es requerido" }),
  apellido: z.string().min(1, { message: "Apellido es requerido" }),
  telefono: z.string().min(1, { message: "Teléfono es requerido" }),
  email: z.string().email({ message: "Email no es válido" }),
});

export async function POST(req: Request) {
  try {
    const data = await req.json(); // Asegúrate de leer el body como JSON
    userSchema.parse(data);
    
    const user = await prisma.userRegistrados.create({
      data,
    });
    
    return NextResponse.json({ message: "Usuario registrado exitosamente", user }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
