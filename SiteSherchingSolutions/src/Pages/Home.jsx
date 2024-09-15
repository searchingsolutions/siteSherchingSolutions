import { useState } from 'react'
import NavBar from '../layout/NavBar'
import style from './Home.module.css'
import logo from '../assets/background.svg'

export function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className={style.home}>
        <NavBar/>
    </div>
   
  )
}
