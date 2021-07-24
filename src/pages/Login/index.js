import React from 'react';
import { useHistory } from 'react-router-dom';
import { PageArea } from './styled';
import { PageContainer, PageTitle } from '../../components/MainComponents';

const Page = () => {

   let history = useHistory();

   const handleButton = () => {
      history.replace('/nutri');
   };

   return (
      <PageContainer>
         <PageTitle>Faça seu login</PageTitle>
         <PageArea>
            <form>
               <label className="area">
                  <div className="area--title">E-mail</div>
                  <div className="area--input">
                     <input type="email"/>
                  </div>
               </label>   
               <label className="area">
                  <div className="area--title">Senha</div>
                  <div className="area--input">
                     <input type="password"/>
                  </div>
               </label>  
               <label className="area">
                  <div className="area--title">Lembrar Senha</div>
                  <div className="area--input">
                     <input type="checkbox"/>
                  </div>
               </label>  
               <label className="area">
                  <div className="area--title"></div>
                  <div className="area--input">
                     <button onClick={handleButton}>Fazer Login</button>
                  </div>
               </label>  
               <div>
                  
               </div>
            </form>
            
         </PageArea>
         
      </PageContainer>
   )
}

export default Page;