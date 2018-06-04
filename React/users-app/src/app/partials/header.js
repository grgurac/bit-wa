import React from "react";
import PropTypes from 'prop-types';

const Header = (props) => {
    return (<nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo center">{props.title}</a>

        </div>
        </nav>);
}
Header.propTypes = {
    title: PropTypes.string.isRequired
}

Header.defaultProps = {
    title: "React Users"
}

export default Header;
