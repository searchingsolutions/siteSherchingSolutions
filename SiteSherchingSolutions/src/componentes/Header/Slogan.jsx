import style from './Slogan.module.css'
import vector from '../../assets/risco.svg'

function Slogan() {
    return(
        <div className={`container text-center ${style.slogan}`}>
            <p className={style.textPrimary}>
                Desenhando Ideias,
                <br/>
                Programando <span>possibilidades.</span>
                <div>
                    <img src={vector} alt="vector" className={`${style.vector}`} />
                </div>
            </p>
            <div className='col-10 offset-1'>
                <p className={`${style.textSegundary}`}>
                Descubra como nossas soluções 
                <br/>
                personalizadas podem transforma
                <br/>
                os processos e os resultados da sua empresa.
            </p>

            </div>
            
        </div>
    )
}

export default Slogan