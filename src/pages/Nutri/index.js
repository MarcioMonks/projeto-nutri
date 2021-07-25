import React from 'react';
import { PageArea } from './styled';
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
   Container,
   Grid,
   Typography
} from '@material-ui/core';
import Textfield from '../../components/FormsUI/Textfield/index';
import Select from '../../components/FormsUI/Select/index';
import countries from '../../data/countries.json';
import states from '../../data/states.json'

const useStyles = makeStyles((theme) => ({
   formWrapper: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(8),
   },
}));

const INITIAL_FORM_STATE = {
   nome: '',
   birthDate: '',
   address: '',
   district: '',
   city: '',
   state: '',
   country: '',
   email: '',
   phone: '',
   
};

const FORM_VALIDATION = Yup.object().shape({
   nome: Yup.string()
      .required('Campo obrigatório'),
   birthDate: Yup.date()
      .required('Campo obrigatório'),
   address: Yup.string()
      .required('Campo obrigatório'),
   district: Yup.string()
      .required('Campo obrigatório'),
   city: Yup.string()
      .required('Campo obrigatório'),
   state: Yup.string()
      .required('Campo obrigatório'),
   country: Yup.string()
      .required('Campo obrigatório'),
   email: Yup.string()
      .email('Email inválido'),
   phone: Yup.number()
      .integer()
      .typeError('Por favor, informe um número de telefone válido'),
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

                           <Grid item xs={3}>
                              <Select
                                 name="country"
                                 label="País"
                                 options={countries}
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