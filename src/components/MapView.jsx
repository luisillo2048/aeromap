import { useEffect } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import airports from '../data/airports'

function MapView() {
    useEffect(() => {
        const map = L.map('aeromap', {
            center: [19.3371, -99.566],
            zoom: 8,
        })

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19,
        }).addTo(map)

        airports.forEach((airport) => {
            L.marker(airport.coordinates)
                .addTo(map)
                .bindPopup(`
      <strong>${airport.name}</strong>
      <br />
      Ciudad: ${airport.city}
      <br />
      IATA: ${airport.iata}
      <br />
      OACI: ${airport.icao}
    `)
        })

        const bounds = L.latLngBounds(
            airports.map((airport) => airport.coordinates)
        )

        map.fitBounds(bounds, {
            padding: [30, 30],
            maxZoom: 10,
        })

        return () => {
            map.remove()
        }
    }, [])

    return <div id="aeromap" />
}

export default MapView