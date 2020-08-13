import React, {useState} from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textearea from '../../components/Textarea';

import warningIcon from '../../assets/images/icons/warning.svg';
import './styles.css';
import Select from '../../components/Select';

function TeacherForm() {

    const [scheduleItems, setScheduleItems] = useState([
        {
            week_day:0,
            from:'',
            to:''
        }
    ])

    function addNewScheduleItem(){

        setScheduleItems([
            ...scheduleItems,
            {
                week_day:0,
                from:'',
                to:''
            } 
        ])
        
    }

    return (
        <div id="page-teacher-form" className="container">
           <PageHeader title="Que incrível que você quer dar aulas."
            description="O primeiro passo é preencher esse formulário de inscrição" />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input name="name" label=" Nome completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="Whatsapp" />
                    <Textearea name="bio" label="Biografia" />
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>
                    <Select
                        name="subject"
                        label="Matéria" 
                        options={[
                            { value:'Artes', label:'Artes'},
                            { value:'Artes', label:'Artes'},
                            { value:'Artes', label:'Artes'},
                            { value:'Artes', label:'Artes'}
                        ]}
                    />
                    <Input name="cost" label="Custo da sua hora por aula" />
                </fieldset>
                <fieldset>
                    <legend>
                        Horários disponíveis
                        <button type="button" onClick={addNewScheduleItem}>
                            + Novo horário
                        </button>
                    </legend>

                    {
                        scheduleItems.map(sheduleItem => {
                            return(
                                <div key={sheduleItem.week_day} className="schedule-item">
                                    <Select
                                        name="subject"
                                        label="Matéria" 
                                        options={[
                                            { value:'Artes', label:'Artes'},
                                            { value:'Artes', label:'Artes'},
                                            { value:'Artes', label:'Artes'},
                                            { value:'Artes', label:'Artes'}
                                        ]}
                                    />
                                    <Input name="from" label="Das" type="time" />
                                    <Input name="to" label="Até" type="time" />
                                </div>
                            )
                        })
                    }
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm;