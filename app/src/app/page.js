import Link from "next/link";

export default function Home() {
  return (
    <main className="site-shell">
      <section className="hero-grid">
        <div>
          <p className="eyebrow">Team Road Trip Strategy Game</p>
          <h1>Road Rage: The Game</h1>
          <p className="lead">
            Gather your crew, claim nearby cities, and race for points before
            your coins run dry.
          </p>
          <div className="cta-row">
            <a
              className="btn btn-primary"
              href="https://example.com/download"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download The App
            </a>
            <a className="btn btn-secondary" href="#how-it-works">
              How It Works
            </a>
            <Link className="btn btn-secondary" href="/rules">
              Rules
            </Link>
          </div>
          <p className="tiny-note">
            Replace the download URL with your iOS/App Store or Android/Play
            Store link.
          </p>
        </div>

        <aside className="stat-card">
          <h2>Win Condition</h2>
          <p>
            The team with the most points from city challenges and road
            challenges takes the crown.
          </p>
          <ul>
            <li>Cities conquered</li>
            <li>Road challenges completed</li>
            <li>Coins managed mile by mile</li>
          </ul>
        </aside>
      </section>

      <section id="how-it-works" className="content-grid">
        <article>
          <h3>1. Build Your Team</h3>
          <p>
            Split into teams, choose your route, and map out the cities you want
            to claim first.
          </p>
        </article>
        <article>
          <h3>2. Complete City Challenges</h3>
          <p>
            Every city has objectives that reward points. The faster and smarter
            your team moves, the better your lead.
          </p>
        </article>
        <article>
          <h3>3. Keep Coins Alive</h3>
          <p>
            Every mile costs coins. Stay in the game by completing road
            challenges while traveling.
          </p>
        </article>
        <article>
          <h3>4. Defend Your Territory</h3>
          <p>
            If two teams chase the same city, duels decide who owns it and who
            walks away empty.
          </p>
        </article>
      </section>

      <section className="highlight-banner">
        <p>
          Strategy matters. Speed matters. Coin management matters. Road Rage
          blends all three into one wild road trip showdown.
        </p>
      </section>
    </main>
  );
}
