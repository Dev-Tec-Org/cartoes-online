import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import AppRoutes from './Routes';

const App: React.FC = () => {
  return (
    <Router>
      <Box w={"full"} h={"100vh"} backgroundColor={"blackAlpha.800"} >
        <Box w={"max-content"} h={"max-content"} mx={"auto"}>
          <AppRoutes />
        </Box>
      </Box>
    </Router>
  );
};

export default App;
