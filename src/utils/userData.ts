export const getFirstName = (displayName: string | null) => {
  return displayName?.split(" ")[0] || "";
};

export const createUserData = (
  uid: string,
  email: string,
  name: string,
  phoneNumber: string | null,
  photo: string,
) => {
  return {
    id: uid,
    email,
    name,
    phone: phoneNumber ?? "",
    dateOfBirth: "",
    photo,
  };
};
