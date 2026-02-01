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
	
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const {name, value} = event.target;
		setUserProfile(prev => ({...prev, [name]: value}))
	 };

	const handleSubmit= (event: React.FormEvent<HTMLFormElement>) => {
    	event.preventDefault();
	};

    return (
        <>
          <main>
            <h1>User Profile</h1>
          	<section>
            	<p>
					<strong>Name:</strong> {userProfile.userName || "Placeholder"}
				</p>
				<p>
					<strong>Email:</strong> {userProfile.userEmail || "Placeholder"}
				</p>
				<p>
					<strong>Bio:</strong> {userProfile.userBio || "Placeholder"}
				</p>
            </section>
				<section>
					<h2>Edit Profile</h2>
					<form onSubmit={handleSubmit}>
						<FormTextInput
							label="Name"
							name="userName"
							value={userProfile.userName}
							handleChange={handleInputChange}
						/>
						<FormTextInput
							label="Email"
							name="userEmail"
							value={userProfile.userEmail}
							handleChange={handleInputChange}
						/>
						<FormTextAreaInput
							label="Bio"
							name="userBio"
							value={userProfile.userBio}
							handleChange={handleInputChange}
						/>
						<button type="submit">Submit</button>
					</form>
				</section>
          </main>
      </>
    );
}

type FormTextInputProps = {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function FormTextInput(
    { label, name, value, placeholder, handleChange}: FormTextInputProps
) {
  return (
	<label>
		{label}:
		<input
			name={name}
			value={value}
			size={30}
			type="text"
			placeholder= {placeholder ? placeholder : label}
			onChange={handleChange}
			/>
		<br/>
	</label>
	
  );
}

type FormTextAreaInputProps = {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export function FormTextAreaInput(
    { label, name, value, placeholder, handleChange}: FormTextAreaInputProps
) {
  return (
	<label>
		{label}:
		<textarea
			name={name}
			value={value}
			cols={40} 
			rows={10}
			placeholder= {placeholder ? placeholder : label}
			onChange={handleChange}
			/>
		<br/>
	</label>
  );
}

export default UserProfile;