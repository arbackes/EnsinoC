import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula06_01 = () => {
  return (
    <Page nextRoute='Aula06_02'>
        <Title style={Styles.title}>Aninhamento de Repetições</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>Um <Text style={{ fontWeight: 'bold' }}>aninhamento de repetições</Text> ocorre quando um comando de repetição é utilizado dentro do bloco de comandos de outro comando de repetições.</Paragraph>

        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text style={{ fontWeight: 'bold' }}>Forma geral:</Text>

        <Text>repeticao (condicao <Text style={{ color: '#0000FF' }}>1</Text>){'{'}</Text>
        <Text style={{ marginLeft: 10 }}>sequência de comandos <Text style={{ color: '#0000FF' }}>1</Text>;</Text>
        <Text style={{ marginLeft: 10 }}>repeticao (condicao <Text style={{ color: '#0000FF' }}>2</Text>){'{'}</Text>
        <Text style={{ marginLeft: 20 }}>sequência de comandos <Text style={{ color: '#0000FF' }}>2</Text>;</Text>
        <Text style={{ marginLeft: 20 }}>repeticao ...</Text>
        <Text style={{ marginLeft: 10 }}>{'}'}</Text>
        <Text>{'}'}</Text>

        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph style={{ marginTop: 10 }}>O programa começa a testar as condições começando pela <Text style={{ fontWeight: 'bold' }}>condição 1.</Text></Paragraph>
        <Paragraph>Se o resultado dessa condição for <Text style={{ fontWeight: 'bold' }}>verdadeiro</Text></Paragraph>
        <Paragraph style={{ marginLeft: 10 }}>o programa executará o bloco de comando associados a ela.</Paragraph>
        <Paragraph style={{ marginLeft: 10 }}>o programa irá testar a <Text style={{ fontWeight: 'bold' }}>condição 2.</Text> Se <Text style={{ fontWeight: 'bold' }}>verdadeira</Text>, irá executar essa repetição.</Paragraph>
    </Page>
  );
};

export default Aula06_01;