import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import Modal from './Modal';
import * as modalActionCreators from '../redux/modalAction';

const SampleModal: FC = () => {
  const dispatch = useDispatch();

  const closeModal = () => dispatch(modalActionCreators.closeModal());

  return (
    <Modal>
      <div>Sample</div>
      <button type="button" onClick={closeModal}>
        Close
      </button>
    </Modal>
  );
};

export default SampleModal;
