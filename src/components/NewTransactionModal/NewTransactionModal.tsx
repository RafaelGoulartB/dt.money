import React from 'react';
import Modal from 'react-modal'
import { Container } from './NewTransactionModalStyle';

Modal.setAppElement('#root')

interface NewTransactionModalProps {
  isNewTransactionModalOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal: React.FC<NewTransactionModalProps> = ({ isNewTransactionModalOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={onRequestClose}
    >
      <h2>Cadastar transação</h2>
    </Modal>
  );
}
