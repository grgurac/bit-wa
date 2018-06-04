
import React from 'react';
import PropTypes from 'prop-types';

export const GridUser = (props) => {
    const { name, email, dob, picture } = props.user;

    return (
        
            <div className="col s4">
                <div className="card">
                    <div className="card-image">
                        <img src={picture.large} />
                        <span className="card-title">{name.first}</span>
                    </div>
                    <div className="card-content">
                        <p>email: {email}</p>
                        <p>date of birth: {dob}</p>
                    </div>
                    <div className="card-action">
                    </div>
                </div>
            </div>
    )
}

GridUser.propTypes = {
    user: PropTypes.object.isRequired
}

GridUser.defaultProps = {
    user: {}
}