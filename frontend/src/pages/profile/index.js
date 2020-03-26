import React, { useState, useEffect } from 'react'
import {Link, useHistory} from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import './style.css'
import api from '../../services/api'
import logoSvg from '../../assets/logo.svg'

export default function Profile() {
    const [incidents, setIncidents] = useState([])
    
    const history = useHistory()
    const gnoId = localStorage.getItem('gnoId')
    const ngoName = localStorage.getItem('gnoName')

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: gnoId,
            }
        }).then(response =>{
            setIncidents(response.data)
        })
    }, [gnoId])

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: gnoId,
                }
            })

            setIncidents(incidents.filter(incident => incident.id !== id))
        } catch(err) {
            alert('Problem on Delete Incident, try it again')
        }
    }

    function handleLogout() {
        localStorage.clear()
        history.push('/')
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoSvg} alt="Be the Hero" />
                <span>Bem vindo, {ngoName}</span>
                <Link className="button" to="/incidents/new">Create a new case</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Cases</h1>
            <ul>
                {incidents.map(incident => (
                    <li key={ incident.id }>
                        <strong>Case:</strong>
                        <p>{ incident.title }</p>
                    
                        <strong>Description:</strong>
                        <p>{ incident.description }</p>
                    
                        <strong>Value:</strong>
                        <p>{ Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value) }</p>
                    
                        <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
