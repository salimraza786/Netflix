export const API_END_POINT = "https://netflix-backend-krb5.onrender.com/api/v1/user";

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTI0NGIzMzVhN2ZkZDhkYjRmODBjMGZjYzk1YTk0NiIsIm5iZiI6MTcyNDMzMTc4NS4yNDQ4OCwic3ViIjoiNjZjNzMzYjU3ZjBhODk4NmU1ZjI5YzYzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Br_Ro4U2LPX1nXoTBVZKWKfKSQ3SD7sYtCei70fe5qU'
  }
};

export const Now_Playing_Movie = "https://api.themoviedb.org/3/movie/now_playing"
export const Popular_Movie = "https://api.themoviedb.org/3/movie/popular"
export const Top_Rated = "https://api.themoviedb.org/3/movie/top_rated"
export const Upcoming = "https://api.themoviedb.org/3/movie/upcoming"

export const SEARCH_MOVIE_URL = "https://api.themoviedb.org/3/search/movie?query="

export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500"
