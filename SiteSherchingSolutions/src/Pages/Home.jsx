import Slogan from '../componentes/Header/Slogan'
import NavBar from '../componentes/navBar/NavBar'
import OurProjects from '../componentes/OurProjects/ComponentePrincipal/OurProjects'
import WhatWeDo from '../componentes/WhatWeDo/ComponentePrincipal/WhatWeDo'
import style from './Home.module.css'


export function Home() {
  

  return (
    <div className={style.home}>
      <NavBar/>
      <Slogan/>
      <WhatWeDo/>
      <OurProjects/>
    </div>
   
  )
}
