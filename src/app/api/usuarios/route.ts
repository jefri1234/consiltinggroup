
import {PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient()


export async function GET (){
 
  const user=await prisma.user.findMany()
  console.log(user)
 return NextResponse.json({
    message:"datos obtenidos",
    status:200,
    usuarioss:user
 })
 

}