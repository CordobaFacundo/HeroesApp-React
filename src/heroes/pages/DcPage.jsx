
import React from 'react'
import { HeroesList } from '../components'

export const DcPage = () => {
  return (
    <>
        <h1 style={{color: "white"}}>DC Comics</h1>
        <hr />
        <HeroesList publisher={'DC Comics'}/>
        
    </>
  )
}
