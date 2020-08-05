import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
                <article className="teacher-item">
                    <header>
                        <img src="https://avatars3.githubusercontent.com/u/7891544?s=460&v=4" alt="photo"/>
                        <div>
                            <strong>Vinicius Rosa</strong>
                            <span>Programação</span>
                        </div>
                    </header>

                    <p>
                        titulo
                        <br/><br/>
                        conteudo
                    </p>

                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R$ 20,00</strong>
                        </p>
                        <button type='button'>
                            <img src={whatsappIcon} alt=""/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem;