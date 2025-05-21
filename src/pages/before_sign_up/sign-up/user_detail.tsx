import { useNavigate } from "react-router-dom";

export default function PersonDetailsPrompt() {
    const navigate = useNavigate();
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-[#0a0f1d] text-white p-4">
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
          <h2 className="text-xl font-semibold text-neon-blue mb-4">
            <a href="/person-details" className="text-blue-400 hover:text-blue-300 underline">
              Click here and complete the person-details. Else you need to sign-up again.
            </a>
          </h2>
          <button
            onClick={() => navigate("/")}
            className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-md"
          >
            For going back to home-page
          </button>
        </div>
      </div>
    );
}