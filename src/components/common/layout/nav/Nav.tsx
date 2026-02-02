import { NavLink } from "react-router-dom";
import type { JSX } from "react";
import "./Nav.css";

type Page = {
    title: string;
    pageLink: string;
};

const navBarPages: Page[] = [
    {title: "Home", pageLink: "/"},
    {title: "Popular", pageLink: "/popular"},
    {title: "Recent", pageLink: "/recent"},
    {title: "User Profile", pageLink: "/userprofile"},
];

function Nav() {
    return<nav>
        <div className="company-name">
            <span>
                <a href="#company">Bit Reviews</a>
            </span>
        </div>
         <div className="nav-links">
            <ListPageDisplay pages={navBarPages}/>
        </div>
        <div className="user-login">
            <span>
                <a href="#logon">Log In</a>
            </span>
        </div>
        <section className="search-bar">
            <form action="#">
                <input type="text" name="field-term" placeholder="Search..." />
                <input type="submit" value="Search" />
            </form>
        </section>
    </nav>;
}

function ListPageDisplay({pages}: {pages: Page[]}) {
    const navBarListItem: JSX.Element[] = [];

    pages.forEach((page) => {
        navBarListItem.push(<ListPageHeader
                key={page.pageLink}
                page={page.title}
                link={page.pageLink}
            />
        );
    })
 
    return(
        <section className="navHeader">
                {navBarListItem}
        </section>
    )
}

function ListPageHeader({page, link}: {page: string; link: string}) {
    return (
        <NavLink to={link} end>
            {page}
        </NavLink>
    )
}

export default Nav;