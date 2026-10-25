import MapView from './components/MapView'
import './App.css'

function App() {
    return (
        <main>
            <header>
                <h1>AeroMap ✈️</h1>
                <p>Explora el mundo de la aviación.</p>
            </header>

            <section>
                <h2>Explora aeropuertos</h2>
                <p>
                    Descubre aeropuertos, conoce sus ubicaciones
                    y explora el mundo desde un mapa interactivo.
                </p>

                <div className="map-container">
                    <MapView />
                </div>
            </section>
        </main>
    )
}

export default App