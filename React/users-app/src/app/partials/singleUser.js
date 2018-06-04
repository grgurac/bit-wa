import React from 'react';
import PropTypes from 'prop-types';

export const SingleUser = (props) => {
    const { name, email, dob, picture } = props.user;

    return (
        <div className="col s12 m7">
            <div className="card horizontal">
                <div className="card-image">
                    <img src={picture.thumbnail} />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <p>name:{name.first} {name.last}</p>
                        <p>date of birth:{dob}</p>
                        <p>email:{email}</p>
                    </div>

                </div>
            </div>
        </div>

    )
}
SingleUser.PropTypes = {
    user: PropTypes.object.isRequired
}

SingleUser.defaultProps = {
    user: {}
}