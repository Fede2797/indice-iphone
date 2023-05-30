import { RoundedButton } from './components/RoundedButton';
import { useState } from 'react';

export const options = Object.freeze({
  JUBILACION: 'jubilación',
  SUELDOMINIMO: 'sueldo_mínimo',
  PESOSARG: 'pesos_arg',
  USD: 'usd',
  BTC: 'btc',
  CAFECITOS: 'cafecitos',
})

export type OptionsValues = 'jubilación' | 'sueldo_mínimo' | 'pesos_arg' | 'usd' | 'btc' | 'cafecitos'

export type Option = { icon: string, name: string }

const compareOptions = [
  { icon: '', name: options.JUBILACION },
  { icon: '', name: options.SUELDOMINIMO },
  { icon: '', name: options.PESOSARG },
  { icon: '', name: options.USD },
  { icon: '', name: options.BTC },
  { icon: '', name: options.CAFECITOS }
]

// const getOption = ( option: string ) => {
//   return compareOptions.filter( opt => opt.name === options[option] );
// }

export function App() {

  const [selectedOption, setSelectedOption] = useState<OptionsValues>(options.USD);

  const setOption = ( option: OptionsValues ) => {
    setSelectedOption( option );
  }

  return (
    <main className="bg-yellow min-h-screen font-mabry">
      {/* Main container */}
      <section className="flex flex-col justify-center items-center">
        <h1 className="mt-10 text-4xl">Índice iPhone</h1>
        <ul className="mt-10 flex gap-4">
          {/* TODO: Descargar iconos y agregarlos dentro de los botones */}
          {
            compareOptions.map( option => (
              <RoundedButton option={option} selected={selectedOption} setOption={setOption} />
            ))
          }
        </ul>

        {/* First comparison section */}
        <div className="max-w-[95%] h-[180px] mt-10 px-5 py-3 flex justify-between items-center gap-[5%] rounded-[20px] bg-white border-black border-2 text-2xl text-center leading-none">
          {/* First value*/}
          <span className="">1</span>
          {/* of this product */}
          <span className="">
            <img className="w-full min-w-[60px] max-w-[125px]" src="iphone14.png" alt="" />
          </span>
          {/* Equals to */}
          <span className="">=</span>
          {/* Second value */}
          <span className="">9.3</span>
          {/* of this other product */}
          <span className="">jubilaciones mínimas</span>
        </div>

        {/* Second comparison section */}
        <div className="max-w-[95%] h-[180px] mt-10 px-5 py-3 flex justify-between items-center gap-[5%] rounded-[20px] bg-white border-black border-2 text-2xl text-center leading-none">
          {/* First value*/}
          <span className="">1</span>
          {/* of this product */}
          <span className="">jubilación mínima</span>
          {/* Equals to */}
          <span className="">=</span>
          {/* Second value */}
          <span className="">0.11</span>
          {/* of this other product */}
          <span className="">
            <img className="w-full min-w-[60px] max-w-[125px]" src="iphone14.png" alt="" />
          </span>
        </div>
      </section>
    </main>
  )
}
