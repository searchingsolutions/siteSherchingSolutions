import { useState } from 'react';
import logo from '../../assets/logo.svg'
import MenuNavBar from './MenuNavBar/MenuNavBar';
import style from './NavBar.module.css'
import { GiHamburgerMenu } from "react-icons/gi";

function NavBar() {

    const [openMenu, setOpenMenu] = useState(false)

    console.log(openMenu);
    
    return (
        <header>
            <nav className={`${style.navBar} container d-flex align-items-center col-12`}>
                <div className='col-2'>
                    <img src={logo} alt="" className='w-100' />
                </div>
                
                <div className="d-none d-md-flex justify-content-between col-10">
                    <MenuNavBar/>
                </div>
                
                <div className='d-grid d-md-none position-fixed end-0' >
                    <button onClick={() => setOpenMenu(true)} className={style.btnHamburger}>
                        <GiHamburgerMenu/>
                    </button>
                    {
                        openMenu ? (
                            <MenuNavBar/>
                        ):(<></>)
                    }

                </div>
            </nav>
        </header>
    )
}

export default NavBar