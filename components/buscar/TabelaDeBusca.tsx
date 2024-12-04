'use client'
import { ptBR } from '@mui/x-data-grid/locales';
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import React from 'react'

export interface AssetDataBusca {
    id: number;
    tombo: string;
    tipo: string;
    descricao: string;
    localizacao: string;
  }

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

export default function TabelaDeBusca({rows} : {rows ?: AssetDataBusca}) {
  return (
    <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows ?? []}
            columns={columns}
            pageSizeOptions={[5]}
            initialState={{
              pagination: { paginationModel: { pageSize: 5 } },
            }}
            localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
          />
        </div>
  )
}
