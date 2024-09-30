import {  useState, useEffect } from "react"
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

    useEffect(() => {
        const intervalId = setInterval(() => {
            setEscolha(prevEscolha => {
                const tabKeys = Object.keys(tabs);
                const currentIndex = tabKeys.indexOf(prevEscolha);
                const nextIndex = (currentIndex + 1) % tabKeys.length;
                return tabKeys[nextIndex];
            });
        }, 5000); 

        return () => clearInterval(intervalId);
    }, [escolha]);
      
    
    
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

