"use client"
import React, { useState } from 'react'
import {  Box, Button, FormControl, TextField, InputAdornment, InputLabel, Select, MenuItem } from '@mui/material';
import { register } from 'module'
import { Option } from '@mui/base/Option';
import { OptionGroup } from '@mui/base/OptionGroup';
import { SelectChangeEvent } from "@mui/material";


const Formulario = () => {

  //const [tombo, setTombo] = useState("");
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
    <div>

      <form onSubmit={handleSubmit}>

        <Box
          sx={{
            marginX: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <TextField
            id="outlined-start-adornment"
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
            //value = {descricao}
            label = "Descrição"
          />
          <TextField 
            margin = "normal"
            fullWidth
            //value = {obs}
            label = "Obs"
          />

        
          <InputLabel id="sala-select-label" sx={{position: 'left',}}>Sala Atual</InputLabel>
          <Select
            labelId="sala-select-label"
            value={selecao}
            onChange={SelectChange}
            sx={{margin: "normal",}}
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

          <Button
            type = "submit"
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            Inserir
          </Button>
        </Box>

      </form>
    </div>
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