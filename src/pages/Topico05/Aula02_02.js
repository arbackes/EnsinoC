import React from 'react'
import { Divider, Title, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula02_02 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Vamos fixar essa ideia!</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text>
            <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> main() {'{'}
          </Text>
          <Text style={{marginLeft: 12 }}>
            <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> x = <Text style={{ color: '#0000FF' }}>3</Text>, y = <Text style={{ color: '#0000FF' }}>4</Text>, z = <Text style={{ color: '#0000FF' }}>5</Text>;
          </Text>
          <Text style={{marginLeft: 12 }}>
            <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> resposta;{'\n'}
          </Text>
          <Text style={{marginLeft: 12 }}>
            <Text style={{ color: '#008800', fontStyle: 'italic'}}>// Falso! resposta = 0</Text>{'\n'}
            resposta = x {'>'} y;{'\n'}
          </Text>
          <Text style={{marginLeft: 12 }}>
            <Text style={{ color: '#008800', fontStyle: 'italic'}}>//Verdadeiro! resposta = 1</Text>{'\n'}
            resposta = x != z;{'\n'}
          </Text>
          <Text style={{marginLeft: 12 }}>
            <Text style={{ color: '#008800', fontStyle: 'italic'}}>//Falso! resposta = 0</Text>{'\n'}
            resposta = y == z;{'\n'}
          </Text>
          <Text style={{marginLeft: 12 }}>
            <Text style={{ color: '#008800', fontStyle: 'italic'}}>// Falso! resposta = 0</Text>{'\n'}
            resposta = y {'>'}= z;{'\n'}
          </Text>
          <Text style={{marginLeft: 12 }}>
            <Text style={{ color: '#008800', fontStyle: 'italic'}}>// Verdadeiro! resposta = 1</Text>{'\n'}
            resposta = y {'<'} z{'\n'}
          </Text>
          <Text style={{marginLeft: 12 }}>
            <Text style={{ color: '#008800', fontStyle: 'italic'}}>// Verdadeiro! resposta = 1</Text>{'\n'}
            resposta = y+1 {'<'}= z;{'\n'}
          </Text>
          
          <Text style={{ marginLeft: 12 }}>
            <Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> 0;
          </Text>
          <Text>{'}\n'}</Text>
    </Page>
  );
};

export default Aula02_02;
