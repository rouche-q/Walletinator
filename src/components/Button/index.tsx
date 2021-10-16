import React from 'react'
import PropTypes from "prop-types"
import "./Button.css"

type ButtonProps = {
    label?: string
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({ label, onClick }: ButtonProps) => {

    return (
        <button className='button' onClick={onClick}>{label}</button>
    )
}

Button.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
