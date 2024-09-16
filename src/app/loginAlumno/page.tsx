"use client";
import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import '../Login.css';

function LoginAlumno() {

  //DIFERENCIA ENTRE LA FORMA DE DEFINIR LOS ESTADOS
  //TIENE QUE VER CON TYPESCRIPT PARA DEFINIR LOS TIPOS
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  //especificamos tipo del estado usando TYPESCRIPT
  //error= puede ser cadena TEXTO o NULL
  //TYPESCRIPT ayuda asegurar el valor asignar sea tipo correcto
  const [error, setError] = useState<string | null>(null);

  //OTRA FORMA DEFINIR UN ESTADO PERO AHORA UN OBJETO POR EJEMPLO , ---objetos,array---
  const [data, setData] = useState<{ id: number, name: string } | null>(null);

  const router = useRouter();

  async function verificando(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null); // Reiniciar el mensaje de error

    const alumn = await fetch('../api/alumnoautenticacion', {
      method: 'POST',
      body: JSON.stringify({ usuario, contrasena }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const alumnofind = await alumn.json();
    const idUsuario = alumnofind.user;
    
    if (!idUsuario) {
      // Si no se encuentra el usuario, mostrar un mensaje de error
      setError("Credenciales incorrectas");
    } else {
      // Si el usuario es encontrado EJECUTA FUNCION Y LE PASA EL ID
      direccionar(idUsuario);
    }
  }

  //RECEPCIONO EL id y direcciono enviando el id por parametros
  function direccionar(id: number) {
    router.push(`/pages/aula?userfound=${id}`);
  }

  return (
    <div className='caja-login'>
      <div className="login-container">
        <form method='POST' onSubmit={verificando}>
          <h2 className='text-xl'>Iniciar Sesión Alumno</h2>
          <input
            type="text"
            placeholder="Usuario"
            name='usuario'
            autoComplete="username"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            name='contrasena'
            autoComplete="current-password"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
          <input type="submit" value='Ingresar' className='button' />
        </form>
        {error && <p className="error-message text-red-900 text-center  mt-5 font-bold">{error}</p>}
      </div>
    </div>
  );
}

export default LoginAlumno;
