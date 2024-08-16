import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    // Extraer datos del cuerpo de la solicitud
    const { usuario, nombre, apellido, contrasena, telefono} = await request.json();

    // Validación para verificar que todos los campos estén presentes y no estén vacíos
    if (
      !usuario ||
      !nombre ||
      !apellido ||
      !contrasena ||
      !telefono
    ) {
      console.log("erro al crear")
      return NextResponse.json(
        {
          message: "Todos los campos son obligatorios.",
          status: 400,
        },
        { status: 400 }
      );
    }

    // Crear el usuario en la base de datos
    const user = await prisma.user.create({
      data: {
        usuario,
        nombre,
        apellido,
        contrasena,
        telefono
      },
    });

    // Respuesta exitosa - envia esto al frotend
    console.log(user)
    return NextResponse.json(
      {
        message: "Usuario creado con éxito.",
        status: 200,
        data: user,
      },
      { status: 200 }
    );


  } catch (error) {
    // Manejo de errores
    console.error("Error al crear el usuario:", error);

    // Respuesta de error
    return NextResponse.json(
      {
        message: "Hubo un error al crear el usuario.",
        status: 500,
      },
      { status: 500 }
    );
  }
}
