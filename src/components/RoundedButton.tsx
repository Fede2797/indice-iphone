import React from "react"
import { Option, OptionsValues } from "../App";

type MyComponentProps = React.PropsWithChildren<{
  option: Option,
  selected: string,
  setOption: (option: OptionsValues) => void,
}>;

export const RoundedButton = ({option, selected, setOption}: MyComponentProps) => {
  return (
    <>
      <li className="relative group">
          <button
            onClick={ () => setOption(option.name as OptionsValues)}
            className={`block box-border relative w-[45px] h-[45px] bg-white rounded-full border-black border-2 z-10
            ${ selected === option.name
              ? ' border-4 cursor-default'
              : 'cursor-pointer group-hover:translate-x-[-5px] group-hover:translate-y-[-5px] group-active:translate-x-[0px] group-active:translate-y-[0px]' }
            transition-all duration-200`}
          >
            <figure className="h-full flex justify-center items-center">
              <img className={`${option.style} h-[80%] w-[80%]`} src={option.icon} alt="" />
            </figure>
          </button>
          <div className="box-border absolute top-0 left-0 w-[45px] h-[45px] bg-black rounded-full border-black border-2"></div>
      </li>
      <div className={`absolute w-full top-[71px] text-center ${selected === option.name ? 'block' : 'hidden'} text-center leading-5`}>
        <label className="w-full bg-white px-5 py-1 border-black border-2 font-mono">
          iPhone vs {option.label}
        </label>
      </div>
    </>
  )
}
