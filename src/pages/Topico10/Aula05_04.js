import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula05_04 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Comparando duas Strings</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>Da mesma maneira como o operador de atribuição não funciona para strings, o mesmo ocorre com operadores relacionais usados para comparar duas strings.</Paragraph>
        <Paragraph>
            Para isso usamos a função 
            <Text style={{ fontWeight: 'bold' }}> strcmp(). </Text> 
            Seu protótipo é:
        </Paragraph>

        <Text style={{ marginTop: 10 }}>
            <Text style={{ color: '#000080', fontWeight: 'bold' }}>int </Text>  
            strcmp(
            <Text style={{ color: '#000080', fontWeight: 'bold' }}>char </Text>  
            *str1, 
            <Text style={{ color: '#000080', fontWeight: 'bold' }}> char </Text>   
            *str2)
        </Text> 

        <Paragraph style={{ marginTop: 10 }}>
            A função 
            <Text style={{ fontWeight: 'bold' }}> strcmp() </Text>   
            recebe duas string por parâmetro e retorna o valor 
            <Text style={{ fontStyle: 'italic' }}> zero </Text>    
            caso sejam iguais.
        </Paragraph>
       
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text style={{ fontWeight: 'bold' }}>Exemplo:</Text> 

        <Text style={{ marginTop: 10 }}>
            <Text style={{ color: '#000080', fontWeight: 'bold' }}>char </Text> 
            str1
            [<Text style={{ color: '#0000FF' }}>20</Text>] = 
            <Text style={{ color: '#0000FF' }}> "Hello World"</Text>;
        </Text>
        <Text>
            <Text style={{ color: '#000080', fontWeight: 'bold' }}>char </Text> 
            str2
            [<Text style={{ color: '#0000FF' }}>20</Text>] = 
            <Text style={{ color: '#0000FF' }}> "Ola Mundo"</Text>;
        </Text>
        <Text>
            <Text style={{ color: '#000080', fontWeight: 'bold' }}>if </Text> 
            (strcmp(str1,str2) == <Text style={{ color: '#0000FF' }}> 0</Text> ){'{'}
        </Text>
        <Text style={{ marginLeft: 10 }}>printf(<Text style={{ color: '#0000FF' }}>"strings são iguais"</Text>);</Text>
        <Text>
            <Text>{'}'}</Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>else </Text>{'{'}
        </Text>
        <Text style={{ marginLeft: 10 }}>printf(<Text style={{ color: '#0000FF' }}>"strings são diferentes"</Text>);</Text>
        <Text>{'}'}</Text>
    </Page>
  );
};

export default Aula05_04;
