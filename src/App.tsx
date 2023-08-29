import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import AppRoutes from './Routes';

const App: React.FC = () => {
  return (
    <Router>
      <Box w={"full"}>
          <AppRoutes />
      </Box>
    </Router>
  );
};

export default App;
