import React from 'react';

import Banner from '../../components/Banner';
import Cards from '../../components/Cards';

import { CardContainer } from '../../components/Cards/styled'
import { PageContainer, PageTitle } from '../../components/MainComponents';


const Home = () => {
   return (
      <>
         <Banner/>

         {/* <div className='textBanner'>
            <h2>Saúde para você é <strong>essencial</strong></h2>
            <p>Para nós é um <strong>compromisso</strong></p>   
         </div> */}
         <PageContainer>
            <div>
               <PageTitle>Olá! Eu sou a sua nutricionista!</PageTitle>
               <p>Venha conhecer nossa clínica e juntos vamos montar um plano nutricional especialmente para você.</p>
            </div>
            <CardContainer>
               <Cards titulo="Teste de card" color="#FFBEA5">
                  <h2>Nutrição desportiva</h2>
                  <p>Aqui vai um texto</p>
                  <p>Aqui outro texto falando sobre os benefícios do esporte e dieta balanceada.</p>
                  
               </Cards>
               <Cards titulo="Outro card" color="#E5AB94">
                  <h2>Nutrição clínica</h2>
                  <p>Aqui vai um texto falando sobre nutrição clínica</p>
               </Cards>
               <Cards titulo="Outro card" color="#CC9884">
                  <h2>Outro card</h2>
                  <p>Mais outro texto falando sobre os benefícios de uma boa alimentação</p>
               </Cards>  
            </CardContainer>   
         </PageContainer>   
         
      </>
   )
}

export default Home;