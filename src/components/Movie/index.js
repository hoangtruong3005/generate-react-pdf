import React, { useState, useEffect } from "react";
import Axios from "axios";
import { PDFViewer } from "@react-pdf/renderer";

import MovieList from "./MovieList";

function Movie(props) {
  const [movieDetails, setDetails] = useState([]);

  const fetchMovie = async (e) => {
    try {
      let res = await Axios(
        `https://api.themoviedb.org/3/discover/movie?api_key=c0ae854ba8255b07b83c94d52ed26ea4&primary_release_year=2019&sort_by=vote_average.desc`
      );
      setDetails(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div className="preview-pdf">
      <PDFViewer
        style={{
          width: 800,
          height: "100vh",
        }}
      >
        <MovieList data={movieDetails} />
      </PDFViewer>
    </div>
  );
}

export default Movie;
