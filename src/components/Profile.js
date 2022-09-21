import { useState } from 'react'
import {useUser} from "../context/UserContext";

function Profile() {
    const {user, setUser} = useUser()
    const [loading, setLoading] = useState(false)

    const handleLogin = () => {
        setLoading(true)
        setTimeout(()=> {
            setUser({
                id: 1,
                username: "wristcutter",
                bio: "lorem ipsum"
            })
            setLoading(false)
        }, 1000)
        
    }

    const handleLogout = () => {
        setUser(null)
    }

  return (
    <div>
        <code>
        {JSON.stringify(user)}
        </code>
        <br></br>
        {
            !user && <button onClick={handleLogin}>{loading ? "giriyorum" : "gir"}</button>
        }
        {
            user && <button onClick={handleLogout}>logout</button>
        }
    </div>
  )
}

export default Profile