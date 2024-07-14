import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
    const { loginUser, setUser } = useContext(AuthContext);
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then((result) => {
                setUser(result.user);
                console.log(result.user);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col gap-5">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-2xl">
                        <form
                            onSubmit={handleLogin}
                            className="card-body w-full"
                        >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required
                                />
                                <label className="label">
                                    <a
                                        href="#"
                                        className="label-text-alt link link-hover"
                                    >
                                        Forgot password?
                                    </a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">
                                    Login
                                </button>
                            </div>
                            <div className="flex gap-5 mt-6">
                                <button className="btn flex-1 btn-primary">
                                    Google
                                </button>
                                <button className="btn flex-1 btn-primary">
                                    Facebook
                                </button>
                            </div>
                            <label className="label">
                                <Link
                                    to="/register"
                                    href="#"
                                    className="label-text-alt link link-hover"
                                >
                                    You have an account? Please register
                                </Link>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
