import React, { useState } from 'react';
import Modal from '../../components/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
   Button,
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
import occupations from '../../data/occupations.json';
import { PageContainer } from '../../components/MainComponents';

const useStyles = makeStyles((theme) => ({
   formWrapper: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
   },
}));

const INITIAL_FORM_STATE = {
   name: '',
   birthDate: '',
   gender: '',
   ethnicity: '',
   cpf: '',
   rg: '',
   email: '',  
   phone: '',
   address: '',
   district: '',
   city: '',
   state: '',
   occupation: '',
};

const FORM_VALIDATION = Yup.object().shape({
   name: Yup.string()
      .required('*campo obrigatório'),
   birthDate: Yup.date()
      .required('*campo obrigatório'),
   gender: Yup.string()
      .required('*campo obrigatório'),
   ethnicity: Yup.string()
      .required('*campo obrigatório'),
   cpf: Yup.number()
      .required('*campo obrigatório')
      .integer()
      .typeError('Por favor, informe um número de CPF válido'),
   rg: Yup.number()
      .integer()
      .typeError('Por favor, informe um número de RG válido'),
   email: Yup.string()
      .email('Email inválido'),
   phone: Yup.number()
      .integer()
      .typeError('Por favor, informe um número de telefone válido'),
   address: Yup.string()
      .required('*campo obrigatório'),
   district: Yup.string()
      .required('*campo obrigatório'),
   city: Yup.string()
      .required('*campo obrigatório'),
   state: Yup.string()
      .required('*campo obrigatório'),
   occupation: Yup.string()   
});

const Nutri = () => {

   const [ modalVisible, setModalVisible ] = useState(false);

   const handleButtonClick = () => {
      setModalVisible(true);
   }

   const classes = useStyles();

   return (
      <>
      <PageContainer>
         <Button variant="contained" color="primary" onClick={handleButtonClick}>Cadastrar paciente</Button>
         <Button variant="contained" color="secondary">Iniciar Consulta</Button>
      </PageContainer>
      

      <Modal visible={modalVisible} setVisible={setModalVisible}>
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
                                    name="name"
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
                                    name="email"
                                    label="E-mail"
                                 />
                              </Grid>

                              <Grid item xs={4}>
                                 <Textfield
                                    name="phone"
                                    label="Telefone"
                                 />
                              </Grid>

                              <Grid item xs={4}>
                                 <Select
                                    name="occupation"
                                    label="Profissão"
                                    options={occupations}
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
                              <Button variant="contained" color="primary">Salvar</Button>
                              </Grid> 
                           </Grid>
                        </Form>
                     </Formik>
                     
                  </div>
                  
                  
               </Container>
            </Grid>   
         </Grid>
      </Modal>
      </>
      
   )
}

export default Nutri;