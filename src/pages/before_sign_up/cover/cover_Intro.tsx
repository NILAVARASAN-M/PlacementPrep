const CoverPageIntro = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center px-4">
        <h1 className="text-4xl font-bold">Present your business in a</h1>
        <h1 className="text-4xl font-bold mt-2">whole new way</h1>
        <p className="text-gray-400 mt-4 max-w-xl">
          Quickly design and customize responsive mobile-first sites with
          Bootstrap, the world’s most popular front-end open source toolkit!
        </p>
        <div className="mt-6 flex space-x-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700">
            Get Started
          </button>
          <button className="border border-gray-400 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800">
            Learn More
          </button>
        </div>
      </div>
    );
  };

export default CoverPageIntro;