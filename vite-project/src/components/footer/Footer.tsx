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
    <footer className="Footer">
        <p className="Copyright-Text">&copy; {currentYear} Works on My Computer LLC. All rights reserved.</p>
          <a className="Footer-Project-Link" href="https://github.com/pfirlotte-rrc/COMP-4002-Project" target="_blank">
          <h2>GitHub Project</h2>
          </a>
          <h3 className="Group-Member-Tag">Group Members</h3>
          <a className="Group-Member-List">
            <ul>
              {groupMembers.map((member, index) => (
                <li key={index} className="Group-Member-Item">
                  <a href={member.gitHubLink} target="_blank" className="Group-Member-Link">
                  {member.memberName}
                  </a>
                </li>
              ))}
            </ul>
          </a>
    </footer>
  );
};