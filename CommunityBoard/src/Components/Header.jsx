import "./Header.css";

const Header = () => {
    return (
        <header className="cb-header">
            <div className="cb-header-inner">
                <div className="cb-brand">
                    <img src="/fcbarca.png" alt="FC Barcelona crest" className="cb-logo" />

                    <div>
                        <h1 className="cb-title">FC Barcelona — Upcoming Fixtures</h1>
                        <p className="cb-tagline">
                            Stay up to date with all upcoming matches and kickoff times.
                        </p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header