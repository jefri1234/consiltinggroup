import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const { curso } = await request.json();
  console.log("Curso identificado:", curso);

  // Buscar el curso cuyo id coincide con el id recibido en el request
  const cursoencontrado = await prisma.curso.findUnique({
    where: {
      id_curso: parseInt(curso), // Comparar con el campo 'id'
    },
  });

  // Retornar la respuesta con el curso encontrado o un mensaje en caso de que no se encuentre
  return NextResponse.json({
    message: cursoencontrado ? "Curso encontrado" : "Curso no encontrado",
    data: cursoencontrado,
  });
}
