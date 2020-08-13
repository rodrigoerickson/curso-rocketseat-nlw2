import React from 'react';
import './styles.css';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
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

                    <Select
                        name="week_day"
                        label="Dia da semana" 
                        options={[
                            { value:'Artes', label:'Artes'},
                            { value:'Artes', label:'Artes'},
                            { value:'Artes', label:'Artes'},
                            { value:'Artes', label:'Artes'}
                        ]}
                    />
                    <Input type="time" name="time" label="Hora" />
                </form>
            </PageHeader>
            <main>
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList;