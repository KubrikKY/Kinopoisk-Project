export type MovieCard = {
  id: number;
  externalId: {
    kpHD: string;
    imdb: string;
    tmdb: number;
  };
  name: string;
  alternativeName: string;
  enName: string;
  names: [
    {
      name: string;
      language: string;
      type: string;
    }
  ];
  type: string;
  typeNumber: number;
  year: number;
  description: string;
  shortDescription: string;
  slogan: string;
  status: string;
  rating: {
    kp: number;
    imdb: number;
    tmdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
  };
  votes: {
    kp: string;
    imdb: string;
    tmdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
  };
  movieLength: number;
  ratingMpaa: 'pg13';
  ageRating: number;
  logo: {
    url: string;
  };
  poster: {
    url: string;
    previewUrl: string;
  };
  backdrop: {
    url: string;
    previewUrl: string;
  };
  videos: {
    trailers: [
      {
        url: string;
        name: string;
        site: string;
        type: string;
        size: number;
      }
    ];
    teasers: [
      {
        url: string;
        name: string;
        site: string;
        type: string;
        size: number;
      }
    ];
  };
  genres: [
    {
      name: string;
    }
  ];
  countries: [
    {
      name: string;
    }
  ];
  persons: [
    {
      id: number;
      photo: string;
      name: string;
      enName: string;
      description: string;
      profession: string;
      enProfession: string;
    }
  ];
  reviewInfo: {
    count: number;
    positiveCount: number;
    percentage: string;
  };
  seasonsInfo: [
    {
      number: number;
      episodesCount: number;
    }
  ];
  budget: {
    value: number;
    currency: string;
  };
  fees: {
    world: {
      value: number;
      currency: string;
    };
    russia: {
      value: number;
      currency: string;
    };
    usa: {
      value: number;
      currency: string;
    };
  };
  premiere: {
    country: string;
    world: string;
    russia: string;
    digital: string;
    cinema: string;
    bluray: string;
    dvd: string;
  };
  similarMovies: [
    {
      id: number;
      name: string;
      enName: string;
      alternativeName: string;
      type: string;
      poster: {
        url: string;
        previewUrl: string;
      };
    }
  ];
  sequelsAndPrequels: [
    {
      id: number;
      name: string;
      enName: string;
      alternativeName: string;
      type: string;
      poster: {
        url: string;
        previewUrl: string;
      };
    }
  ];
  watchability: {
    items: [
      {
        name: string;
        logo: {
          url: string;
        };
        url: string;
      }
    ];
  };
  releaseYears: [
    {
      start: number;
      end: number;
    }
  ];
  top10: number;
  top250: number;
  ticketsOnSale: true;
  totalSeriesLength: number;
  seriesLength: number;
  isSeries: true;
  audience: [
    {
      count: number;
      country: string;
    }
  ];
  facts: [
    {
      value: string;
      type: string;
      spoiler: true;
    }
  ];
  imagesInfo: {
    postersCount: number;
    backdropsCount: number;
    framesCount: number;
  };
  productionCompanies: [
    {
      name: string;
      url: string;
      previewUrl: string;
    }
  ];
};

export type MovieSearch = {
  id: number;
  name: string;
  alternativeName: string;
  enName: string;
  names: string[];
  type: string;
  year: number;
  description: string;
  shortDescription: string;
  logo: string;
  poster: string;
  backdrop: string;
  rating: number;
  votes: number;
  movieLength: number;
  genres: string[];
  countries: string[];
  releaseYears: number[];
};

export type Responce = {
  docs: MovieSearch[];
  total: number;
  limit: number;
  page: number;
  pages: number;
};
