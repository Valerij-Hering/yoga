import { useAuth0 } from "@auth0/auth0-react";
import userImg from '../Images/userImg.png'



const Account = () => {

    const { user, isAuthenticated } = useAuth0();



    return (
    isAuthenticated ? (
        <div className="account_box">
            <img src={user.picture} alt={user.name} />
            <p>{user.email}</p>
        </div>
        )
        :
        (
        <div className="account_box">
            <img  src={userImg}  alt=""/>
            <p>example@email.com</p>
        </div>
        )
    
        )
}

export default Account