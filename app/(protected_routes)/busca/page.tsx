import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Container, Box, Typography } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'tombo', headerName: 'Tombo', width: 300 },
  { field: 'tipo', headerName: 'Tipo', width: 300 },
  { field: 'descricao', headerName: 'Descrição', width: 300 },
  {
    field: 'localizacao',
    headerName: 'Localização',
    width: 300,
  },
];

interface AssetData {
  id: number;
  tombo: string;
  tipo: string;
  descricao: string;
  localizacao: string;
}

const rows: AssetData[] = [
  { id: 1, tombo: '001', tipo: 'Móvel', descricao: 'Cadeira de escritório', localizacao: 'Sala 101' },
  { id: 2, tombo: '002', tipo: 'Eletrônico', descricao: 'Computador Desktop', localizacao: 'Sala 102' },
  { id: 3, tombo: '003', tipo: 'Eletrônico', descricao: 'Projetor', localizacao: 'Auditório' },
  { id: 4, tombo: '004', tipo: 'Móvel', descricao: 'Mesa de reunião', localizacao: 'Sala de Reuniões' },
  { id: 5, tombo: '005', tipo: 'Eletrônico', descricao: 'Notebook', localizacao: 'Sala 103' },
];

const Page: React.FC = () => {
  return (
    <Container component="main" maxWidth="xl">
      <Box sx={{ marginTop: 8 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Lista de Equipamentos
        </Typography>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSizeOptions={[5]}
            initialState={{
              pagination: { paginationModel: { pageSize: 5 } },
            }}
          />
        </div>
      </Box>
    </Container>
  );
};

export default Page;
