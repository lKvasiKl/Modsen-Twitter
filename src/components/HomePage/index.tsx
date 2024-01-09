import { NavLinks } from "components/NavLinks";
import { TermsText } from "./TermsText";

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
  Icon,
  Main,
  SignUpButton,
  Subtitle,
  Title,
} from "./styled";

export const HomePage = () => {
  return (
    <HomePageWrapper>
      <Main>
        <Banner {...BANNER_CONFIG} />
        <Form>
          <Icon {...LOGO_ICON_CONFIG} />
          <Title>{TITLE}</Title>
          <Subtitle>{SUBTITLE}</Subtitle>
          <ButtonsWrapper>
            <SignUpButton>
              <Icon {...GOOGLE_ICON_CONFIG} />
              {GOOGLE_SIGNUP_TEXT}
            </SignUpButton>
            <SignUpButton>{EMAIL_SIGNUP_TEXT}</SignUpButton>
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
