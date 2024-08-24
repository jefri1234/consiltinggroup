import { NextRequest, NextResponse } from "next/server";
import {PrismaClient } from "@prisma/client";
import jwt from 'jsonwebtoken'; //USO ESTE PARA GENER EL TOKEN 

const prisma = new PrismaClient()
// Usa una variable de entorno para el secreto
const SECRET_KEY = process.env.SECRET_KEY || 'tu_secreto_aqui'; 

//FUNCTION TYPE POST 
export async function POST(request:NextRequest){
    console.log(SECRET_KEY)
    const {usuario,contrasena} =await request.json()//convierto request.body en json - realizo extraccion 
    const user = await prisma.user.findFirst({ //from the user model  search the id 
        where:{
            usuario:usuario,
            contrasena:contrasena,
            tipoUser: "admin"
        }
    })
    console.log(user)
   
    if(user==null){
        return NextResponse.json({
            message:"ingreso denegado",
            success:500,
            data:user
        })
    }
    else{
 // Crear el token JWT con el ID del usuario y su nombre de usuario
 //USO DE LIBERIA JWT PARA CREAR EL TOKEN Y SER ENVIADO AL FROTEND 
        const token = jwt.sign({ userId: user.id, usuario: user.usuario }, SECRET_KEY, { expiresIn: '1h' });
        console.log("token en la api",token)
        return NextResponse.json({
            message:"ingrso correctamente",
            success:200,
            data:{token} //send token to client
        })
    }
}