import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import './styles.css'
import api from '../../services/api'
import heroesImg from '../../assets/heroes.png'
import logoSvg from '../../assets/logo.svg'

export default function Logon() {
    const [id, setId] = useState('')
    const history = useHistory()

    async function handleLogin(e) {
        e.preventDefault()

        try {
            const response = await api.post('sessions', { id } )
            
            localStorage.setItem('gnoId', id)
            localStorage.setItem('gnoName', response.data.name)

            history.push('/profile')
        } catch (err) {
            alert('Failure on Login, try it again')
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoSvg} alt="Be the Hero"/>
                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>

                    <input placeholder="Your Id"
                    value={id} onChange={e => setId(e.target.value) } />
                    <button className="button" type="submit">Login</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Create a User
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes"/>
        </div>
    )
}
