import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";


const Register = () => {
    const { createUser } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
       const { email, password } = data;
       createUser(email, password)
       .then(result => {
         console.log(result.user);
          toast.success('Successfully Register');
       })
       .catch(error => {
         console.error(error);
         toast.warning(error.message);
       })
    };

    const passwordValidation = (value) => {
        if (value.length < 6) {
            return  toast.error('Password must be at least 6 characters or longer');
        }
        else if (!/[A-Z]/.test(value)) {
            return toast.error('Password must contain at least one uppercase letter');
        }
        else if (!/[a-z]/.test(value)) {
            return toast.error('Password must contain at least one lowercase letter');
        }
        return true;
    };

    return (
        <div className="hero min-h-screen mt-6">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left lg:ml-4">
                    <h1 className="text-5xl font-bold text-green-900">Please Register</h1>
                    <p className="py-6 text-md">
                        Please register here to create an account our website and then you see your profile.
                        If you want update your profile. Then you will must login your account.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" className="input input-bordered"
                                {...register("name", { required: true })} />
                            {errors.name && <span>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered"
                                {...register("email", { required: true })} />
                            {errors.name && <span>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" className="input input-bordered"
                                {...register("photo")} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered"
                                {...register("password", {
                                    required: true, validate: passwordValidation
                                })} />
                           
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-success  uppercase text-xl font-medium text-white">Register</button>
                        </div>
                        <p className="text-[13px]">Already have an account. Please
                            <Link to="/login" className="ml-2 text-green-900">
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;