'use client'
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { DevTool } from "@hookform/devtools";
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Box,
  Typography,
  Container
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

type FormInputs = {
  email: string;
  password: string;
  remember: boolean;
};

const Home: React.FC = () => {

  const { register, handleSubmit, formState: { errors }, control } = useForm<FormInputs>();
  
  const onSubmit: SubmitHandler<FormInputs> = data => {
    console.log(data);
    // * Adicionar logica de login aqui
  };
  
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Entrar
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            label="Endereço de Email"
            autoComplete="email"
            autoFocus
            {...register('email', { required: 'Email é obrigatório' })}
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Senha"
            type="password"
            autoComplete="current-password"
            {...register('password', { required: 'Senha é obrigatória' })}
            error={Boolean(errors.password)}
            helperText={errors.password?.message}
          />
          <FormControlLabel
            control={<Checkbox color="primary" {...register('remember')} />}
            label="Lembrar-me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Entrar
          </Button>
        </Box>
      </Box>
      <DevTool control={control} />
    </Container>
  );
};

export default Home;
