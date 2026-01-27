import './Footer.css';

// Defining how the data for groupMembers should be only string values.
interface NameOfGroupMembers {
  memberName: string,
  githubLink: string
};

const groupMembers: NameOfGroupMembers[] = [
  {memberName: "Mason Josefchuk", githubLink: "https://github.com/Ipadman321"},
  {memberName: "Peter Firlotte", githubLink: "https://github.com/pfirlotte-rrc"},
  {memberName: "Cj Gonzales", githubLink: "https://github.com/cgonzales2-rrc"}
];

function Footer () {
  // Uses Date function to grab only the current year.
  const currentYear = new Date().getFullYear();

  return (
    <footer className="Footer"> 
      <a className="Footer-Project-Link" href="https://github.com/pfirlotte-rrc/COMP-4002-Project" target="_blank">
        <h2>GitHub Project</h2>
      </a>
      <p className="Copyright-Text">&copy; {currentYear} Works on My Computer LLC. All rights reserved.</p>
      <h3 className="Group-Member-Tag">Group Members</h3>
      <a className="Group-Member-List">
        <ul>
          {groupMembers.map((member, index) => (
            <li key={index} className="Group-Member">
              <a href={member.githubLink} target="_blank">
                {member.memberName}
              </a>
            </li>
          ))}
        </ul>
      </a>
    </footer>
  );
};

export default Footer;