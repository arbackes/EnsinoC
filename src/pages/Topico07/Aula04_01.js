import React from 'react'
import { Divider, Title, Paragraph, Text, Subheading } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula04_01 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Operador ? (ternário)</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph style={{marginBottom: 10 }}>
            Pode ser utilizado como uma simplificação do comando 
            <Text style={{ fontWeight: 'bold' }}> if-else </Text> 
            utilizado para atribuições condicionais
        </Paragraph>

        <Text style={{ marginBottom: 10 }}>Expressões como:</Text>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>if</Text>(a {'>'}<Text style={{ color: '#0000FF' }}>0</Text>)</Text>
        <Text style={{ marginLeft: 10 }}>b = <Text style={{ color: '#0000FF' }}>-150</Text>;</Text>
        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>else</Text>(a {'<'}<Text style={{ color: '#0000FF' }}>0</Text>)</Text>
        <Text style={{ marginLeft: 10 }}>b = <Text style={{ color: '#0000FF' }}>150</Text>;</Text>

        <Paragraph style={{ marginTop: 10, marginBottom: 10 }}>Podem ser simplificadas da seguinte forma:</Paragraph>
        <Text style={{ marginBottom: 10 }}>b = a {'>'}<Text style={{ color: '#0000FF' }}> 0</Text> ? <Text style={{ color: '#0000FF' }}>- 150</Text> : <Text style={{ color: '#0000FF' }}>150</Text>;</Text>
        <Text style={{ marginBottom: 10 }}>Esse operador é utilizado para fazer atribuições condicionais. Neste exemplo, <Text style={{ fontWeight: 'bold' }}> b </Text> vai receber o valor</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ fontWeight: 'bold' }}>-150</Text>  se <Text style={{ fontWeight: 'bold' }}>a {'>'} 0 </Text></Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ fontWeight: 'bold' }}>150</Text> caso contrário.</Text>

        <Paragraph style={{marginTop: 10 }}>
            Esse operador é denominado 
            <Text style={{ fontWeight: 'bold' }}> ternário </Text> 
            pois requer três operandos. Ele pode ser utilizado somente para um único
            <Text style={{ fontWeight: 'bold' }}> if-else </Text> 
        </Paragraph>

        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text style={{ fontWeight: 'bold'  }}>Tome cuidado!</Text>
        <Text style={{ marginLeft: 10 }}>Em um código com várias linhas, pode se tornar difícil a compreensão de expressões que usam esse operador. </Text>
    </Page>
  );
};

export default Aula04_01;
