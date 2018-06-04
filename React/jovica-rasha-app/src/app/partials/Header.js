import React from "react";


const Header = (props) => {
    return (<nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo center">{props.title}</a>

        </div>
        </nav>);
}


export default Header;


