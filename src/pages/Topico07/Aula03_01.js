import React from 'react'
import { Divider, Title, Paragraph, Text, Subheading } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula03_01 = () => {
  return (
    <Page nextRoute='Aula03_02'>
        <Title style={Styles.title}>Comando else</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph style={{marginBottom: 10 }}>
            O comando<Text style={{ fontWeight: 'bold' }}> else </Text>pode ser entendido como sendo um complemento do comando <Text style={{ fontWeight: 'bold' }}> if.</Text>
        </Paragraph>
        <Paragraph style={{marginBottom: 10 }}>
            Se o 
            <Text style={{ fontWeight: 'bold' }}> if </Text>
            diz o que fazer quando a condição é 
            <Text style={{ fontWeight: 'bold' }}> verdadeira, </Text>
            o 
            <Text style={{ fontWeight: 'bold' }}> else </Text> 
            tratá da condição 
            <Text style={{ fontWeight: 'bold' }}> falsa.</Text>
        </Paragraph>

        <Subheading style={{ marginBottom: 10 }}><Text style={{ fontWeight: 'bold' }}>Forma geral:</Text></Subheading>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>if</Text>(condicao){'{'}</Text>
        <Text style={{ marginLeft: 10 }}>sequencia de comandos<Text style={{ color: '#0000FF' }}> 1</Text>;</Text>
        <Text>{'}'}<Text style={{ color: '#000080', fontWeight: 'bold' }}>else</Text>{'{'}</Text>
        <Text style={{ marginLeft: 10 }}>sequencia de comandos<Text style={{ color: '#0000FF' }}> 2</Text>;</Text>
        <Text>{'}'}</Text>

        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Subheading><Text style={{ fontWeight: 'bold' }}>Funcionamento:</Text></Subheading>

        <Paragraph>A expressão da condição será avaliada:</Paragraph>
        <Paragraph style={{ marginTop: 10 }}>
            Se o resultado da condição for
            <Text style={{ fontWeight: 'bold' }}> diferente de zero (verdadeiro), </Text>
            a
            <Text style={{ fontWeight: 'bold' }}> sequência de comandos 1 </Text>
            será executada.
        </Paragraph>
        <Paragraph style={{ marginTop: 10 }}>
            Se o resultado da condição for
            <Text style={{ fontWeight: 'bold' }}> zero (falso) a sequência de comandos 2  </Text>
            será executada.
        </Paragraph>

        <Subheading><Text style={{ fontWeight: 'bold' }}>Obsservação:</Text></Subheading>
        <Paragraph style={{ marginTop: 10 }}>
            As 
            <Text style={{ fontWeight: 'bold' }}> chaves {'{}'} </Text>
            devem ser usadas no caso de mais de uma instrução ser executada pelo comando
            <Text style={{ fontWeight: 'bold' }}> else.</Text>
        </Paragraph>
    </Page>
  );
};

export default Aula03_01;
