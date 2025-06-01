import { auth, provider } from '../services/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/group 117.png';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const Login = () => {
  const navigate = useNavigate();

  const signIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
    }
  };

  const particlesInit = async (main) => {
    await loadSlim(main);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden px-4">
      <Particles
        className="absolute inset-0 z-10"
        init={particlesInit}
        options={{
          background: { color: { value: "#000000" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              resize: true
            },
            modes: {
              grab: { distance: 140, links: { opacity: 1 } }
            }
          },
          particles: {
            color: { value: "#ffffff" },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 1,
              straight: false
            },
            number: {
              density: { enable: true, area: 800 },
              value: 100
            },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } }
          },
          detectRetina: true
        }}
      />
      <div className="bg-white p-6 sm:p-10 rounded-xl shadow-xl w-full max-w-md text-center z-10">
        <img src={logo} alt="ShadowCRM Logo" className="w-14 sm:w-16 mx-auto mb-6" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2 sm:text-5xl">Welcome to ShadowCRM</h1>
        <p className="text-sm text-gray-600 mb-6">Sign in to manage your campaigns</p>
        <button
          onClick={signIn}
          className="w-full py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
