"use client"
import React from 'react'
import BoxReveal from "../../components/ui/box-reveal";
import CertificateVerification from "@/app/components/Verificar-certificado"
import { useTheme } from "next-themes";
import { MagicCard } from "@/components/ui/magic-card";



function Certificacion() {
    const { theme } = useTheme();
    return (
        <div className="bg-gray-950 h-screen">
            <div className='text-white flex justify-center items-center flex-col'>
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                    <p className="text-[3.5rem] font-semibold">
                        Felicitaciones Ahora puedes <br></br>Verificar tus certificados<span className="text-[#5046e6]"></span>
                    </p>
                </BoxReveal>

                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                    <h2 className="mt-[.5rem] text-[1rem]">
                        ADQUIERE TUS CERTIFICADO{" "}
                        <span className="text-[#5046e6]">AHORA MISMO</span>
                    </h2>
                </BoxReveal>
            </div>

            <div className='container mx-auto w-3/6 pt-10'>
                <div
                    className={
                        "flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row"
                    }
                >
                    <MagicCard
                        className="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl shadow-2xl bg-red-700"
                        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                    >
                        SSOMA
                    </MagicCard>
                    <MagicCard
                        className="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl shadow-2xl"
                        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                    >
                        MUNICIPAL
                    </MagicCard>
                </div>
            </div>

        </div>
    )
}


export default Certificacion