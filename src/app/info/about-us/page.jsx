const AboutUs = () => {
  return (
    <div className="flex flex-col items-center px-4 py-12 lg:px-20 lg:py-16 h-auto mt-12 mx-6">
      <div></div>

      <div className="flex flex-col items-center py-12 lg:py-40">
        <h1 className="text-2xl font-bold text-center lg:text-8xl">About Us</h1>
      </div>
      <div className="max-w-6xl mt-18 space-y-8 text-left text-gray-800">
        {/* What are cookies? Section */}
        <div>
          <h2 className="lg:text-lg font-bold">Title here</h2>
          <p className="mt-4 text-sm md:text-base">Text here.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
