import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula05_02 = () => {
  return (
    <Page nextRoute='Aula05_03'>
        <Title style={Styles.title}>Copiando uma String</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>Uma string é um array e a linguagem C não suporta a atribuição de um array para outro.</Paragraph>
        <Paragraph>Nesse sentido, a única maneira de atribuir o conteúdo de uma string a outra é a cópia, elemento por elemento, de uma string para outra.</Paragraph>
        <Paragraph>
            A função 
            <Text style={{ fontWeight: 'bold' }}> strcpy() </Text> 
            copia a string contida na variável
            <Text style={{ fontWeight: 'bold' }}> origem </Text>  
            para
            <Text style={{ fontWeight: 'bold' }}> destino. </Text>  
            Seu protótipo é:
        </Paragraph>

        <Text style={{ marginTop: 10 }}>
            strcpy(
            <Text style={{ color: '#000080', fontWeight: 'bold' }}>char </Text>  
            *destino, 
            <Text style={{ color: '#000080', fontWeight: 'bold' }}> char </Text>   
            *origem)
        </Text> 
       
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text style={{ fontWeight: 'bold' }}>Exemplo:</Text> 

        <Text style={{ marginTop: 10 }}>
          <Text style={{ color: '#000080', fontWeight: 'bold' }}>char </Text> 
          str1
          [<Text style={{ color: '#0000FF' }}>100</Text>],
          str2
          [<Text style={{ color: '#0000FF' }}>100</Text>];
        </Text>
        <Text>printf(<Text style={{ color: '#0000FF' }}>"Entre com uma string: "</Text>);</Text>
        <Text>gets(str1);</Text> 
        <Text>strcpy(str2,str1);</Text> 
        <Text>printf(<Text style={{ color: '#0000FF' }}>"%s"</Text>, str2);</Text>
    </Page>
  );
};

export default Aula05_02;
