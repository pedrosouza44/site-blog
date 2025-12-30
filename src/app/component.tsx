'use client';

import { useEffect } from "react"

export const ErrorComponent = () => {

  useEffect(() => {
    throw new Error('Componente lançando um error')
  }, []);

  return (
    <div className="text-white mt-20">
      <h2>error componente</h2>

    </div>
  )
}