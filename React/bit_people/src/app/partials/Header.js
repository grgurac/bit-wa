import React from "react";

export const Header = (props) => {
    return (<nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo center">{props.title}</a>
          <ul className="right hide-on-med-and-down">
            <li><a><i className="material-icons" onClick={ () => props.refreshHandler() }>refresh</i></a></li>
            <li><a><i className="material-icons" onClick={ () => props.listClickHandler() }>{ props.view ? "view_module" : "view_list" }</i></a></li>
            </ul>
        </div>
        </nav>);
}

Header.defaultProps = {
    title: "Bit Persons"
}

