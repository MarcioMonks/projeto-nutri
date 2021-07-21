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
               <p>Venha conhecer nossa clínica e ver que até um gordo balofo como você, pode emagrecer com saúde. Basta parar de se entupir de refrigerante, hamburger e comer mais saladinhas.</p>
            </div>
            <CardContainer>
               <Cards titulo="Teste de card" color="#FFBEA5">
                  <h2>Nutrição desportiva</h2>
                  <p>Quer esportezinho, quer?</p>
                  <p>Então tem que comer, seu bosta. Vem aqui aprender a comer bem.</p>
                  
               </Cards>
               <Cards titulo="Outro card" color="#E5AB94">
                  <h2>Nutrição clínica</h2>
                  <p>Venha nos conhecer e perder essa sua pança gorda e essa tonelada de pelancas, seu gordo inútil</p>
               </Cards>
               <Cards titulo="Outro card" color="#CC9884">
                  <h2>No nigga</h2>
                  <p>Aqui a gente é racista. Nem chega perto, negão</p>
               </Cards>  
            </CardContainer>   
         </PageContainer>   
         
      </>
   )
}

export default Home;