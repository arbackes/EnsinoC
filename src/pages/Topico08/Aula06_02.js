import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula06_02 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Aninhamento de Repetições - Exemplo</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph style={{ marginBottom: 10 }}>Imprimir uma matriz identidade (composta apenas de 0’s e 1’s na diagonal principal) de tamanho <Text style={{ fontWeight: 'bold' }}>4 x 4:</Text></Paragraph>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> i, j;</Text>
        <Text style={{ marginLeft: 10 }}>
            <Text style={{ color: '#000080', fontWeight: 'bold' }}>for</Text>(i = <Text style={{ color: '#0000FF' }}>1</Text>; i {'<='} <Text style={{ color: '#0000FF' }}>4</Text>; i++){'{'}
        </Text>
        <Text style={{ marginLeft: 20 }}>
            <Text style={{ color: '#000080', fontWeight: 'bold' }}>for</Text>(j = <Text style={{ color: '#0000FF' }}>1</Text>; j {'<='} <Text style={{ color: '#0000FF' }}>4</Text>; j++){'{'}
        </Text>
        <Text style={{ marginLeft: 30 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>if</Text>(i == j)</Text>
        <Text style={{ marginLeft: 40 }}>printf(<Text style={{ color: '#0000FF' }}>"1"</Text>);</Text>
        <Text style={{ marginLeft: 30 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>else</Text></Text>
        <Text style={{ marginLeft: 40 }}>printf(<Text style={{ color: '#0000FF' }}>"0"</Text>);</Text>
        <Text style={{ marginLeft: 20 }}>{'}'}</Text>
        <Text style={{ marginLeft: 10 }}>{'}'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
        <Text>{'}'}</Text>
    </Page>
  );
};

export default Aula06_02;