import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import MarcosRodrigues from './cartoes/marcos-rodrigues/index';

const AppRoutes: React.FC = () => {
    return (
        <Box w={'full'}>
            <Routes>
                <Route path="/marcos-rodrigues" element={<MarcosRodrigues />} />
            </Routes>
        </Box>
    );
};

export default AppRoutes;
