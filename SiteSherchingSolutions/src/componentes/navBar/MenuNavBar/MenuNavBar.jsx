import style from "./MunuNavBar.module.css"

function MenuNavBar() {
    return<>
        <div className='col-8 d-flex text-center'>
            <div className='col-10 offset-1'>
                <a href="" className='col-2'>Serviços</a>
                <a href="" className='col-2 offset-1'>Projetos</a>
                <a href="" className='col-2 offset-1'>Sobre nós</a>
            </div>
        </div>

        <div className="col-2">
            <button className={style.btnContato}>Contato</button>
        </div>
    </>
}

export default MenuNavBar