import React from 'react';
import styled from 'styled-components';



const ContentContainer = () => {
   return (
      <StyledContent>
         <div class="banner_headline">
            <h1>Amor e Nutrição</h1>
            <h2>Meu objetivo é alcançar o seu objetivo através da reeducação alimentar. </h2>
         </div>
         <div class="banner_options">
            <div class="banner1">
               <div class="banner_title">Planejamento</div>
               <div class="banner_desc">
                  <p>Juntos elaboraremos um plano de dieta que melhor se ajuste ao seu perfil e objetivo. </p>
               </div>
               
            </div>
            <div class="banner2">
               <div class="banner_title">Auto Estima</div>
               <div class="banner_desc">
                  <p>Descubra a melhor versão de você mesmo, obtenha resultados físicos de nível profissional melhorando sua saúde e autoestima.</p>
               </div>
               
            </div>
            <div class="banner3">
               <div class="banner_title">Horários de Atendimento</div>
               {/* <div class="week"> */}
                  <p>Segunda-Sexta</p>
                  <p>8:00 - 17:00</p>
               {/* </div> */}
            </div>
         </div>
      </StyledContent>
   )
}

const StyledContent = styled.div`
   display: flex;
   justify-content: space-between;
   width: 990px;
   flex-direction: column;

   .banner_headline {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
   }

   .banner_headline h1 {
      color: rgba(44, 46, 47);
      font-size: 70px;
      margin: 0;
      padding: 0;
      max-width: 350px;
   }

   .banner_headline h2 {
      color: rgba(44, 46, 47);
      font-size: 21px;
      margin: 0;
      padding: 0;
      max-width: 350px;
      margin-top: 30px;
   }

   .banner_options {
      height: 210px;
      display: flex;
   }

   .banner1,
   .banner2,
   .banner3 {
      flex: 1;
      color: #FFF;
      
      padding: 20px;
   }

   .banner1 {
      background-color: #FFBEA5;;
   }

   .banner2 {
      background-color: #E5AB94
;
   }

   .banner3 {
      background-color: #CC9884;
   }

   .banner_title {
      font-size: 21px;
   }

   .banner_desc {
      font-size: 18px;
      margin-top: 20px;
      margin-bottom: 20px;
   }

`

export default ContentContainer;