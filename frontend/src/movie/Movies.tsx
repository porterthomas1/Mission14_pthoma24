import { useState } from 'react';
import { Movie } from '../types/movie';

function MovieList() {
  const [movieData, setMovieData] = useState<Movie[]>([]);

  const fetchMovie = async () => {
    const rsp = await fetch('https://localhost:4000/movie');
    const temp = await rsp.json();
    setMovieData(temp);
  };

  fetchMovie();

  return (
    <>
      <div className="text-center p-3">
        <h3>List of Movies</h3>
      </div>

      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Category</th>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Edited</th>
              <th>Lent To</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {movieData.map((m) => (
              <tr key={m.movieId}>
                <td>{m.category}</td>
                <td>{m.title}</td>
                <td>{m.year}</td>
                <td>{m.director}</td>
                <td>{m.rating}</td>
                <td>{m.edited}</td>
                <td>{m.lentTo}</td>
                <td>{m.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieList;
