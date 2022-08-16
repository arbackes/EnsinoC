import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper';
import Styles from '../../styles/styles'
import Page from '../../components/Page';

const Aula01_01 = () => {
  return (
    <Page nextRoute='Aula01_02'>
        <Title style={Styles.title}>Tipos Básicos</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
            <Text>Todas as variáveis na linguagem C possuem um <Text style={{ fontWeight: 'bold' }}>tipo</Text>.</Text>
            <Text>{'\n'}O <Text style={{ fontWeight: 'bold' }}>tipo</Text> define o conjunto de valores que a variável pode armazenar.</Text>
            <Text>{'\n'}Cada <Text style={{ fontWeight: 'bold' }}>tipo</Text> ocupa uma quantidade diferente de memória.</Text>
        </Paragraph>
        <Paragraph>
            <Text>Existem 4 tipos básicos:</Text>
            <Text style={{  fontWeight: 'bold' }}>{'\n'}char</Text>
            <Text style={{  fontWeight: 'bold' }}>{'\n'}int</Text>
            <Text style={{  fontWeight: 'bold' }}>{'\n'}float</Text>
            <Text style={{  fontWeight: 'bold' }}>{'\n'}double</Text>
        </Paragraph>
    </Page>
  );
};

export default Aula01_01;
