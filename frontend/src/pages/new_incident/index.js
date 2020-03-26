import React, { useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './style.css'
import api from '../../services/api'
import logoSvg from '../../assets/logo.svg'

export default function NewIncident() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const history = useHistory()

    const gnoId = localStorage.getItem('gnoId')

    async function handleNewIncident(e) {
        e.preventDefault()

        const data = {
            title, description, value,
        }

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: gnoId,
                }
            })
            history.push('/profile')
        } catch (err) {
            alert('Ops something sounds wrong, try it again')
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoSvg} alt="Be the Hero" />
                    <h1>Create a New Case</h1>
                    <p>Descreva o caso detalhadamente para encontrar um heroi para resolver isso.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        voltar para home
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input placeholder="Title" 
                    value={title} onChange={e => setTitle(e.target.value)} />
                    <textarea placeholder="Description" 
                    value={description} onChange={e => setDescription(e.target.value)} />
                    <input placeholder="Value" 
                    value={value} onChange={e => setValue(e.target.value)} />

                    <button className="button" type="submit">create it</button>
                </form>
            </div>
        </div>
    )
}