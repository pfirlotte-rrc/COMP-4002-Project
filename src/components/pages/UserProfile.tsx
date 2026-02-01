import { useState } from "react";

type Profile = {
    userName: string,
    userEmail: string,
    userBio: string,
}

function UserProfile() {

    const [userProfile, setUserProfile] = useState<Profile>({
        userName: "",
        userEmail: "",
        userBio: "",
    });
	
	const [showEditFrom, setShowEditForm] = useState(true)

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const {name, value} = event.target;
		setUserProfile(prev => ({...prev, [name]: value}))
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
					<h2>Edit Profile</h2>
					<button onClick={() => setShowEditForm(!showEditFrom)}>
						{showEditFrom ? "Hide Profile Edit Form" : "Show Profile Edit Form"}
					</button>
					{ showEditFrom ? 
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