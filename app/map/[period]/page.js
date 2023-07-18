'use client'

import Head from 'next/head';
import useSWR from 'swr';


import Map from '@/components/Map';



const DEFAULT_CENTER = [38.907132, -77.036546]

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function PeriodMap() {
  const { data } = useSWR(
    'https://firebasestorage.googleapis.com/v0/b/santa-tracker-firebase.appspot.com/o/route%2Fsanta_en.json?alt=media&2018b',
    fetcher
  );

  // Uncomment to test Santa's location at 2:34:30 UTC
  // const currentDate = new Date('2022-12-24T23:29:30.115Z');
  const currentDate = new Date(Date.now());
  const currentYear = currentDate.getFullYear();

  const destinations = data?.destinations.map((destination) => {
    const { arrival, departure } = destination;

    const arrivalDate = new Date(arrival);
    const departureDate = new Date(departure);

    arrivalDate.setFullYear(currentYear);
    departureDate.setFullYear(currentYear);

    return {
      ...destination,
      arrival: arrivalDate.getTime(),
      departure:  departureDate.getTime(),
    }
  });

  return (
    <>
      <Head>
        <title>Next.js Leaflet Starter</title>
        <meta name="description" content="Create mapping apps with Next.js Leaflet Starter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

          <h1 className="sr-only">
            Santa Tracker
          </h1>

          <Map width="1400" height="1000" center={[0, 15]} zoom={3}>
            {({ TileLayer, Marker, Popup }, Leaflet) => (
              <>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                {destinations?.map(({ id, arrival, departure, location, city, region }) => {

                  const arrivalDate = new Date(arrival);
                  const arrivalHours = arrivalDate.getHours()
                  const arrivalMinutes = arrivalDate.getMinutes()
                  const arrivalTime = `${arrivalHours}:${arrivalMinutes}`;

                  const departureDate = new Date(departure);
                  const departureHours = departureDate.getHours()
                  const departureMinutes = departureDate.getMinutes()
                  const departureTime = `${departureHours}:${departureMinutes}`;

                  const santaWasHere = currentDate.getTime() - departureDate.getTime() > 0;
                  const santaIsHere = currentDate.getTime() - arrivalDate.getTime() > 0 && !santaWasHere;

                  let iconUrl = '/images/tree-marker-icon.png';
                  let iconRetinaUrl = '/images/tree-marker-icon-2x.png';

                  if ( santaWasHere ) {
                    iconUrl = '/images/gift-marker-icon.png';
                    iconRetinaUrl = '/images/gift-marker-icon-2x.png';
                  }

                  if ( santaIsHere ) {
                    iconUrl = '/images/santa-marker-icon.png';
                    iconRetinaUrl = '/images/santa-marker-icon-2x.png';
                  }

                  let className = '';

                  if ( santaIsHere ) {
                    className = `${className} ${styles.iconSantaIsHere}`;
                  }

                  return (
                    <Marker
                      key={id}
                      position={[location.lat, location.lng]}
                      icon={Leaflet.icon({
                        iconUrl,
                        iconRetinaUrl,
                        iconSize: [41, 41],
                        className
                      })}
                    >
                      <Popup>
                        <strong>Location:</strong> { city }, { region }
                        <br />
                        <strong>Arrival:</strong> { arrivalDate.toDateString() } @ { arrivalTime }
                        <br />
                        <strong>Departure:</strong> { arrivalDate.toDateString() } @ { departureTime }
                      </Popup>
                    </Marker>
                  )
                })}
              </>
            )}
          </Map>
    </>
  )
}
