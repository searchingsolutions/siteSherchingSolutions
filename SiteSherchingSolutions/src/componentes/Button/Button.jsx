import style from './Button.module.css'



// eslint-disable-next-line react/prop-types
function Button({onClick, className, children}) {
    return (
        <button onClick={onClick} className={`${style.btnComponente} ${className}`}>
            {children}
        </button>
    )
}

export default Button