import Button from "../../Button/Button"
import { Menu } from "../menu/Menu"
import style from "./WhatWeDo.module.css"

function WhatWeDo() {
    return(
        <section className={style.sectionWhatWeDo}>
            <Button className={style.whatWeDo} >O que Fazemos?</Button>
            <Menu/>
        </section>
    )
}

export default WhatWeDo