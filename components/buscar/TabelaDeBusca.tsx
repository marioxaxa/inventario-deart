"use client";
import { ptBR } from "@mui/x-data-grid/locales";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import ExploreIcon from '@mui/icons-material/Explore';
import { IconButton } from "@mui/material";
import { useRouter } from "next/navigation";

export interface AssetDataBusca {
    id: number;
    tombo: string;
    tipo: string;
    descricao: string;
    localizacao: string;
}

const columns: GridColDef[] = [
    {
        field: "edit",
        headerName: "",
        sortable: false,
        width:60,
        renderCell: (params) => {
          const router = useRouter()

          const onClick = (e : MouseEvent) => {
              e.stopPropagation(); // don't select this row after clicking
              console.log(params);
              
              router.replace('/editar?id='+params.row.tombo)
          };

            return (
                <IconButton onClick={(e) => {onClick(e)}} >
                    <EditIcon />
                </IconButton>
            );
        },
    },
    {
        field: "history",
        headerName: "",
        sortable: false,
        width:60,
        renderCell: (params) => {
          
          const router = useRouter()

            const onClick = (e : MouseEvent) => {
                e.stopPropagation(); // don't select this row after clicking
                console.log(params);
                
                router.replace('/historico?id='+params.row.tombo)
            };

            return (
                <IconButton onClick={(e) => {onClick(e)}} >
                    <ExploreIcon />
                </IconButton>
            );
        },
    },
    { field: "tombo", headerName: "Tombo", width: 300 },
    { field: "tipo", headerName: "Tipo", width: 300 },
    { field: "descricao", headerName: "Descrição", width: 300 },
    {
        field: "localizacao",
        headerName: "Localização",
        width: 250,
    },
];

export default function TabelaDeBusca({ rows }: { rows?: AssetDataBusca }) {
    return (
        <div style={{ height: 400, width: "100%" }}>
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
    );
}
