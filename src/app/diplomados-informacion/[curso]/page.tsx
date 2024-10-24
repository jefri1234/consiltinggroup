"use client"
import React from 'react'
import { useParams } from 'next/navigation';

function Page() {
  const { curso } = useParams();

  return (
    <div>
      Diplomados: <span className='font-bold text-blue-600 text-2xl'>{curso}</span>
    </div>
  )
}

export default Page;
