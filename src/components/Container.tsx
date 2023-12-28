import React, { ReactNode } from 'react';
import './Container.css'

interface ContainerProps {
  children: ReactNode;
}

export const Container:React.FC<ContainerProps> = ({children}) => {
  return (
    <div className='container'>
      <div className='container_info'>
        {children}
      </div>
    </div>
  )
}
