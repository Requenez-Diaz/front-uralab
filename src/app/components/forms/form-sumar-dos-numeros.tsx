"use client";

import sumarDosNumeros from "@/app/action/sumar-dos-numeros";
import { useState } from "react";

export default function handleSubmit() {
  //Logica de la suma de dos numeros
  let [numero1, setNumero1] = useState(0);
  let [numero2, setNumero2] = useState(0);
  let [resultado, setResultado] = useState(0);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const suma = sumarDosNumeros(numero1, numero2);
    setResultado(suma);
  };

  //parte visual del formulario
  return (
    <form className='' onSubmit={handleSubmit}>
      <div className='h-auto'>
        <div className='flex flex-row'>
          <label className='basis-3/12 text-right'>Número 1</label>
          <div className='basis-9/12 ml-1'>
            <input
              type='number'
              name='numero1'
              id='numero1'
              value={String(numero1)} //String() convierte un numero a string, value espera un string
              onChange={(e) => setNumero1(parseInt(e.target.value))} //e.target.value es el valor del input, onChange es el evento que se ejecuta cuando cambia el valor del input
            />
          </div>
        </div>
        <div className='flex flex-row mt-2'>
          <label className='basis-3/12 text-right'>Número 2</label>
          <div className='basis-9/12 ml-1'>
            <input
              type='number'
              name='numero2'
              id='numero2'
              value={String(numero2)}
              onChange={(e) => setNumero2(parseInt(e.target.value))}
            />
          </div>
        </div>
        <div className='flex flex-row mt-2'>
          <button
            type='submit'
            className='bg-blue-500 text-white p-1 rounded-sm'
          >
            Sumar
          </button>
        </div>

        <div className='flex flex-row mt-2'>
          <label className='basis-3/12 text-right'>
            Resultado es {resultado}
          </label>
        </div>
      </div>
    </form>
  );
}
