import React from "react";
import {SingleUser} from "./singleUser";
import PropTypes from 'prop-types';

export const UsersList = (props) => {
    return (
        <div className='container'>
            {props.usersData.map((user) => {
                return <SingleUser user = {user}/>
            })}
        </div>
    )
}
UsersList.PropTypes = {
    usersData: PropTypes.array.isRequired
}

UsersList.defaultProps = {
    usersData: []
}


        