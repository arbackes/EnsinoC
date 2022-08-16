import React from 'react'
import { Divider, Title, Text, Paragraph, Subheading } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula05_01 = () => {
  return (
    <Page nextRoute='Aula05_02'>
        <Title style={Styles.title}>Incremento e Decremento</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          Utilizados sempre que é necessário somar (incremento) ou subtrair (decremento) em uma unidade um determinado valor.{'\n'}
        </Paragraph>
        
        <Text>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> main() {'{'}
        </Text>
        <Text style={{marginLeft: 12 }}>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> y = <Text style={{ color: '#0000FF' }}>1</Text>;{'\n'}
        </Text>
        <Text style={{marginLeft: 12 }}>
          <Text style={{ color: '#008800', fontStyle: 'italic'}}>//Incremento:</Text>{'\n'}
          y++;{'\n'}
          <Text style={{ color: '#008800', fontStyle: 'italic'}}>//ou</Text>{'\n'}
          ++y;{'\n'}
          <Text style={{ color: '#008800', fontStyle: 'italic'}}>//realiza o mesmo que:</Text>{'\n'}
          y = y + <Text style={{ color: '#0000FF' }}>1</Text>;{'\n'}
        </Text>
        <Text style={{marginLeft: 12 }}>
          <Text style={{ color: '#008800', fontStyle: 'italic'}}>//Decremento:</Text>{'\n'}
          y--;{'\n'}
          <Text style={{ color: '#008800', fontStyle: 'italic'}}>//ou</Text>{'\n'}
          --y;{'\n'}
          <Text style={{ color: '#008800', fontStyle: 'italic'}}>//realiza o mesmo que:</Text>{'\n'}
          y = y - <Text style={{ color: '#0000FF' }}>1</Text>;{'\n'}
        </Text>
        <Text style={{ marginLeft: 12 }}>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> 0;
        </Text>
        <Text>{'}'}</Text>
    </Page>
  );
};

export default Aula05_01;
