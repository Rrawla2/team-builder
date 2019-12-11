import React from 'react';

const Form = props => {
    return(
        <div>
        {props.form.map(item => (
            <div key={item.name}>
            <h1>{item.name}</h1>
            <h3>{item.role}</h3>
            <p>{item.email}</p>
            </div>
        ))}
        
        </div>
    );
};
  


export default Form;