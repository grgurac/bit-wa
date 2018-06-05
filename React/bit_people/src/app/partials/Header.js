import React from "react";

export const Header = (props) => {
    return (<nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo center">{props.title}</a>

        </div>
        </nav>);
}

Header.defaultProps = {
    title: "Bit Persons"
}

