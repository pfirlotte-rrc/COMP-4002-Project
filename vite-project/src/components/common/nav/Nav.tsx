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
        <div classname="company-name">
            <span>
                <a href="#company">Bit Reviews</a>
            </span>
        </div>
         <div className="nav-links">
            {navBarPages.map(item => (
                <span>
                    <a key={item.title} href={item.pageLink}>
                    {item.title}
                    </a>
                </span>
            ))}
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

export default Nav;