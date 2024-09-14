import { Link } from "react-router-dom";


const UpdateProfile = () => {
    return (
        <div className="flex justify-center items-center my-10">
            <h2 className="text-xl font-medium">Please Update Your Profile. Go 
                <Link to="/register" className="text-blue-800 ml-2">Register</Link></h2>
        </div>
    );
};

export default UpdateProfile;
