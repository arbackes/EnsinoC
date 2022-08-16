import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula04_01 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Divisão e Resto</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          Durante uma operação de divisão, se o numerador e o denominador forem números inteiros o resultado da operação
          será apenas a parte inteira da divisão, mesmo que o resultado seja armazenado em um <Text style={{ fontWeight: 'bold' }}>float</Text>.{'\n'}
        </Paragraph>
        
        <Text>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> main() {'{'}
        </Text>
        <Text style={{marginLeft: 12 }}>
          <Text style={{ color: '#008800', fontStyle: 'italic'}}>// x = 1.000000</Text>{'\n'}
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>float</Text> x = <Text style={{ color: '#0000FF' }}>5</Text> / <Text style={{ color: '#0000FF' }}>4</Text>;
        </Text>
        <Text style={{marginLeft: 12 }}>
          <Text style={{ color: '#008800', fontStyle: 'italic'}}>// x = 1.250000</Text>{'\n'}
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>float</Text> y = <Text style={{ color: '#0000FF' }}>5</Text> / <Text style={{ color: '#0000FF' }}>4.0</Text>;{'\n'}
        </Text>
        <Text style={{ marginLeft: 12 }}>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> 0;
        </Text>
        <Text>{'}'}</Text>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          O operador de resto (%) só pode ser utilizado em valores inteiros.{'\n'}
        </Paragraph>
        
        <Text>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> main() {'{'}
        </Text>
        <Text style={{marginLeft: 12 }}>
          <Text style={{ color: '#008800', fontStyle: 'italic'}}>//x recebe o resto da divisão de 4 por 2, x = 0</Text>{'\n'}
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> x = <Text style={{ color: '#0000FF' }}>4</Text> % <Text style={{ color: '#0000FF' }}>2</Text>;
        </Text>
        <Text style={{marginLeft: 12 }}>
          <Text style={{ color: '#008800', fontStyle: 'italic'}}>//y recebe o resto da divisão de 10 por 6, y = 4</Text>{'\n'}
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> y = <Text style={{ color: '#0000FF' }}>10</Text> % <Text style={{ color: '#0000FF' }}>6</Text>;
        </Text>
        <Text style={{marginLeft: 12 }}>
          <Text style={{ color: '#008800', fontStyle: 'italic'}}>//z recebe o resto da divisão de 5 por 2, z = 1.000000</Text>{'\n'}
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>float</Text> z = <Text style={{ color: '#0000FF' }}>5</Text> % <Text style={{ color: '#0000FF' }}>2</Text>;
        </Text>
        <Text style={{marginLeft: 12 }}>
          <Text style={{ color: '#008800', fontStyle: 'italic'}}>//Não permitida.</Text>{'\n'}
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>float</Text> w = <Text style={{ color: '#0000FF' }}>4</Text> % <Text style={{ color: '#0000FF' }}>2.0</Text>;{'\n'}
        </Text>
        <Text style={{ marginLeft: 12 }}>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> 0;
        </Text>
        <Text>{'}'}</Text>
    </Page>
  );
};

export default Aula04_01;
