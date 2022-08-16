import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula01_01 = () => {
  return (
    <Page nextRoute='Aula01_02'>
        <Title style={Styles.title}>Conceitos de Repetição</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
            <Text style={{ fontWeight: 'bold' }}>Laço</Text>
        </Paragraph>
        <Paragraph>
            Permite que uma <Text style={{ fontWeight: 'bold' }}>sequência de comandos</Text> seja executada repetidamente.
        </Paragraph>
        <Paragraph>
            Essa repetição é chamada de laços <Text style={{ fontWeight: 'bold' }}>(loop)</Text> e é um dos conceitos de programação estruturada.
        </Paragraph>

        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph style={{ marginBottom: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>Repetição por Condição</Text>
        </Paragraph>

        <Text>Conjunto de comandos de um algoritmo que é repetido quando subordinado a uma condição:</Text>
        <Text style={{ marginTop: 10 }}><Text style={{ fontWeight: 'bold' }}>enquanto</Text> condição <Text style={{ fontWeight: 'bold' }}>faça</Text></Text>
        <Text style={{ marginLeft: 10 }}>sequência de comandos;</Text>
        <Text style={{ fontWeight: 'bold' }}>fim enquanto</Text>
    </Page>
  );
};

export default Aula01_01;
