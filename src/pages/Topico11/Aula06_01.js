import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula06_01 = () => {
  return (
    <Page nextRoute='Aula06_02'>
        <Title style={Styles.title}>Inicialização de Estruturas</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          Variáveis de <Text style={{ fontWeight: 'bold' }}>estruturas</Text> não-inicializadas contém valores indefinidos em cada um de seus membros.{'\n'}
          Como em outras variáveis, variáveis de <Text style={{ fontWeight: 'bold' }}>estruturas</Text> podem ser inicializadas ao serem declaradas.{'\n'}
          Você pode inicializar os atributos da <Text style={{ fontWeight: 'bold' }}>estrutura</Text> da seguinte forma:{'\n'}
        </Paragraph>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>struct</Text> ponto {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>double</Text> x;</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>double</Text> y;</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>double</Text> z;</Text>
        <Text>{'};\n'}</Text>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>struct</Text> ponto p;</Text>
        <Text style={{ marginLeft: 10 }}>p.x = <Text style={{ color: '#0000FF' }}>10.05</Text>;</Text>
        <Text style={{ marginLeft: 10 }}>p.y = <Text style={{ color: '#0000FF' }}>4.66</Text>;</Text>
        <Text style={{ marginLeft: 10 }}>p.z = <Text style={{ color: '#0000FF' }}>8.95</Text>;</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
        <Text>{'};\n'}</Text>

    </Page>
  );
};

export default Aula06_01;
