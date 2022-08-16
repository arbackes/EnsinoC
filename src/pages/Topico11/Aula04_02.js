import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula04_02 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Array de Estruturas - Exemplo</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          Utilizando a <Text style={{ fontWeight: 'bold' }}>estrutura</Text> cadastro de pessoas, temos o seguinte programa para ler os dados de um <Text style={{ fontWeight: 'bold' }}>array</Text> de 4 pessoas.{'\n'}
        </Paragraph>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>struct</Text> cadastro {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>char</Text> nome[<Text style={{ color: '#0000FF' }}>50</Text>];</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> idade;</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>char</Text> [<Text style={{ color: '#0000FF' }}>50</Text>];</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> numero;</Text>
        <Text>{'};\n'}</Text>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>struct</Text> cadastro c[<Text style={{ color: '#0000FF' }}>4</Text>];</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> i;</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>for</Text>(i = <Text style={{ color: '#0000FF' }}>0</Text>; i {'<'} <Text style={{ color: '#0000FF' }}>4</Text>; i++) {'{'}</Text>
        <Text style={{ marginLeft: 20 }}>gets(c[i].nome);</Text>
        <Text style={{ marginLeft: 20 }}>scanf(<Text style={{ color: '#0000FF' }}>"%d"</Text>,{'&'}c[i].idade);</Text>
        <Text style={{ marginLeft: 20 }}>gets(c[i].rua);</Text>
        <Text style={{ marginLeft: 20 }}>scanf(<Text style={{ color: '#0000FF' }}>"%d"</Text>,{'&'}c[i].numero);</Text>
        <Text style={{ marginLeft: 10 }}>{'}\n'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
        <Text>{'}'};</Text>

    </Page>
  );
};

export default Aula04_02;
