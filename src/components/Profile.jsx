import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

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