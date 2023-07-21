import {
  Hero,
  HeroTitle,
  Herotext,
  LinkWrapper,
  StyledLink,
  Text,
} from './HomePage.styles';

export default function HomePage() {
  return (
    <>
      <Hero>
        <Herotext>
          <HeroTitle>Phone Book</HeroTitle>
          <p>
            With Phone Link, you have the power to create your own personalized
            phone book and access it across all your devices.
          </p>
          <p>
            Sharing Made Simple: Share your phone book with family, friends, or
            colleagues effortlessly.
          </p>
          <Text>Start now!</Text>
          <LinkWrapper>
            <StyledLink to="/register">Registration</StyledLink>
            <StyledLink to="/login">Log in</StyledLink>
          </LinkWrapper>
        </Herotext>
      </Hero>
    </>
  );
}
