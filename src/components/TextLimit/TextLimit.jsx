import React from 'react'

function TextLimit({limit,text}) {

    const textLimited = text?.length > limit ? `${text.substring(0,limit)}...` : text
  return (
    <p>{textLimited}</p>
  )
}

export default TextLimit