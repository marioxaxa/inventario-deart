"use client"
import React, { useState } from 'react'
import {  Box, Button, FormControl, TextField, InputAdornment, InputLabel, Select, MenuItem, Container } from '@mui/material';
import { register } from 'module'
import { Option } from '@mui/base/Option';
import { OptionGroup } from '@mui/base/OptionGroup';
import { SelectChangeEvent } from "@mui/material";


const Formulario = () => {

  //const [tombo, setTombo] = useState("");
  //const [tipo, setTipo] = useState("");
  //const [descricao, setDescricao] = useState("");
  //const [obs, setObs] = useState("");
  const [selecao, setSelecao] = useState("");

  const SelectChange = (event: SelectChangeEvent) => {
    setSelecao(event.target.value);
  };


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Processar dados do formulário aqui
    console.log('Formulário enviado:', { selecao });
  };


  // Puxar salas do baco de dados
  const classData = ["20", "30", "A", "B"];

  return(
    <Container component="main">

      <form onSubmit={handleSubmit}>

        <Box
          sx={{
            marginX: "auto",
            width: "600px",
            maxWidth: "90%",
            padding: 4,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <TextField
            //value = {tombo}
            InputProps={{
              startAdornment: <InputAdornment position="start">Tombo</InputAdornment>,
            }}
            margin="normal"
            fullWidth
            //error={tomboError}
            //helperText={tomboError ? "Tombo é obrigatório" : ""}
          />

          <TextField 
            margin = "normal"
            fullWidth
            //value = {tipo}
            label = "Tipo"
          />
          
          <TextField 
            margin = "normal"
            fullWidth
            //value = {descricao}
            label = "Descrição"
          />
          
        
          <InputLabel id="sala-select-label" sx={{position: 'left', mb: 1}}>Sala Atual</InputLabel>
          <Select
            labelId="sala-select-label"
            value={selecao}
            onChange={SelectChange}
            sx={{
              margin: "auto", 
              width: "100%",
              //textAlign: 'center',
            }}
            displayEmpty
          >
            <MenuItem value="" disabled>
              Sala Atual
            </MenuItem>
            
            {classData.map((opcao, index) => (
              <MenuItem key={index} value={opcao}>
                {opcao}
              </MenuItem>
            ))}   

          </Select>
          

          <InputLabel id="obs-label" sx={{position: 'left', mb: -1, mt: 1}}>Obs</InputLabel>
          <TextField 
            aria-labelledby="obs-label"
            margin = "normal"
            fullWidth
            //value = {obs}
            label = "Obs"
          />
          
          <Box
            sx={{
              mt: 4, mb: 2,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Button
              type = "reset"
              variant='contained'
              sx={{
                backgroundColor: "#f6685e",
                '&:hover': {
                  backgroundColor: "#f44336",
                },
              }}
            >
              Limpar
            </Button>

            <Button
              type = "submit"
              variant='contained'
              color='secondary'
              sx={{
                '&:hover':{
                  backgroundColor: '#00e676',
                },
              }}
            >
              Inserir
            </Button>
          </Box>
          
        </Box>

      </form>
    </Container>
  )
}

export default Formulario;



{/*<OptionGroup label="Prédio Principal">
<MenuItem value="20">20</MenuItem>
<MenuItem value="30">30</MenuItem>
</OptionGroup>
<OptionGroup label="Anexo">
<MenuItem value="A">A</MenuItem>
<MenuItem value="B">B</MenuItem>
</OptionGroup>*/}