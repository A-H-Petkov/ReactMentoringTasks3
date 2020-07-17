import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import MovieForm from './MovieForm';

const selecetModal = (type, typeList, confirmAction, stagedMovie) => {
  switch(type) {
    case typeList.ADD:
      case typeList.EDIT:
      return <MovieForm confirmModal={confirmAction} stagedMovie={stagedMovie}/>;
    case typeList.DELETE:
      return( 
        <>
          <div>Are you sure you want to delete this movie?</div>
          <Button 
            className="add-movie-btn" 
            onClick={confirmAction}
          >
            CONFIRM
          </Button>
        </>);
    default:
      return null;
  }
}

const ModalContent = ({
  activeType,
  modalTypes,
  closeModal,
  confirmModal,
  stagedMovie,
}) => {

  return (
    <>
    <div>
      <button className="close-modal-btn" onClick={closeModal}>&#10005;</button>
      <h4 className="modal-title">
        {`${activeType.toUpperCase()} `}
        {stagedMovie && stagedMovie.title !== '' && `"${stagedMovie.title}"`}
      </h4>
    </div>
    { selecetModal(activeType, modalTypes, confirmModal, stagedMovie) }
    </>
  );
}

ModalContent.propTypes = {
  confirmModal: PropTypes.func,
  closeModal: PropTypes.func,
  modalTypes: PropTypes.object,
  activeType: PropTypes.string,
  stagedMovie: PropTypes.object,
}

ModalContent.defaultProps = {
  confirmModal: () => { console.log('default confirmModal function called')},
  closeModal: () => { console.log('default closeModal function called')},
  modalTypes: {},
  activeType: '',
  stagedMovie: {},
}

export default ModalContent;
