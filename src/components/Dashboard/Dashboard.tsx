import React from 'react';
import { Container } from './DashboardStyles'
import { Summary } from '../Summary/Summary';
import { TransactionsTable } from '../TransactionsTable/TransactionsTable';
 
export const Dashboard: React.FC = () => {
  return (
  <Container>
    <Summary />
    <TransactionsTable />
  </Container>
  );
}
