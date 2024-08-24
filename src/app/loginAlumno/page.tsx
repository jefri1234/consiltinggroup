"use client";
import React, { FormEvent, useState, useEffect } from 'react';
import '../Login.css';
import { useRouter } from 'next/navigation';

function loginAlumno() {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [userfound, setUserfound] = useState(0);
  const router = useRouter();

  async function verificando(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    //----------VALIDACION DE USUARIO--------
    const alumn = await fetch('../api/alumnoautenticacion', {
      method: 'POST',
      body: JSON.stringify({ usuario, contrasena }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // ALMACENO LO QUE ENVIO LA API
    const alumnofind = await alumn.json();
    // Obteniendo el id del usuario
    console.log("consola browser id:", alumnofind.user);

    setUserfound(alumnofind.user);
  }
  //--- END VALIDACION DE USUARIO-------------

  useEffect(() => {
    if (userfound !== 0) {
      console.log("hook almacena id", userfound);
      direccionar()
      //econtrarcursos();
    }
  }, [userfound]);

  //DIRECCIONAR Y PASAR AL AULA VIRTUAL EL ID ALMACENADO EN EL USESTATE
  function direccionar(){
    router.push(`/pages/aula?userfound=${userfound}`); // Pasamos el número como parámetro en la URL
  }

  return (
    <div className='caja-login'>
      <div className="login-container">
        <form method='POST' action='#' onSubmit={verificando}>
          <h2 className='text-xl'>Iniciar Sesión Alumno</h2>
          <input
            type="text"
            placeholder="Usuario"
            name='usuario'
            autoComplete="username"
            onChange={(e) => setUsuario(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            name='contrasena'
            autoComplete="current-password"
            onChange={(e) => setContrasena(e.target.value)}
          />
          <input type="submit" value='ingresar' className='button' />
        </form>
        <div></div>
      </div>
    </div>
  );
}

export default loginAlumno;
