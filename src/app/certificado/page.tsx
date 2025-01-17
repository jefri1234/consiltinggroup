"use client"
import React from 'react'
import BoxReveal from "../../components/ui/box-reveal";
import CertificateVerification from "@/app/components/Verificar-certificado"
import { useTheme } from "next-themes";
import { MagicCard } from "@/components/ui/magic-card";
import Link from 'next/link'


function Certificacion() {
    const { theme } = useTheme();
    return (
        <div className="bg-gray-950 h-screen container mx-auto px-4">

            <div className='text-white flex justify-center items-center flex-col'>
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center pt-14">
                        Felicitaciones Ahora puedes <br /> Verificar tus certificados <span className="text-[#5046e6]"></span>
                    </p>
                </BoxReveal>

                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                    <h2 className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl text-center">
                        Descarga tu constancia web{" "}
                        <span className="text-[#5046e6]">AHORA MISMO</span>
                    </h2>
                </BoxReveal>
            </div>

            <div className='container mx-auto w-full md:w-3/6 pt-10 flex flex-col justify-center items-center'>
                <div className="flex w-full flex-col gap-6 lg:h-[250px]">

                    <Link href="/certificado/ssoma" className='w-full'>
                        <MagicCard
                            className="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-lg sm:text-xl md:text-2xl lg:text-3xl shadow-2xl bg-red-700 px-6 py-10 sm:px-10 sm:py-14"
                            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                        >
                            SUPERVISOR LÍDER-SSOMA
                        </MagicCard>
                    </Link>
                    <Link href="/certificado/municipal" className='w-full'>
                        <MagicCard
                            className="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-lg sm:text-xl md:text-2xl lg:text-3xl shadow-2xl px-6 py-10 sm:px-10 sm:py-14 min-w-max"
                            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                        >
                            <p>GESTIÓN PUBLICA MUNICIPAL Y REGIONAL</p>
                        </MagicCard>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Certificacion
