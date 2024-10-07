import imgConsultoria from "../../../assets/ImgConsultoria.svg"
import imgSistemas from "../../../assets/ImgSistemas.svg"
import imgBancoDeDados from "../../../assets/ImgBancoDeDados.svg"
import imgLandingPages from "../../../assets/ImgLandingPages.svg"
import imgUxUi from "../../../assets/ImgUxUi.svg"
import Button from "../../../componentes/Button/Button"
import style from "./Options.module.css"
import { useState, useEffect } from "react"

// eslint-disable-next-line react/prop-types
function Options({optionSelected}) {

    const [option, setOption] = useState(optionSelected)
    
    useEffect(() => {
        setOption(optionSelected);
    }, [optionSelected]);

    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setOption(prevOption => (prevOption < 4 ? prevOption + 1 : 0));
        }, 5000);

        return () => clearInterval(intervalId);
    }, [option]); 

    

    const optionBody = [
        {
            img: imgConsultoria,
            title: "Consultoria sob medida.",
            subTitle: "Nossa consultoria personalizada é focado em resolver o problema que sua empresa precisa.",
            body: "Seja para resolver o bug que você tem em um sistema ou site, ou até ajudar seu programador em algum problema que ele não consegue resolver sozinho."
        },
        {
            img: imgSistemas,
            title: "A cara da sua empresa.",
            subTitle: "Com nossa criação de sistemas personalizados, sua empresa se torna mais profissional e você tem mais controle.",
            body: "Criamos sistemas completos, seja para grandes ou pequenas empresas. Nosso objetivo é transformar e melhorar a forma como sua empresa trabalha."
        },
        {
            img: imgBancoDeDados,
            title: "Cuide do que é importante.",
            subTitle: "Banco de dados são fundamentais, eles são o coração da sua empresa. ",
            body: "Banco de dados são fundamentais, atuando como o coração dos sistemas ao armazenar, organizar e gerenciar informações essenciais de forma segura e eficiente."
        },
        {
            img: imgLandingPages,
            title: "Consiga mais receita.",
            subTitle: "Landing pages são fundamentais para aumentar a venda de produtos .",
            body: "Landing pages são a porta de entrada para seu produto. Com ela, além de conseguir mais clientes de forma rápida, você fideliza e constrói uma nova gama de possíveis compradores."
        },
        {
            img: imgUxUi,
            title: "Acessibilidade para todos.",
            subTitle: "Nossa equipe conta com profissionais qualificados para atender a todos os públicos.",
            body: "Adquirindo qualquer um de nossos serviços, você contará com profissionais qualificados na área de UX/UI, proporcionando qualidade, acessibilidade e facilidade para todos os seus clientes e funcionários."
        }
    ]
    
    
    return(
        <div className={style.options}>
            <figure className=" d-none d-md-grid">
                <img src={optionBody[option].img} alt="imgConsultoria" className={style.imgOptions} />
            </figure>
            <div className={style.txtOptions}>
                <h2>{optionBody[option].title}</h2>
                <h3>
                    {optionBody[option].subTitle}
                </h3>
                <figure className="d-grid d-md-none">
                    <img src={optionBody[option].img} alt="imgConsultoria" className={style.imgOptions} />
                </figure>
                <p>
                    {optionBody[option].body}
                </p>
                <Button className={style.btnSaibaMais}>SAIBA MAIS</Button>
            </div>
        </div>
    )
}

export default Options
