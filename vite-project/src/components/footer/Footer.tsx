import './Footer.css';

export function Footer () {
    const currentYear = new Date().getFullYear();

  return (
    <footer  className="Footer">
      <div className="Footer-Content">
        <div>
          <p>&copy; {currentYear} Works on My Computer LLC. All rights reserved.</p>
        </div>
        <div className="Footer-Project-Link">
          <a href="https://github.com/pfirlotte-rrc/COMP-4002-Project" target="_blank">
          <h2>GitHub Project</h2>
          </a>
        </div>
        <div className="Footer-Links">
          <h3>Group Members</h3>
          <a href="https://github.com/pfirlotte-rrc" target="_blank">
          <h4>Peter Firlotte</h4>
          </a>
          <a href="https://github.com/cgonzales2-rrc" target="_blank"> 
          <h4>Cj Gonzales</h4>
          </a>
          <a href="https://github.com/Ipadman321" target="_blank"> 
          <h4>Mason Josefchuk</h4>
          </a>
        </div>
      </div>
    </footer>
  );
};