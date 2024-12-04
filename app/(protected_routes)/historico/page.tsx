import TabelaDeHistorico, {
    AssetDataHistorico,
} from "@/components/historico/TabelaDeHistorico";
import items from "@/data/items";
import { Container, Box, Typography, Stack, Divider } from "@mui/material";
import React from "react";

const rows: AssetDataHistorico[] = [
    {
        id: "sdfjsdnfpdsfdsf",
        localizacao: "Sala 101",
        data_da_entrega: "01/12/2024",
        responsavel: "Marcela",
    },
    {
        id: "sdfdsfdsgsdgret",
        localizacao: "Sala 101",
        data_da_entrega: "24/11/2024",
        data_de_retorno: "01/12/2024",
        responsavel: "Marcela",
    },
    {
        id: "juykjudjgfhgsh",
        localizacao: "Sala 205",
        data_da_entrega: "21/11/2024",
        data_de_retorno: "22/11/2024",
        responsavel: "Marcela",
    },
    {
        id: "ghnmndghrhrs",
        localizacao: "Auditorio A",
        data_da_entrega: "02/11/2024",
        data_de_retorno: "10/11/2024",
        responsavel: "Vinicius",
    },
    {
        id: "ghjfgjkghkhgjmdg",
        localizacao: "Sala 21",
        data_da_entrega: "24/10/2024",
        data_de_retorno: "27/10/2024",
        responsavel: "Vinicius",
    },
    {
        id: "mqdfafhgkdh",
        localizacao: "Sala 304",
        data_da_entrega: "24/11/2024",
        data_de_retorno: "24/10/2024",
        responsavel: "Marcela",
    },
];

export default function Page() {
    const item = items[2];

    return (
        <Container component="main" maxWidth="xl">
            <Box sx={{ marginTop: 8, marginX: 8 }}>
                <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                >
                    <Typography variant="h4" component="h1" gutterBottom>
                        Historico
                    </Typography>
                    <Stack direction={"row"} gap={2} >
                        <Typography>{item.sku}</Typography>
                        <Divider
                            orientation="vertical"
                            variant="fullWidth"
                            flexItem
                        />
                        <Typography>{item.tipo}</Typography>
                    </Stack>
                </Stack>
                <TabelaDeHistorico rows={rows} item={item} />
            </Box>
        </Container>
    );
}
