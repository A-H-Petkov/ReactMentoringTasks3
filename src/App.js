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
  filterOptions, 
  sortingOptions, 
  defaultMovieList,
  modalTypes,
  modalStyles, 
} from './mockData/data';
import {
  updateMovieList
} from './helpers/listHelpers';
import './App.css';
import { connect } from 'react-redux';
import { fetchMovies } from './actions/actions';



if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');

const App = (props) => {

  const { movieList, fetchMovies } = props;

  const [openModal, setOpenModal] = useState('');
  // const [movieList, setMovieList] = useState(defaultMovieList);
  const [stagedMovie, setStagedMovie] = useState(null);
  const [detailedPreview, setDetailedPreview] = useState(null);

  console.log(movieList, fetchMovies, 'movieList**');

  useEffect(() =>{
    console.log('use effect');
    if(movieList.length === 0) {
      console.log('caaaalll');
      fetchMovies()
    }
  }, [movieList, fetchMovies ]);

  const prepareModalData = (setType, movie) => {
    setOpenModal(setType); 
    setStagedMovie(movie);
  };

  const closeModal = () => { 
    setOpenModal(''); 
    setStagedMovie(null);
  };

  const closeDetails = () => { 
    setStagedMovie(null)
  }

  const confirmModal = (data = {}) => {
    // const updatedList = updateMovieList(movieList, openModal, stagedMovie, data);
    // setMovieList(updatedList);
    closeModal();
  }

  const openDetailed = (item) => {
    setDetailedPreview(item)
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
          filterOptions={filterOptions}
          sortingOptions={sortingOptions}
          movieList={movieList}
          setOpenModal={prepareModalData}
          modalTypes={modalTypes}
          openDetailed={openDetailed}
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => { dispatch(fetchMovies()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
