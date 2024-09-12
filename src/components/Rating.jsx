// eslint-disable-next-line react/prop-types
const Rating = ({ value }) => {
  // Membuat array yang diisi dengan bintang sesuai nilai rating
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= value) {
      // Bintang penuh
      stars.push(<span key={i} className="star full-star"></span>);
    } else if (i - 1 < value && value < i) {
      // Setengah bintang
      stars.push(<span key={i} className="star half-star"></span>);
    } else {
      // Bintang kosong
      stars.push(<span key={i} className="star empty-star"></span>);
    }
  }

  return <div className="rating">{stars}</div>;
};

export default Rating;
