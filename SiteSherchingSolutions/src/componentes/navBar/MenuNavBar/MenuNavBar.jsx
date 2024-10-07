import style from "./MunuNavBar.module.css"

function MenuNavBar() {
    return (
        <div className={style.menuNavBar}>
            <div className='col-md-12 text-center'>
                <div className='col-1 col-md-8 offset-1'>
                    <a href="" className='col-2'>Serviços</a>
                    <a href="" className='col-2 offset-1'>Projetos</a>
                    <a href="" className='col-2 offset-1'>Sobre nós</a>
                </div>
            </div>

            <div className="col-2">
                <button className={style.btnContato}>Contato</button>
            </div>
        </div>
    )
}

export default MenuNavBar