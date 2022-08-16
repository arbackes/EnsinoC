import React from 'react'
import { Divider, Title, Paragraph, Text, Subheading } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula02_01 = () => {
  return (
    <Page nextRoute='Aula02_02'>
        <Title style={Styles.title}>Comando if</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          O comando <Text style={{ fontWeight: 'bold' }}>if</Text> é utilizado quando uma sequência de comandos deve ser executada com base em uma condição.
        </Paragraph>

        <Subheading>Forma geral:</Subheading>
        
        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>if</Text>(condicao){'{'}</Text>
        <Text style={{ marginLeft: 10 }}>sequencia de comandos;</Text>
        <Text>{'}'}</Text>

        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Subheading>Funcionamento</Subheading>
        <Paragraph>
          A expressão na condição será avaliada:{'\n'}
          Se o resultado for <Text style={{ fontWeight: 'bold' }}>zero (falso)</Text>, a sequência de comandos não será executada.{'\n'}
          Se o resultado for <Text style={{ fontWeight: 'bold' }}>diferente de zero (verdadeiro)</Text>, a sequência de comandos será executada.{'\n'}
        </Paragraph>

        <Paragraph>
          Em uma condição pode ser usado operadores matemáticos, lógicos e relacionais:{'\n'}
          <Text style={{ fontWeight: 'bold' }}>+,  -, *,  /,  %,  &&,  ||,  {'>'},  {'<'}, {'>'}=, {'<'}=, ==, !=</Text>{'\n'}
        </Paragraph>

        <Paragraph>
          <Text style={{ fontWeight: 'bold' }}>Lembre-se:</Text> Símbolo de <Text style={{ fontWeight: 'bold' }}>atribuição</Text> "=" é diferente do operador relacional de <Text style={{ fontWeight: 'bold' }}>igualdade</Text> "=="!
        </Paragraph>
    </Page>
  );
};

export default Aula02_01;
