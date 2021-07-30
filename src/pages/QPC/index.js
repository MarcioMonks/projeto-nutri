
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
import Checkbox from '../../components/FormsUI/Checkbox';
import states from '../../data/states.json';

const useStyles = makeStyles((theme) => ({
   formWrapper: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
   },
}));

const INITIAL_FORM_STATE = {
   dataConsulta: '',
   objConsulta: '',
   histConsulta: '',
   horaAcordar: '',
   horaDormir: '',
   qualidadeSono: '',
   acordaANoite: '',  
   insonia: '',
   rotina: '',
   lazer: '',
   atividadeFisica: '',
};

const FORM_VALIDATION = Yup.object().shape({
   dataConsulta: Yup.date()
      .required('*campo obrigatório'),
   objConsulta: Yup.string()
      .required('*campo obrigatório'),
   histConsulta: Yup.string()
      .required('*campo obrigatório'),
   qualidadeSono: Yup.string()
      .required('*campo obrigatório'),
   acordaANoite: Yup.string()
      .required('*campo obrigatório'),
   insonia: Yup.string()
      .required('*campo obrigatório'),
   rotina: Yup.string()
      .required('*campo obrigatório'),
   lazer: Yup.string()
      .required('*campo obrigatório'),
   atividadeFisica: Yup.string()
      .required('*campo obrigatório')
   // cpf: Yup.number()
   //    .required('*campo obrigatório')
   //    .integer()
   //    .typeError('Por favor, informe um número de CPF válido'),
   
});

const QPC = () => {


   const classes = useStyles();

   return (
      <>
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
                                    <h2>Questionário Pré-Consulta</h2>
                                 </Typography>
                              </Grid>

                              <Grid item xs={12}>
                                 <Typography>
                                    <p>Olá! Este questionário serve para que eu possa conhecer você e seus objetivos um pouco melhor! É de extrema importância que você o responda antes da consulta, assim poderem lhe proporcionar um atendimento mais qualificado!</p>
                                 </Typography>
                              </Grid>

                              <Grid item xs={3}>
                                 <DateTimePicker
                                    name="dataConsulta"
                                    label="Data da sua consulta"
                                 />
                              </Grid>

                              <Grid item xs={12}>
                                 <Textfield
                                    name="objConsulta"
                                    label="Qual seu objetivo com a consulta?"
                                    multiline={true}
                                    rows={4}
                                 />   
                              </Grid>

                              <Grid item xs={12}>
                                 <Textfield
                                    name="histConsulta"
                                    label="Já consultou com um nutricionista antes? Se sim, funcionou?"
                                    multiline={true}
                                    rows={4}
                                 />   
                              </Grid>

                              <Grid item xs={12}>
                                 <Typography>
                                    <h3>Rotina</h3>
                                 </Typography>
                              </Grid>

                              <Grid item xs={6}>
                                 <Textfield
                                    name="horaAcordar"
                                    label="Em que horário costuma acordar?"
                                 />   
                              </Grid>

                              <Grid item xs={6}>
                                 <Textfield
                                    name="horaDormir"
                                    label="Em que horário costuma dormir?"
                                 />   
                              </Grid>

                              <Grid item xs={6}>
                                 <Textfield
                                    name="qualidadeSono"
                                    label="Você considera a qualidade do seu sono boa ou ruim?"
                                 />   
                              </Grid>

                              <Grid item xs={6}>
                                 <Textfield
                                    name="acordaANoite"
                                    label="Você costuma acordar durante a noite? Quantas vezes?"
                                 />   
                              </Grid>

                              <Grid item xs={12}>
                                 <Textfield
                                    name="insonia"
                                    label="Você tem insônia? Costuma tomar medicação para dormir?"
                                    multiline={true}
                                    rows={4}
                                 />   
                              </Grid>

                              <Grid item xs={12}>
                                 <Textfield
                                    name="rotina"
                                    label="Como é sua rotina de trabalho e/ou estudos?"
                                    multiline={true}
                                    rows={4}
                                 />   
                              </Grid>

                              <Grid item xs={12}>
                                 <Textfield
                                    name="lazer"
                                    label="O que você costuma fazer em seus momentos livres (lazer)?"
                                    multiline={true}
                                    rows={4}
                                 />   
                              </Grid>

                              <Grid item xs={12}>
                                 <Typography>
                                    <h3>Atividades Físicas</h3>
                                 </Typography>
                              </Grid>

                              <Grid item xs={12}>
                                 <Textfield
                                    name="atividadeFisica"
                                    label="Você é pratica atividades físicas? Se sim, quais?"
                                    multiline={true}
                                    rows={4}
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
      
      </>
      
   )
}

export default QPC;