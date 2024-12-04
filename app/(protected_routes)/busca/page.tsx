import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import TabelaDeBusca, { AssetDataBusca } from '@/components/buscar/TabelaDeBusca'; 

const rows: AssetDataBusca[] = [ 
  { id: 1, tombo: '001', tipo: 'Móvel', descricao: 'Cadeira de escritório', localizacao: 'Sala 101' },
  { id: 2, tombo: '002', tipo: 'Eletrônico', descricao: 'Computador Desktop', localizacao: 'Sala 102' },
  { id: 3, tombo: '003', tipo: 'Eletrônico', descricao: 'Projetor', localizacao: 'Auditório' },
  { id: 4, tombo: '004', tipo: 'Móvel', descricao: 'Mesa de reunião', localizacao: 'Sala de Reuniões' },
  { id: 5, tombo: '005', tipo: 'Eletrônico', descricao: 'Notebook', localizacao: 'Sala 103' },
];

const Page: React.FC = () => {

  return (
    <Container component="main" maxWidth="xl">
      <Box sx={{ marginTop: 8, marginX: 8 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Lista de Equipamentos
        </Typography>
        <TabelaDeBusca rows={rows} />
      </Box>
    </Container>
  );
};

export default Page;
