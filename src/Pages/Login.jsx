import { Link, useLocation, useNavigate } from "react-router-dom";
import bgImg from "../assets/shared/Background.jpg";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import SocialLogin from "../components/SocialLogin";

const Login = () => {
  const { signIn } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: 'User Login Successful.',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        });
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.error("Error logging in:", error);
        Swal.fire({
          title: 'Login Failed',
          text: error.message,
          icon: 'error',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        });
      });
  };
  


  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="hero bg-black min-h-screen bg-opacity-40">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center md:w-1/2 lg:text-left text-white">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6 opacity-90">
              Please log in to access your account and explore new features.
              Enter your credentials below and get started right away. We’re
              glad to have you back!
            </p>
          </div>
          <div className="card bg-base-100 md:w-1/2 max-w-sm shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
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
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-outline border-0 border-b-4 text-lg"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <div className="flex items-center justify-center">
              <SocialLogin/>
            </div>
            <p className="m-2 ">New Here?<Link to="/signup"> <span className="link link-hover">Create an account</span></Link></p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Login;
