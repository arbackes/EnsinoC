import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula08_01 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Comando continue</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>Quando executado, os comandos restantes de repetição são ignorados.</Paragraph>
        <Paragraph>O programa volta a testar a condição do laço para saber se o mesmo deve ser executado novamente ou não.</Paragraph>

        <Paragraph style={{ marginTop: 10 }}>Diferente do <Text style={{ fontWeight: 'bold' }}>break</Text>, só funciona dentro de um <Text style={{ fontWeight: 'bold' }}>laço</Text></Paragraph>

        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text style={{ fontWeight: 'bold' }}>Exemplo:</Text>
        <Paragraph style={{ marginBottom: 10 }}>Lista os número de <Text style={{ fontWeight: 'bold' }}>A</Text> a <Text style={{ fontWeight: 'bold' }}>B</Text>, mas pula o 5.</Paragraph>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10, marginBottom: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> a, b;</Text>
        <Text style={{ marginLeft: 10 }}>printf(<Text style={{ color: '#0000FF' }}>"Digite o valor de a:"</Text>);</Text>
        <Text style={{ marginLeft: 10, marginBottom: 10 }}>scanf(<Text style={{ color: '#0000FF' }}>"%d"</Text>, &a);</Text>
        <Text style={{ marginLeft: 10 }}>printf(<Text style={{ color: '#0000FF' }}>"Digite o valor de b:"</Text>);</Text>
        <Text style={{ marginLeft: 10, marginBottom: 10 }}>scanf(<Text style={{ color: '#0000FF' }}>"%d"</Text>, &b);</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>while</Text> (a {'<='} b) {'{'}</Text>
        <Text style={{ marginLeft: 20 }}>a = a + <Text style={{ color: '#0000FF' }}>1</Text>;</Text>
        <Text style={{ marginLeft: 20 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>if</Text> (a == 5)</Text>
        <Text style={{ marginLeft: 30 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>continue</Text>;</Text>
        <Text style={{ marginLeft: 20 }}>printf(<Text style={{ color: '#0000FF' }}>"%d\n"</Text>, a);</Text>
        <Text style={{ marginLeft: 10 }}>{'}'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
        <Text>{'}'}</Text>
    </Page>
  );
};

export default Aula08_01;