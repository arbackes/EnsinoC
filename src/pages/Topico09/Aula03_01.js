import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula03_01 = () => {
  return (
    <Page nextRoute='Aula03_02'>
        <Title style={Styles.title}>Array - Características</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph style={{ marginBottom: 10 }}>Cada elemento do array tem todas as características de uma variável e pode aparecer em expressões e atribuições (respeitando os seus tipos)!</Paragraph>

        <Text style={{ fontWeight: 'bold' }}>Exemplo:</Text>

        <Text style={{ marginTop: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10 }}>
            <Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> notas[<Text style={{ color: '#0000FF' }}>5</Text>] = 
            {'{'}<Text style={{ color: '#0000FF' }}>10,20,30,40,50</Text>{'}'};
        </Text>
        <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic'}}>//5 + o valor no índice 1 será atribuido ao índice 2!</Text>
        <Text style={{ marginLeft: 10 }}>
            notas[<Text style={{ color: '#0000FF' }}>2</Text>] = <Text style={{ color: '#0000FF' }}>5 </Text>
            <Text style={{ marginLeft: 10 }}>
                + notas[<Text style={{ color: '#0000FF' }}>1</Text>];
            </Text>
        </Text>
        <Text style={{ marginTop: 10, marginLeft: 10, color: '#008800', fontStyle: 'italic'}}>//Equivalente à: notas[2] = notas[2] + notas[1];</Text>
        <Text style={{ marginLeft: 10 }}>
            notas[<Text style={{ color: '#0000FF' }}>2</Text>] += <Text style={{ color: '#0000FF' }}></Text>
            <Text style={{ marginLeft: 10 }}>
                notas[<Text style={{ color: '#0000FF' }}>1</Text>];
            </Text>
        </Text>
        <Text style={{ marginTop: 10, marginLeft: 10}}><Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
        <Text>{'}'}</Text>
    </Page>
  );
};

export default Aula03_01;
