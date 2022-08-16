import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula04_02 = () => {
  return (
    <Page nextRoute='Aula04_03'>
        <Title style={Styles.title}>Comando for - Claúsulas</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>Na execução do comando <Text style={{ fontWeight: 'bold' }}>for</Text>, a seguinte sequência de passo é realizada:</Paragraph>
        <Paragraph style={{ marginLeft: 10 }}><Text style={{ fontWeight: 'bold' }}>Inicialização</Text>: Inicia as variáveis (<Text style={{ fontWeight: 'bold' }}>contador</Text>). Executada uma única vez.</Paragraph>
        <Paragraph style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>Condição</Text>: 
            Avalia a condição. Se for 
            <Text style={{ fontWeight: 'bold' }}> verdadeira </Text> 
            executa a
            <Text style={{ fontWeight: 'bold' }}> sequência de comandos. </Text> 
            Caso seja 
            <Text style={{ fontWeight: 'bold' }}> falsa, </Text> 
            encerra o
            <Text style={{ fontWeight: 'bold' }}> laço.</Text> 
        </Paragraph>
        <Paragraph style={{ marginLeft: 10 }}><Text style={{ fontWeight: 'bold' }}>Incremento</Text>: Incrementa o contador.</Paragraph>

        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>for</Text>(inicialização; condição; incremento){'{'}</Text>
        <Text style={{ marginLeft: 10 }}>sequencia de comandos;</Text>
        <Text>{'}'}</Text>
    </Page>
  );
};

export default Aula04_02;