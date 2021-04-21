import { useQuery, gql, DocumentNode } from "@apollo/client";

const EXCHANGE_RATES: DocumentNode = gql`
  {
    launches(limit: 5) {
      launch_date_utc
      launch_success
      rocket {
        rocket_name
      }
      links {
        video_link
      }
      details
    }
  }
`;

type TDataLauchesProps = {
  index: number;
  launch_date_utc?: Date;
  launch_success?: string;
  rocket?: any;
  links?: any;
  details?: string;
};

function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.launches.map(
    ({
      index,
      launch_date_utc,
      launch_success,
      rocket,
      links,
      details,
    }: TDataLauchesProps) => (
      <div key={index}>
        <p>{launch_date_utc}</p>
        <p>{launch_success}</p>
        <p>{rocket.rocket_name}</p>
        <p>{links.video_link}</p>
        <p>{details}</p>
      </div>
    )
  );
}

export default ExchangeRates;
