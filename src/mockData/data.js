export const filterOptions = [
    { name: 'ALL', value: '1' },
    { name: 'COMEDY', value: '2' },
    { name: 'DRAMA', value: '3' },
    { name: 'CRIME', value: '4' },
    { name: 'HORROR', value: '5' },
    { name: 'ACTION', value: '6' },
    { name: 'SCI-FI', value: '7' },
    { name: 'DOCUMENTARY', value: '8' },
  ];
  
export const sortingOptions = [
    { name: 'Release date', value: 1 },
    { name: 'Rating', value: 2 },
    { name: 'Runtime', value: 3 }
  ]
  
export const movieList = [
    { 
      id: 1,
      title: 'Black widow', 
      poster: 'https://cdn.collider.com/wp-content/uploads/2020/03/black-widow-poster.jpg', 
      year: '2020', 
      overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      genres: ['ACTION'],
      url: 'black.com',
      runtime: 120,
      isActive: true,
    },
    { 
      id: 2,
      title: 'Interstellar', 
      poster: 'https://i.pinimg.com/originals/c6/d4/e2/c6d4e2803a467b99ede238fee57441a7.jpg', 
      year: '2014', 
      overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      genres: ['ACTION', 'DRAMA', 'SCI-FI'],
      url: 'inter.com',
      runtime: 180,
      isActive: true,
    },
    { 
      id: 3,
      title: 'MadMax', 
      poster: 'https://cdn.shopify.com/s/files/1/1416/8662/products/mad_max_fury_road_2015_advance_original_film_artB_69310cd2-a499-45fc-a12d-df89480c4c99_2000x.jpg?v=1573593327', 
      year: '2015', 
      overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      genres: ['ACTION'],
      url: 'fury.com',
      runtime: 140,
      isActive: true,
    },
    { 
      id: 4,
      title: 'Blade runner 2049', 
      poster: 'https://cdn.shopify.com/s/files/1/1416/8662/products/blade_runner_2049_2017_advance_original_film_art_9eeddf62-08a7-4bb2-9e09-9f21f318c14c_2000x.jpg?v=1578262145', 
      year: '2017',
      overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
      genres: ['ACTION', 'SCI-FI'],
      url: '2049.com',
      runtime: 185,
      isActive: true,
    },
    { 
      id: 5,
      title: 'Doctor Sleep', 
      poster: 'https://image.tmdb.org/t/p/original/ohS07RD5jpfUjEkYBC4q6MKaA6E.jpg', 
      year: '2019',
      overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
      genres: ['ACTION', 'HORROR'],
      url: 'dr_sleep.com',
      runtime: 112,
      isActive: true,
    },
    { 
      id: 6,
      title: 'DUNE', 
      poster: 'https://cdn.collider.com/wp-content/uploads/2014/02/jodorowskys-dune-poster.jpg', 
      year: '2014', 
      overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      genres: ['DOCUMENTARY'],
      url: 'documentary.com',
      runtime: 90,
      isActive: true,
    },
  ];

export const modalTypes = {
  ADD: 'Add movie',
  DELETE: 'Delete movie',
  EDIT: 'Edit movie',
};

export const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(42, 46, 54, 0.7)',
    zIndex: 7,
  },
  content: {
    left: '100px',
    right: '100px',
    backgroundColor: '#232323',
    borderColor: 'black',
    color: 'white',
    bottom: 'auto',
    padding: '20px 40px',
  }
};

export const moviePrimer = { 
  id: null,
  title: '', 
  poster: '', 
  year: '',
  overview: '', 
  genres: [],
  url: '',
  isActive: true,
};
