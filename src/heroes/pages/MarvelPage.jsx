
import React from 'react'
import { HeroesList } from '../components'

export const MarvelPage = () => {
  return (
    <>
        <h1 style={{color: "white"}}>Marvel Comics</h1>
        <hr />
        <HeroesList publisher={'Marvel Comics'}/>
    </>
  )
}
