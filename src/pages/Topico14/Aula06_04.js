import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula06_04 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Operações com Ponteiros</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
            <Text style={{ fontWeight: 'bold' }}>Operações relacionais</Text>{'\n'}
            As operações de == e != permitem saber se dois ponteiros são iguais ou diferentes.{'\n'}
            As operações de {'>, <, >=, e <='} permitem saber qual ponteiro aponta para uma posição mais alta da memória.{'\n'}
        </Paragraph>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> *p, *p1, x, y;</Text>
        <Text style={{ marginLeft: 10 }}>p = {'&x'};</Text>
        <Text style={{ marginLeft: 10 }}>p1 = {'&y'};</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>if</Text> (p == p1) {'{'}</Text>
        <Text style={{ marginLeft: 20 }}>printf(<Text style={{ color: '#0000FF' }}>"Ponteiros Iguais"</Text>);</Text>
        <Text style={{ marginLeft: 10 }}>{'}'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>else</Text> {'{'}</Text>
        <Text style={{ marginLeft: 20 }}>printf(<Text style={{ color: '#0000FF' }}>"Ponteiros Diferentes"</Text>);</Text>
        <Text style={{ marginLeft: 10 }}>{'}\n'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
        <Text>{'}\n'}</Text>
    </Page>
  );
};

export default Aula06_04;
