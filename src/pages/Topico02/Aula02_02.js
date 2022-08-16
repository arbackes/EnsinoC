import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper';
import Styles from '../../styles/styles'
import Page from '../../components/Page';

const Aula02_02 = () => {
  return (
    <Page nextRoute='Aula02_03'>
        <Title style={Styles.title}>Tipo da variável</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          Define os valores que uma variável pode assumir e as operações que podem ser realizadas com ela.
        </Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text style={{ marginBottom: 6, fontWeight: 'bold' }}>Exemplo:</Text>
        <Text style={{ marginBottom: 6, marginLeft: 10 }}>
          Tipo <Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> recebe apenas números inteiros.
        </Text>
        <Text style={{ marginBottom: 6, marginLeft: 10 }}>
          Tipo <Text style={{ color: '#000080', fontWeight: 'bold' }}>float</Text> armazena números reais.
        </Text>
    </Page>
  );
};

export default Aula02_02;
