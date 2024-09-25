import {  useState } from "react"
import Consultoria from "../Options/consultoria/Consultoria"
import style from "./Menu.module.css"
import Sistemas from "../Options/Sistemas/Sistemas"
import BancoDeDados from "../Options/BancoDeDados/BancoDeDados"
import LandingPages from "../Options/Landing Pages/LandingPages"
import UxUI from "../Options/UX-UI/UxUI"

export function Menu() {
    const [escolha, setEscolha] = useState("Consultoria")
    const tabs = {
        Consultoria: <Consultoria/>,
        Sistemas:  <Sistemas/>,
        BancoDeDados: <BancoDeDados/>,
        LangingPages: <LandingPages/>,
        UxUi: <UxUI/>
    }

      
    return(
        <section>
            <div className={style.menu}>
                {
                    Object.keys(tabs).map((tab, index) => (
                        <button key={index} onClick={() => setEscolha(tab)} className={escolha === tab ? style.weDoEscolha : style.weDo}>
                            {tab}
                        </button>
                    ))
                }
            </div>

           {tabs[escolha]}

        </section>
    )
}

