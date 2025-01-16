"use client"
import { useState, useEffect } from "react";
import { Document, Page, Text, StyleSheet, View, Image, pdf, PDFViewer } from '@react-pdf/renderer';
import Link from "next/link";

// Definición del tipo Usuario
interface Usuario {
    nombres: string;
    dni: string;
}

// Estilos del documento PDF
const style = StyleSheet.create({
    contenedor: { padding: 20 },
    texto: { fontSize: 55, color: 'black', textAlign: 'center', marginBottom: 120, marginLeft: 340 },
    page: { display: 'flex', justifyContent: 'flex-end', alignItems: 'center', position: 'relative', width: 1600, height: 1132, marginBottom: 100 },
    imagen: { position: 'absolute', width: '100%', height: '100%' }
});

// Componente para crear el certificado en formato PDF
const CrearCertificado = ({ alumno }: { alumno: string }) => {
    return (
        <Document>
            <Page size={[1600, 1132]} style={style.page}>
                <Image src="/constancias/constancia-municipal.jpg" style={style.imagen} />
                <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                    <Text style={style.texto}>{alumno}</Text>
                </View>
            </Page>
        </Document>
    );
};

function Certificado({ params }: { params: { dni: string } }) {

    const { dni } = params;

    const [usuario, setUsuario] = useState<Usuario | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch de los datos del usuario
    useEffect(() => {
        const fetchUsuario = async () => {
            try {
                const res = await fetch(`/api/certificado/${dni}`);
                if (!res.ok) {
                    throw new Error('Error al obtener el usuario');
                }

                const data: Usuario = await res.json();
                setUsuario(data);

            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (dni) {
            fetchUsuario();
        }
    }, [dni]);



    if (error) {
        return <div>
            <div className="bg-gray-800 p-2 text-white text-center flex flex-col justify-center items-center h-screen gap-5">
                <p className="text-2xl">Error al obtener el usuario</p>
                <Link href="/" className="bg-red-600 py-2 px-4 rounded-md">Regresar</Link>
            </div>
        </div>;
    }

    if (!usuario) {
        return <div>No se encontró un usuario con el DNI proporcionado</div>;
    }

    // Función para manejar la descarga del PDF
    const handleDownload = async () => {
        const doc = <CrearCertificado alumno={usuario.nombres} />;
        const blob = await pdf(doc).toBlob();
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = `certificado_${usuario.dni}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="bg-gray-800 p-2 text-white text-center flex flex-col justify-center items-center h-screen ">
            <h1 className="text-3xl text-yellow-400 font-bold">Felicitaciones, tu Constancia Está Listo</h1>
            <p className="text-yellow-400 py-2 text-2xl font-semibold">Descarga y obtiene tu Constancia</p>

            <div className="my-5 flex gap-2 bg-gray-700 rounded-md p-4">
                <button
                    onClick={handleDownload}
                    className="bg-blue-700 py-2 px-4 rounded-md text-white"
                >
                    Descargar
                </button>
                <Link href="/" className="bg-red-600 py-2 px-4 rounded-md">Regresar</Link>
            </div>

            <PDFViewer height={600} width={700} className="bg-gray-900 p-5 rounded-lg ">
                <CrearCertificado alumno={usuario.nombres} />
            </PDFViewer>


        </div>
    );
}

export default Certificado;
