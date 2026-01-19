import "./Nav.css";

type Page = {
    title: string;
    pageLink: string;
};

const navBarPages: Page[] = [
    {title: "Home", pageLink: "Test.ca"},
    {title: "Popular", pageLink: "Test.ca"},
    {title: "My Posts", pageLink: "Test.ca"},
    {title: "Recent", pageLink: "Test.ca"},
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
                page={page.title}
                key={page.pageLink}
            />
        );
    })
 
    return(
        <section className="top-terms">
                {navBarListItem}
        </section>
    )
}

function ListPageHeader({page}: {page: string}) {
    return (
        <span>
            <a href="#">{page}</a>
        </span>
    )
}

export default Nav;