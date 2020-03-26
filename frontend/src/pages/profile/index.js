import React from 'react'
import {Link} from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import './style.css'
import logoSvg from '../../assets/logo.svg'

export default function Profile() {
    const ngoName = localStorage.getItem('gnoName')

    return (
        <div className="profile-container">
            <header>
                <img src={logoSvg} alt="Be the Hero" />
                <span>Bem vindo, {ngoName}</span>
                <Link className="button" to="/incidents/new">Create a new case</Link>
                <button type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Cases</h1>

            <ul>
                <li>
                    <strong>Case:</strong>
                    <p>case test</p>
                    
                    <strong>Description:</strong>
                    <p>description test</p>

                    <strong>Value:</strong>
                    <p>$ 500,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>Case:</strong>
                    <p>case test</p>
                    
                    <strong>Description:</strong>
                    <p>description test</p>

                    <strong>Value:</strong>
                    <p>$ 500,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>Case:</strong>
                    <p>case test</p>
                    
                    <strong>Description:</strong>
                    <p>description test</p>

                    <strong>Value:</strong>
                    <p>$ 500,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>Case:</strong>
                    <p>case test</p>
                    
                    <strong>Description:</strong>
                    <p>description test</p>

                    <strong>Value:</strong>
                    <p>$ 500,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
            </ul>

        </div>
    )
}
