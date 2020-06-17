import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-modal';
import ErrorBoundary from './ErrorBoundary';
import Catalog from './components/Catalog/Catalog';
import Header from './components/Header';
import Footer from './components/Footer';
import { 
  filterOptions, 
  sortingOptions, 
  movieList,
  modalTypes,
  modalStyles, 
} from './mockData/data';
import './App.css';

/* ToDo - 
1. “Add movie”, “Edit”, “Delete” modal windows and “sorting”. 
2. Use stateless/stateful approach
3. Use React synthetic events
4. Use lifecycle methods */

Modal.setAppElement('#root');

function App() {
  const [openModal, setOpenModal] = useState('');

  return (
    <ErrorBoundary>
      <div className="App">
        <Header
          setOpenModal={setOpenModal} 
          modalTypes={modalTypes}
        />
        <Catalog 
          filterOptions={filterOptions}
          sortingOptions={sortingOptions}
          movieList={movieList}
          setOpenModal={setOpenModal}
          modalTypes={modalTypes}
        />      
        <Footer />
      </div>
      <Modal 
        isOpen={openModal !== ''} 
        style={modalStyles}
        onRequestClose={() => { setOpenModal(''); }}
      >
        {openModal}
      </Modal>
    </ErrorBoundary>
  );
}

export default App;
