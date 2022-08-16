import React from 'react'
import { Divider, Title, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula01_02 = () => {
  return (
    <Page nextRoute='Aula01_03'>
        <Title style={Styles.title}>Arquivos</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>
        
        <Paragraph>
          As vantagens de se usar arquivos:{'\n'}
          - Armazenamento durável. Os dados permanecem disponíveis para uso após fechar o programa.{'\n'}
          - Permitem armazenar grande quantidade de informação.{'\n'}
          - O acesso aos dados pode ser sequencial ou não.{'\n'}
          - Mais de um programa pode utilizá-lo ao mesmo tempo (acesso concorrente).{'\n'}{'\n'}
          
          Basicamente, a linguagem C trabalha com dois tipos de arquivos: de texto e binário.{'\n'}
        </Paragraph>
    </Page>
  );
};

export default Aula01_02;
