import React, { useState } from 'react';
import { Box, Input, Button, Center, Link, Text } from '@chakra-ui/react';
import QRCode from 'qrcode.react';
import html2canvas from 'html2canvas';

function GenerationQrCode() {
    const [link, setLink] = useState('');
    const [qrCodeData, setQrCodeData] = useState('');
    const [qrCodeSize, setQrCodeSize] = useState(128);

    const generateQRCode = () => {
        setQrCodeData(link);
    };

    const downloadQRCode = () => {
        const qrCodeElement: any = document.getElementById('qrcode');
        html2canvas(qrCodeElement).then((canvas) => {
            const pngUrl = canvas.toDataURL('image/png');
            const a = document.createElement('a');
            a.href = pngUrl;
            a.download = 'qrcode.png';
            a.click();
        });
    };

    return (
        <Center height="100vh">
            <Box p={4} textAlign="center">
                <Input
                    placeholder="Insira o link"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    mb={4}
                />
                <Text>Selecione o tamanho do QR Code:</Text>
                <Input
                    type="number"
                    value={qrCodeSize}
                    onChange={(e) => setQrCodeSize(parseInt(e.target.value))}
                    mb={4}
                />
                <Button colorScheme="teal" onClick={generateQRCode}>
                    Gerar QR Code
                </Button>
                {qrCodeData && (
                    <Box mt={4}>
                        <QRCode id="qrcode" value={qrCodeData} size={qrCodeSize} />
                    </Box>
                )}
                {qrCodeData && (
                    <Box mt={4}>
                        <Link onClick={downloadQRCode} color="teal.500" cursor="pointer">
                            Baixar QR Code
                        </Link>
                    </Box>
                )}
            </Box>
        </Center>
    );
}

export default GenerationQrCode;
