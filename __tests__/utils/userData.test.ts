import {
  createUserData,
  formatPhoneNumber,
  getFirstName,
} from "../../src/utils/userData";

describe("getFirstName function", () => {
  it("should return the first name from a full name", () => {
    const firstName = getFirstName("Test Testovich");
    expect(firstName).toBe("Test");
  });

  it("should return an empty string if display name is null", () => {
    const firstName = getFirstName(null);
    expect(firstName).toBe("");
  });

  it("should return an empty string if display name is an empty string", () => {
    const firstName = getFirstName("");
    expect(firstName).toBe("");
  });
});

describe("formatPhoneNumber function", () => {
  it('should remove the "+" from the beginning of the phone number', () => {
    const formattedNumber = formatPhoneNumber("+375290427813");
    expect(formattedNumber).toBe("375290427813");
  });

  it('should not modify the phone number if it does not start with "+"', () => {
    const formattedNumber = formatPhoneNumber("375290427813");
    expect(formattedNumber).toBe("375290427813");
  });
});

describe("createUserData function", () => {
  it("should create user data with the provided values", () => {
    const uid = "123";
    const email = "test@example.com";
    const name = "Test Testovich";
    const phoneNumber = "+375290427813";
    const photo = "user.jpg";

    const userData = createUserData(uid, email, name, phoneNumber, photo);

    expect(userData).toEqual({
      id: uid,
      email,
      name,
      phone: phoneNumber,
      dateOfBirth: "",
      photo,
    });
  });

  it("should set an empty string for phone number if it is null", () => {
    const uid = "123";
    const email = "test@example.com";
    const name = "John Doe";
    const phoneNumber = null;
    const photo = "user.jpg";

    const userData = createUserData(uid, email, name, phoneNumber, photo);

    expect(userData.phone).toBe("");
  });
});
