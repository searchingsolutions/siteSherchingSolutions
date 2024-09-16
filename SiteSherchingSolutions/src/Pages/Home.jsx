import Slogan from '../componentes/Header/Slogan'
import NavBar from '../layout/NavBar'
import style from './Home.module.css'


export function Home() {
  

  return (
    <div className={`${style.home}`}>
      <nav>
        <NavBar/>
      </nav>
      <section>
        <Slogan/>
      </section>
        
      
       
    </div>
   
  )
}
