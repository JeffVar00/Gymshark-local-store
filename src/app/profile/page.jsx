import UpdateButton from "@/components/form_components/UpdateButton";
import { updateUser } from "@/lib/actions";
import { wixClientServer } from "@/lib/wixClientServer";
import { members } from "@wix/members";
import Link from "next/link";

const ProfilePage = async () => {
  const wixClient = await wixClientServer();
  let user;
  try {
    user = await wixClient.members.getCurrentMember({
      fieldsets: [members.Set.FULL],
    });
  } catch (error) {
    return (
      <div className="relative h-screen flex flex-col items-center justify-center lg:mt-12 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/banner2.avif')",
            filter: "blur(1px)",
            zIndex: -10,
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Optional overlay for better text readability */}
        <div className="relative flex flex-col items-center h-full justify-center gap-3 mb-20">
          <h2 className="font-bold text-2xl uppercase text-websecundary mb-12">
            You are not logged In
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col items-center justify-center">
              <h2 className="font-bold uppercase text-websecundary">
                Already a user?
              </h2>
              <Link href="/login">
                <button className="text-sm mt-2 w-60 font-bold rounded-full flex items-center justify-center p-3 bg-websecundary text-webprimary uppercase">
                  Sign In
                </button>
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h2 className="font-bold uppercase text-websecundary">
                Not an account?
              </h2>
              <Link href="/login?mode=signUp">
                <button className="text-sm mt-2 w-60 font-bold rounded-full flex items-center justify-center p-3 bg-websecundary text-webprimary uppercase">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center gap-24 mt-12 h-screen  md:h-[calc(100vh-60px)] items-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className="w-full ">
        <div className="flex flex-col md:flex-row items-start md:justify-between md:items-center">
          <h1 className="text-2xl font-bold ">Your Profile Information</h1>
          <div className="flex justify-end mt-4 md:mt-0">
            <Link
              href="/profile/orders"
              className="text-webprimary font-bold hover:underline"
            >
              Go to your orders {"->"}
            </Link>
          </div>
        </div>

        <form action={updateUser} className="mt-12 flex flex-col gap-4">
          <input
            type="text"
            hidden
            readOnly={true}
            name="id"
            value={user.member.contactId}
          />
          <label className="text-sm text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            placeholder={user.member?.profile?.nickname || ""}
            className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
          />
          <label className="text-sm text-gray-700 font-bold">First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder={user.member?.contact?.firstName || ""}
            className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
          />
          <label className="text-sm text-gray-700 font-bold">Surname</label>
          <input
            type="text"
            name="lastName"
            placeholder={user.member?.contact?.lastName || ""}
            className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
          />
          <label className="text-sm text-gray-700 font-bold">Phone</label>
          <input
            type="text"
            name="phone"
            placeholder={
              (user.member?.contact?.phones &&
                user.member?.contact?.phones[0]) ||
              ""
            }
            className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
          />
          <label className="text-sm text-gray-700 font-bold">E-mail</label>
          <input
            type="email"
            name="email"
            placeholder={user.member?.loginEmail || "john@gmail.com"}
            className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
          />
          <UpdateButton />
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
