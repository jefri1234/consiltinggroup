import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {

    const {nombre,description,Instructor,duracion} = await request.json();

    // Validación para verificar que todos los campos estén presentes y no estén vacíos
    if (
        !nombre ||
        !description ||
        !Instructor ||
        !duracion
      ) {
        console.log("erro al crear el curso")
        return NextResponse.json(
          {
            message: "Todos los campos son obligatorios.",
            status: 400,
          },
          { status: 400 }
        );
      }

      const curso = await prisma.curso.create({
        data: {
          nombre,
          description,
          duracion
        },
      });

          // Respuesta exitosa - envia esto al frotend
    console.log(curso)
    return NextResponse.json(
      {
        message: "Usuario creado con éxito.",
        status: 200,
        data: curso,
      },
      { status: 200 }
    );
}