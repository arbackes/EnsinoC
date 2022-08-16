import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper';
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula05_02 = () => {
  return (
    <Page nextRoute='Aula05_03'>
        <Title style={Styles.title}>Pré e Pós Incremento e Decremento</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          A diferença de sintaxe (pré e pós) não tem importância se o operador for usado fora de uma expressão.{'\n'}
          Se o operador for utilizado dentro de uma expressão, a diferença dos dois operadores será evidente.
        </Paragraph>
        
        <Text>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> main() {'{'}
        </Text>
        <Text style={{marginLeft: 12 }}>
          <Text style={{ color: '#008800', fontStyle: 'italic'}}>//Pré-incremento:</Text>{'\n'}
          <Text style={{ color: '#008800', fontStyle: 'italic'}}>//Soma +1 à variável x antes de utiliza-la.</Text>{'\n'}
          ++x;{'\n'}{'\n'}

          <Text style={{ color: '#008800', fontStyle: 'italic'}}>//Pós-Incremento:</Text>{'\n'}
          <Text style={{ color: '#008800', fontStyle: 'italic'}}>//Soma +1 à variável x depois de utilizá-la.</Text>{'\n'}
          x++;{'\n'}{'\n'}

          <Text style={{ color: '#008800', fontStyle: 'italic'}}>//Pré-decremento:</Text>{'\n'}
          <Text style={{ color: '#008800', fontStyle: 'italic'}}>//Subtrai 1 da variável x antes de utilizá-la.</Text>{'\n'}
          --x;{'\n'}{'\n'}

          <Text style={{ color: '#008800', fontStyle: 'italic'}}>//Pós-decremento:</Text>{'\n'}
          <Text style={{ color: '#008800', fontStyle: 'italic'}}>//Subtrai 1 da variável x depois de utilizá-la.</Text>{'\n'}
          x--;{'\n'}{'\n'}
        </Text>
        <Text style={{ marginLeft: 12 }}>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> 0;
        </Text>
        <Text>{'}'}</Text>
    </Page>
  );
};

export default Aula05_02;
