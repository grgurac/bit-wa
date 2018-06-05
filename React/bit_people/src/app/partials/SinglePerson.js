import React from 'react';

export const SinglePerson = (props) => {
    const { name, email, dob, picture, gender } = props.user;

    return (
        <li className="collection-item avatar">
            <img src={picture.thumbnail} alt="" className="circle" />
                <span className="title">{name.first} {name.last}</span>
                <p><i className="material-icons">email</i>email:{email}</p>
                <p><i className="material-icons">cake</i>{dob}</p>
        </li>

    )
}