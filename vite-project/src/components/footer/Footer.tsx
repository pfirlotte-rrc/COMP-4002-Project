import './Footer.css';

interface NameOfGroupMembers {
  memberName: string
  gitHubLink: string
};

const groupMembers: NameOfGroupMembers[] = [
  {memberName: "Mason Josefchuk", gitHubLink: "https://github.com/Ipadman321"},
  {memberName: "Peter Firlotte", gitHubLink: "https://github.com/pfirlotte-rrc"},
  {memberName: "Cj Gonzales", gitHubLink: "https://github.com/cgonzales2-rrc"}
];

export function Footer () {
    const currentYear = new Date().getFullYear();

  return (
    <footer  className="Footer">
      <div className="Footer-Content">
        <p className="Copyright-Text">&copy; {currentYear} Works on My Computer LLC. All rights reserved.</p>
          <a className="Footer-Project-Link" href="https://github.com/pfirlotte-rrc/COMP-4002-Project" target="_blank">
          <h2>GitHub Project</h2>
          </a>
        <div className="Footer-Links">
          <h3>Group Members</h3>
        </div>
      </div>
    </footer>
  );
};