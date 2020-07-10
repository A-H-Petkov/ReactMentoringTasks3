import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-modal';
import ErrorBoundary from './ErrorBoundary';
import Catalog from './components/Catalog/Catalog';
import Header from './components/Header';
import DetailsPanel from './components/DetailsPanel'
import Footer from './components/Footer';
import ModalContent from './components/ModalContent'
import { 
  modalTypes,
  modalStyles, 
} from './mockData/data';
/* import {
  updateMovieList
} from './helpers/listHelpers'; */
import './App.css';
import { connect } from 'react-redux';
import { getMovies, getMovieById, addMovie, editMovie, deleteMovie, setFilter, setSorting } from './actions/actions';



if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');

const App = (props) => {

  const { movieList, 
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

  useEffect(() =>{
    if(movieList.length === 0) {
      getMovies()
    }
  }, [movieList, getMovies ]);

  const prepareModalData = (setType, movie) => {
    setOpenModal(setType); 
    setStagedMovie(movie);
  };

  const closeModal = () => { 
    setOpenModal(''); 
    setStagedMovie(null);
  };

  const closeDetails = () => { 
    getMovieById('');
  }

  const confirmModal = (data = {}) => {
    // const updatedList = updateMovieList(movieList, openModal, stagedMovie, data);
    if(openModal === modalTypes.DELETE) {
      deleteMovie(stagedMovie.id);
    }
    else if(openModal === modalTypes.ADD) {
      addMovie(data)
    }
    else {
      editMovie({ ...data, id: stagedMovie.id});
    }
    closeModal();
  }

  const openDetailed = (item) => {
    getMovieById(item.id)
  }

  return (
    <ErrorBoundary>
      <div className="App">
        {
          detailedPreview !== null 
          ?
          <DetailsPanel
            movie={detailedPreview}
            closeDetails={closeDetails}
          />   
          :
          <Header
          setOpenModal={prepareModalData} 
          modalTypes={modalTypes}
        />
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
        <Footer />
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
}

const mapStateToProps = (state) => {
  return {
    movieList: state.movies,
    detailedPreview: state.previewedMovie,
    filterBy: state.filterBy,
    sortBy: state.sortBy,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: () => { dispatch(getMovies()) },
    getMovieById: (id) => { dispatch(getMovieById(id))}, 
    addMovie: (data) => { dispatch(addMovie(data))},
    editMovie: (data) => { dispatch(editMovie(data))},
    deleteMovie: (id) => { dispatch(deleteMovie(id))},
    setFilter: (genre) => { dispatch(setFilter(genre))},
    setSorting: (param) => { dispatch(setSorting(param))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
