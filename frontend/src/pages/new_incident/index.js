import React from 'react'
import {Link} from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './style.css'
import logoSvg from '../../assets/logo.svg'

export default function NewIncident() {
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
                <form >
                    <input placeholder="Title" />
                    <textarea placeholder="Description" />
                    <input placeholder="Value" />

                    <button className="button" type="submit">create it</button>
                </form>
            </div>
        </div>
    )
}