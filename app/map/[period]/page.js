'use client'

import Head from 'next/head';

import Map from '@/components/Map';
import data from '@/public/data/data.json';
import PopupCard from '@/components/PopupCard';
import { icon } from 'leaflet';



export default function PeriodMap({ params }) {
    const artefacts = data?.artefacts.filter((artefact) => artefact.periodTag === params.period);



  return (
    <>
      <Head>
        <title>{artefacts[0].period} Artefacts</title>
        <meta name="description" content="Create mapping apps with Next.js Leaflet Starter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

          <h1 className="sr-only">
            African Timeline
          </h1>

          <Map width="1400" height="1000" center={[0, 15]} zoom={3}>
            {({ TileLayer, Marker, Popup }, Leaflet) => (
              <>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                {artefacts?.map(({ id, name, year, period, location, locationName, description, region, type, imageUrl }) => {
                    
                    const iconUrl = `/images/${type}.png`
                    const iconRetinaUrl = `/images/${type}-2x.png`
             
                    return (
                        <Marker
                        key={id}
                        position={[location.latitude, location.longitude]}
                        icon={Leaflet.icon({
                            iconUrl,
                            iconRetinaUrl,
                            iconSize: [41, 41],
                        })}
                    >
                      <Popup>
                        <PopupCard
                            name={name}
                            locationName={locationName}
                            region={region}
                            description={description}
                            period={period}
                            type={type}
                            year={year}
                            imageUrl={imageUrl}
                        />
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
