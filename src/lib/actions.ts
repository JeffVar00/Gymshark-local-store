"use server";

import { wixClientServer } from "./wixClientServer";

type ContactUpdate = {
  firstName?: string;
  lastName?: string;
  phones?: string[];
};

export const updateUser = async (formData: FormData) => {
  const wixClient = await wixClientServer();

  const id = formData.get("id") as string;
  const username = formData.get("username") as string;
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;

  try {
    const contactUpdate: ContactUpdate = {
      firstName: firstName || undefined,
      lastName: lastName || undefined,
    };

    if (phone && phone.trim()) {
      contactUpdate["phones"] = [phone];
    }

    const response = await wixClient.members.updateMember(id, {
      contact: contactUpdate,
      loginEmail: email || undefined,
      profile: { nickname: username || undefined },
    });

    console.log(response);
  } catch (err) {
    console.log(err);
  }
};