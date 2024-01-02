import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzVlMjcxYWM4YTQyZjYyMDA1Y2MyNzMwMWEwMjMxMyIsInN1YiI6IjY1OTJjOTU0YTU4OTAyNzFlYjk2OGUxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FIDcvLNAtWDm8-BFLykHU6hCShgGqGelqry5KvBtDes";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
