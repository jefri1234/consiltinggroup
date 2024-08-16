"use client"
import { useEffect } from 'react'
import React from 'react'

function page() {

  useEffect(() => {
    filtrarCursos()
  }, [])

  const filtrarCursos = async ()=> {
    const listar = await fetch('../api/listarcurso', {
      method: 'GET',
      
    })
    const dato = await listar.json()
    console.log(dato.message)

  }


  return (
    <div>
      AULA VIRTUAL
    </div>
  )
}

export default page