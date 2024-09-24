import { useState } from "react"
import Consultoria from "../Options/consultoria/Consultoria"
import style from "./Menu.module.css"
import Sistemas from "../Options/Sistemas/Sistemas"
import BancoDeDados from "../Options/BancoDeDados/BancoDeDados"
import LandingPages from "../Options/Landing Pages/LandingPages"
import UxUI from "../Options/UX-UI/UxUI"

export function Menu() {
    const [escolha, setEscolha] = useState(0)


    return(
        <section>
            <div className={style.menu}>
                <button onClick={() => setEscolha(0)} className={ escolha == 0 ? style.weDoEscolha : style.weDo}>Consutoria</button>
                <button onClick={() => setEscolha(1)} className={ escolha == 1 ? style.weDoEscolha : style.weDo}>Sistemas</button>
                <button onClick={() => setEscolha(2)} className={ escolha == 2 ? style.weDoEscolha : style.weDo}>Banco de Dados</button>
                <button onClick={() => setEscolha(3)} className={ escolha == 3 ? style.weDoEscolha : style.weDo}>Landing Pages</button>
                <button onClick={() => setEscolha(4)} className={ escolha == 4 ? style.weDoEscolha : style.weDo}>UX/UI</button>
            </div>
           {
            escolha == 0?(
                <Consultoria/>
            ):escolha ==1?(
                <Sistemas/>
            ):escolha ==2?(
                <BancoDeDados/>
            ):escolha ==3?(
                <LandingPages/>
            ):escolha ==4?(
                <UxUI/>
            ):<></>
           }
        </section>
        

    )
}

