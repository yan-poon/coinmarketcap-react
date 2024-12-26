import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const Profile = ({user, isAuthenticated, isLoading}) => {

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    if (!isAuthenticated) {
        return (
            <div>
                <LoginButton />
            </div>)
    } else {
        return (
            isAuthenticated && (
                <div>
                    {/*<img src={user.picture} alt={user.name} />*/}
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <LogoutButton />
                </div>
            )
        );
    }

};

export default Profile;