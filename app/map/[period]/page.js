'use client'

import Head from 'next/head'
import Map from '@/components/Map'
import data from '@/public/data/data.json'
import PopupCard from '@/components/PopupCard'
import Link from 'next/link'
import ErrorPage from 'next/error'



export default function PeriodMap({ params }) {
    const artefacts = data?.artefacts.filter((artefact) => artefact.periodTag === params.period)

    if (!artefacts) {
        return <ErrorPage statusCode={404} />
    }

    return (
        <>
            <Head>
                <title>{artefacts[0].period} Artefacts</title>
                <meta name="description" content="Visualing African artefacts" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

                <h1 className="sr-only">
                    African Timeline
                </h1>

                <Link href="/">
                    <button type="button" className="sm:mb-5 md:mb-4 ml-4 mt-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Back to Timeline</button>
                </Link>

                <h1 className="flex flex-col items-center text-4xl font-extrabold">
                    {artefacts[0].period} Artefacts
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
