"use client";
import TextInputForm from "@/components/forms/TextInputForm";
import { Button, Container, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

export default function Page() {
    const methods = useForm();

    return (
        <Container
            maxWidth="sm"
            sx={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <FormProvider {...methods}>
                <Paper elevation={6} sx={{ padding: 8 }}>
                    <Typography
                        variant="h6"
                        textAlign={"center"}
                        paddingBottom={2}
                    >
                        Inventário Deart
                    </Typography>
                    <Stack gap={2} direction={"column"}>
                        <TextInputForm
                            name="user"
                            label="CPF"
                            placeholder="Digite aqui"
                        />
                        <TextInputForm
                            name="password"
                            label="Senha"
                            placeholder="Digite aqui"
                            type="password"
                        />
                        <Button variant="contained"> Login </Button>
                    </Stack>
                </Paper>
                <DevTool control={methods.control} />
            </FormProvider>
        </Container>
    );
}
