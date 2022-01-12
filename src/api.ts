const API_KEY = `72caad34e2c43d870d78d98ae9a0980b`;

async function getGenres() {
  return (
    await (
      await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
      )
    ).json()
  ).genres;
}

async function getAPIData() {
  return await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  )
    .then((res) => res.json())
    .then((json) => json.results)
    .catch((err) => console.log(err));
}

async function getAPIDataAwait() {
  return await (
    await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    )
  ).json();
}

async function getData() {
  const wholeData = await getAPIData();
  const genresCate = await getGenres();

  const actionGenreId = genresCate.find((gen: any) => gen.name === "Action").id;
  const adventureGenreId = genresCate.find(
    (gen: any) => gen.name === "Adventure"
  ).id;
  const comedyGenreId = genresCate.find((gen: any) => gen.name === "Comedy").id;

  const actionMovieData = wholeData.filter((movie: any) =>
    movie.genre_ids.includes(actionGenreId)
  );
  const adventureMovieData = wholeData.filter((movie: any) =>
    movie.genre_ids.includes(adventureGenreId)
  );
  const comedyMovieData = wholeData.filter((movie: any) =>
    movie.genre_ids.includes(comedyGenreId)
  );

  return { actionMovieData, adventureMovieData, comedyMovieData };
}
export default getData;
