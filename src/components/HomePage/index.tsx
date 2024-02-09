import { NavLinks } from "components/NavLinks";
import { ROUTES } from "constants/routes";
import { Icon } from "constants/styles/global";
import { useAppDispatch } from "hooks/useStore";
import { signUpWithGoogleThunk } from "store/thunks/auth";
import { TermsText } from "./TermsText";
import { ClickEvent } from "types";

import {
  BANNER_CONFIG,
  EMAIL_SIGNUP_TEXT,
  GOOGLE_ICON_CONFIG,
  GOOGLE_SIGNUP_TEXT,
  LOGO_ICON_CONFIG,
  SUBTITLE,
  TITLE,
} from "./config";

import {
  Banner,
  ButtonsWrapper,
  Footer,
  Form,
  HomePageWrapper,
  Main,
  SignUpButton,
  SignUpLinkButton,
  Subtitle,
  Title,
} from "./styled";

const { sign_up } = ROUTES;

export const HomePage = () => {
  const dispatch = useAppDispatch();

  const handleGoogleSignUp = async (event: ClickEvent) => {
    event.preventDefault();

    dispatch(signUpWithGoogleThunk());
  };

  return (
    <HomePageWrapper>
      <Main>
        <Banner {...BANNER_CONFIG} />
        <Form>
          <Icon {...LOGO_ICON_CONFIG} />
          <Title>{TITLE}</Title>
          <Subtitle>{SUBTITLE}</Subtitle>
          <ButtonsWrapper>
            <SignUpButton onClick={handleGoogleSignUp}>
              <Icon {...GOOGLE_ICON_CONFIG} />
              {GOOGLE_SIGNUP_TEXT}
            </SignUpButton>
            <SignUpLinkButton to={sign_up}>
              {EMAIL_SIGNUP_TEXT}
            </SignUpLinkButton>
          </ButtonsWrapper>
          <TermsText />
        </Form>
      </Main>
      <Footer>
        <NavLinks />
      </Footer>
    </HomePageWrapper>
  );
};
