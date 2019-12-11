import React, { useState } from "react";

const  MembersForm= ({ addNewMember }) => {
    const [member, setMember] = useState({name:"", role:"", email:""});

    const handleChanges = event => {
        setMember({...member, [event.target.name]:event.target.value });
    };

    const submitForm = event => {
        event.preventDefault();
        addNewMember(member);

        setMember({ name:"", role: "", email: ""});
    }
    return(
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name: </label>
            <input
            require="true"
            name="name"
            type="text"
            placeholder="Enter a name"
            onChange={handleChanges}
            value={member.name}
            />
            <br />
            <br />

            <label htmlFor="role">Role: </label>
            <input
            require="true"
            name="role"
            type="text"
            placeholder="Enter a role"
            onChange={handleChanges}
            value={member.role}
            />
            <br />
            <br />

            <label htmlFor="email">E-Mail: </label>
            <input
            require="true"
            name="email"
            type="text"
            placeholder="Enter an E-Mail Address"
            onChange={handleChanges}
            value={member.email}
            />
            <br />
            <br />

            <button type="submit">Add New Team Member</button>

        </form>
        
    )
}



export default MembersForm;