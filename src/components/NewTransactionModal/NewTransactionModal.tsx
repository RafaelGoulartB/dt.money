import React from 'react';
import Modal from 'react-modal'
import { Container } from './NewTransactionModalStyle';
import closeImg from '../../assets/close.svg';

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
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button
        type='button'
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar MOdal" />
      </button>

      <Container>
        <h2>Cadastar transação</h2>

        <input type="text" placeholder="Título" />
        <input type="number" placeholder="Valor" />
        <input type="text" placeholder="Categoria" />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}
