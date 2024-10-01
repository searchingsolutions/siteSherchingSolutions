import {  useState } from "react"
import style from "./Menu.module.css"
import Options from "../Options/Options"

export function Menu() {
    const [escolha, setEscolha] = useState("Consultoria")
    const tabs = {
        Consultoria: 0,
        Sistemas:  1,
        BancoDeDados: 2,
        LangingPages: 3,
        UxUi: 4
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

           {<Options optionSelected={tabs[escolha]}/>}
           
        </section>
    )
}

