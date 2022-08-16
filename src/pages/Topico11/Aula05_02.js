import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula05_02 = () => {
  return (
    <Page nextRoute='Aula05_03'>
        <Title style={Styles.title}>Aninhamento de Estruturas</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          Neste exemplo temos duas estruturas: uma chamada <Text style={{ fontWeight: 'bold' }}>endereco</Text> e outra chamada de <Text style={{ fontWeight: 'bold' }}>cadastro</Text>.{'\n'}
          Note que a <Text style={{ fontWeight: 'bold' }}>estrutura</Text> cadastro possui uma variável <Text style={{ fontWeight: 'bold' }}>ender</Text> do tipo <Text style={{ fontWeight: 'bold' }}>struct</Text> endereço, trata-se de um aninhamento de <Text style={{ fontWeight: 'bold' }}>estruturas</Text>.{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Importante:</Text> a estrutura <Text style={{ fontWeight: 'bold' }}>endereco</Text> é usada dentro da estrutura <Text style={{ fontWeight: 'bold' }}>cadastro</Text>, então ela dever ser declarada antes.{'\n'}
        </Paragraph>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>struct</Text> endereco {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>char</Text> rua[<Text style={{ color: '#0000FF' }}>50</Text>];</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> numero;</Text>
        <Text>{'};\n'}</Text>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>struct</Text> cadastro {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>char</Text> nome[<Text style={{ color: '#0000FF' }}>50</Text>];</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> idade;</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>struct</Text> endereco ender;</Text>
        <Text>{'};\n'}</Text>

    </Page>
  );
};

export default Aula05_02;
