import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import ErrorBoundary from '../ErrorBoundary';
import Catalog from '../components/Catalog/Catalog';
import CatalogHeader from '../components/Catalog/CatalogHeader';
import Header from '../components/shared/Header';
import DetailsPanel from '../components/Catalog/DetailsPanel';
import ModalContent from '../components/Catalog/ModalContent';
import {
  modalTypes,
  modalStyles,
} from '../mockData/data';

import {
  getMovies,
  getMovieById,
  addMovie,
  editMovie,
  deleteMovie,
  setFilter,
  setSorting,
} from '../actions/actions';

const moviesURL = 'http://my-json-server.typicode.com/A-H-Petkov/movies/movieList';

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');

const CatalogPage = (props) => {
  const {
    movieList,
    detailedPreview,
    getMovies,
    getMovieById,
    editMovie,
    addMovie,
    deleteMovie,
    filterBy,
    sortBy,
    setFilter,
    setSorting,
  } = props;

  const [openModal, setOpenModal] = useState('');
  const [stagedMovie, setStagedMovie] = useState(null);

  useEffect(() => {
    if (movieList.length === 0) {
      axios.get(moviesURL)
        .then((res) => { getMovies(res.data); })
        .catch((err) => { console.log(err); });
    }
  }, [movieList, getMovies]);

  const prepareModalData = (setType, movie) => {
    setOpenModal(setType);
    setStagedMovie(movie);
  };

  const closeModal = () => {
    setOpenModal('');
    setStagedMovie(null);
  };

  const closeDetails = () => {
    getMovieById(null);
  };

  const confirmModal = (data = {}) => {
    if (openModal === modalTypes.DELETE) {
      axios.delete(`${moviesURL}/${stagedMovie.id}`)
        .then((res) => { deleteMovie(stagedMovie.id); })
        .catch((err) => { console.log(err); });
    }
    else if (openModal === modalTypes.ADD) {
      axios.post(moviesURL, data)
        .then((res) => { addMovie(res.data); })
        .catch((err) => { console.log(err); });
    }
    else {
      axios.put(`${moviesURL}/${stagedMovie.id}`, { ...data, id: stagedMovie.id })
        .then((res) => { editMovie(res.data); })
        .catch((err) => { console.log(err); });
    }
    closeModal();
  };

  const openDetailed = (item) => {
    axios.get(`${moviesURL}/${item.id}`)
      .then((res) => { getMovieById(res.data); })
      .catch((err) => { console.log(err); });
  };

  return (
    <ErrorBoundary>
      <div className="App">
        {
          detailedPreview !== null
            ? <DetailsPanel movie={detailedPreview} closeDetails={closeDetails} />
            : (
              <Header>
                <CatalogHeader
                  setOpenModal={prepareModalData}
                  modalTypes={modalTypes}
                />
              </Header>
            )
        }

        <Catalog
          movieList={movieList}
          setOpenModal={prepareModalData}
          modalTypes={modalTypes}
          openDetailed={openDetailed}
          sortBy={sortBy}
          filterBy={filterBy}
          setFilter={setFilter}
          setSorting={setSorting}
        />
      </div>
      <Modal
        isOpen={openModal !== ''}
        style={modalStyles}
        onRequestClose={closeModal}
      >
        <ModalContent
          closeModal={closeModal}
          modalTypes={modalTypes}
          activeType={openModal}
          confirmModal={confirmModal}
          stagedMovie={stagedMovie}
        />
      </Modal>
    </ErrorBoundary>
  );
};

const mapStateToProps = (state) => {
  return {
    movieList: state.movies,
    detailedPreview: state.previewedMovie,
    filterBy: state.filterBy,
    sortBy: state.sortBy,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: (movies) => { dispatch(getMovies(movies)); },
    getMovieById: (movie) => { dispatch(getMovieById(movie)); },
    addMovie: (data) => { dispatch(addMovie(data)); },
    editMovie: (data) => { dispatch(editMovie(data)); },
    deleteMovie: (id) => { dispatch(deleteMovie(id)); },
    setFilter: (genre) => { dispatch(setFilter(genre)); },
    setSorting: (param) => { dispatch(setSorting(param)); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CatalogPage);
