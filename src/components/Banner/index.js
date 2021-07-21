import React from 'react';

import { StyledBanner, Container } from './styled';

const Banner = () => {
   return (
      <StyledBanner>
         <Container>
            <div className="banner_headline">
               <h1>Amor e Nutrição</h1>
               <h2>Meu objetivo é alcançar o seu objetivo através da reeducação alimentar.</h2>
            </div>
            {/* <div className="banner_options">
               <div className="banner1">
                  <div className="banner_title">Planejamento</div>
                  <div className="banner_desc">Juntos elaboraremos um plano de dieta que melhor se ajuste ao seu perfil e objetivo.</div>
               </div>
               <div className="banner2">
                  <div className="banner_title">Auto Estima</div>
                  <div className="banner_desc">Descubra a melhor versão de você mesmo, obtenha resultados físicos de nível profissional melhorando sua saúde e autoestima.</div>
               </div>
               <div className="banner3">
                  <div className="banner_title">Horários de Atendimento</div>
                  <div className="banner_desc">
                     <p>De segunda à sexta-feira</p>
                     <p>Manhã: das 8h às 12h</p>
                     <p>Tarde: das 14h às 19h</p>
                  </div>
               </div>
            </div> */}
         </Container>
      </StyledBanner>
   )
}

export default Banner
