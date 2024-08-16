import { NextRequest, NextResponse } from "next/server";
import {PrismaClient } from "@prisma/client";
import { setCookie } from '../../session.ts';

const prisma = new PrismaClient()


//FUNCTION TYPE POST 
export async function POST(request:NextRequest){
    const {usuario,contrasena} =await request.json()//convierto request.body en json - realizo extraccion 
    const alumno = await prisma.user.findFirst({ //from the user model  search the id 
        where:{
            usuario:usuario,
            contrasena:contrasena
        }
    })
   
    if(alumno==null){
        return NextResponse.json({
            message:"ingreso denegado",
            success:500,
            data:alumno
        })
    }
    else{
        console.log(alumno.id);

        return NextResponse.json({
            message:"ingrso correctamente",
            success:200,
            data:alumno
        })
    }
}