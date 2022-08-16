import React from 'react'
import { View } from 'react-native'
import BackAndNextButtons from '../../components/BackAndNextButtons'
import { Divider, Title, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula04_03 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Exemplos</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>
        
        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>void</Text> imprime() {'{'}</Text>
        <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic'}}>//por ser do tipo void não possui nenhum return</Text>
        <Text style={{ marginLeft: 10 }}>printf(<Text style={{ color: '#0000FF' }}>"Programação Descomplicada"</Text>);</Text>
        <Text>{'};\n'}</Text>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic'}}>//função imprime é chamada</Text>
        <Text style={{ marginLeft: 10 }}>imprime();</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
        <Text>{'};\n'}</Text>
    </Page>
  );
};

export default Aula04_03;
