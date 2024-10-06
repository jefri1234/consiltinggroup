import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import * as XLSX from 'xlsx';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const registros = await prisma.userRegistrados.findMany(); // Usa tu modelo

    // Convierte los datos a un formato adecuado para Excel
    const data = registros.map((registro) => ({
      ID: registro.id_user,
      Nombre: registro.nombre,
      Apellido: registro.apellido,
      Telefono: registro.telefono,
      Email: registro.email,
    }));

    // Crea un nuevo libro de Excel
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Registros');

    // Genera el archivo Excel en formato binario
    const buffer = XLSX.write(wb, { bookType: 'xlsx', type: 'buffer' });

    // Configura la respuesta
    const response = new Response(buffer, {
      headers: {
        'Content-Disposition': 'attachment; filename=Registros.xlsx',
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      },
    });

    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error al generar el archivo' }, { status: 500 });
  }
}
