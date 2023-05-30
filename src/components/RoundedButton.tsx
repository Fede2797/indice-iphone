import React from "react"
import { Option, OptionsValues } from "../App";

type MyComponentProps = React.PropsWithChildren<{
  option: Option,
  selected: string,
  setOption: (option: OptionsValues) => void,
}>;

export const RoundedButton = ({option, selected, setOption}: MyComponentProps) => {
  return (
    <li className="relative group">
        <button 
          onClick={ () => setOption(option.name as OptionsValues)}
          className={`relative w-[45px] h-[45px] bg-white rounded-full border-black border-2 z-10 ${ selected === option.name ? 'border-4 cursor-default' : 'cursor-pointer group-hover:translate-x-[-5px] group-hover:translate-y-[-5px] group-active:translate-x-[0px] group-active:translate-y-[0px]' }  transition-all duration-200`}
        >
          {option.icon}
        </button>
        <div className="absolute top-0 left-0 w-[45px] h-[45px] bg-black rounded-full border-black border-2">
            
        </div>
    </li>
  )
}
