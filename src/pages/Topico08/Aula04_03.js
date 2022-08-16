import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula04_03 = () => {
  return (
        <Page nextRoute='Menu'>
            <Title style={Styles.title}>Comando for - Exemplos</Title>
            <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

            <Paragraph style={{ marginBottom: 10 }}>Programa que imprime valores de 1 até 10:</Paragraph>

            <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
            <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> i;</Text>
            <Text style={{ marginLeft: 10 }}>
                <Text style={{ color: '#000080', fontWeight: 'bold' }}>for</Text>(i = <Text style={{ color: '#0000FF' }}>1</Text>; i {'<='} <Text style={{ color: '#0000FF' }}>10</Text>; i++){'{'}
            </Text>
            <Text style={{ marginLeft: 20 }}>printf(<Text style={{ color: '#0000FF' }}>"%d\n"</Text>, i);</Text>
            <Text style={{ marginLeft: 10 }}>{'}'}</Text>
            <Text style={{ marginLeft: 10 }}><Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
            <Text>{'}'}</Text>

            <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

            <Paragraph style={{ marginBottom: 10 }}>Programa que imprime a tabuada do 5</Paragraph>

            <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
            <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> i;</Text>
            <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> resultado;</Text>
            <Text style={{ marginLeft: 10 }}>
                <Text style={{ color: '#000080', fontWeight: 'bold' }}>for</Text>(i = <Text style={{ color: '#0000FF' }}>1</Text>; i {'<='} <Text style={{ color: '#0000FF' }}>10</Text>; i++){'{'}
            </Text>
            <Text style={{ marginLeft: 20 }}>resultado = i*<Text style={{ color: '#0000FF' }}>5</Text>;</Text>
            <Text style={{ marginLeft: 20 }}>printf(<Text style={{ color: '#0000FF' }}>"%d\n"</Text>, resultado);</Text>
            <Text style={{ marginLeft: 10 }}>{'}'}</Text>
            <Text style={{ marginLeft: 10 }}><Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
            <Text>{'}'}</Text>

            <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

            <Paragraph style={{ marginBottom: 10 }}>Programa que imprime os <Text style={{ fontWeight: 'bold' }}>números pares</Text> de 1 a 10</Paragraph>

            <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
            <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> i;</Text>
            <Text style={{ marginLeft: 10 }}>
                <Text style={{ color: '#000080', fontWeight: 'bold' }}>for</Text>(i = <Text style={{ color: '#0000FF' }}>1</Text>; i {'<='} <Text style={{ color: '#0000FF' }}>10</Text>; i++){'{'}
            </Text>
            <Text style={{ marginLeft: 20 }}>i(i % <Text style={{ color: '#0000FF' }}>2</Text> == <Text style={{ color: '#0000FF' }}>0</Text>)</Text>
            <Text style={{ marginLeft: 30 }}>printf(<Text style={{ color: '#0000FF' }}>"%d \n"</Text>, i);</Text>
            <Text style={{ marginLeft: 10 }}>{'}'}</Text>
            <Text style={{ marginLeft: 10 }}><Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
            <Text>{'}'}</Text>
        </Page>
  );
};

export default Aula04_03;