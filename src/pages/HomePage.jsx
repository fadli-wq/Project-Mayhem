import MangaCard from "../components/MangaCardComponent";

const mostPopularManga = [
  {
    href: "./manga/solo",
    imgSrc: "/public/screenshots/Solo.png",
    title: "Solo Leveling",
    rating: 4.6,
    views: 15055413,
    description:
      "10 years ago, after 'the Gate' that connected the real world with the monster world opened, some of the ordinary, everyday people received the power t...",
  },
  {
    href: "./manga/solo",
    imgSrc: "/public/screenshots/Komi.png",
    title: "Komi-san wa Komyushou Desu",
    rating: 4.5,
    views: 11170381,
    description:
      "Komi-san is a beautiful and admirable girl that no one can take their eyes off of. Almost the whole school sees her as the cold beauty that's out of t...",
  },
  {
    href: "./manga/solo",
    imgSrc: "/public/screenshots/Slime.png",
    title: "Tensei Shitara Slime Datta Ken",
    rating: 4.6,
    views: 8064945,
    description:
      "The Ordinary Mikami Satoru found himself dying after being stabbed by a slasher. It should have been the end of his meager 37 years, but he found hims...",
  },
  {
    href: "./manga/solo",
    imgSrc: "/public/screenshots/Kanojo.png",
    title: "Kanojo, Okarishimasu",
    rating: 3.6,
    views: 6730097,
    description:
      "Kinoshita Kazuya is a regular college student who was just dumped by his girlfriend for another guy. Feeling down in the dumps, he decides to use an a...",
  },
];

const topRatedManga = [
  {
    href: "./manga/solo",
    imgSrc: "/public/screenshots/Frieren.png",
    title: "Sousou no Frieren",
    rating: 4.7,
    views: 2993789,
    description:
      "The adventure is over but life goes on for an elf mage just beginning to learn what living is all about. Elf mage Frieren and her courageous fellow ad...",
  },
  {
    href: "./manga/solo",
    imgSrc: "/public/screenshots/Jumyou.png",
    title: "Jumyou wo Kaitotte Moratta. Ichinen ni Tsuki, Ichimanen de",
    rating: 4.7,
    views: 918222,
    description:
      "A twenty-year-old with little hope for the future discovers a shop that buys lifespan, time, and health. This is a story dealing with the ensuing cons...",
  },
  {
    href: "./manga/solo",
    imgSrc: "/public/screenshots/Berserk.png",
    title: "Berserk",
    rating: 4.7,
    views: 2433186,
    description:
      "Guts, known as the Black Swordsman, seeks sanctuary from the demonic forces attracted to him and his woman because of a demonic mark on their necks, a...",
  },
  {
    href: "./manga/solo",
    imgSrc: "/public/screenshots/Period.png",
    title: "Blue Period",
    rating: 4.7,
    views: 735044,
    description:
      "In his second to last year of high school, the dispassionate but studious, Yatora Yaguchi finally finds a calling in art. With no prior art experience...",
  },
  {
    href: "./manga/solo",
    imgSrc: "/public/screenshots/Period.png",
    title: "Blue Period",
    rating: 4.7,
    views: 735044,
    description:
      "In his second to last year of high school, the dispassionate but studious, Yatora Yaguchi finally finds a calling in art. With no prior art experience...",
  },
];

const Homepage = () => {
  return (
    <div className="homepage">
      <section className="manga-section">
        <h2>Most Popular Manga</h2>
        <div className="manga-list">
          {mostPopularManga.map((manga, index) => (
            <MangaCard
              key={index}
              href={manga.href}
              imgSrc={manga.imgSrc}
              title={manga.title}
              rating={manga.rating}
              views={manga.views}
              description={manga.description}
            />
          ))}
        </div>
      </section>

      <section className="manga-section">
        <h2>Top Rated Manga</h2>
        <div className="manga-list">
          {topRatedManga.map((manga, index) => (
            <MangaCard
              key={index}
              href={manga.href}
              imgSrc={manga.imgSrc}
              title={manga.title}
              rating={manga.rating}
              views={manga.views}
              description={manga.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Homepage;
