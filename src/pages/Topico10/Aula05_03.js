import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula05_03 = () => {
  return (
    <Page nextRoute='Aula05_04'>
        <Title style={Styles.title}>Concatenando Strings</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>A operação de concatenação é outra tarefa bastante comum ao se trabalhar com strings.</Paragraph>
        <Paragraph>Basicamente, essa operação consiste em copiar uma string para o final de outra string.</Paragraph>
        <Paragraph>
            A função 
            <Text style={{ fontWeight: 'bold' }}> strcat() </Text> 
            faz essa tarefa. Seu protótipo é:
        </Paragraph>

        <Text style={{ marginTop: 10 }}>
            strcat(
            <Text style={{ color: '#000080', fontWeight: 'bold' }}>char </Text>  
            *destino, 
            <Text style={{ color: '#000080', fontWeight: 'bold' }}> char </Text>   
            *origem)
        </Text> 

        <Paragraph style={{ marginTop: 10 }}>
            Neste caso, a string contida em 
            <Text style={{ fontWeight: 'bold' }}> origem </Text> 
            permanecerá inalterada e será copiada para o final da string
            <Text style={{ fontWeight: 'bold' }}> destino.</Text> 
        </Paragraph>
       
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text style={{ fontWeight: 'bold' }}>Exemplo:</Text> 

        <Text style={{ marginTop: 10 }}>
            <Text style={{ color: '#000080', fontWeight: 'bold' }}>char </Text> 
            str
            [<Text style={{ color: '#0000FF' }}>15</Text>] = 
            <Text style={{ color: '#0000FF' }}> ""</Text>;
        </Text>
        <Text>strcat(str,<Text style={{ color: '#0000FF' }}>"bom "</Text>);</Text>
        <Text>strcat(str,<Text style={{ color: '#0000FF' }}>"dia"</Text>);</Text>
        <Text>printf(<Text style={{ color: '#0000FF' }}>"%s"</Text>, str);</Text>
    </Page>
  );
};

export default Aula05_03;
