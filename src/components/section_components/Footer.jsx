import ListToBottomList from "@/components/menu_components/ListToBottomList";
import Contact from "@/components/section_components/Contact";
import { wixClientServer } from "@/lib/wixClientServer";

const Footer = async () => {
  const wixClient = await wixClientServer();
  const isLoggedIn = wixClient.auth.loggedIn();

  return (
    <footer className="bg-websecundary text-webprimary">
      <div className="px-4 lg:px-16 lg:py-8 border-t-2 border-b-2">
        <div className="flex flex-col lg:flex-row justify-between lg:gap-6 xl:gap-8">
          <div className="flex flex-col lg:flex-row justify-start lg:gap-4">
            <ListToBottomList
              title={"SHOP"}
              references={[
                { id: 1, title: "Shop Central", link: "/" },
                {
                  id: 2,
                  title: "All Products",
                  link: "/collections?cat=all-products",
                },
                {
                  id: 3,
                  title: "Featured",
                  link: "/collections?cat=featured",
                },
                {
                  id: 4,
                  title: "Home",
                  link: "/collections?cat=home",
                },
                {
                  id: 5,
                  title: "Clothes",
                  link: "/collections?cat=clothes",
                },
              ]}
            />
            <ListToBottomList
              title={"HELP"}
              references={[
                {
                  id: 1,
                  title: "Terms and Conditions",
                  link: "/pages/terms-and-conditions",
                },
                { id: 2, title: "Terms of use", link: "/pages/terms-of-use" },

                {
                  id: 3,
                  title: "Cookies Policy",
                  link: "/pages/cookie-policy",
                },
              ]}
            />
            <ListToBottomList
              title={"Company"}
              references={[
                { id: 1, title: "Contact Us", link: "/pages/contact-us" },
                { id: 2, title: "About Us", link: "/pages/about-us" },
              ]}
            />
            <ListToBottomList
              title={"My Account"}
              references={
                !isLoggedIn
                  ? [
                      { id: 1, title: "Login", link: "/login" },
                      { id: 2, title: "Register", link: "/login?mode=signUp" },
                    ]
                  : [{ id: 1, title: "My Profile", link: "/profile" }]
              }
            />
          </div>
          <div className="hidden lg:flex ">
            <Contact />
          </div>
        </div>
        <div className="flex flex-col gap-5 md:gap-2 items-center md:items-end md:flex-row md:justify-between my-8 lg:my-0 mx-2">
          <div className="flex lg:hidden">
            <Contact />
          </div>
          <div className="flex flex-col gap-2 lg:hidden items-center md:items-end text-sm text-gray-500 font-semibold">
            <div className="flex flex-row">
              <span className="hidden md:flex font-bold mr-4">Language</span>
              <span className="">United States | English</span>
            </div>
            <div className="flex flex-row">
              <span className="hidden md:flex font-bold mr-4">Currency</span>
              <span className="">₡ CRC</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-start md:justify-between items-center py-4 px-6 text-center">
        <p className="text-xs  xl:text-sm  font-semibold text-gray-500 ">
          © 2024 Gymshark Limited | All Rights Reserved. | We Do Gym.
        </p>
        <div className="hidden lg:flex justify-center space-x-4 text-xs xl:text-sm font-semibold text-gray-500">
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="">
              <span className="font-bold mr-4">Language</span>
              <span className="font-medium">United States | English</span>
            </div>
            <div className="">
              <span className="font-bold mr-4">Currency</span>
              <span className="font-medium">₡ CRC</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
