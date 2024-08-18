import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// FUNCTION TYPE POST
export async function POST(request: NextRequest) {
  const { userfound } = await request.json();

  console.log("consola next:", userfound);

  try {
    // Buscar todos los cursos asociados al id del usuario
    const cursos = await prisma.curso.findMany({
      where: {
        users: {
          some: {
            id: userfound,
          },
        },
      },
    });
    console.log(cursos)

    return NextResponse.json({
      message: "Cursos del alumno",
      alumno: userfound,
      cursos: cursos,
      status: 200,
    });
  } catch (error) {
    console.error("Error al buscar cursos:", error);
    return NextResponse.json({
      message: "Error al buscar cursos",
      status: 500,
    });
  }
}
