import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula04_01 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>String - Limpeza do Buffer</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>Às vezes podem ocorrer erros durante a leitura de caracteres ou strings decorrentes de um buffer "sujo".</Paragraph>
        <Paragraph>
            Para resolver este problema a linguagem C disponibiliza uma função na biblioteca
            <Text style={{ fontWeight: 'bold' }}> stdio.h, </Text> 
            a função 
            <Text style={{ fontWeight: 'bold' }}> setbuf() </Text> 
            que limpa o buffer do teclado:
        </Paragraph>

        <Text style={{ marginTop: 10 }}>
          <Text style={{ color: '#000080', fontWeight: 'bold' }}>char </Text> 
          str
          [<Text style={{ color: '#0000FF' }}>20</Text>];
        </Text>

        <Text style={{ marginTop: 10 }}>setbuf(stdin,NULL);</Text> 
        <Text>gets(str);</Text> 

        <Paragraph style={{ marginTop: 10 }}>
            Como apresentado no exemplo acima, a função 
            <Text style={{ fontWeight: 'bold' }}> setbuf() </Text> 
            é utilizada sempre antes de uma função que lê um 
            <Text style={{ fontWeight: 'bold' }}> caractere </Text> 
            ou 
            <Text style={{ fontWeight: 'bold' }}>  string.</Text> 
        </Paragraph>
    </Page>
  );
};

export default Aula04_01;
