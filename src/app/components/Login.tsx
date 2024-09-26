"use client"
import React from 'react'
import '../login.css'
import { FormEvent } from 'react';
import { useState } from 'react'
import { useRouter } from 'next/navigation';


function Login() {
    const [usuario, setUsuario] = useState('')
    const [contrasena, setContrasena] = useState('')
    const [error, setError] = useState<string | null>(null);
    const router= useRouter()
    
    async function  verificando(e: FormEvent<HTMLFormElement>){
        e.preventDefault()
        
        const res = await fetch('../api/autenticacion',{
        method:"POST",
        body:JSON.stringify({usuario,contrasena}),
        headers:{
            "Content-Type":"application/json",
        },
        })
        //ALMACENO LO QUE ENVIO LA API 
        const resultado = await res.json(); 

        //VALIDO SI LO QUE VINO DE LA API EL DATA TIENE UN TOKEN
        if (resultado.data?.token) {
            // Almacenar el token en una cookie segura
            document.cookie = `token=${resultado.data.token}; path=/; secure`;

            if(resultado.alumno.tipoUser==="admin"){
                router.push('/pages/panel');
            }
            else if(resultado.alumno.tipoUser==="estudiante"){
                router.push(`/pages/aula?userfound=${resultado.alumno.id_usuario}`);
            }
            else if(resultado.alumno.tipoUser==="profesor"){
                router.push(`/pages/aula?userfound=${resultado.alumno.id_usuario}`);
            }
        } else {
            //no ingreso da mensage error lo que tiene en api
            console.log(resultado.message);
            setError(resultado.message);
        }
    }
   
  return (
<div className='caja-login'>
<div className="login-container">
        <form method='POST' action='#' onSubmit={verificando}>
        <h2 className=' text-xl'>Iniciar Sesión</h2>
        <input type="text" placeholder="Usuario" name='usuario' autoComplete="username"  onChange={(e)=>setUsuario(e.target.value)}/>
        <input type="password" placeholder="Contraseña" name='contrasena' autoComplete="current-password"  onChange={(e)=>setContrasena(e.target.value)}/>
        <input type="submit" value='ingresar' className='button'/>
        </form>
        {error && <p className="error-message text-red-900 text-center  mt-5 font-bold">{error}</p>}
        <div>
        </div>
    </div>
</div>
)
}

export default Login