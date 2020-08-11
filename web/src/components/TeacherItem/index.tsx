import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/20190919?s=460&u=96e344efef5a91866170185a091dc8d802d3b357&v=4" alt="Rodrigo erickson" />
                <div>
                    <strong>
                        Rodrigo Erickson
                            </strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias de química avançada.
                        <br /><br />
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
                Mais de 200.000 pessoas já passaram por uam das minhas explosões.
                    </p>
            <footer>
                <p>
                    Preço/hora
                            <strong>R$80,00</strong>
                </p>
                <button type='button'>
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                        </button>
            </footer>
        </article>
    )
}

export default TeacherItem;