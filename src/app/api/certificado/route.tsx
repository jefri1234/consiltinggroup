import fs from 'fs';
import path from 'path';

export async function POST(request:Request) {
  const { dni, curso } = await request.json(); // Aquí extraemos el JSON enviado en el cuerpo
  console.log("curso: " + curso)
  console.log("dni: " + dni)
  
  try {
    // Lee el archivo JSON desde la raíz del proyecto
    const filePath = path.resolve(`constancias-data/${curso}.json`);
    const data = fs.readFileSync(filePath, 'utf-8');
    const alumnos = JSON.parse(data);

    // Busca el alumno en el archivo JSON por su DNI
    const alumno = alumnos.find((alumno:any) => alumno.DNI === dni);

    // Si no se encuentra el alumno con el DNI proporcionado
    if (!alumno) {
      return new Response(
        JSON.stringify({ error: 'No se encontró un usuario con el DNI ' }),
        { status: 404 }
      );
    }

    // Si el alumno existe, respondemos con los datos del alumno
    return new Response(
      JSON.stringify(alumno), { status: 200 }
    );
  } 
  catch (error) {
    return new Response(
      JSON.stringify({ error: 'Error al acceder al archivo JSON' }),
      { status: 500 }
    );
  }
}
