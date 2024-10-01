import Button from "../../Button/Button"
import Card from "../Card/Card"
import styles from "./OurProjects.module.css"

function OurProjects() {
    return(
        <section>
            <Button className={styles.btnNossosProjetos}>
                Nossos projetos
            </Button>

            <div className="d-flex justify-content-center gap-5 mt-5">
                <Card/>
                <Card/>
            </div>

            <Button className={`${styles.btnVerMais}`} >
                Ver Mais
            </Button>
             
        </section>
    )
}

export default OurProjects