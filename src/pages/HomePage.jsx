import Rating from "../components/Rating";

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Most Popular Manga Section */}
      <section className="manga-section">
        <h2>Most Popular Manga</h2>
        <div className="manga-list">
          {/* Manga Card 1 */}
          <a href="./manga/solo" className="manga-card">
            <img src="/public/screenshots/Solo.png" alt="Solo Leveling" />
            <div className="manga-info">
              <h3>Solo Leveling</h3>
              <Rating value={4.6} />
              <p>15,055,413 views</p>
              <p>10 years ago, after "the Gate" that connected the real world with the monster world opened, some of the ordinary, everyday people received the power t...</p>
            </div>
          </a>

          {/* Manga Card 2 */}
          <a href="./manga/solo" className="manga-card">
            <img src="/public/screenshots/Komi.png" alt="Komi-san wa Komyushou Desu" />
            <div className="manga-info">
              <h3>Komi-san wa Komyushou Desu</h3>
              <Rating value={4.5} />
              <p>11,170,381 views</p>
              <p>Komi-san is a beautiful and admirable girl that no one can take their eyes off of. Almost the whole schools sees her as the cold beauty that's out of t...</p>
            </div>
          </a>

          {/* Manga Card 3 */}
          <a href="./manga/solo" className="manga-card">
            <img src="/public/screenshots/Slime.png" alt="Tensei Shitara Slime Datta Ken" />
            <div className="manga-info">
              <h3>Tensei Shitara Slime Datta Ken</h3>
              <Rating value={4.6} />
              <p>8,064,945 views</p>
              <p>The Ordinary Mikami Satoru found himself dying after being stabbed by a slasher. It should have been the end of his meager 37 years, but he found hims...</p>
            </div>
          </a>

          {/* Manga Card 4 */}
          <a href="./manga/solo" className="manga-card">
            <img src="/public/screenshots/Kanojo.png" alt="Kanojo, Okarishimasu" />
            <div className="manga-info">
              <h3>Kanojo, Okarishimasu</h3>
              <Rating value={3.6} />
              <p>6,730,097 views</p>
              <p>Kinoshita Kazuya is a regular college student who was just dumped by his girlfriend for another guy. Feeling down in the dumps, he decides to use an a...</p>
            </div>
          </a>
        </div>
      </section>

      {/* Top Rated Manga Section */}
      <section className="manga-section">
        <h2>Top Rated Manga</h2>
        <div className="manga-list">
          {/* Manga Card 1 */}
          <a href="./manga/solo" className="manga-card">
            <img src="/public/screenshots/Frieren.png" alt="Sousou no Frieren" />
            <div className="manga-info">
              <h3>Sousou no Frieren</h3>
              <Rating value={4.7} />
              <p>2,993,789 views</p>
              <p>The adventure is over but life goes on for an elf mage just beginning to learn what living is all about. Elf mage Frieren and her courageous fellow ad...</p>
            </div>
          </a>

          {/* Manga Card 2 */}
          <a href="./manga/solo" className="manga-card">
            <img src="/public/screenshots/Jumyou.png" alt="Jumyou wo Kaitotte Moratta. Ichinen ni Tsuki, Ichimanen de" />
            <div className="manga-info">
              <h3>Jumyou wo Kaitotte Moratta. Ichinen ni Tsuki, Ichimanen de</h3>
              <Rating value={4.7} />
              <p>918,222 views</p>
              <p>A twenty-year-old with little hope for the future discovers a shop that buys lifespan, time, and health. This is a story dealing with the ensuing cons...</p>
            </div>
          </a>

          {/* Manga Card 3 */}
          <a href="./manga/solo" className="manga-card">
            <img src="/public/screenshots/Berserk.png" alt="Berserk" />
            <div className="manga-info">
              <h3>Berserk</h3>
              <Rating value={4.7} />
              <p>2,433,186 views</p>
              <p>Guts, known as the Black Swordsman, seeks sanctuary from the demonic forces attracted to him and his woman because of a demonic mark on their necks, a...</p>
            </div>
          </a>

          {/* Manga Card 4 */}
          <a href="./manga/solo" className="manga-card">
            <img src="/public/screenshots/Period.png" alt="Blue Period" />
            <div className="manga-info">
              <h3>Blue Period</h3>
              <Rating value={4.7} />
              <p>735,044 views</p>
              <p>In his second to last year of high school, the dispassionate but studious, Yatora Yaguchi finally finds a calling in art. With no prior art experience...</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Homepage;