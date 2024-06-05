import { useEffect } from 'react';
import { useParams } from 'react-router';

// ✅ useParams 함수
// url에 있는 값을 반환해주는 함수
function Detail() {
  const { id } = useParams();
  // console.log(id);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Deatail</h1>;
}
export default Detail;
