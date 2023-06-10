import React, { useEffect, useState } from 'react'
import './Nav.css'

export default function Nav() {
    const [show, setshow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            console.log('window.scrollY: ', window.scrollY);
            if (window.scrollY > 50) {
                setshow(true)
            } else {
                setshow(false)
            }
        })
        return () => {
            window.removeEventListener("scroll", () => {
                //
            })
        }
    }, [])


    return (
        <nav className={`nav ${show && "nav__black"}`}>
            <img
                alt='Netflix logo'
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1600px-Logonetflix.png"
                className='nav__logo'
                onClick={() => window.location.reload()}
            />
            <img
                alt='User logged'
                src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117'
                className='nav__avatar'
            />
        </nav>
    )
}
