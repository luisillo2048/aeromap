import MapView from './components/MapView'
import aircraft from './data/aircraft'
import './App.css'

function App() {
    return (
        <main>
            <header className="topbar">
                <a className="brand" href="/">
                    <span className="brand-mark">✦</span>
                    <span>AEROMAP</span>
                </a>
                <nav aria-label="Navegación principal">
                    <a href="#aeropuertos">Aeropuertos</a>
                    <a href="#aviones">Aviones</a>
                    <span className="status-pill"><i /> radar online</span>
                </nav>
            </header>

            <section className="hero">
                <div className="hero-copy">
                    <p className="eyebrow">FLIGHT DATA / 001</p>
                    <h1>El mundo visto<br /><em>desde arriba.</em></h1>
                    <p className="hero-text">
                        Una carta de navegación para quienes miran al cielo.
                        Explora aeropuertos, rutas y las máquinas que hacen
                        posible volar.
                    </p>
                    <a className="hero-cta" href="#aeropuertos">
                        <span>Explorar el mapa</span>
                        <strong>↘</strong>
                    </a>
                </div>
                <div className="hero-orbit" aria-hidden="true">
                    <div className="orbit orbit-one" />
                    <div className="orbit orbit-two" />
                    <div className="radar-dot dot-one" />
                    <div className="radar-dot dot-two" />
                    <span className="hero-coordinate">19.3371° N<br />99.5660° W</span>
                    <span className="hero-label">MX / MEX</span>
                    <div className="plane-silhouette">✈</div>
                </div>
                <div className="hero-stat">
                    <span className="stat-number">03</span>
                    <span>aeropuertos<br />en radar</span>
                </div>
            </section>

            <section className="map-section" id="aeropuertos">
                <div className="section-heading">
                    <div>
                        <p className="eyebrow">LIVE RADAR / MEXICO</p>
                        <h2>Explora aeropuertos</h2>
                    </div>
                    <p className="section-intro">
                        Puntos de conexión, historias de despegue y coordenadas
                        para alimentar tu curiosidad.
                    </p>
                </div>

                <div className="map-container">
                    <MapView />
                </div>
            </section>

            <section className="aircraft-section" id="aviones">
                <div className="section-heading">
                    <div>
                        <p className="eyebrow">FLEET INDEX / SOON</p>
                        <h2>Explorar aviones comerciales</h2>
                    </div>
                    <span className="coming-soon">PRÓXIMAMENTE ↗</span>
                </div>
                <p className="section-intro aircraft-intro">
                    Una colección de máquinas, especificaciones y datos para
                    reconocer cada silueta en el cielo. La API de aviones
                    llegará en una próxima misión.
                </p>
                <div className="aircraft-grid">
                    {aircraft.map((plane) => (
                        <article className="aircraft-card" key={plane.model}>
                            <div className="card-topline">
                                <span>{plane.type}</span>
                                <span>#{plane.number}</span>
                            </div>
                            <div className="aircraft-icon" aria-hidden="true">{plane.icon}</div>
                            <h3>{plane.model}</h3>
                            <p className="aircraft-maker">{plane.manufacturer}</p>
                            <div className="card-stats">
                                <span><b>RANGO</b>{plane.range}</span>
                                <span><b>CAPACIDAD</b>{plane.capacity}</span>
                            </div>
                            <div className="card-footer">FICHA EN CONSTRUCCIÓN <span>✦</span></div>
                        </article>
                    ))}
                </div>
            </section>

            <footer>
                <span>AEROMAP <i>✦</i> FLIGHT DATA FOR CURIOUS MINDS</span>
                <span>BUILT FOR THE AVGEeks</span>
            </footer>
        </main>
    )
}

export default App