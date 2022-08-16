import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula06_03 = () => {
  return (
    <Page nextRoute='Aula06_04'>
        <Title style={Styles.title}>Operações com Ponteiros</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
            <Text style={{ fontWeight: 'bold' }}>Operações aritméticas com o conteúdo</Text>{'\n'}
            Quando trabalhamos com o conteúdo apontado, valem todas as operações do tipo.
        </Paragraph>

        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> *p;</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> c = <Text style={{ color: '#0000FF' }}>10</Text>;{'\n'}</Text>
        <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic'}}> //incrementa o conteúdo da variável apontada pelo ponteiro p;</Text>
        <Text style={{ marginLeft: 10 }}>(*p)++;</Text>
        <Text style={{ marginLeft: 10 }}>p1 = p;{'\n'}</Text>
        <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic'}}> //multiplica o conteúdo da variável apontada pelo ponteiro p por 10;</Text>
        <Text style={{ marginLeft: 10 }}>*p = (*p) * <Text style={{ color: '#0000FF' }}>10</Text>;</Text>
    </Page>
  );
};

export default Aula06_03;
