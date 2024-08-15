import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";


const SocialMedia = () => {
    const { googleLogin, githubLogin } = useContext(AuthContext);
    return (
        <div className="p-4">
        <div className="divider">Or Login With</div>
        <div className="flex justify-between items-center">
            <button onClick={() => googleLogin()}
            className="btn btn-circle w-32 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">
                <FaGoogle className="text-2xl text-white"/>
            </button>
            <button onClick={() => githubLogin()}
            className="btn btn-circle w-32 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">
               <FaGithub className="text-2xl text-white"/>
            </button>
        </div>
    </div>
    );
};

export default SocialMedia;