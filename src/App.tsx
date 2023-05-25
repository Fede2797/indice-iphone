export function App() {

  return (
    <main className="bg-yellow min-h-screen font-mabry">
      {/* Main container */}
      <section className="flex flex-col justify-center items-center">
        <h1 className="text-4xl">Índice iPhone</h1>
        <ul className="flex gap-1">
          <li>jubilacion</li>
          <li>sueldo mínimo</li>
          <li>pesos arg</li>
          <li>usd</li>
          <li>btc</li>
          <li>cafecitos</li>
        </ul>

        {/* First comparison section */}
        <div className="w-[95%] max-w-[400px] h-[180px] px-5 py-3 flex justify-around items-center rounded-[20px] bg-white border-black border-2 text-2xl text-center leading-none">
          {/* First value of a product*/}
          <span className="shrink mx-4">1</span>
          <span className="w-full">
            <img src="iphone14.png" alt="" />
          </span>
          {/* Equals to */}
          <span className="shrink mx-4">=</span>
          {/* Second value */}
          <span className="shrink ml-2 mr-4">9.3</span>
          {/* of this product */}
          <span className="w-full">jubilaciones mínimas</span>
        </div>

        {/* First comparison section */}
        <div className="w-[95%] h-[180px] max-w-[400px] px-5 py-3 flex justify-around items-center rounded-[20px] bg-white border-black border-2 text-2xl text-center leading-none">
          {/* First value of a product*/}
          <span className="shrink mx-4">1</span>
          <span className="w-full">jubilación mínima</span>
          {/* Equals to */}
          <span className="shrink mx-4">=</span>
          {/* Second value */}
          <span className="shrink ml-2 mr-4">0.11</span>
          {/* of this product */}
          <span className="w-full">
            <img src="iphone14.png" alt="" />
          </span>
        </div>
      </section>
    </main>
  )
}
