import imgConsultoria from "../../../../assets/ImgConsultoria.svg"
import Button from "../../../Button/Button.jsx"
import style from "./LandingPages.module.css"

function LandingPages() {
    return(
        <div className={style.consultoria}>
            <figure>
                <img src={imgConsultoria} alt="imgConsultoria" className={style.imgConsultoria} />
            </figure>
            <div className={style.txtConsultoria}>
                <h1>Consultoria sob Medida.</h1>
                <h2>
                    Nossa consultoria
                    personalizada é focado
                    em resolver o problema
                    que sua empresa
                    precisa.
                </h2>
                <p>
                    Seja para resolver o bug que você tem em
                    um sistema ou site, ou até ajudar seu
                    programador em algum problema que ele
                    não consegue resolver sozinho
                </p>
                <Button className={style.btnSaibaMais}>SAIBA MAIS</Button>
            </div>
        </div>
    )
}

export default LandingPages
