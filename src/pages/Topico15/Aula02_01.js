import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula02_01 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Operador sizeof()</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>
        
        <Paragraph>
          Retorna o número de bytes de um tipo de dado.{'\n'}
          Ex.: int, float, char, struct...{'\n'}
        </Paragraph>

        <Text style={{ fontWeight: 'bold' }}>Exemplo:{'\n'}</Text>

        <Text>printf(<Text style={{ color: '#0000FF' }}>"char: %d\n"</Text>, <Text style={{ color: '#000080', fontWeight: 'bold' }}>sizeof</Text>(<Text style={{ color: '#000080', fontWeight: 'bold' }}>char</Text>)); <Text style={{ color: '#008800', fontStyle: 'italic'}}>//retorna 1 byte</Text></Text>
        <Text>printf(<Text style={{ color: '#0000FF' }}>"int: %d\n"</Text>, <Text style={{ color: '#000080', fontWeight: 'bold' }}>sizeof</Text>(<Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text>)); <Text style={{ color: '#008800', fontStyle: 'italic'}}>//retorna 4 bytes</Text></Text>
        <Text>printf(<Text style={{ color: '#0000FF' }}>"float: %d\n"</Text>, <Text style={{ color: '#000080', fontWeight: 'bold' }}>sizeof</Text>(<Text style={{ color: '#000080', fontWeight: 'bold' }}>float</Text>)); <Text style={{ color: '#008800', fontStyle: 'italic'}}>//retorna 4 bytes</Text></Text>
    </Page>
  );
};

export default Aula02_01;
