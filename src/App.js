import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-modal';
import ErrorBoundary from './ErrorBoundary';
import Catalog from './components/Catalog/Catalog';
import Header from './components/Header';
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
    }
  };

  setOpenModal = (setType, movieId) => {
    this.setState({ openModal: setType, stagedMovie: movieId })
  };

  closeModal = () => { this.setOpenModal('', null); };

  confirmModal = (data = {}) => {
    const { movieList, openModal, stagedMovie } = this.state;
    const updatedList = updateMovieList(movieList, openModal, stagedMovie, data);
    // console.log(updatedList)
    this.setState({ movieList: updatedList });
    this.closeModal();
  }


  render() {
    const { openModal, movieList } = this.state;
  return (
    <ErrorBoundary>
      <div className="App">
        <Header
          setOpenModal={this.setOpenModal} 
          modalTypes={modalTypes}
        />
        <Catalog 
          filterOptions={filterOptions}
          sortingOptions={sortingOptions}
          movieList={movieList}
          setOpenModal={this.setOpenModal}
          modalTypes={modalTypes}
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
        />
      </Modal>
    </ErrorBoundary>
  );
  }
}

export default App;
