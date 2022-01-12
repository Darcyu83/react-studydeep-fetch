import { useEffect, useState } from "react";
import { constSelector } from "recoil";
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
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading1, setIsLoading1] = useState(true);

  async function getData() {
    const data = await getAPIData();
    setMovieData(data);
    return data;
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (isLoading) setIsLoading1((curr) => !curr);
    console.log("1. isLoading", isLoading);
    console.log("1. isLoading1", isLoading1);
    return console.log("executed componentWillUnMount");
  }, [isLoading]);

  useEffect(() => {
    console.log("2. isLoading", isLoading);
    console.log("2. isLoading1", isLoading1);
    return console.log(" 2. isLoading1 executed componentWillUnMount");
  }, [isLoading1]);

  //console.log("movieData", movieData);
  console.log("isLoading ===", isLoading);
  console.log("isLoading1 ===", isLoading1);
  const onClick = () => {
    setIsLoading((curr) => !curr);
  };

  return (
    <div>
      <Title>InvokeFetch Page</Title>
      <button onClick={onClick}> change Loading State</button>
      <p>isLoading : {`${isLoading}`}</p>
      <p>isLoading1 : {`${isLoading1}`}</p>
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
