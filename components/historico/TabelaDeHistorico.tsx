"use client";
import { ptBR } from "@mui/x-data-grid/locales";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React from "react";
import ItemI from "@/@types/ItemI";

export interface AssetDataHistorico {
    id: string;
    localizacao: string;
    responsavel: string;
    data_da_entrega: string;
    data_de_retorno?: string;
}

const columns: GridColDef[] = [
    {
        field: "localizacao",
        headerName: "Localização",
        width: 300,
    },
    { field: "data_da_entrega", headerName: "Data da entrega", width: 200 },
    { field: "data_de_retorno", headerName: "Data de retorno", width: 200 },
    { field: "responsavel", headerName: "Responsavel", width: 300 },
];

export default function TabelaDeHistorico({
    rows,
    item,
}: {
    rows?: AssetData;
    item?: ItemI;
}) {
    return (
        <div style={{ height: 400, width: "100%" }}>
            {item ? (
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSizeOptions={[5]}
                    initialState={{
                        pagination: { paginationModel: { pageSize: 5 } },
                    }}
                    localeText={
                        ptBR.components.MuiDataGrid.defaultProps.localeText
                    }
                />
            ) : (
                <div>Escolha um item</div>
            )}
        </div>
    );
}
