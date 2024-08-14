import { Link } from "react-router-dom";


const Login = () => {


    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left lg:ml-4">
                    <h1 className="text-5xl font-bold text-blue-900">Please Login</h1>
                    <p className="py-6 text-md">
                        Please login here to see your profile. If you want update your profile. But if you do not
                        have an account our website, you will must create an account.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary  uppercase text-xl font-medium">Login</button>
                        </div>
                        <p className="text-[13px]">Do not have an account? Please
                            <Link to="/register" className="ml-2 text-blue-600">
                                Regiter
                            </Link>
                        </p>
                    </form> 
                </div>
            </div>
        </div>
    );
};

export default Login;