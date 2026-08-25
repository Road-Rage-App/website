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
        <a href="#objective">Objective</a>
        <a href="#city-challenges">City Challenges</a>
        <a href="#road-challenges">Road Challenges</a>
        <a href="#regions-and-duels">Regions & Duels</a>
        <a href="#rest-and-safety">Rest Period & Safety</a>
        <a href="#powerups">Powerups</a>
      </nav>

      <div className="rules-layout">
        <aside className="rules-sidebar">
          <div className="rules-card">
            <h2>Quick Reference</h2>
            <ol>
              <li>
                <a href="#objective">Objective</a>
              </li>
              <li>
                <a href="#city-challenges">City Challenges</a>
              </li>
              <li>
                <a href="#road-challenges">Road Challenges</a>
              </li>
              <li>
                <a href="#regions-and-duels">Regions & Duels</a>
              </li>
              <li>
                <a href="#rest-and-safety">Rest Period & Safety</a>
              </li>
              <li>
                <a href="#powerups">Powerups</a>
              </li>
            </ol>
          </div>
        </aside>

        {/* <div className="rules-content">
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
        </div> */}
        <div className="rules-content">
          <section id="objective" className="rule-section">
            <div className="rule-copy">
              <p className="rule-kicker">Section 1</p>
              <h2>Objective</h2>
              <p>
                Starting at 7am on Saturday September 5th, you and your team
                have until 8pm on Monday September 7th to travel from city to
                city as you complete challenges to earn points.{" "}
              </p>
              <ul>
                <li>
                  There are approximately <b>120 claimable cities</b> on the
                  map, each with a point value from 1 to 5.
                </li>
                <li>
                  Teams claim cities by driving into the city bounds and
                  completing a <b>city challenge</b>.
                </li>
                <li>
                  Trips are funded by completing <b>road challenges</b>, which
                  earn you points. Each mile you drive costs one coin.
                </li>
                <li>
                  The team who makes it back with the most number of points at
                  the end of the game will be crowned winner and will receive
                  undying glory and honor.
                </li>
              </ul>
            </div>
          </section>
          <section id="city-challenges" className="rule-section">
            <div className="rule-copy">
              <p className="rule-kicker">Section 2</p>
              <h2>City Challenges</h2>
              <p>
                Teams must enter the radius of a city to be considered{" "}
                <i>in the city</i>. While your current location might show you
                are in a city, there will be a message that states "not in city
                bounds" until you are within the radius of the city. City radii
                can be found from the game map screen, and you will receive a
                notification once you have entered the city.
              </p>
              <p>
                Once you are in the city bounds, your team may choose to
                complete <b>either</b> a <b>city specific challenge</b> or a{" "}
                <b>general city challenge</b>.
              </p>
              <ul>
                <li>
                  City specific challenges are unique to each city on the map,
                  and they can be viewed by pressing the down icon in the city
                  card on the game screen. These challenges are always
                  repeatable, although some might include a short penalty for
                  failure. These challenges are roughly scaled in difficulty to
                  the point value of the city.
                </li>
                <li>
                  Some city specific challenges require teams to travel to a
                  location <i>outside</i> the city's radius on the map. In this
                  case, teams are not required to enter the city bounds before
                  attempting the challenge, but they must travel within city
                  bounds upon completing the challenge in order to claim the
                  city.
                </li>
                <li>
                  In place of attempting a city speicific challenge, teams have
                  the option to draw a random <i>general city challenge</i>.
                  These challenges <b>are</b> able to be failed and therefore
                  include a time limit or a number of possible attempts.
                </li>
                <li>
                  For timed general city challenges, a timer will appear on the
                  game screen. This timer starts at the moment the challenge is
                  drawn and will continue to count down even if the team leaves
                  the city bounds. If the timer reaches zero, the challenge will
                  be considered failed. If any other challenge is timed but
                  there is not timer, you are responsible for timing yourself.
                </li>
                <li>
                  Upon successfully completing either the{" "}
                  <b>city specific challenge</b> or the{" "}
                  <b>general city challenge</b>, teams claim the city and earn
                  the appropriate number of <b>victory points</b>. Teams are
                  always permitted to attempt the city specific challenge and
                  are permitted to give up and draw a general city challenge at
                  any point. If, however, a team fails a <b>general</b> city
                  challenge, you must wait 30 minutes before drawing a new
                  challenge or attempting the city specific challenge.
                </li>
              </ul>
            </div>
          </section>
          <section id="road-challenges" className="rule-section">
            <div className="rule-copy">
              <p className="rule-kicker">Section 3</p>
              <h2>Road Challenges and Travel Coins</h2>
              <p>
                Teams begin the game with 250 <i>travel coins</i>. Each mile
                during the game costs 1 travel coin. Teams are required to keep
                track of their own mileage, typically by using the odometer of
                their car. Teams may also choose to spend their travel coins to
                purchase <a href="#powerups">powerups</a>
              </p>
              <p>
                Each team is randomly assigned 4 road challenges at the start of
                the game which carry their own reward. Road challenges may be
                completed anywhere at any point during the trip. Upon successful
                completion, the team earns the specified travel coin reward, and
                a new challenge is drawn for the team to complete.
              </p>
              <p>
                The first team to enter a state has the option to claim a
                welcome bonus for that state of 75 coins. Only one welcome bonus
                may be claimed per state, and welcome bonuses may be claimed for
                states that do not have challenges.
              </p>
            </div>
          </section>
          <section id="regions-and-duels" className="rule-section">
            <div className="rule-copy">
              <p className="rule-kicker">Section 4</p>
              <h2>Regions and Duels</h2>
              <p>
                Each claimable city lies within one of 8 regions spread
                throughout the game board. The first team to claim 3 cities
                within a particular region takes control of the region and earns
                bonus points.
              </p>
              <ul>
                <li>
                  Regions bonuses increase with each controlled region: Teams
                  receive 4 points for their first controlled region, 5 for
                  their second, 7 for their third, 10 for their fourth, 12 for
                  their fifth, and 15 for their sixth.
                </li>
                <li>
                  Once a team takes control of a region, they posses the region
                  and receive its bonus until <b>either</b> another team claims{" "}
                  <b>more</b> cities within the region or they fall below the
                  three claimed cities due to a duel.
                </li>
              </ul>
              <p>
                At any point in the game, a team may travel to a city that has
                been claimed by another team and initiate a <i>duel</i>. Both
                teams have 30 minutes to prepare and at the end of this time, a{" "}
                <i>duel challenge</i> is announced. Teams will then compete to
                complete the challenge. If the defending team wins the
                challenge, they keep control of the city. If the attacking team
                wins the challenge, the city <b>returns to being unclaimed</b>{" "}
                and the attacking team may now attempt a city challenge to claim
                it.
              </p>
              <ul>
                <li>
                  In the last minute of the 30 minute preparation period, two
                  potential options for the duel challenge will be displayed to
                  both teams. The defending team will then have this one minute
                  to choose the duel. If they do not make a selection in time,
                  the duel will be chosen randomly.
                </li>
                <li>
                  The attacking team may move outside of the city bounds to
                  complete the challenge; however, they must be within city
                  bounds to claim victory for the duel. If they are outside the
                  city bounds while a duel is in progress, the duel challenge
                  will not be shown on their screen.
                </li>
                <li>
                  After a duel, there is a <i>12 hour cooldown</i> period before
                  any other team may attempt to duel for the city once again.
                </li>
              </ul>
            </div>
          </section>
          <section id="rest-and-safety" className="rule-section">
            <div className="rule-copy">
              <p className="rule-kicker">Section 5</p>
              <h2>Rest Period and Safety</h2>
              <p>
                Teams are required to take a <i>rest period</i> on Saturday and
                Sunday night to recover from the game day. A rest period
                consists of a 9 hour break where teams are not permitted to
                complete challenges, initiate duels, strategize/plan for
                gameplay, nor use powerups.
              </p>
              <p>
                Teams are permitted to choose when and where to they will
                declare their rest period before midnight. If a team has not
                declared their rest period by midnight central time, it will
                automatically begin, regardless of whether a team is still
                travelling or completing a challenge.
              </p>
              <p>
                A pin on the team's map will show the location they need to be
                at in order for the rest period to be lifted. This is a one mile
                radius of where the rest period began. If teams are not within
                this radius, they will not be able to lift their rest period
                until they enter back into the radius.
              </p>
              <ul>
                <li>
                  Miles travelled during the rest period do not need to be paid
                  for in travel coins.
                </li>
                <li>
                  Teams are encourage to fulfill religious obligations during
                  this time.
                </li>
                <li>
                  If a team wishes to duel for a city but the defending team is
                  on their rest period, they must wait until the end of the
                  team's rest period to initialize a duel.
                </li>
              </ul>
              <p>
                Teams are not permitted to <b>speed</b> at any point during the
                game and must follow <b>all traffic laws</b>. A speeding ticket
                or accident for which the player driving is at fault will result
                in immediate disqualification for the entire team.
              </p>
              <p>
                <b>
                  If at any point teams need to abandon gameplay for the sake of
                  their own safety, they are encouraged to do so without
                  penalty. Reach out to the judge and the developers once you
                  have reached a safe place to clarify any questions about
                  challenges, curses, or app problems that may arise.
                </b>
              </p>
            </div>
          </section>
          <section id="powerups" className="rule-section">
            <div className="rule-copy">
              <p className="rule-kicker">Section 6</p>
              <h2>Powerups</h2>
              <p>
                Teams may purchase powerups at any point during the game by
                navigating to the shop tab on the app. Once purchased, powerups
                will be in your inventory and can be used at any time. A team
                may have as many powerups in their inventory as they would like.
              </p>
              <ol>
                <li>
                  <b>Veto</b> (150 travel coins) - Choose a road challenge to
                  discard and draw a new one. You <i>do not</i> receive the
                  reward for the challenge you discarded.
                </li>
                <li>
                  <b>Tracker</b> (150 travel coins) - See the last known
                  location of every team on the map (use the pin filter and
                  search for each team's icon).
                </li>
                <li>
                  <b>Roadblock</b> (200 coins) - Place an area on the map at
                  your current location to act as a "roadblock." When teams pass
                  through your roadblock, they pay you 100 coins. If you go
                  through your own roadblock, you lose 100 coins.
                </li>
                <li>
                  <b>Curse</b> (300 coins) - Draw a random curse from the curse
                  deck. When ready, cast it on another team. They must follow
                  the curse's instructions before continuing gameplay.
                  <ul>
                    <li>
                      An announcement is made when a team is cursed. A team may
                      not have more than one curse on them at a time.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
