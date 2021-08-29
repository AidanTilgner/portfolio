//modules
import React from 'react'

//components

//files
import './Card.scss'

function Card({ title, children, bottomText, bottomLink, download }) {
    return (
        <div className="card">
            <h1 className="card__title">{title? title: ''}</h1>
            <div className="children">{children}</div>
        </div>
    )
}

export default Card
