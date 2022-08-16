import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper';
import Styles from '../../styles/styles'
import Page from '../../components/Page';

const Aula02_03 = () => {
  return (
      <Page nextRoute='Menu'>
          <Title style={Styles.title}>Nome da variável - Exemplo</Title>
          <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

          <Paragraph>
            Quais os nomes de variáveis estão corretos?
          </Paragraph>
          <Paragraph>
            <Text style={{ fontWeight: 'bold' }}>{'\n'}Contador</Text>
            <Text style={{ fontWeight: 'bold' }}>{'\n'}contador1</Text>
            <Text style={{ fontWeight: 'bold' }}>{'\n'}comp!</Text>
            <Text style={{ fontWeight: 'bold' }}>{'\n'}.var</Text>
            <Text style={{ fontWeight: 'bold' }}>{'\n'}Teste_123</Text>
            <Text style={{ fontWeight: 'bold' }}>{'\n'}_teste</Text>
            <Text style={{ fontWeight: 'bold' }}>{'\n'}int</Text>
            <Text style={{ fontWeight: 'bold' }}>{'\n'}int1</Text>
            <Text style={{ fontWeight: 'bold' }}>{'\n'}1contador</Text>
            <Text style={{ fontWeight: 'bold' }}>{'\n'}-x</Text>
            <Text style={{ fontWeight: 'bold' }}>{'\n'}Teste-123</Text>
            <Text style={{ fontWeight: 'bold' }}>{'\n'}x&</Text>
          </Paragraph>
          <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

          <Paragraph>
            <Text style={{ fontWeight: 'bold', color: 'green' }}>Corretos:</Text>
            <Text style={{ color: 'green' }}>{'\n'}Contador</Text>
            <Text style={{ color: 'green' }}>{'\n'}contador1</Text>
            <Text style={{ color: 'green' }}>{'\n'}Teste_123</Text>
            <Text style={{ color: 'green' }}>{'\n'}_teste</Text>
            <Text style={{ color: 'green' }}>{'\n'}int1{'\n'}</Text>
          </Paragraph>

          <Paragraph>
            <Text style={{ fontWeight: 'bold', color: 'red' }}>Incorretos:</Text>
            <Text style={{ color: 'red' }}>{'\n'}comp!</Text>
            <Text style={{ color: 'red' }}>{'\n'}.var</Text>
            <Text style={{ color: 'red' }}>{'\n'}int</Text>
            <Text style={{ color: 'red' }}>{'\n'}1contador</Text>
            <Text style={{ color: 'red' }}>{'\n'}-x</Text>
            <Text style={{ color: 'red' }}>{'\n'}Teste-123</Text>
            <Text style={{ color: 'red' }}>{'\n'}x&</Text>
          </Paragraph>
      </Page>
  );
};

export default Aula02_03;
