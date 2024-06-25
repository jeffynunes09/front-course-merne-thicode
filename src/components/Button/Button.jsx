import React from 'react'
import { ButtonSpace } from './ButtonStyled'

export function Button ({ text,type}) {


return <ButtonSpace type={type}>
      {text}
</ButtonSpace>


}