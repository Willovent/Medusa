
export interface SeriesResponse {
  indexer: Indexer;
  nextAirDate: null | string;
  id: ID;
  status: Status;
  config: Config;
  runtime: number;
  genres: string[];
  cache: Cache;
  title: string;
  classification: string;
  type: string;
  showType: Show;
  plot: string;
  network: string;
  countries: string[];
  rating: Rating;
  sceneNumbering: any[];
  airs: string;
  language: string;
  lastUpdate: string;
  sceneAbsoluteNumbering: any[];
  countryCodes: string[];
  imdbInfo: ImdbInfo;
  year: Year;
  prevAirDate: string;
  airsFormatValid: boolean;
}

export interface Cache {
  poster: string;
  banner: null | string;
}

export interface Config {
  location: string;
  sports: boolean;
  airByDate: boolean;
  airdateOffset: number;
  release: Release;
  paused: boolean;
  scene: boolean;
  locationValid: boolean;
  defaultEpisodeStatus: DefaultEpisodeStatus;
  showLists: Show[];
  qualities: Qualities;
  dvdOrder: boolean;
  seasonFolders: boolean;
  subtitlesEnabled: boolean;
  anime: boolean;
  aliases: Alias[];
}

export interface Alias {
  season: number;
  custom: boolean;
  title: string;
}

export enum DefaultEpisodeStatus {
  Wanted = 'Wanted'
}

export interface Qualities {
  preferred: any[];
  allowed: number[];
}

export interface Release {
  requiredWordsExclude: boolean;
  requiredWords: any[];
  ignoredWords: string[];
  ignoredWordsExclude: boolean;
}

export enum Show {
  Series = 'series'
}

export interface ID {
  tvmaze?: number;
  imdb: string;
  slug: string;
  trakt: null;
  tvdb?: number;
  tmdb?: number;
}

export interface ImdbInfo {
  indexer: number;
  imdbId: string;
  countries: string;
  rating: string;
  votes: number;
  indexerId: number;
  lastUpdate: number;
  certificates: string;
  title: string;
  countryCodes: string;
  akas: string;
  genres: string;
  runtimes: number | string;
  year: number;
  plot: string;
  imdbInfoId: number;
}

export enum Indexer {
  Tmdb = 'tmdb',
  Tvdb = 'tvdb',
  Tvmaze = 'tvmaze'
}

export interface Rating {
  imdb: Imdb;
}

export interface Imdb {
  rating: string;
  votes: number;
}

export enum Status {
  Continuing = 'Continuing',
  Ended = 'Ended'
}

export interface Year {
  start: number;
}
