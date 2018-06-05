import React from "react";

export const SinglePersonGrid = (props) => {
    const { name, email, dob, picture, gender } = props.user;

    return (
  
            <div className="col s4 m4 l4 xl4">
                <div className="card">
                    <div className="card-image">
                        <img src={picture.large} />
                        <span className="card-title">{name.first}</span>
                    </div>
                    <div className="card-content">
                        <p>{email}</p>
                        <p>Birth date: {dob} </p>
                    </div>
                </div>
            </div>


    )
}


