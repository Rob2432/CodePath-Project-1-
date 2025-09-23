import "./Fixtures.css";

function FixtureCard({ fixture }) {
    return (
        <article
            className="fixture-card"
            aria-label={`Fixture: Barcelona vs ${fixture.opponent} on ${fixture.date}`}
        >
            <img
                src="https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg"
                alt="FC Barcelona Logo"
                className="fixture-logo"
            />

            <h3 className="fixture-opponent">{fixture.opponent}</h3>

            <div className="fixture-meta">
        <span className="fixture-competition">
          {fixture.competition === "LaLiga" && "⚽"}
            {fixture.competition === "Champions League" && "🏆"}
            {fixture.competition === "Copa del Rey" && "🏅"}
            {fixture.competition === "Friendly" && "🤝"}
            {fixture.competition}
        </span>
                {" | "}
                <span className="fixture-date-time">
          <time dateTime={fixture.date}>{fixture.date}</time> | <span>{fixture.time}</span>
        </span>
            </div>

            <p className="fixture-location">
                {fixture.location.includes("(Away)") ? "✈️ " : "🏟️ "}
                {fixture.location.replace(" (Away)", "")}
            </p>

            {fixture.description && (
                <p className="fixture-description">{fixture.description}</p>
            )}

            {fixture.link && (
                <a
                    href={fixture.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixture-link"
                >
                    Match Details
                </a>
            )}
        </article>
    );
}



function Fixtures() {
    const fixtures = [
        {
            id: 1,
            opponent: "Real Madrid",
            date: "05-11-2025",
            time: "8:00 PM",
            competition: "LaLiga",
            location: "Camp Nou",
            description: "Clásico: a must-watch league clash at home.",
            link: "https://www.goal.com/en-us/match/barcelona-vs-real-madrid/SCcrzPE322ag4iSn5VgMc"
        },
        {
            id: 2,
            opponent: "Bayern Munich",
            date: "10-23-2024",
            time: "7:45 PM",
            competition: "Champions League",
            location: "Allianz Arena (Away)",
            description: "Group stage showdown in Munich.",
            link: "https://www.espn.com/soccer/match/_/gameId/720372/bayern-munich-barcelona"
        },
        {
            id: 3,
            opponent: "Atletico Madrid",
            date: "03-16-2025",
            time: "5:00 PM",
            competition: "LaLiga",
            location: "Wanda Metropolitano (Away)",
            description: "Tactical battle expected in the capital.",
            link: "https://www.espn.com/soccer/match/_/gameId/704930/barcelona-atletico-madrid"
        },
        {
            id: 4,
            opponent: "Juventus",
            date: "07-26-2025",
            time: "8:00 PM",
            competition: "Friendly",
            location: "Camp Nou",
            description: "High-profile friendly to test the squad.",
            link: "https://www.espn.com/soccer/report/_/gameId/615816"
        },
        {
            id: 5,
            opponent: "Valencia",
            date: "09-14-2025",
            time: "4:00 PM",
            competition: "Copa del Rey",
            location: "Camp Nou",
            description: "Cup tie — knockout football.",
            link: "https://www.espn.com/soccer/match/_/gameId/748180/valencia-barcelona"
        },
        {
            id: 6,
            opponent: "Sevilla",
            date: "02-09-2025",
            time: "6:00 PM",
            competition: "LaLiga",
            location: "Camp Nou",
            description: "Late autumn home fixture.",
            link: "https://www.espn.com/soccer/match/_/gameId/704888/barcelona-sevilla"
        },
        {
            id: 7,
            opponent: "Manchester City",
            date: "07-30-2025",
            time: "8:15 PM",
            competition: "Champions League",
            location: "Camp Nou",
            description: "Big European night at home.",
            link: "https://www.espn.com/soccer/match/_/gameId/701275/manchester-city-barcelona"
        },
        {
            id: 8,
            opponent: "Real Sociedad",
            date: "03-02-2025",
            time: "3:30 PM",
            competition: "LaLiga",
            location: "Anoeta (Away)",
            description: "Tough away test in San Sebastián.",
            link: "https://www.espn.com/soccer/match/_/gameId/704911/real-sociedad-barcelona"
        },
        {
            id: 9,
            opponent: "PSG",
            date: "08-01-2025",
            time: "8:00 PM",
            competition: "Friendly",
            location: "Neutral Venue",
            description: "Winter friendly at a neutral ground.",
            link: "https://www.google.com/search?client=safari&rls=en&q=psg+vs+barcelona&ie=UTF-8&oe=UTF-8#sie=m;/g/11yjng3mcv;2;/m/0c1q0;dt;fp;1;;;"
        },
        {
            id: 10,
            opponent: "Girona",
            date: "03-21-2025",
            time: "7:00 PM",
            competition: "LaLiga",
            location: "Montilivi (Away)",
            description: "Regional derby; expect intensity.",
            link: "https://www.espn.com/soccer/match/_/gameId/704942/girona-barcelona"
        }


    ];

    return (
        <section className="fixtures">
            {fixtures.map(fixture => (
                <FixtureCard key={fixture.id} fixture={fixture} />
            ))}
        </section>
    );
}


export default Fixtures;


