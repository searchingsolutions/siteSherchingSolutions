import logo from '../../assets/logo.svg'
import MenuNavBar from './MenuNavBar/MenuNavBar';
import style from './NavBar.module.css'
import { GiHamburgerMenu } from "react-icons/gi";

function NavBar() {
    return (
        <header>
            <nav className={`${style.navBar} container d-flex align-items-center`}>
                <div className='col-2'>
                    <img src={logo} alt="" className='w-100' />
                </div>
                
                <div className="d-none d-md-grid">
                    <MenuNavBar/>
                </div>
                
                <div className='d-grid d-md-nome position-fixed end-0' >
                    <GiHamburgerMenu/>
                </div>

            </nav>
        </header>
    )
}

export default NavBar