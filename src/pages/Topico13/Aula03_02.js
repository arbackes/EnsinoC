import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula03_02 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Recursão</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          <Text style={{ fontWeight: 'bold' }}>Sem Recursão</Text>{'\n'}
        </Paragraph>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> fibo(<Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> n) {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> i, t, c, a = <Text style={{ color: '#0000FF' }}>0</Text>, b = <Text style={{ color: '#0000FF' }}>1</Text>;</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>for</Text>(i = <Text style={{ color: '#0000FF' }}>0</Text>; i {'<'} n; i++) {'{'}</Text>
        <Text style={{ marginLeft: 20 }}>c = a + b;</Text>
        <Text style={{ marginLeft: 20 }}>a = b;</Text>
        <Text style={{ marginLeft: 20 }}>b = c;</Text>
        <Text style={{ marginLeft: 10 }}>{'}\n'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>return</Text> a;</Text>
        <Text>{'}\n'}</Text>

        <Paragraph>
          <Text style={{ fontWeight: 'bold' }}>Com Recursão</Text>{'\n'}
        </Paragraph>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> fiboR(<Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> n) {'{'}</Text>
        <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic'}}>//Condição do caso-base</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>if</Text> (n == <Text style={{ color: '#0000FF' }}>0</Text> || n == <Text style={{ color: '#0000FF' }}>1</Text>) {'{'}</Text>
        <Text style={{ marginLeft: 20 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>return</Text> n;</Text>
        <Text style={{ marginLeft: 10 }}>{'}'} <Text style={{ color: '#000080', fontWeight: 'bold' }}>else</Text> {'{'} <Text style={{ color: '#008800', fontStyle: 'italic'}}>//Condição do caso-base</Text></Text>
        <Text style={{ marginLeft: 20 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>return</Text> fiboR(n-<Text style={{ color: '#0000FF' }}>1</Text>) + fiboR(n-<Text style={{ color: '#0000FF' }}>2</Text>);</Text>
        <Text style={{ marginLeft: 10 }}>{'}'}</Text>
        <Text>{'}\n'}</Text>

    </Page>
  );
};

export default Aula03_02;
