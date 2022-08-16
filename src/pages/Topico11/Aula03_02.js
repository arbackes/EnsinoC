import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula03_02 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Acesso aos campos - Exemplo</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>O programa a seguir realiza a captura e imprime as coordenadas de um ponto qualquer.{'\n'}</Paragraph>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>struct</Text> ponto {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>float</Text> x;</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>float</Text> y;</Text>
        <Text>{'};\n'}</Text>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>struct</Text> ponto p;</Text>
        <Text style={{ marginLeft: 10 }}>printf(<Text style={{ color:'#0000FF' }}>"Digite as coordenadas:"</Text>);</Text>
        <Text style={{ marginLeft: 10 }}>scanf(<Text style={{ color:'#0000FF' }}>"%f %f"</Text>, {'&'}p.x, {'&'}p.y);</Text>
        <Text style={{ marginLeft: 10 }}>printf(<Text style={{ color:'#0000FF' }}>"O ponto é: (%f,%f)"</Text>,p.x, p.y);{'\n'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>return </Text> <Text style={{ color:'#0000FF' }}>0</Text>;</Text>
        <Text>{'};\n'}</Text>
    </Page>
  );
};

export default Aula03_02;
