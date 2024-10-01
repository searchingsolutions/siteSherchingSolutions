import imgCard from "../../../assets/imgCard.svg"
import Button from "../../Button/Button"
import style from "./Card.module.css"
import { FaArrowRightLong } from "react-icons/fa6";


function Card() {
    return(
        <div className={style.card}>
            <figure>
                <img src={imgCard} className={style.imgCard} alt="Projeto" />
            </figure>
            <div className={`d-flex justify-content-between ${style.boxFotter}`}>
                <p>
                    Sistema integrado - Viagens...
                </p>
                <Button className={style.btnSeta}>
                    <FaArrowRightLong/>
                </Button>
            </div>
            
        </div>
    )
}

export default Card