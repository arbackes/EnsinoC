import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula03_02 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Operador *</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          <Text style={{ fontWeight: 'bold' }}>Exemplo</Text>{'\n'}
          <Text style={{ fontWeight: 'bold' }}>*p:</Text> conteúdo da posição de memória apontado por p;{'\n'}
          <Text style={{ fontWeight: 'bold' }}>{'&c'}:</Text> o endereço na memória onde está armazenada a variável c.{'\n'}
        </Paragraph>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic'}}>//Declara uma variável int contendo o valor 10</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> c = <Text style={{ color: '#0000FF' }}>10</Text>;{'\n'}</Text>
        <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic'}}>//Declara um ponteiro para int</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> *p;{'\n'}</Text>
        <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic'}}>//Atribui ao ponteiro o endereço da variável</Text>
        <Text style={{ marginLeft: 10 }}>p = {'&c'};{'\n'}</Text>
        <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic'}}>//Atribui um novo valor à posição de memória apontada por p</Text>
        <Text style={{ marginLeft: 10 }}>*p = <Text style={{ color: '#0000FF' }}>10</Text>;{'\n'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
        <Text>{'}\n'}</Text>

    </Page>
  );
};

export default Aula03_02;
