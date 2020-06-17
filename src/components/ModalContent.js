import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const selecetModal = (type, typeList, confirmAction) => {
  switch(type) {
    case typeList.ADD:
      return <div>{type}</div>;
    case typeList.EDIT:
      return <div>{type}</div>;
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
  confirmModal
}) => {

  return (
    <>
    <div>
      <button className="close-modal-btn" onClick={closeModal}>&#10005;</button>
      <h4 className="modal-title">{activeType.toUpperCase()}</h4>
    </div>
    { selecetModal(activeType, modalTypes, confirmModal) }
    </>
  );
}

ModalContent.propTypes = {
  confirmModal: PropTypes.func,
  closeModal: PropTypes.func,
  modalTypes: PropTypes.object,
  activeType: PropTypes.string
}

ModalContent.defaultProps = {
  confirmModal: () => { console.log('default confirmModal function called')},
  closeModal: () => { console.log('default closeModal function called')},
  modalTypes: {},
  activeType: '',
}

export default ModalContent;
