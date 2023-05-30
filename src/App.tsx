import { RoundedButton } from './components/RoundedButton';
import { useState, useEffect } from 'react';
import { data, getBitcoin, getDolarBlue } from './data/data';

export const options = Object.freeze({
  JUBILACION: 'jubilación',
  SUELDOMINIMO: 'sueldo_mínimo',
  PESOSARG: 'pesos_arg',
  USD: 'usd',
  BTC: 'btc',
  CAFECITOS: 'cafecitos',
})

export type OptionsValues = 'jubilación' | 'sueldo_mínimo' | 'pesos_arg' | 'usd' | 'btc' | 'cafecitos'

export type Option = { icon: string, name: string, style: string, label: string }

const compareOptions = [
  { icon: 'options/elder-woman.svg', name: options.JUBILACION, style: 'w-full h-full', label: 'Jubilación mínima' },
  { icon: 'options/payment.svg', name: options.SUELDOMINIMO, style: 'w-full h-full', label: 'Sueldo mínimo' },
  { icon: 'options/ars.svg', name: options.PESOSARG, style: 'w-full h-full', label: 'Pesos argentinos' },
  { icon: 'options/usd.svg', name: options.USD, style: 'w-full h-full', label: 'Dólares' },
  { icon: 'options/btc.svg', name: options.BTC, style: 'w-full h-full', label: 'Bitcoin' },
  { icon: 'options/coffee.svg', name: options.CAFECITOS, style: 'w-full h-full', label: 'Cafecito' }
]

// const getOption = ( option: string ) => {
//   return compareOptions.filter( opt => opt.name === options[option] );
// }

export function App() {

  const [blue, setBlue] = useState(0);
  const [btc, setBtc] = useState(0);
  const [prices, setPrices] = useState(data);
  const [selectedOption, setSelectedOption] = useState<OptionsValues>(options.USD);

  const setOption = ( option: OptionsValues ) => {
    setSelectedOption( option );
  }

  useEffect(() => {    
    getBitcoin().then( value => setBtc( value ));    
  }, [])
  
  useEffect(() => {    
    getDolarBlue().then( value => setBlue( value ));
  }, [])
  
  useEffect(() => {
    setPrices({...data, BTC: btc, BLUE: blue})
  }, [blue, btc])
  

  return (
    <main className="bg-yellow min-h-screen font-mabry">
      {/* Main container */}
      <section className="flex flex-col justify-center items-center">
        <h1 className="mt-10 text-4xl">Índice iPhone</h1>
        <ul className="relative mt-10 flex gap-4">
          {/* TODO: Descargar iconos y agregarlos dentro de los botones */}
          {
            compareOptions.map( option => (
              <RoundedButton key={option.name} option={option} selected={selectedOption} setOption={setOption} />
            ))
          }
        </ul>

        {/* Jubilación mínima */}
        
        {/* First comparison section */}
        <div className="max-w-[95%] h-[180px] mt-20 px-5 py-3 flex justify-between items-center gap-[5%] rounded-[20px] bg-white border-black border-2 text-2xl text-center leading-none">
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

        {/* Sueldo mínimo */}

        {/* First comparison section */}
        <div className="max-w-[95%] h-[180px] mt-20 px-5 py-3 flex justify-between items-center gap-[5%] rounded-[20px] bg-white border-black border-2 text-2xl text-center leading-none">
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
