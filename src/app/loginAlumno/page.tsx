"use client"
import React from 'react'
import '../Login.css'
import { FormEvent } from 'react';
import { useState } from 'react'
import { useRouter } from 'next/navigation';

function loginAlumno() {
    const [usuario, setUsuario] = useState('')
    const [contrasena, setContrasena] = useState('')
    const router= useRouter()
    
    async function  verificando(e: FormEvent<HTMLFormElement>){
        e.preventDefault()
        
        const alumn = await fetch('../api/alumnoautenticacion',{
        method:"POST",
        body:JSON.stringify({usuario,contrasena}),
        headers:{
            "Content-Type":"application/json",
        },
        })
        //ALMACENO LO QUE ENVIO LA API 
        const alumnofind = await alumn.json(); 
        if(alumnofind.success==200){
            router.push('/pages/aula')
            console.log("ingreso al aula")
        }
    }
  return (
<div className='caja-login'>
<div className="login-container">    
        <form method='POST' action='#' onSubmit={verificando}>
        <h2 className=' text-xl'>Iniciar Sesión Alumno</h2>
        <input type="text" placeholder="Usuario" name='usuario' autoComplete="username"  onChange={(e)=>setUsuario(e.target.value)}/>
        <input type="password" placeholder="Contraseña" name='contrasena' autoComplete="current-password"  onChange={(e)=>setContrasena(e.target.value)}/>
        <input type="submit" value='ingresar' className='button'/>
        </form>
        <div>
        </div>
    </div>
</div>
)
}

export default loginAlumno