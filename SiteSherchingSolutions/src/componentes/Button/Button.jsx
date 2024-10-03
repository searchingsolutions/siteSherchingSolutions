import style from './Button.module.css'

// eslint-disable-next-line react/prop-types
function Button({className, children, ...props}) {
    return (
        <button {...props} className={`${style.btnComponente} ${className}`}>
            {children}
        </button>
    )
}

export default Button