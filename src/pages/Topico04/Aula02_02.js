import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula02_02 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Operadores Aritméticos - Exemplos</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text>
            <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> main() {'{'}
        </Text>
        <Text style={{marginLeft: 12 }}>
            <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> z;
        </Text>
        <Text style={{marginLeft: 12 }}>
            <Text style={{ color: '#008800', fontStyle: 'italic'}}>//a variável x agora tem valor 4</Text>{'\n'}
            <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> x = <Text style={{ color: '#0000FF' }}>4</Text>;
        </Text>
        <Text style={{marginLeft: 12 }}>
            <Text style={{ color: '#008800', fontStyle: 'italic'}}>//a variável y agora tem valor 2</Text>{'\n'}
            <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> y = <Text style={{ color: '#0000FF' }}>2</Text>;
        </Text>
        <Text style={{marginLeft: 12 }}>
            <Text style={{ color: '#008800', fontStyle: 'italic'}}>//a variável z agora tem valor 10</Text>{'\n'}
            z = x + <Text style={{ color: '#0000FF' }}>6</Text>;
        </Text>
        <Text style={{marginLeft: 12 }}>
            <Text style={{ color: '#008800', fontStyle: 'italic'}}>//a variável z agora tem valor 2</Text>{'\n'}
            z = x - y;
        </Text>
        <Text style={{marginLeft: 12 }}>
            <Text style={{ color: '#008800', fontStyle: 'italic'}}>//a variável z agora tem valor 16</Text>{'\n'}
            z = x * <Text style={{ color: '#0000FF' }}>4</Text>;
        </Text>
        <Text style={{marginLeft: 12 }}>
            <Text style={{ color: '#008800', fontStyle: 'italic'}}>//a variável z agora tem valor 2</Text>{'\n'}
            <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> z = x/y<Text style={{ color: '#0000FF' }}>2</Text>;
        </Text>
        <Text style={{marginLeft: 12 }}>
            <Text style={{ color: '#008800', fontStyle: 'italic'}}>//a variável z agora tem valor 0, pois o resto da divisão de 4 por 2 é 0</Text>{'\n'}
            <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> z = x%y<Text style={{ color: '#0000FF' }}>2</Text>;{'\n'}
        </Text>
        <Text style={{ marginLeft: 12 }}>
            <Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> 0;
        </Text>
        <Text>{'}'}</Text>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>


        <Paragraph>É possivel inverter o sinal de um valor utilizando o operador de subtração!</Paragraph>
        <Paragraph>Exemplo:</Paragraph>

        <Text>
            <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> main() {'{'}
        </Text>
        <Text style={{marginLeft: 12 }}>
            <Text style={{ color: '#008800', fontStyle: 'italic'}}>//a variável x agora tem valor 4</Text>{'\n'}
            <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> x = <Text style={{ color: '#0000FF' }}>4</Text>;{'\n'}
        </Text>
        <Text style={{marginLeft: 12 }}>
            x = -y;{'\n'}
            <Text style={{ color: '#008800', fontStyle: 'italic'}}>//é a mesma coisa que</Text>{'\n'}
            x = y * -<Text style={{ color: '#0000FF' }}>1</Text>;{'\n'}
        </Text>
        <Text style={{ marginLeft: 12 }}>
            <Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> 0;
        </Text>
        <Text>{'}'}</Text>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>
    </Page>
  );
};

export default Aula02_02;
