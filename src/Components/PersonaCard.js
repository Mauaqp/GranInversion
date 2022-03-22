import React  from 'react';

const PersonaCard = props => {
    return (
        <div className="persona-div">
            <div>
                <h1>{props.lastName} , {props.firstName}</h1>
            </div>
            <p>Age : {props.age}</p>
            <p>Hair Color : {props.hairColor}</p>
        </div>
    )
}
export default PersonaCard;