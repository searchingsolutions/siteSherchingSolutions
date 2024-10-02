import style from "./Footer.module.css"
import { FaInstagram, FaWhatsapp, FaFacebookF, FaLinkedinIn, FaBehance, FaArrowRight} from "react-icons/fa";
import Button from "../Button/Button.jsx"


function Footer() {

    const yearNow = new Date().getFullYear()

    return(
        <footer className={style.sectionFooter}>
            <hr/>

            <div className={style.sectionInfo}>
                <div className={style.links}>
                    <a href="">Serviços</a>
                    <a href="">Projetos</a>
                    <a href="">Sobre nós</a>
                    <a href="">Contato</a>
                </div>
                
                <div className={style.socialMedia}>
                    <span><FaInstagram/></span>
                    <span><FaWhatsapp/></span>
                    <span><FaFacebookF/></span>
                    <span><FaLinkedinIn/></span>
                    <span><FaBehance/></span>
                </div>

                <div className={style.contacts}>
                    <Button>
                        @seachingsolutions
                    </Button>
                    <Button>
                        Entrar em contato <FaArrowRight/>
                    </Button>
                </div>
            </div>
            
            <p>Copyright &copy; {yearNow} - Todos os Direitos Reservados - Searching Solutions </p>
        </footer>
    )
}

export default Footer