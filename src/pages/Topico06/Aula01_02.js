import React from 'react'
import { Divider, Title, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula01_02 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Vamos fixar essa ideia!</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> main() {'{'}
        </Text>
        <Text style={{marginLeft: 12 }}>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> r, x = <Text style={{ color: '#0000FF' }}>6</Text>, y = <Text style={{ color: '#0000FF' }}>3</Text>;{'\n'}{'\n'}
          <Text style={{ color: '#008800', fontStyle: 'italic'}}>// x maior que 2 e y menor que x? Verdadeiro (1)</Text>{'\n'}
          r = (x {'>'} <Text style={{ color: '#0000FF' }}>2</Text>) && (y {'<'} x);{'\n'}{'\n'}

          <Text style={{ color: '#008800', fontStyle: 'italic'}}>// x é maior do que 2? Verdadeiro (1). Como temos o operador de negação '!', o retorno é Falso (0)!</Text>{'\n'}
          r = !(x {'>'} <Text style={{ color: '#0000FF' }}>2</Text>);{'\n'}{'\n'}

          <Text style={{ color: '#008800', fontStyle: 'italic'}}>// x é menor que 5 ou y igual a 3? Verdadeiro (1) </Text>{'\n'}
          r = (x {'<'} <Text style={{ color: '#0000FF' }}>5</Text>) || (y == 3);{'\n'}{'\n'}
        </Text>

        <Text style={{ marginLeft: 12 }}>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> 0;
        </Text>
        <Text>{'}'}</Text>
    </Page>
  );
};

export default Aula01_02;
