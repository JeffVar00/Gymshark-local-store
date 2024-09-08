import Contact from "@/components/section_components/Contact";

function contact_us() {
  return (
    <div className="flex h-screen items-center justify-center ">
      <div className="w-full lg:w-auto flex flex-col lg:flex-row gap-24 justify-center md:justify-start md:shadow-[rgba(0,_0,_0,_0.25)_0px_10px_30px] md:mt-20 lg:mt-10 px-10 md:px-40 py-20 items-center md:items-start lg:items-center">
        <h1 className="w-auto text-4xl md:text-5xl font-bold lg:text-6xl">
          CONTACT US
        </h1>
        <div className="flex flex-col gap-6 w-full lg:w-auto">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default contact_us;
