import React, { useState } from 'react';
import Modal from 'react-modal'
import { Container, RadioBox, TransactionTypeContainer } from './NewTransactionModalStyle';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

Modal.setAppElement('#root')

interface NewTransactionModalProps {
  isNewTransactionModalOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal: React.FC<NewTransactionModalProps> = ({ isNewTransactionModalOpen, onRequestClose }) => {
  const [type, setType] = useState('deposit')

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
        
        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox> 
          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saida" />
            <span>Saida</span>
          </RadioBox> 
        </TransactionTypeContainer>

        <input type="text" placeholder="Categoria" />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}
