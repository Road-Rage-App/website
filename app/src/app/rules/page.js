const ruleSections = [
  {
    id: "before-you-roll",
    label: "Before You Roll",
    kicker: "1",
    title: "Before You Roll",
    description:
      "Each round starts with a quick setup so everyone knows the route, the risk, and the objective. Set the board, assign teams, and confirm who is taking the lead.",
    points: [
      "Choose your team colors and establish a clear starting city.",
      "Review the route, city cards, and challenge deck before the first turn.",
      "Make sure each player understands the coin cap, turn order, and win condition.",
    ],
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    caption: "Every team should know the route before the first move.",
  },
  {
    id: "team-play",
    label: "Team Play",
    kicker: "2",
    title: "Team Play",
    description:
      "Road Rage rewards teamwork as much as speed. Communicate openly, assign roles, and keep each other moving toward your objectives.",
    points: [
      "One player can manage route decisions while another tracks coin flow.",
      "If your team is chasing a city, split effort between offense and defense.",
      "Share information about road hazards, city bonuses, and open routes.",
    ],
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
    caption: "Strong teams rotate strategy, timing, and risk awareness.",
  },
  {
    id: "road-challenges",
    label: "Road Challenges",
    kicker: "3",
    title: "Road Challenges",
    description:
      "The road is where strategy becomes chaos. Completing a road challenge can steady your coin supply, add fuel to your momentum, or stop a rival cold.",
    points: [
      "Draw and complete road challenges whenever you travel between cities.",
      "Use challenge rewards to protect your team from a coin crash.",
      "Time your challenge attempts when your route is safe and your rivals are distracted.",
    ],
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    caption: "The open road always brings a chance to pivot or get punished.",
  },
  {
    id: "scoring",
    label: "Scoring",
    kicker: "4",
    title: "Scoring & Victory",
    description:
      "Cities, challenge bonuses, and coin management all feed the score. The first team to build a sustainable lead usually wins the day.",
    points: [
      "Claiming cities gives your team a strong points foundation.",
      "Successful road challenges can add bonus points and keep your coin line healthy.",
      "The round ends when the final objective is met or the last available cities are claimed.",
    ],
    image:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80",
    caption: "Points are earned by staying efficient, not by racing blindly.",
  },
  {
    id: "sportsmanship",
    label: "Sportsmanship",
    kicker: "5",
    title: "Sportsmanship",
    description:
      "The game is competitive, but respectful play keeps every round fun. Be bold, be fair, and handle setbacks like a team that wants to play again.",
    points: [
      "Call out your moves clearly and keep turn timing reasonable for everyone.",
      "Respect the rules, challenge outcomes, and all players at the table.",
      "Win graciously, lose gracefully, and celebrate the best strategies.",
    ],
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80",
    caption: "A good road trip leaves everyone ready for the next round.",
  },
];

export default function RulesPage() {
  return (
    <main className="rules-page">
      <header className="rules-hero">
        <p className="eyebrow">Official Rules</p>
        <h1>Road Rage Rules</h1>
        <p className="lead">
          Everything you need to know to play fair, win smart, and keep the
          competition moving.
        </p>
        <div className="cta-row">
          <a className="btn btn-primary" href="#before-you-roll">
            Jump to Rules
          </a>
          <a className="btn btn-secondary" href="/">
            Back Home
          </a>
        </div>
      </header>

      <nav className="rules-nav" aria-label="Rules sections">
        {ruleSections.map((section) => (
          <a key={section.id} href={`#${section.id}`}>
            {section.label}
          </a>
        ))}
      </nav>

      <div className="rules-layout">
        <aside className="rules-sidebar">
          <div className="rules-card">
            <h2>Quick Reference</h2>
            <ol>
              {ruleSections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.title}</a>
                </li>
              ))}
            </ol>
          </div>
        </aside>

        <div className="rules-content">
          {ruleSections.map((section) => (
            <section key={section.id} id={section.id} className="rule-section">
              <div className="rule-copy">
                <p className="rule-kicker">Section {section.kicker}</p>
                <h2>{section.title}</h2>
                <p>{section.description}</p>
                <ul>
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>

              <figure className="rule-media">
                <img src={section.image} alt={section.caption} />
                <figcaption>{section.caption}</figcaption>
              </figure>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
