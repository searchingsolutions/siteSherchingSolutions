import Button from "../../Button/Button"
import Card from "../Card/Card"
import styles from "./OurProjects.module.css"

function OurProjects() {
    return(
        <section className={styles.sectionContainer}>
            <Button className={styles.btnNossosProjetos}>
                Nossos projetos
            </Button>

            <div className="d-flex justify-content-center gap-5 mt-5">
                <Card/>
                <div className="d-none d-md-grid">
                    <Card/>
                </div>
            </div>

            <Button className={styles.btnVerMais} >
                Ver Mais
            </Button>
        </section>
    )
}

export default OurProjects