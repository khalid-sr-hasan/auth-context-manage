import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
    const { registerUser, setUser, userProfileUpdate } =
        useContext(AuthContext);
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [nameError, setNameError] = useState("");

    // console.log(registerUser);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        if (name === "") {
            setNameError("Name require*");
        }
        if (email === "") {
            setEmailError("Email require*");
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            setEmailError("Invalid Email");
            return;
        }

        if (password === "") {
            setPasswordError("Password require*");
        } else if (password.length < 6) {
            setPasswordError("password mast be 6 character");
            return;
        } else {
            setNameError("");
            setEmailError("");
            setPasswordError("");
        }

        registerUser(email, password)
            .then((result) => {
                setUser(result.user);
                logUser(result.user, name);
            })
            .catch((error) => {
                console.log(error);
            });

        const logUser = (newUser, name) => {
            userProfileUpdate(newUser, name)
                .then(() => {})
                .catch((error) => console.error(error));
        };
    };
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col gap-5">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-2xl">
                        <form
                            onSubmit={handleRegister}
                            className="card-body w-full"
                        >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="name"
                                    className="input input-bordered"
                                />
                            </div>
                            {nameError && (
                                <p>
                                    <small className="text-red-500">
                                        {nameError}
                                    </small>
                                </p>
                            )}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                />
                            </div>
                            {emailError && (
                                <p>
                                    <small className="text-red-500">
                                        {emailError}
                                    </small>
                                </p>
                            )}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                />
                            </div>
                            {passwordError && (
                                <p>
                                    <small className="text-red-500">
                                        {passwordError}
                                    </small>
                                </p>
                            )}
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">
                                    Register
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
                                    to="/login"
                                    href="#"
                                    className="label-text-alt link link-hover"
                                >
                                    Already have an account? Please login
                                </Link>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
