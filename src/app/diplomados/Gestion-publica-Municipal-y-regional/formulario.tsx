"use client"
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next/navigation';



// Definir el esquema de validación
const userSchema = z.object({
  nombre: z.string().min(1, { message: "Nombre es requerido" }),
  apellido: z.string().min(1, { message: "Apellido es requerido" }),
  telefono: z.string().min(1, { message: "Teléfono es requerido" }),
  email: z.string().email({ message: "Email no es válido" }),
});

// Definir el tipo de los datos del formulario
type UserFormData = z.infer<typeof userSchema>;

function Formulario() {
const router= useRouter()
  // Usar useForm con el tipo definido
  const { register, handleSubmit, formState: { errors } } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit: SubmitHandler<UserFormData> = async (data) => {
    try {
      const response = await fetch('../api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok) {
        //dirigir con router push a la ruta /RegistroWatsap
        router.push('/RegistroWatsap')
    } else {
        alert(result.error);
      }
    } catch (error) {
      alert("Error al registrar el usuario");
    }
  };

  return (
    <div>
      <h2 className='text-2xl font-bold pb-10'>Completa el Formulario para Registrarse</h2>
      <form
        className="bg-gray-100 w-full p-20 rounded-lg shadow-lg formulario"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-6">
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
          <input
            id="nombre"
            type="text"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
            placeholder="Tu nombre"
            {...register('nombre')}
          />
          {errors.nombre && <p className="text-red-500">{errors.nombre.message}</p>}
        </div>

        <div className="mb-6">
          <label htmlFor="apellido" className="block text-sm font-medium text-gray-700">Apellido</label>
          <input
            id="apellido"
            type="text"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
            placeholder="Tu apellido"
            {...register('apellido')}
          />
          {errors.apellido && <p className="text-red-500">{errors.apellido.message}</p>}
        </div>

        <div className="mb-6">
          <label htmlFor="celular" className="block text-sm font-medium text-gray-700">Celular</label>
          <div className="">
            <input
              id="celular"
              type="tel"
              className="block w-full  pr-4 py-2 border border-gray-300 rounded-full shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              placeholder="912 345 678"
              {...register('telefono')}
            />
            {errors.telefono && <p className="text-red-500">{errors.telefono.message}</p>}
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
            placeholder="Tu correo"
            {...register('email')}
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-full hover:bg-red-700 transition-colors duration-200"
          >
            REGISTRARME AHORA
          </button>
        </div>
      </form>
    </div>
  );
}

export default Formulario;


