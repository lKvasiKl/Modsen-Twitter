import { User } from "types/index";
import USER_DATA from "../fixtures/auth-data.json";

const EMAIL_ALREDY_IN_USE_ERROR = "Email is already in use!";
const PHONE_ALREDY_IN_USE_ERROR = "Phone is already in use!";
const {
  name,
  email,
  adminEmail,
  phone,
  adminPhone,
  password,
  confirmPassword,
  birthdayMonth,
  birthdayDay,
  birthdayYear,
} = USER_DATA;

describe("Registration form check", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('[data-cy="signUpLink"]').click();
    cy.get('[data-cy="button"]').should("be.disabled");
  });

  it("should not allow to register if the form has errors", () => {
    cy.get('[name="name"]').type("*");
    cy.get('[name="email"]').type("*");
    cy.get('[name="phone"]').type("*");
    cy.get('[name="password"]').type("*");
    cy.get('[name="confirmPassword"]').type("**");

    cy.get('[data-cy="button"]').should("be.disabled");
  });

  it("should register, authorize and user", () => {
    cy.get('[name="name"]').type(name);
    cy.get('[name="email"]').type(email);
    cy.get('[name="phone"]').type(phone);
    cy.get('[name="password"]').type(password);
    cy.get('[name="confirmPassword"]').type(confirmPassword);

    cy.get('[name="birthdayMonth"]').select(birthdayMonth);
    cy.get('[name="birthdayDay"]').select(birthdayDay);
    cy.get('[name="birthdayYear"]').select(birthdayYear);

    cy.get('[data-cy="button"]').should("not.be.disabled");

    cy.get("form").submit();
    cy.wait(3000);

    cy.getUserByEmail("test.testovich@example.com").then(
      (userAfterRegistration: User) => {
        expect(userAfterRegistration).to.exist;
        cy.location("pathname").should(
          "eq",
          `/profile/${userAfterRegistration.id}`,
        );
      },
    );

    cy.deleteTestUser("test.testovich@example.com");
  });

  it("should notify the user with this email already exist", () => {
    cy.get('[name="name"]').type(name);
    cy.get('[name="email"]').type(adminEmail);
    cy.get('[name="phone"]').type(phone);
    cy.get('[name="password"]').type(password);
    cy.get('[name="confirmPassword"]').type(confirmPassword);

    cy.get('[name="birthdayMonth"]').select(birthdayMonth);
    cy.get('[name="birthdayDay"]').select(birthdayDay);
    cy.get('[name="birthdayYear"]').select(birthdayYear);

    cy.get('[data-cy="button"]').should("not.be.disabled");
    cy.get("form").submit();

    cy.contains('[data-cy="notification"]', EMAIL_ALREDY_IN_USE_ERROR).should(
      "be.visible",
    );
  });

  it("should notify the user with this phone already exist", () => {
    cy.get('[name="name"]').type(name);
    cy.get('[name="email"]').type(email);
    cy.get('[name="phone"]').type(adminPhone);
    cy.get('[name="password"]').type(password);
    cy.get('[name="confirmPassword"]').type(confirmPassword);

    cy.get('[name="birthdayMonth"]').select(birthdayMonth);
    cy.get('[name="birthdayDay"]').select(birthdayDay);
    cy.get('[name="birthdayYear"]').select(birthdayYear);

    cy.get('[data-cy="button"]').should("not.be.disabled");
    cy.get("form").submit();

    cy.contains('[data-cy="notification"]', PHONE_ALREDY_IN_USE_ERROR).should(
      "be.visible",
    );
  });
});
