import React from 'react';
import { PageArea } from './styled';
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Form, prepareDataForValidation } from 'formik';
import * as Yup from 'yup';
import {
   Container,
   Grid,
   Typography
} from '@material-ui/core';
import Textfield from '../../components/FormsUI/Textfield/index';
import Select from '../../components/FormsUI/Select/index';
import DateTimePicker from '../../components/FormsUI/DateTime';
import states from '../../data/states.json';
import gender from '../../data/gender.json';
import ethnicities from '../../data/ethnicities.json';

const useStyles = makeStyles((theme) => ({
   formWrapper: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(8),
   },
}));

const INITIAL_FORM_STATE = {
   nome: '',
   birthDate: '',
   gender: '',
   ethnicity: '',
   rg: '',
   cpf: '',
   phone: '',
   address: '',
   district: '',
   city: '',
   state: '',
   email: '',   
};

const FORM_VALIDATION = Yup.object().shape({
   nome: Yup.string()
      .required('Campo obrigatório'),
   birthDate: Yup.date()
      .required('Campo obrigatório'),
   gender: Yup.string()
      .required('Campo obrigatório'),
   ethnicity: Yup.string()
      .required('Campo obrigatório'),
   cpf: Yup.number()
      .required('Campo obrigatório')
      .integer()
      .typeError('Por favor, informe um número de CPF válido'),
   rg: Yup.number()
      .integer()
      .typeError('Por favor, informe um número de RG válido'),
   phone: Yup.number()
      .integer()
      .typeError('Por favor, informe um número de telefone válido'),
   address: Yup.string()
      .required('Campo obrigatório'),
   district: Yup.string()
      .required('Campo obrigatório'),
   city: Yup.string()
      .required('Campo obrigatório'),
   state: Yup.string()
      .required('Campo obrigatório'),
   email: Yup.string()
      .email('Email inválido'),
});

const Nutri = () => {

   const classes = useStyles();

   return (
      <Grid container>
         <Grid item xs={12}>
            <Container maxWidth="md">
               <div className={classes.formWrapper}>

                  <Formik
                     initialValues={{
                        ...INITIAL_FORM_STATE
                     }}
                     validationSchema={FORM_VALIDATION}
                     onSubmit={values => {
                        console.log(values);
                     }}
                  >
                     <Form>
                        <Grid container spacing={2}>
                           <Grid item xs={12}>
                              <Typography>
                                 <h2>Cadastro de Paciente</h2>
                              </Typography>
                           </Grid>

                           <Grid item xs={12}>
                              <Typography>
                                 Dados Pessoais:
                              </Typography>
                           </Grid>

                           <Grid item xs={12}>
                              <Textfield
                                 name="nome"
                                 label="Nome"
                              />
                           </Grid>

                           <Grid item xs={4}>
                              <DateTimePicker
                                 name="birthDate"
                                 label="Data de nascimento"
                              />
                           </Grid>

                           <Grid item xs={4}>
                              <Select
                                 name="ethnicity"
                                 label="Raça/Cor/Etnia"
                                 options={ethnicities}
                              />
                           </Grid>

                           <Grid item xs={4}>
                              <Select
                                 name="gender"
                                 label="Gênero"
                                 options={gender}
                              />
                           </Grid>

                           <Grid item xs={4}>
                              <Textfield
                                 name="cpf"
                                 label="CPF"
                              />
                           </Grid>

                           <Grid item xs={4}>
                              <Textfield
                                 name="rg"
                                 label="RG"
                              />
                           </Grid>

                           <Grid item xs={4}>
                              <Textfield
                                 name="phone"
                                 label="Telefone"
                              />
                           </Grid>

                           <Grid item xs={12}>
                              <Typography>
                                 Endereço:
                              </Typography>
                           </Grid>

                           <Grid item xs={4}>
                              <Textfield
                                 name="address"
                                 label="Logradouro"
                              />
                           </Grid>

                           <Grid item xs={3}>
                              <Textfield
                                 name="district"
                                 label="Bairro"
                              />
                           </Grid>

                           <Grid item xs={3}>
                              <Textfield
                                 name="city"
                                 label="Cidade"
                              />
                           </Grid>

                           <Grid item xs={2}>
                              <Select
                                 name="state"
                                 label="Estado"
                                 options={states}
                              />
                           </Grid>

                           <Grid item xs={12}>
                              <Typography>
                                 E-mail
                              </Typography>
                           </Grid>

                           <Grid item xs={12}>
                              <Typography>
                                 Telefone
                              </Typography>
                           </Grid>

                        </Grid>
                     </Form>
                  </Formik>

               </div>
            </Container>
         </Grid>
      </Grid>
   )
}

export default Nutri;