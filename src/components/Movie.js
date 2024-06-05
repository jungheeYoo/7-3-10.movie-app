import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Link
// Link는 브라우저 새로고침 없이도 유저를 다른 페이지로 이동시켜주는 컴포넌트이다

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title}></img>
      <Link to={`/movie/${id}`}>{title}</Link>
      <p>{summary}</p>
      <ul>
        {genres?.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

// 어떤 props를 갖고 있는지 알면 좋다
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
