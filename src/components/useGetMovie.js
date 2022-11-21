import React, { useEffect, useState } from "react";

function useGetMovie(url) {
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function getData() {
      if (!url) return null;
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("data is", data);
        setMovie(data);
      } catch (error) {
        console.log(alert("Error in getmovie"), error.message);
        return null;
      }
    }
    getData();
  }, [url]);

  return movie;
}

export default useGetMovie;
