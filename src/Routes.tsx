import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import MarcosRodrigues from './cartoes/marcos-rodrigues/index';
import EuripedesTaxis from './cartoes/euripedes_taxis/index';
import GenerationQrCode from "./GenerationQrCode/index";


const AppRoutes: React.FC = () => {
    return (
        <Box w={'full'}>
            <Routes>
                <Route path="/marcos-rodrigues" element={<MarcosRodrigues />} />
                <Route path="/euripedes-taxista" element={<EuripedesTaxis />} />
                <Route path="/generation-qrCode" element={<GenerationQrCode />} />
            </Routes>
        </Box>
    );
};

export default AppRoutes;
