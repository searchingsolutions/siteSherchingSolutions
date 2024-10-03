import logo from '../../assets/logo.svg'
import style from './NavBar.module.css'

function NavBar() {
    return (
        <header>
            <nav className={`${style.navBar} container pt-5 d-flex text-center align-items-center `}>
                <div className='col-2'>
                    <img src={logo} alt="" className='w-100' />
                </div>
                
                <div className='col-8 d-flex text-center'>
                    <div className='col-10 offset-1'>
                        <a href="" className='col-2'>Serviços</a>
                        <a href="" className='col-2 offset-1'>Projetos</a>
                        <a href="" className='col-2 offset-1'>Sobre nós</a>
                    </div>
                </div>

                <div className="col-2">
                    <button className={style.buttonContato}>Contato</button>
                </div>
            </nav>
        </header>
    )
}

export default NavBar