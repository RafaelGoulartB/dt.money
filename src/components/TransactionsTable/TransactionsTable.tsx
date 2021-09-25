import React, { useEffect } from 'react';
import { Container } from './TransactionsTableStyles';
import { api } from '../../services/api'

export const TransactionsTable: React.FC = () => {
  useEffect(() => {
    api.get('transactions')
      .then(res => console.log(res.data))
  })
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Mercado</td>
            <td className="withdraw">- R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
        </tbody>
      </table>      
    </Container>
  );
}
