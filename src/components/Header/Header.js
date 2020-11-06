import React from 'react';
import './Header.scss'

const Header = () => {
    return(
        <header>
            <h1 className="mainHeader">Todo List</h1>
            <span className="headerSpan">5 more to do, 0 done</span>
        </header>
    );
}

export { Header };