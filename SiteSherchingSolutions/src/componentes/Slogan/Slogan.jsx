import style from './Slogan.module.css'
import vector from '../../assets/risco.svg'
import Button from '../Button/Button'

function Slogan() {
    return (
        <section className={`container text-center ${style.slogan}`}>
            <p className={style.textPrimary}>
                Desenhando Ideias, Programando
                <span>
                    possibilidades
                    <img src={vector} alt="vector" className={style.vector} />
                </span>
            </p>

            <p className={style.textSegundary}>
                Descubra como nossas soluções 
                personalizadas podem transforma
                os processos e os resultados da sua empresa.
            </p>
           
            <Button className={`${style.btnContato} align-items-center`}>
                Entrar em contato
            </Button>
        </section>
    )
}

export default Slogan