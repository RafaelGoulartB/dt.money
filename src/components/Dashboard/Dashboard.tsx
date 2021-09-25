import React from 'react';
import { Container } from './DashboardStyles'
import { Summary } from './Summary/Summary';
 
export const Dashboard: React.FC = () => {
  return (
  <Container>
    <Summary />
  </Container>
  );
}
