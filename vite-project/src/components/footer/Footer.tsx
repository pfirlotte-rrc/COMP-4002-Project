export function Footer () {
    const currentYear = new Date().getFullYear();

  return (
    <footer  className="Footer">
      <div className="Footer-Content">
        <p>&copy; {currentYear} Works on My Computer LLC. All rights reserved.</p>
        <div className="Footer-Links">
          <a href="https://github.com/pfirlotte-rrc/COMP-4002-Project">
          <h2>GitHub Project</h2>
          </a>
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