import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textearea from '../../components/Textarea';

import warningIcon from '../../assets/images/icons/warning.svg';
import './styles.css';
import Select from '../../components/Select';
import api from '../../services/api';

function TeacherForm() {

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState([
        {
            week_day: 0,
            from: '',
            to: ''
        }
    ])

    function setScheduleItemValue(position:number, field:string, value:string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index)=>{
            if(index === position){
                return { ...scheduleItem, [field]:value}
            }

            return scheduleItem;
        });

        console.log(updatedScheduleItems);

        setScheduleItems(updatedScheduleItems);
    }

    function addNewScheduleItem() {

        setScheduleItems([
            ...scheduleItems,
            {
                week_day: 0,
                from: '',
                to: ''
            }
        ])

    }

    function handleCreateClass(e: FormEvent) {
        e.preventDefault();

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule:scheduleItems
        }).then(() =>{
            alert('Cadastro realizado com sucesso!');
        }).catch(() => {
            alert('Erro no cadastro!');
        })

        console.log({
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            scheduleItems
        })
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher esse formulário de inscrição" />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>
                        <Input name="name" label=" Nome completo" value={name} onChange={(e) => {
                            setName(e.target.value);
                        }} />
                        <Input name="avatar" label="Avatar" value={avatar} onChange={(e) => {
                            setAvatar(e.target.value);
                        }} />
                        <Input name="whatsapp" label="Whatsapp" value={whatsapp} onChange={(e) => {
                            setWhatsapp(e.target.value);
                        }} />
                        <Textearea name="bio" label="Biografia" value={bio} onChange={(e) => {
                            setBio(e.target.value);
                        }} />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>
                        <Select
                            name="subject"
                            label="Matéria"
                            value={subject}
                            onChange={(e) => {
                                setSubject(e.target.value);
                            }}
                            options={[
                                { value: 'Artes', label: 'Artes' },
                                { value: 'Japones', label: 'Japonês' },
                                { value: 'Artes', label: 'Artes' },
                                { value: 'Artes', label: 'Artes' }
                            ]}
                        />
                        <Input name="cost" label="Custo da sua hora por aula" value={cost}
                            onChange={(e) => {
                                setCost(e.target.value);
                            }} />
                    </fieldset>
                    <fieldset>
                        <legend>
                            Horários disponíveis
                            <button type="button" onClick={addNewScheduleItem}>
                                + Novo horário
                            </button>
                        </legend>

                        {
                            scheduleItems.map((sheduleItem, index) => {
                                return (
                                    <div key={sheduleItem.week_day} className="schedule-item">
                                        <Select
                                            name="week_day"
                                            label="Dia da semana"
                                            value={sheduleItem.week_day}
                                            onChange={e=> setScheduleItemValue(index, 'week_day', e.target.value)}
                                            options={[
                                                { value: '0', label: 'Domingo' },
                                                { value: '1', label: 'Segunda' },
                                                { value: '2', label: 'Terça' },
                                                { value: '3', label: 'Quarta' },
                                                { value: '4', label: 'Quinta' },
                                                { value: '5', label: 'Sexta' },
                                                { value: '6', label: 'Sábado' }
                                            ]}
                                        />
                                        <Input name="from"  onChange={e=> setScheduleItemValue(index, 'from', e.target.value)} 
                                            label="Das" type="time" value={sheduleItem.from} />
                                        <Input name="to"  onChange={e=> setScheduleItemValue(index, 'to', e.target.value)} 
                                            label="Até" type="time" value={sheduleItem.to} />
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
                        <button type="submit">
                            Salvar cadastro
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm;