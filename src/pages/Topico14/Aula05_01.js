import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula05_01 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Atribuição entre Ponteiros</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
            Podemos atribuir a um ponteiro um endereço de memória do mesmo tipo do ponteiro.{'\n'}
            Também podemos atribuir a um ponteiro o valor de outro poneiro, desde que ambos sejam do mesmo tipo.
        </Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text style={{ fontWeight: 'bold' }}>Exemplo</Text>
        <Text>O ponteiro <Text style={{ fontWeight: 'bold' }}>p</Text> aponta para o mesmo lugar que <Text style={{ fontWeight: 'bold' }}>p1</Text>:{'\n'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> *p, *p1;</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> c = <Text style={{ color: '#0000FF' }}>10</Text>;</Text>
        <Text style={{ marginLeft: 10 }}>p = {'&c'};</Text>
        <Text style={{ marginLeft: 10 }}>p1 = p;</Text>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text style={{ fontWeight: 'bold' }}>Exemplo</Text>
        <Text>A variável apontada pelo ponteiro <Text style={{ fontWeight: 'bold' }}>p</Text> recebe o mesmo conteúdo da variável apontada por <Text style={{ fontWeight: 'bold' }}>p1</Text>:{'\n'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> *p, *p1;</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> c = <Text style={{ color: '#0000FF' }}>10</Text>, d = <Text style={{ color: '#0000FF' }}>20</Text>;</Text>
        <Text style={{ marginLeft: 10 }}>p = {'&c'};</Text>
        <Text style={{ marginLeft: 10 }}>p1 = {'&d'};</Text>
        <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic'}}> //Equivale a d = c;</Text>
        <Text style={{ marginLeft: 10 }}>*p1 = *p;</Text>
    </Page>
  );
};

export default Aula05_01;
