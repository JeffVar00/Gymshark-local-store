const LASTUPDATED = "6 Sep 2024";
const CookiePolicy = () => {
  return (
    <div className="flex flex-col items-center px-4 py-12 lg:px-20 lg:py-16 h-auto mt-12 mx-6">
      <div className="flex flex-col items-center py-12 lg:py-40">
        <h1 className="text-2xl font-bold text-center lg:text-8xl ">
          COOKIE POLICY
        </h1>
        <div className="flex flex-row mt-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 w-4 h-4 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          <p className="text-xs md:text-sm text-gray-500">
            Last updated: {LASTUPDATED}
          </p>
        </div>
      </div>
      <div className="max-w-6xl mt-18 space-y-8 text-left text-gray-800">
        {/* What are cookies? Section */}
        <div>
          <h2 className="lg:text-lg font-bold">What are cookies?</h2>
          <p className="mt-4 text-sm md:text-base">
            Like most websites, our websites use cookies to collect information.
            Cookies are small data files which are placed on your computer or
            other devices (such as smartphones or tablets) as you browse our
            websites. They are used to ‘remember’ when your computer or device
            accesses our websites. They allow us to remember whether you are
            logged in to the site and what items you had in your shopping
            basket. Cookies are essential for the effective operation of our
            websites and to help you shop with us online. They are also used to
            tailor the products and services offered and advertised to you, both
            on our websites and elsewhere.
          </p>
        </div>

        {/* Information Collected Section */}
        <div>
          <h2 className="lg:text-lg font-bold">Information Collected</h2>
          <p className="mt-4 text-sm md:text-base">
            Some cookies collect information about browsing and purchasing
            behaviour when you access our websites via the same computer or
            device. This includes information about pages viewed, products
            purchased and your journey around a website. All data passed by
            cookies is anonymous and will never contain individual detail such
            as your name, address, telephone number or payment information but
            may contain our customer reference number that is unique to you. For
            more detailed information about how cookies work, please visit
            <a
              href="https://www.allaboutcookies.org"
              className="text-blue-600 hover:underline ml-1"
            >
              www.allaboutcookies.org
            </a>
            .
          </p>
        </div>

        {/* How are Cookies Managed Section */}
        <div>
          <h2 className="lg:text-lg font-bold">How are cookies managed?</h2>
          <p className="mt-4 text-sm md:text-base">
            The cookies stored on your computer or other device when you access
            our websites are designed by:
          </p>
          <ul className="text-sm md:text-base list-disc list-inside ml-4 mt-2">
            <li>
              Gymshark Limited or on our behalf, and are necessary to enable you
              to make purchases on our websites.
            </li>
          </ul>
        </div>

        {/* What are Cookies Used For Section */}
        <div>
          <h2 className="lg:text-lg font-bold">What are cookies used for?</h2>
          <p className="mt-4 text-sm md:text-base">
            Cookies are used with our marketing partners to present you with
            appropriate offers and advertising as you browse other sites on the
            internet, based on your browsing activity while on our site. Cookies
            also allow us to work alongside our web analytics partner, Google
            Analytics, to see how you like to use our website, which pages or
            special functions you prefer and help us to make them better.
          </p>
        </div>

        {/* Cookie Types Section */}
        <div>
          <h2 className="lg:text-lg font-bold">
            What type of cookies do we use?
          </h2>
          <p className="mt-4 text-sm md:text-base">
            There are two types of cookie that may be used during your visit to
            our site:
          </p>
          <ul className="text-sm md:text-base list-disc list-inside ml-4 mt-2">
            <li>
              <strong>Session cookies:</strong> These are deleted after each
              visit to our site. They allow you to add items to the basket and
              move through the checkout. Disallowing these will prevent you from
              placing orders.
            </li>
          </ul>
        </div>

        {/* Turning off Cookies Section */}
        <div>
          <h2 className="lg:text-lg font-bold">
            Turning off and deleting cookies
          </h2>
          <p className="mt-4 text-sm md:text-base">
            Most web browsers will provide the option to turn off or disallow
            cookies. How you do this depends on the web browser you are using.
            Instructions for disallowing cookies can usually be found in the
            browser`s Help menu.
          </p>
          {/* Browser Instructions */}
          <div className={`space-y-4 mt-4 text-sm md:text-base`}>
            <div>
              <strong>For Microsoft Internet Explorer:</strong>
              <ul className={`list-disc list-inside ml-6 mt-2`}>
                <li>Choose the menu Tools then Internet Options.</li>
                <li>Click on the Privacy tab.</li>
                <li>Select Advanced.</li>
                <li>Choose the appropriate settings.</li>
              </ul>
            </div>

            <div>
              <strong>For Google Chrome:</strong>
              <ul className={`list-disc list-inside ml-6 mt-2`}>
                <li>Choose Settings and click on Advanced.</li>
                <li>Under Privacy and Security click Content Settings.</li>
                <li>Click Cookies.</li>
              </ul>
            </div>

            <div>
              <strong>For Safari:</strong>
              <ul className={`list-disc list-inside ml-6 mt-2`}>
                <li>Choose Preferences &gt; Privacy.</li>
                <li>Click on Block all cookies.</li>
              </ul>
            </div>

            <div>
              <strong>For Mozilla Firefox:</strong>
              <ul className={`list-disc list-inside ml-6 mt-2`}>
                <li>Click on the menu icon then select Options.</li>
                <li>Click on the icon Privacy & Security.</li>
                <li>Find the menu cookie and select the relevant options.</li>
              </ul>
            </div>

            <div>
              <strong>For Opera 6.0 and further:</strong>
              <ul className={`list-disc list-inside ml-6 mt-2`}>
                <li>Choose the menu icon and select Settings.</li>
                <li>Click on Privacy & Security.</li>
                <li>Choose the appropriate settings.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
