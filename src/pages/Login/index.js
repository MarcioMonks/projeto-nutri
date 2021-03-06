import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PageArea } from './styled';
import { PageContainer, PageTitle } from '../../components/MainComponents';
import useAPI from '../../helpers/nutriAPI';

const Page = () => {
   const api = useAPI()

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [rememberPassword, setRememberPassword] = useState('');
   const [disabled, setDisabled] = useState(false);
   const [error, setError] = useState('');

   let history = useHistory();

   const handleSubmit = async (e) => {
      e.preventDefault();
      setDisabled(true);

      const json = await api.login(email, password);

      if(json.error) {
         setError(json.error);
      } else {
         
      }
   };

   return (
      
         <PageContainer>
         <PageTitle>Login</PageTitle>
         <PageArea>
            <form onSubmit={handleSubmit}>
               <label className="area">
                  <div className="area--title">E-mail</div>
                  <div className="area--input">
                     <input type="email" disabled={disabled}/>
                  </div>
               </label>   
               <label className="area">
                  <div className="area--title">Senha</div>
                  <div className="area--input">
                     <input type="password" disabled={disabled}/>
                  </div>
               </label>  
               <label className="area">
                  <div className="area--title">Lembrar Senha</div>
                  <div className="area--input">
                     <input type="checkbox" disabled={disabled}/>
                  </div>
               </label>  
               <label className="area">
                  <div className="area--title"></div>
                  <div className="area--input">
                     <button disabled={disabled}>Fazer Login</button>
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