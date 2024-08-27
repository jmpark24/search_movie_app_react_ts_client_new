export interface SimpleMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
export interface MovieState {
  searchText: string;
  page: number;
  pageMax: number;
  movies: SimpleMovie[];
  movie: MovieDetails | null;
  loading: boolean;
  message: string;
}
interface Rating {
  Source: string;
  Value: string;
}
export interface MovieDetails {
  imdbID: string;
  Title: string;
  Poster: string;
  Released: string;
  Runtime: string;
  Country: string;
  Plot: string;
  Ratings: Rating[];
  Actors: string;
  Director: string;
  Production: string;
  Genre: string;
}
export interface MovieDetailState {
  movieDetails: MovieDetails | null;
}
