import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import MembersForm from './components/MembersForm';

function App() {
  const [form, setForm] = useState([
    {
      name: 'Julie Antonio',
      role: 'Section Lead/Team Lead',
      email: 'julie@example.com'
    },
    {
      name: 'Kristi Gribble',
      role: 'Full Stack Web Developer',
      email: 'kristi@example.com'

    }
    
  ])

  const addNewMember = member => {
    const newMember = {
      name: member.name,
      role: member.role,
      email: member.email,
    };

    const newMemberList = [...form, newMember];
    setForm(newMemberList);
  }
  return (
    <div className="App">
      <h1>Team Members Form</h1>
      <MembersForm addNewMember={addNewMember}/>
      <Form form={form} />
    </div>
  );
}

export default App;
