export interface MoreProps {
  more: boolean;
  dayTime?: boolean;
}

export interface IQuote {
  author: string;
  authorSlug: string;
  content: string;
  dateAdded: string;
  dateModified: string;
  length: number;
  tags: string[];
  _id: string;
}

export interface ITime {
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

export interface IIP {
  country_code: string;
  country_name: string;
  city: string;
  postal: number | null;
  latitude: number;
  longitude: number;
  IPv4: string;
  state: string;
}

export interface ILocation {
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
