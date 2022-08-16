import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula08_02 = () => {
  return (
    <Page nextRoute='Aula08_03'>
        <Title style={Styles.title}>Arrays como parâmetros</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          Na passagem de um array como parâmetro de uma função podemos declarar a função de diferentes maneiras, todas equivalentes:{'\n'}{'\n'}

          <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>void</Text> imprime(<Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> *array, <Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> N);{'\n'}{'\n'}</Text>
          <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>void</Text> imprime(<Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> array[], <Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> N);{'\n'}{'\n'}</Text>
          <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>void</Text> imprime(<Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> array[<Text style={{ color: '#0000FF' }}>5</Text>], <Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> N);</Text>
        </Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          <Text style={{ fontWeight: 'bold' }}>Exemplo:</Text> função que imprime um array{'\n'}
        </Paragraph>
        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>void</Text> imprime(<Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> *array, <Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> N) {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> i;</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>for</Text>(i = <Text style={{ color: '#0000FF' }}>0</Text>; i {'<'} N; i++) {'{'}</Text>
        <Text style={{ marginLeft: 20 }}>printf(<Text style={{ color: '#0000FF' }}>"%d\n"</Text>, array[i]);</Text>
        <Text style={{ marginLeft: 10 }}>{'}'}</Text>
        <Text>{'}\n'}</Text>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> vet[<Text style={{ color: '#0000FF' }}>5</Text>] = {'{'}<Text style={{ color: '#0000FF' }}>10</Text>,<Text style={{ color: '#0000FF' }}>20</Text>,<Text style={{ color: '#0000FF' }}>30</Text>,<Text style={{ color: '#0000FF' }}>40</Text>,<Text style={{ color: '#0000FF' }}>50</Text>{'}'};{'\n'}</Text>
        <Text style={{ marginLeft: 10 }}>imprime(vet,<Text style={{ color: '#0000FF' }}>5</Text>);{'\n'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
        <Text>{'};\n'}</Text>
    </Page>
  );
};

export default Aula08_02;
