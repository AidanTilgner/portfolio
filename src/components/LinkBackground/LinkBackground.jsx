//modules
import React from 'react'

//components

//files
import './LinkBackground.scss'

function LinkBackground({ link }) {
    return (
        <div className="link-background">
            <a href={link} className="link-background__link">{link}</a>
        </div>
    )
}

export default LinkBackground
