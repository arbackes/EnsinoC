import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula09_01 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Comandos goto e label</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
            O comando 
            <Text style={{ fontWeight: 'bold' }}> goto </Text> 
            é um salto condicional para um local determinado por uma 
            <Text style={{ fontWeight: 'bold' }}> palavra chave </Text> 
            no código 
            <Text style={{ fontWeight: 'bold' }}> (label).</Text> 
        </Paragraph>
        <Paragraph>Este local pode ser a frente ou atrás no programa, mas deve ser dentro da mesma função.</Paragraph>

        <Text style={{ fontWeight: 'bold' }}>Forma geral:</Text>
        <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>palavra_chave:</Text>
        <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>goto palavra_chave;</Text>

        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
            O teorema da programação estruturada prova que a instrução <Text style={{ fontWeight: 'bold' }}> goto </Text>  não é necessária para escrever programas
        </Paragraph>
        <Paragraph style={{ marginLeft: 10 }}>Alguma combinação das três construções de programação (comandos sequenciais, condicionais e de repetição) são suficientes para executar qualquer cálculo.</Paragraph>
        <Paragraph style={{ marginLeft: 10 }}>Além disso, o uso de goto pode deixar o programa muitas vezes ilegível.</Paragraph>

        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph style={{ marginBottom: 10 }}>Apesar de banido das boas prática de programação, ele pode ser útil em circunstâncias como: sair de dentro de laços aninhados.</Paragraph>

        <Text style={{ fontWeight: 'bold' }}>Exemplo:</Text>
        <Paragraph style={{ marginBottom: 10, marginLeft: 10 }}>
            Uso do 
            <Text style={{ fontWeight: 'bold' }}> goto </Text>  
            para sair de um laço aninhado assim que as variáveis 
            <Text style={{ fontWeight: 'bold' }}> i, j </Text> 
            e
            <Text style={{ fontWeight: 'bold' }}> k </Text> 
            atingirem respectivamente os valores 
            <Text style={{ fontWeight: 'bold' }}> 2, 3 </Text> 
            e
            <Text style={{ fontWeight: 'bold' }}> 1. </Text> 
        </Paragraph>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> a, b, k;</Text>
        <Text style={{ marginLeft: 10 }}>
            <Text style={{ color: '#000080', fontWeight: 'bold' }}>for</Text>(i = <Text style={{ color: '#0000FF' }}>0</Text>; i {'<'} <Text style={{ color: '#0000FF' }}>5</Text>; i++)
        </Text>
        <Text style={{ marginLeft: 20 }}>
            <Text style={{ color: '#000080', fontWeight: 'bold' }}>for</Text>(j = <Text style={{ color: '#0000FF' }}>0</Text>; j {'<'} <Text style={{ color: '#0000FF' }}>5</Text>; j++)
        </Text>
        <Text style={{ marginLeft: 30 }}>
            <Text style={{ color: '#000080', fontWeight: 'bold' }}>for</Text>(k = <Text style={{ color: '#0000FF' }}>0</Text>; k {'<'} <Text style={{ color: '#0000FF' }}>5</Text>; k++)
        </Text>
        <Text style={{ marginLeft: 40 }}>
            <Text style={{ color: '#000080', fontWeight: 'bold' }}>if </Text> 
            (i == <Text style={{ color: '#0000FF' }}>2</Text> {'&&'} j==<Text style={{ color: '#0000FF' }}>3</Text> {'&&'} k==<Text style={{ color: '#0000FF' }}>1</Text>)
        </Text>
        <Text style={{ marginLeft: 50 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>goto</Text> fim;</Text>
        <Text style={{ marginLeft: 40 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>else</Text> </Text>
        <Text style={{ marginLeft: 50 }}>printf(<Text style={{ color: '#0000FF' }}>"[%d,%d,%d]"</Text>,i,j,k);</Text>
        <Text style={{ marginLeft: 10 }}>fim:</Text>
        <Text style={{ marginLeft: 10 }}>printf(<Text style={{ color: '#0000FF' }}>"Fim do Programa\n"</Text>);</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
        <Text>{'}'}</Text>
    </Page>
  );
};

export default Aula09_01;