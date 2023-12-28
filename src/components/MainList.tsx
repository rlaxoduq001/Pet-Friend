import React from 'react'
import { Slider } from './Slider'

interface ListTitle {
  title : string;
}

export const MainList:React.FC<ListTitle> = ({title}) => {
  return (
    <div>
      <h1 style={{padding : '8px 0'}}>{title}</h1>
      <Slider/>
    </div>
  )
}
