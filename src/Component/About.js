import React, { useContext } from 'react'
import UserContext from "../UserContext";


const About = () => {
    const { user, setUser } = useContext(UserContext)
    return (
        <div>
            {user}
            <button onClick={() => setUser("Maya")}>Change User</button>
        </div >
    )
}

export default About
