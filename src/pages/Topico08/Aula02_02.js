import React from 'react'
import { Divider, Title, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula02_02 = () => {
  return (
        <Page nextRoute='Menu'>
            <Title style={Styles.title}>Comando while - Exemplos</Title>
            <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

            <Text style={{ marginBottom: 10 }}>Imprimir na tela números de 1 a 100:</Text>

            <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
            <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> numero = <Text style={{ color: '#0000FF' }}>1</Text>;</Text>
            <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>while</Text> (numero {'<='} <Text style={{ color: '#0000FF' }}>100</Text>) {'{'}</Text>
            <Text style={{ marginLeft: 20 }}>printf(<Text style={{ color: '#0000FF' }}>"%d"</Text>, numero);</Text>
            <Text style={{ marginLeft: 20 }}>numero = numero+<Text style={{ color: '#0000FF' }}>1</Text>;</Text>
            <Text style={{ marginLeft: 10 }}>{'}'}</Text>
            <Text style={{ marginLeft: 10 }}><Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
            <Text>{'}'}</Text>

            <Text style={{ marginTop: 10 }}>A variável <Text style={{ fontWeight: 'bold' }}>número</Text> é usada como contador de vezes que o <Text style={{ fontWeight: 'bold' }}>loop</Text> é executado.</Text>
            <Text>A variável <Text style={{ fontWeight: 'bold' }}>número</Text> é impressa na tela enquanto for menor ou igual a 100.</Text>

            <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

            <Text style={{ marginBottom: 10 }}>Imprimir uma contagem regressiva começando do número 100:</Text>

            <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
            <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> numero = <Text style={{ color: '#0000FF' }}>100</Text>;</Text>
            <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>while</Text> (numero {'>'} <Text style={{ color: '#0000FF' }}>0</Text>) {'{'}</Text>
            <Text style={{ marginLeft: 20 }}>printf(<Text style={{ color: '#0000FF' }}>"%d"</Text>, numero);</Text>
            <Text style={{ marginLeft: 20 }}>numero = numero-<Text style={{ color: '#0000FF' }}>1</Text>;</Text>
            <Text style={{ marginLeft: 10 }}>{'}'}</Text>
            <Text style={{ marginLeft: 10 }}><Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
            <Text>{'}'}</Text>

            <Divider style={{ marginTop: 10, marginBottom: 10 }} />

            <Text style={{ marginBottom: 10 }}>Nesse exemplo, o comando <Text style={{ fontWeight: 'bold' }}>while</Text> é usado para calcular o fatorial de um número inteiro:</Text>

            <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
            <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> numero;</Text>
            <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> fatorial;</Text>
            <Text style={{ marginLeft: 10, marginTop: 10 }}>printf(<Text style={{ color: '#0000FF' }}>"Digite um numero inteiro: "</Text>);</Text>
            <Text style={{ marginLeft: 10, marginBottom: 10 }}>scanf(<Text style={{ color: '#0000FF' }}>"%d"</Text>, &numero);</Text>
            <Text style={{ marginLeft: 10, marginBottom: 10 }}> fatorial = <Text style={{ color: '#0000FF' }}>1</Text>;</Text>
            <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic'}}>//O loop irá terminar quando a variavel numero for igual a 0</Text>
            <Text style={{ marginLeft: 10 }}><Text style={{ marginTop: 10, color: '#000080', fontWeight: 'bold' }}>while</Text> (numero {'>'} <Text style={{ color: '#0000FF' }}>0</Text>) {'{'}</Text>
            <Text style={{ marginLeft: 20 }}>fatorial = numero*fatorial;</Text>
            <Text style={{ marginLeft: 20 }}>numero = numero - <Text style={{ color: '#0000FF' }}>1</Text>;</Text>
            <Text style={{ marginLeft: 10 }}>{'}'}</Text>
            <Text style={{ marginLeft: 10, marginTop: 10 }}>printf(<Text style={{ color: '#0000FF' }}>"Fatorial= %d"</Text>, fatorial);</Text>
            <Text style={{ marginLeft: 10, marginTop: 10 }}><Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
            <Text>{'}'}</Text>
        </Page>
  );
};

export default Aula02_02;
