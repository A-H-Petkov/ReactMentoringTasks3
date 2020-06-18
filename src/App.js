import React from 'react';
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
  movieList,
  modalTypes,
  modalStyles, 
} from './mockData/data';
import {
  updateMovieList
} from './helpers/listHelpers';
import './App.css';

/* ToDo - 
1. “Add movie”, “Edit”, “Delete” modal windows and “sorting”. 
2. Use stateless/stateful approach
3. Use React synthetic events
4. Use lifecycle methods */

Modal.setAppElement('#root');

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      openModal: '',
      movieList,
      stagedMovie: null,
      detailedPreview: null
    }
  };

  setOpenModal = (setType, movie) => {
    this.setState({ openModal: setType, stagedMovie: movie })
  };

  closeModal = () => { this.setOpenModal('', null); };

  closeDetails = () => { this.setState({ detailedPreview: null })}

  confirmModal = (data = {}) => {
    const { movieList, openModal, stagedMovie } = this.state;
    const updatedList = updateMovieList(movieList, openModal, stagedMovie, data);
    this.setState({ movieList: updatedList });
    this.closeModal();
  }

  openDetailed = (item) => {
    this.setState({ detailedPreview: item })
  }


  render() {
    const { openModal, movieList, stagedMovie, detailedPreview } = this.state;
  return (
    <ErrorBoundary>
      <div className="App">
        {
          detailedPreview !== null 
          ?
          <DetailsPanel
            movie={detailedPreview}
            closeDetails={this.closeDetails}
          />   
          :
          <Header
          setOpenModal={this.setOpenModal} 
          modalTypes={modalTypes}
        />
        }
        
        <Catalog 
          filterOptions={filterOptions}
          sortingOptions={sortingOptions}
          movieList={movieList}
          setOpenModal={this.setOpenModal}
          modalTypes={modalTypes}
          openDetailed={this.openDetailed}
        />      
        <Footer />
      </div>
      <Modal 
        isOpen={openModal !== ''} 
        style={modalStyles}
        onRequestClose={this.closeModal}
      >
        <ModalContent
          closeModal={this.closeModal} 
          modalTypes={modalTypes}
          activeType={openModal}
          confirmModal={this.confirmModal}
          stagedMovie={stagedMovie}
        />
      </Modal>
    </ErrorBoundary>
  );
  }
}

export default App;
