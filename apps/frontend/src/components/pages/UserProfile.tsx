import { useState } from "react";
import { useTopics } from "../../hooks/useTopics";

/**
 * Recent Refactor to fit Hook -> Service -> Repo architecture
 * 
 * This component replaces the previous embedded list of favorite user topics. 
 * We have created a mock file for topicData containing 10 users with a list of
 * favorite topics associated with them which this component can pull from.
 * 
 * From this component, it calls the useTopics hook which will receive a userId,
 * in this case we have hardcoded it. With this information it will call the 
 * topicService to confirm eligibility of the submission or pass an error.
 * 
 * Lastly, the service will contact the topicRepo there is no errors, and this 
 * will manipulate our data based on the desired action. 
 * 
 * This will all then be passed back down to the component so that the new 
 * information can be reflected for the user. 
 * 
 */


type Profile = {
    userName: string,
    userEmail: string,
    userBio: string,
}

//Temporary hardcoded user
const CURRENT_USER_ID = "u1";

function UserProfile() {

    const [userProfile, setUserProfile] = useState<Profile>({
        userName: "",
        userEmail: "",
        userBio: "",
    });
	
	const [showEditForm, setShowEditForm] = useState(true)
	const [newTopic, setNewTopic] = useState("");
	
	const {topics, error, addNewTopic } = useTopics(CURRENT_USER_ID);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const {name, value} = event.target;
		setUserProfile(prev => ({...prev, [name]: value}))
	};

	const handleAddNewTopic = () => {
		addNewTopic(newTopic);
		setNewTopic("");
	};

    return (
        <>
          <main>
            <h1>User Profile</h1>
          	<section>
            	<p>
					<strong>Name:</strong> {userProfile.userName || "Please Enter your Name"}
				</p>
				<p>
					<strong>Email:</strong> {userProfile.userEmail || "Please Enter your Email"}
				</p>
				<p>
					<strong>Bio:</strong> {userProfile.userBio || "Please Enter your Bio"}
				</p>
            </section>
			<section>
				<h2>Favorite Topics & Categories</h2>
				{error && <p style={{ color: "red"}}>{error}</p>}
				<ul>
					{topics.map((topic) => (
						<li key={topic.id}>
							{topic.name}
							</li>
						))}
				</ul>
				<input
					type="text"
					value={newTopic}
					placeholder="Add a Topic/Category"
					onChange={(event) => setNewTopic(event.target.value)}
				/>
				<button onClick={handleAddNewTopic}>Add Topic</button>
			</section>
				<section>
					<h2>Edit Profile</h2>
					<button onClick={() => setShowEditForm(!showEditForm)}>
						{showEditForm ? "Hide Profile Edit Form" : "Show Profile Edit Form"}
					</button>
					{ showEditForm ? 
						<UserEditForm
							profile={userProfile}
							setProfile={setUserProfile}
							handleInputChange={handleInputChange}
						/> : null}
				</section>
          </main>
      </>
    );
}

function UserEditForm({
	profile,
	setProfile,
	handleInputChange,
	}: {
	profile: Profile;
	setProfile: React.Dispatch<React.SetStateAction<Profile>>;
	handleInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	}) {

	const handleSubmit= (event: React.FormEvent<HTMLFormElement>) => {
    	event.preventDefault();
	};

	const clearName = () => setProfile(prev => ({...prev, userName: ""}));
	const clearEmail = () => setProfile(prev => ({...prev, userEmail: ""}));
	const clearBio = () => setProfile(prev => ({...prev, userBio: ""}));
	
	return (
		<form onSubmit={handleSubmit}>
			<label>
				Name:
				<input
					name="userName"
					value={profile.userName}
					size={30}
					onChange={handleInputChange}
				/>
			</label>
			<button type="button" onClick={clearName}>Reset Name</button>
			<br/>
			<label>
				Email:
				<input
					name="userEmail"
					value={profile.userEmail}
					size={30}
					onChange={handleInputChange}
				/>
			</label>
			<button type="button" onClick={clearEmail}>Reset Email</button>
			<br/>
			<label>
				Bio:
				<textarea
					name="userBio"
					value={profile.userBio}
					cols={40} 
					rows={10}
					onChange={handleInputChange}
				/>
			</label>
			<button type="button" onClick={clearBio}>Reset Bio</button>
			<br/>
			<button type="submit">Submit</button>
		</form>
	)
};

export default UserProfile;