import { useEffect, useState } from "react";
import styled from "styled-components";
import getAPIData from "../api";

const Title = styled.div`
  color: crimson;
  font-size: 36px;
`;

const SubTitle = styled.div`
  color: blue;
  font-size: 24px;
`;
interface IMovieDataPerCate {
  actionMovieData: [];
  adventureMovieData: [];
  comedyMovieData: [];
}
function InvokeFetch() {
  const [movieData, setMovieData] = useState<IMovieDataPerCate>();

  async function getData() {
    const data = await getAPIData();
    setMovieData(data);
    return data;
  }

  useEffect(() => {
    getData();
  }, []);

  console.log("movieData", movieData);

  return (
    <div>
      <Title>InvokeFetch Page</Title>
      <ul>
        <SubTitle>Action</SubTitle>
        {movieData?.actionMovieData.map((movie: any, idx) => (
          <li key={idx}>{movie.title}</li>
        ))}
      </ul>
      <hr></hr>
      <ul>
        <SubTitle>Adventure</SubTitle>
        {movieData?.adventureMovieData.map((movie: any, idx) => (
          <li key={idx}>{movie.title}</li>
        ))}
      </ul>
      <hr></hr>
      <ul>
        <SubTitle>Comedy</SubTitle>
        {movieData?.comedyMovieData.map((movie: any, idx) => (
          <li key={idx}>{movie.title}</li>
        ))}
      </ul>
      <hr></hr>
    </div>
  );
}

export default InvokeFetch;
