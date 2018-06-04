import React from "react";
import {GridUser} from "./gridUser";
import PropTypes from 'prop-types';

export const GridUserList = (props) => {
    return (
        <div className='container'>
        <div className="row">
        <div className="col s12">
            {props.usersData.map((user) => {
                return <GridUser user = {user}/>
            })}
        </div>
        </div>
        </div>

    )
}

GridUserList.propTypes = {
    usersData: PropTypes.array.isRequired
}

GridUserList.defaultProps = {
    usersData: []
}