import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula05_02 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Criando uma Função</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          Sabendo que a ideia funciona corretamente, convertemos ela para uma função{'\n'}
        </Paragraph>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> fatorial(<Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> N) {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> i, f = <Text style={{ color: '#0000FF' }}>1</Text>;</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>for</Text>(i = <Text style={{ color: '#0000FF' }}>1</Text>; i {'<='} N; i++) {'{'}</Text>
        <Text style={{ marginLeft: 20 }}>f = f * i;</Text>
        <Text style={{ marginLeft: 10 }}>{'}\n'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>return</Text> f;</Text>
        <Text>{'}\n'}</Text>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> i, f, N;</Text>
        <Text style={{ marginLeft: 10 }}>printf(<Text style={{ color: '#0000FF' }}>"Digite N: "</Text>);</Text>
        <Text style={{ marginLeft: 10 }}>scanf(<Text style={{ color: '#0000FF' }}>"%d"</Text>, &N);{'\n'}</Text>
        <Text style={{ marginLeft: 10 }}>f = fatorial(N);{'\n'}</Text>
        <Text style={{ marginLeft: 10 }}>printf(<Text style={{ color: '#0000FF' }}>"Resultado = %d\n"</Text>, f);</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
        <Text>{'};\n'}</Text>
    </Page>
  );
};

export default Aula05_02;
