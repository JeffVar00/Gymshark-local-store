import React from "react";

const CookiePolicy = () => {
  return (
    <div className="flex flex-col items-center px-4 py-12 lg:px-20 lg:py-16">
      <h1 className="text-4xl font-bold text-center lg:text-6xl">
        COOKIE POLICY
      </h1>
      <div className="flex items-center mt-4 text-gray-500">
        {/* Clock Icon */}
        <p>Last updated: 29 Mar 2021</p>
      </div>
      <div className="max-w-3xl mt-12 space-y-8 text-left text-gray-800">
        <div>
          <h2 className="text-lg font-bold">What are cookies?</h2>
          <p className="mt-4">
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

        <div>
          <h2 className="text-lg font-bold">INFORMATION COLLECTED</h2>
          <p className="mt-4">
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

        <div>
          <h2 className="text-lg font-bold">HOW ARE COOKIES MANAGED?</h2>
          <p className="mt-4">
            The cookies stored on your computer or other device when you access
            our websites are designed by:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>
              Gymshark Limited or on our behalf, and are necessary to enable you
              to make purchases on our websites;
            </li>
            <li>
              third parties who participate with us in marketing programmes; and
            </li>
            <li>third parties who publish web banner advertisements for us.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
