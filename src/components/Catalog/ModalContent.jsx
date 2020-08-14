import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import MovieForm from './MovieForm';

const selectModal = (type, typeList, confirmAction, stagedMovie) => {
  switch (type) {
    case typeList.ADD:
    case typeList.EDIT:
      return <MovieForm confirmModal={confirmAction} stagedMovie={stagedMovie}/>;
    case typeList.DELETE:
      return (
        <>
          <div>Are you sure you want to delete this movie?</div>
          <Button
            className="add-movie-btn"
            onClick={confirmAction}
          >
            CONFIRM
          </Button>
        </>
      );
    default:
      return null;
  }
};

const ModalContent = ({
  activeType,
  modalTypes,
  closeModal,
  confirmModal,
  stagedMovie,
}) => (
  <>
    <div>
      <button type="button" className="close-modal-btn" onClick={closeModal}>&#10005;</button>
      <h4 className="modal-title">
        {`${activeType.toUpperCase()} `}
        {stagedMovie && stagedMovie.title !== '' && `"${stagedMovie.title}"`}
      </h4>
    </div>
    { selectModal(activeType, modalTypes, confirmModal, stagedMovie) }
  </>
);

ModalContent.propTypes = {
  confirmModal: PropTypes.func,
  closeModal: PropTypes.func,
  modalTypes: PropTypes.shape({}),
  activeType: PropTypes.string,
  stagedMovie: PropTypes.shape({
    overview: '',
    year: '',
    runtime: '',
    genres: [],
    title: '',
    poster: '',
  }),
};

ModalContent.defaultProps = {
  confirmModal: () => {},
  closeModal: () => {},
  modalTypes: {},
  activeType: '',
  stagedMovie: {},
};

export default ModalContent;
