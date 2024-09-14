import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";




const Profile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="flex flex-col justify-center items-center my-10">
            <h2 className="text-4xl font-bold text-yellow-700">User Profile</h2>
            <div className="mt-8 flex flex-col justify-center items-center border-2
             border-green-700 p-4 rounded-xl space-x-2">
                <img src={user.photoURL} alt="" className="rounded-full border-4 border-purple-700" />
                <h5 className="text-xl font-semibold text-blue-400">
                    <span className="text-2xl text-red-400 mr-2">Name:
                    </span> {user.displayName}
                </h5>
               
                <p className="text-xl font-semibold text-blue-400">
                    <span className="text-red-400 text-2xl mr-2">Email:
                    </span> {user.email}
                </p>
            </div>


        </div>
    );
};

export default Profile;