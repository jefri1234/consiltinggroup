import fs from 'fs';
import path from 'path';

export async function GET(request:Request , { params } : { params: { dni: string } }) {
  const { dni } = params;  // Extraemos el DNI de los parámetros de la URL
  console.log("DNI extraído en la API:", dni);

  try {
    // Lee el archivo JSON desde la raíz del proyecto
    const filePath = path.resolve('alumnos.json');
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
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Error al acceder al archivo JSON' }),
      { status: 500 }
    );
  }
}
