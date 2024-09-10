export interface SimpleMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface SearchMovies {
  Search: SimpleMovie[];
  totalResults: number | undefined;
  Response: string;
}

export interface MovieState {
  searchText: string;
  page: number;
  pageMax: number | undefined;
  movies: SimpleMovie[];
  loading: boolean;
  message: string | null;
}
type Rating = {
  Source: string;
  Value: string;
};

export type MovieDetails = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
};
export interface MovieDetailState {
  movieDetails: MovieDetails | null;
}
