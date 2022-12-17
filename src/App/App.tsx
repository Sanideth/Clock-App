import React from "react";

import styled from "styled-components";
import BackgroundImageDay from "../images/bg-image-daytime.jpg";
import { ReactComponent as IconRefresh } from "../images/icon-refresh.svg";
import { ReactComponent as IconSun } from "../images/icon-sun.svg";
import { ReactComponent as IconArrowDown } from "../images/icon-arrow-down.svg";

interface MoreProps {
  more: boolean;
}

const HeroWrapper = styled.div<MoreProps>`
  height: ${(props) => (props.more ? "70vh" : "100vh")};
  padding: 5.6rem 16.5rem;
  background-image: url(${BackgroundImageDay});
  font-size: 1.8rem;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  color: #fff;
  transition: all 0.5s;

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;
const HeroTop = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  transition: all 0.5s;
`;
const HeroLeft = styled.div`
  width: 54rem;

  display: flex;
  flex-direction: column;
`;

const QuoteWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

const QuoteAuthor = styled.p`
  font-weight: bold;
  margin-top: 1.3rem;
`;

const QuoteButton = styled.button`
  color: #707070;
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;

const TimeWrapper = styled.div`
  margin-top: auto;
`;
const GreetingWrapper = styled.div`
  display: flex;
`;

const StyledSunIcon = styled(IconSun)`
  margin-right: 1rem;
`;
const GreetingText = styled.p`
  font-size: 2rem;
  letter-spacing: 4px;
`;

const ClockText = styled.p`
  font-size: 20rem;
  font-weight: bold;
  letter-spacing: -6px;
`;

const ClockSpan = styled.span`
  font-weight: 300;
  font-size: 4rem;
`;

const LocationText = styled.p`
  font-weight: bold;
  font-size: 2.4rem;
  text-transform: uppercase;
`;

const HeroRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: auto;
`;

const CTAButton = styled.button`
  background-color: #fff;
  padding: 0.8rem 2rem;
  border-radius: 2.8rem;
  font-size: 1.6rem;
  font-weight: bold;
  font-family: inherit;
  letter-spacing: 5px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  border: 0;
  margin-top: auto;
`;
const CTAIconContainer = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: #303030;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-left: 1.3rem;
`;

const CTAIcon = styled(IconArrowDown)<MoreProps>`
  transform: ${(props) => (props.more ? "rotate(180deg)" : "rotate(0deg)")};
  transition: all 0.3s;
`;

const Bottom = styled.div<MoreProps>`
  height: 30vh;
  display: ${(props) => (props.more ? "grid" : "none")};
  background-color: #ddd;
  padding: 7.4rem 16.5rem;
`;

function App() {
  const [more, setMore] = React.useState<boolean>(false);

  return (
    <>
      <HeroWrapper more={more}>
        <HeroTop>
          <HeroLeft>
            <QuoteWrapper>
              <div>
                <p>
                  “The science of operations, as derived from mathematics more
                  especially, is a science of itself, and has its own abstract
                  truth and value.”
                </p>
                <QuoteAuthor>Ada Lovelace</QuoteAuthor>
              </div>
              <QuoteButton>
                <IconRefresh />
              </QuoteButton>
            </QuoteWrapper>
            <TimeWrapper>
              <GreetingWrapper>
                <StyledSunIcon />
                <GreetingText>GOOD MORNING, IT’S CURRENTLY</GreetingText>
              </GreetingWrapper>
              <ClockText>
                11:37<ClockSpan>BTS</ClockSpan>
              </ClockText>
              <LocationText>In London, UK</LocationText>
            </TimeWrapper>
          </HeroLeft>
          <HeroRight>
            <CTAButton onClick={() => setMore(!more)}>
              {more ? "More" : "Less"}
              <CTAIconContainer>
                <CTAIcon more={more} />
              </CTAIconContainer>
            </CTAButton>
          </HeroRight>
        </HeroTop>
      </HeroWrapper>
      <Bottom more={more}>Bla</Bottom>
    </>
  );
}

export default App;
