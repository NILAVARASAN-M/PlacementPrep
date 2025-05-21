import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleprovider, db } from "../../../assets/firebase";
import { signInWithPopup } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export default function Signin() {
  const [showModal, setShowModal] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const [showCameraLogin, setShowCameraLogin] = useState(true);
  const navigate = useNavigate();

  // Animation timing effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationCompleted(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleprovider);
      const user = result.user;

      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);
      const userData = userSnap.data();

      if(userSnap.exists() && userData?.details_status==false){
        navigate(`/userdetails`);
      }
      else if (userSnap.exists()) {
        console.log("User UID:", user.uid);
        console.log("User Email:", user.email);
        navigate(`/home/${user.displayName}`);
        // window.location.reload();
        return; // Stop execution for existing users
      }

      else {
        setShowModal(true); // Show the modal instead of alert
      }
    } catch (error) {
      console.error("Sign-in error:", error);
      alert("Sign-in failed. Try again.");
    }
  };

  const toggleCameraLogin = () => {
    setShowCameraLogin(!showCameraLogin);
  };

  return (
    <div className="h-screen bg-gradient-to-br from-emerald-950 via-teal-950 to-cyan-950 flex items-center justify-center overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute w-96 h-96 bg-teal-600 rounded-full -top-20 -left-20 blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-cyan-600 rounded-full top-1/4 right-1/3 blur-3xl opacity-10 animate-pulse" style={{animationDelay: "1s"}}></div>
          <div className="absolute w-96 h-96 bg-emerald-600 rounded-full bottom-1/3 left-1/3 blur-3xl opacity-10 animate-pulse" style={{animationDelay: "2s"}}></div>
          <div className="absolute w-96 h-96 bg-green-500 rounded-full -bottom-20 -right-20 blur-3xl opacity-10 animate-pulse" style={{animationDelay: "3s"}}></div>
        </div>
        
        {/* Decorative grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Ambient light effect */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-teal-400 opacity-5 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-emerald-400 opacity-5 blur-3xl rounded-full"></div>
      </div>

      {/* Content container */}
      <div
        className={`relative z-10 w-full max-w-6xl flex flex-col lg:flex-row rounded-3xl shadow-2xl transform transition-all duration-1000 max-h-screen overflow-auto
          ${animationCompleted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      >
        
        {/* Left panel - Branding */}
        <div className="lg:w-2/5 bg-gradient-to-br from-teal-600/20 to-emerald-600/20 backdrop-blur-md p-8 rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none flex flex-col justify-between border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern-overlay opacity-5"></div>
          
          {/* Interactive 3D card */}
          <div className="perspective-1000">
            <div className="relative transform transition-transform duration-700 hover:rotate-y-12 hover:scale-105 cursor-pointer">
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-teal-500 rounded-full blur-xl opacity-20"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-emerald-500 rounded-full blur-xl opacity-20"></div>
              
              <div className="bg-gradient-to-tr from-teal-900/40 to-emerald-900/40 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-emerald-600 flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-base font-bold text-white">Welcome Back</h3>
                    <p className="text-teal-200 text-xs">Access your features</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-2 text-gray-300 text-sm">Resume practice</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-2 text-gray-300 text-sm">Track your progress</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-2 text-gray-300 text-sm">Access saved materials</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial */}
          <div className="mt-6 bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 shadow-lg">
            <div className="flex items-center mb-3">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-r from-teal-400 to-teal-600 flex items-center justify-center text-white text-xs font-bold">RK</div>
                <div className="w-7 h-7 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 flex items-center justify-center text-white text-xs font-bold">SV</div>
                <div className="w-7 h-7 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-600 flex items-center justify-center text-white text-xs font-bold">PT</div>
              </div>
              <div className="ml-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-400 text-xs">Trusted by 10,000+ users</p>
              </div>
            </div>
            <p className="text-gray-300 text-xs italic">"This platform helped me land my dream job! The practice interviews and resources were invaluable."</p>
          </div>
          
          {/* Brand name */}
          <div className="mt-6 text-center lg:text-left">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">PlacementPrep</h1>
            <p className="text-gray-400 text-sm mt-1">Your gateway to career success</p>
          </div>
        </div>
        
        {/* Right panel - Signin form */}
        <div className="lg:w-3/5 bg-gray-900/60 backdrop-blur-lg p-6 rounded-b-3xl lg:rounded-r-3xl lg:rounded-bl-none border border-white/10 flex items-center justify-center">
          <div className="w-full max-w-md">
            {/* Toggle instructions */}
            <div className="mb-4 rounded-xl overflow-hidden shadow-lg bg-gradient-to-r from-teal-900/40 via-emerald-900/30 to-teal-900/40 backdrop-blur-md border border-teal-500/20">
              {/* Glass effect header */}
              <div className="bg-teal-600/10 backdrop-blur-sm border-b border-teal-500/10 px-4 py-2 flex items-center">
                <div className="w-5 h-5 rounded-full bg-teal-500/20 flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-teal-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-teal-200 font-medium text-xs">ACCOUNT STATUS</h3>
              </div>
              
              {/* Card content */}
              <div className="p-4">
                {showCameraLogin ? (
                  <>
                    <div className="flex items-start space-x-2 mb-2">
                      <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-gradient-to-r from-teal-400 to-emerald-500 flex items-center justify-center shadow-md shadow-teal-600/20">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-white text-xs font-medium leading-tight">
                        You've completed signup and personal details
                      </p>
                    </div>
                    <p className="text-teal-300 text-xs font-medium ml-6 mb-2">
                      Continue with camera login for best experience
                    </p>
                    <div className="ml-6 bg-teal-900/30 backdrop-blur-sm rounded-lg p-2 border border-teal-500/10">
                      <p className="text-gray-400 text-xs">
                        Need to switch?{" "}
                        <button 
                          onClick={toggleCameraLogin}
                          className="relative inline-block text-emerald-400 hover:text-emerald-300 font-bold group"
                        >
                          <span className="relative z-10">Click here</span>
                          <span className="absolute bottom-0 left-0 right-0 h-1 bg-emerald-500/50 group-hover:h-[6px] group-hover:bottom-0 transition-all duration-200 rounded"></span>
                        </button>
                        {" "}if you have not completed filling your personal details.
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-start space-x-2 mb-2">
                      <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center shadow-md shadow-orange-600/20">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-white text-xs font-medium leading-tight">
                        You've signed up but haven't completed personal details
                      </p>
                    </div>
                    <p className="text-amber-300 text-xs font-medium ml-6 mb-2">
                      Please proceed with Google sign-in to complete your profile
                    </p>
                    <div className="ml-6 bg-amber-900/20 backdrop-blur-sm rounded-lg p-2 border border-amber-500/10">
                      <p className="text-gray-400 text-xs">
                        Already completed details?{" "}
                        <button 
                          onClick={toggleCameraLogin}
                          className="relative inline-block text-amber-400 hover:text-amber-300 font-bold group"
                        >
                          <span className="relative z-10">Click here</span>
                          <span className="absolute bottom-0 left-0 right-0 h-1 bg-amber-500/50 group-hover:h-[6px] group-hover:bottom-0 transition-all duration-200 rounded"></span>
                        </button>
                        {" "}to access camera login and all features.
                      </p>
                    </div>
                  </>
                )}
              </div>
              
              {/* Animated border effect */}
              <div className="h-1 bg-gradient-to-r from-transparent via-teal-500/30 to-transparent animate-pulse"></div>
            </div>
          
            <h2 className="text-2xl font-bold text-white mb-1">Welcome Back</h2>
            <p className="text-teal-300 text-sm mb-4">Sign in to access your account</p>
            
            <div className="space-y-3">
              {/* Camera Login - Recommended Option */}
              {showCameraLogin && (
                <button 
                  onClick={()=>{navigate("/camera")}}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-xl flex items-center justify-center gap-2 text-sm font-medium transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-fuchsia-500/30 animate-pulse"></div>
                  <div className="absolute -right-1 top-0 bg-yellow-400 text-purple-900 text-xs font-bold py-1 px-2 rounded-bl-lg">
                    RECOMMENDED
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                    <circle cx="12" cy="13" r="3"></circle>
                  </svg>
                  Sign in with Camera
                </button>
              )}
            
              {/* Social login buttons with interactive effects */}
              <button 
                onClick={signInWithGoogle}
                className="w-full bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 rounded-xl flex items-center justify-center gap-2 text-sm font-medium transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 48 48">
                  <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
                  <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z" />
                  <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
                  <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
                </svg>
                Sign in with Google
              </button>
              
              <button className="w-full bg-black hover:bg-gray-900 text-white py-2 px-4 rounded-xl flex items-center justify-center gap-2 text-sm font-medium transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47c-1.34.03-1.77-.79-3.29-.79c-1.53 0-2 .77-3.27.82c-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51c1.28-.02 2.5.87 3.29.87c.78 0 2.26-1.07 3.81-.91c.65.03 2.47.26 3.64 1.98c-.09.06-2.17 1.28-2.15 3.81c.03 3.02 2.65 4.03 2.68 4.04c-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5c.13 1.17-.34 2.35-1.04 3.19c-.69.85-1.83 1.51-2.95 1.42c-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Sign in with Apple
              </button>
              
              <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-xl flex items-center justify-center gap-2 text-sm font-medium transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M21.721 10.5c.677-2.5.246-4.473-.368-6l-2.639 1c.5 1.224.993 2.834.288 4.73a7.022 7.022 0 0 0-7.2-5.21c-3.746.12-6.8 3.278-6.8 7.095c.002 3.366 2.37 6.169 5.5 6.885a7.204 7.204 0 0 0 2.5 0c-.5 1.5-1.786 2.5-3.5 2.5c-2.25 0-3.5-1.75-3.5-1.75l-2 1.25s1.625 2.5 5.5 2.5c3.876 0 6.5-2.75 6.5-2.75l.47-.75H14v-2h4v-1.5h-4v-2h7.721Z" />
                </svg>
                Sign in with Microsoft
              </button>
              
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-xl flex items-center justify-center gap-2 text-sm font-medium transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                Sign in with Phone
              </button>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-4">
              <div className="flex items-center justify-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs text-gray-400">Secure & Encrypted</span>
              </div>
            </div>
            
            {/* Footer */}
            <div className="mt-4 text-center">
              <p className="text-gray-400 text-xs">
                Don't have an account?{" "}
                <button 
                  className="text-teal-400 hover:text-teal-300 font-medium transition-colors"
                  onClick={() => navigate("/signup")}
                >
                  Sign up
                </button>