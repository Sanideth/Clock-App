import React from "react";

import styled from "styled-components";
import BackgroundImageDay from "../images/bg-image-daytime.jpg";
import BackgroundImageDayTablet from "../images/bg-image-daytime-tablet.jpg";
import BackgroundImageDayMobile from "../images/bg-image-daytime-mobile.jpg";
import BackgroundImageNight from "../images/bg-image-nighttime.jpg";
import BackgroundImageNightTablet from "../images/bg-image-nighttime-tablet.jpg";
import BackgroundImageNightMobile from "../images/bg-image-nighttime-mobile.jpg";
import { ReactComponent as IconRefresh } from "../images/icon-refresh.svg";
import { ReactComponent as IconSun } from "../images/icon-sun.svg";
import { ReactComponent as IconMoon } from "../images/icon-moon.svg";
import { ReactComponent as IconArrowDown } from "../images/icon-arrow-down.svg";
import useAPI from "../components/useAPI";

interface MoreProps {
  more: boolean;
  dayTime?: boolean;
}

interface IQuote {
  author: string;
  authorSlug: string;
  content: string;
  dateAdded: string;
  dateModified: string;
  length: number;
  tags: string[];
  _id: string;
}

interface ITime {
  abbreviation: string;
  client_ip: string;
  datetime: string;
  day_of_week: number;
  day_of_year: number;
  dst: boolean;
  dst_from: number | null;
  dst_offset: number;
  dst_until: number | null;
  raw_offset: number;
  timezone: string;
  unixtime: number;
  utc_datetime: string;
  utc_offset: string;
  week_number: number;
}

interface IIP {
  country_code: string;
  country_name: string;
  city: string;
  postal: number | null;
  latitude: number;
  longitude: number;
  IPv4: string;
  state: string;
}

interface ILocation {
  data: {
    ip: string;
    type: string;
    range_type: {
      type: string;
      description: string;
    };
    connection: {
      asn: number;
      organization: string;
      isp: string;
    };
    location: {
      geonames_id: number;
      latitude: number;
      longitude: number;
      zip: string;
      continent: {
        code: string;
        name: string;
        name_translated: string;
      };
      country: {
        alpha2: string;
        alpha3: string;
        calling_codes: string[];
        currencies: {
          symbol: string;
          name: string;
          symbol_native: string;
          decimal_digits: number;
          rounding: number;
          code: string;
          name_plural: string;
        }[];
        emoji: string;
        ioc: string;
        languages: {
          name: string;
          name_native: string;
        }[];
        name: string;
        name_translated: string;
        timezones: string[];
        is_in_european_union: boolean;
        fips: string;
        geonames_id: string;
        hasc_id: string;
        wikidata_id: string;
      };
      city: {
        fips: string | null;
        alpha2: string | null;
        geonames_id: string;
        hasc_id: string | null;
        wikidata_id: string;
        name: string;
        name_translated: string;
      };
      region: {
        fips: string;
        alpha2: string;
        geonames_id: string | null;
        hasc_id: string;
        wikidata_id: string | null;
        name: string;
        name_translated: string;
      };
    };
    tlds: string[];
    timezone: {
      id: string;
      current_time: string;
      code: string;
      is_daylight_saving: boolean;
      gmt_offset: number;
    };
    security: {
      is_anonymous: null;
      is_bot: null;
      is_known_attacker: null;
      is_proxy: null;
      is_spam: null;
      is_tor: null;
      proxy_type: null;
      threat_score: null;
    };
    domains: {
      count: null;
      domains: [];
    };
  };
}

const IP_URL = "https://geolocation-db.com/json/";
const GEO_API_KEY = "B8dqMCbfdc8Pmg4CiC5BfG7oVaadN3su6oSp0erS";
const GEO_LOCATION_URL = `https://api.ipbase.com/v2/info?apikey=${GEO_API_KEY}&ip=1.1.1.1`;
const QUOTE_URL = "https://api.quotable.io/random";
const TIME_URL = "http://worldtimeapi.org/api/";

const HeroWrapper = styled.div<MoreProps>`
  height: ${(props) => (props.more ? "auto" : "100vh")};
  padding: 5.6rem 16.5rem;

  ${(props) =>
    props.dayTime
      ? `background-image: url(${BackgroundImageDay})`
      : `background-image: url(${BackgroundImageNight})`};

  font-size: 1.8rem;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  color: #fff;
  transition: all 0.5s;

  @media (max-width: 1100px) {
    ${(props) =>
      props.dayTime
        ? `background-image: url(${BackgroundImageDayTablet})`
        : `background-image: url(${BackgroundImageNightTablet})`};

    padding: 5rem 6.5rem;
  }
  @media (max-width: 768px) {
    ${(props) =>
      props.dayTime
        ? `background-image: url(${BackgroundImageDayMobile})`
        : `background-image: url(${BackgroundImageNightMobile})`};

    padding: 3.2rem 2.6rem;
  }

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

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;
const HeroLeft = styled.div`
  width: 54rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 1100px) {
    margin-bottom: 8rem;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const QuoteWrapper = styled.div<MoreProps>`
  display: ${(props) => (props.more ? "none" : "flex")};
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
  margin-left: 1rem;
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

const StyledMoonIcon = styled(IconMoon)`
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

  @media (max-width: 768px) {
    font-size: 13rem;
  }

  @media (max-width: 350px) {
    font-size: 10rem;
  }
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
  margin-left: auto;
  @media (max-width: 1100px) {
    margin-left: 0;
    margin-right: auto;
  }
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

const CTAIcon = styled(IconArrowDown)`
  transform: ${(props: MoreProps) =>
    props.more ? "rotate(180deg)" : "rotate(0deg)"};
  transition: all 0.3s;
`;

const Bottom = styled.div<MoreProps>`
  height: ${(props) => (props.more ? "auto" : "30vh")};
  display: ${(props) => (props.more ? "grid" : "none")};
  background-color: #ddd;
  padding: 7.4rem 16.5rem;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 4.2rem;
  grid-column-gap: 25rem;

  @media (max-width: 1100px) {
    padding: 5rem 6.5rem;
  }

  @media (max-width: 768px) {
    padding: 6rem 2.6rem;
    grid-row-gap: 8.5rem;
  }
`;

const InfoContainer = styled.div`
  @media (max-width: 768px) {
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const InfoHeader = styled.p`
  font-size: 1.5rem;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

const InfoData = styled.p`
  font-size: 5.6rem;
  font-weight: bold;
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

function App() {
  const [more, setMore] = React.useState<boolean>(false);

  const [quote, , setQuote] = useAPI<IQuote>(QUOTE_URL, null);

  const [time] = useAPI<ITime>(`${TIME_URL}ip`, null);

  const [dayTime, setDayTime] = React.useState<boolean>(true);

  const [IP] = useAPI<IIP>(IP_URL, null);

  const [locationData, setUrl] = useAPI<ILocation>(undefined, null);

  React.useEffect(() => {
    if (IP) {
      setUrl(`${GEO_LOCATION_URL}&ip=${IP.IPv4}`);
    }
  });

  React.useEffect(() => {
    if (time) {
      const hours = new Date(time.datetime).getHours();

      if (hours > 6 && hours < 20) {
        setDayTime(true);
      } else {
        setDayTime(false);
      }
    }
  }, [time]);
  const refetchQuote = async () => {
    const res = await fetch(QUOTE_URL);
    if (res.ok) {
      const data: IQuote = await res.json();
      setQuote(data);
    }
  };

  return (
    <>
      <HeroWrapper more={more} dayTime={dayTime}>
        <HeroTop>
          <HeroLeft>
            <QuoteWrapper more={more}>
              <div>
                <p>{quote ? quote.content : "Loading Quote..."}</p>
                <QuoteAuthor>
                  {quote ? quote.author : "Loading Author..."}
                </QuoteAuthor>
              </div>
              <QuoteButton onClick={refetchQuote}>
                <IconRefresh />
              </QuoteButton>
            </QuoteWrapper>
            <TimeWrapper>
              <GreetingWrapper>
                {dayTime ? <StyledSunIcon /> : <StyledMoonIcon />}

                <GreetingText>
                  {dayTime ? "GOOD MORNING" : "GOOD EVENING"}, IT’S CURRENTLY
                </GreetingText>
              </GreetingWrapper>
              <ClockText>
                {time &&
                  new Date(time.datetime).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  })}
                <ClockSpan>{time && time.abbreviation}</ClockSpan>
              </ClockText>
              <LocationText>
                In{" "}
                {locationData &&
                  `${locationData.data.location.city.name}, ${locationData.data.location.country.alpha2}`}
              </LocationText>
            </TimeWrapper>
          </HeroLeft>
          <HeroRight>
            <CTAButton onClick={() => setMore(!more)}>
              {more ? "Less" : "More"}
              <CTAIconContainer>
                <CTAIcon more={more} />
              </CTAIconContainer>
            </CTAButton>
          </HeroRight>
        </HeroTop>
      </HeroWrapper>
      <Bottom more={more}>
        <InfoContainer>
          <InfoHeader>Current Timezone</InfoHeader>
          <InfoData>{time?.timezone}</InfoData>
        </InfoContainer>
        <InfoContainer>
          <InfoHeader>Day of the Week</InfoHeader>
          <InfoData>{time?.day_of_week}</InfoData>
        </InfoContainer>
        <InfoContainer>
          <InfoHeader>Day of the Year</InfoHeader>
          <InfoData>{time?.day_of_year}</InfoData>
        </InfoContainer>
        <InfoContainer>
          <InfoHeader>Week Number</InfoHeader>
          <InfoData>{time?.week_number}</InfoData>
        </InfoContainer>
      </Bottom>
    </>
  );
}

export default App;
