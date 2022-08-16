import React from 'react'
import { Divider, Title, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula11_02 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Escrita de Bloco de Dados</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text style={{ fontWeight: 'bold' }}>Exemplo:{'\n'}</Text>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>FILE</Text> *arq;</Text>
        <Text style={{ marginLeft: 10 }}>arq = fopen(<Text style={{ color: '#0000FF' }}>"ArqGrav.txt"</Text>,<Text style={{ color: '#0000FF' }}>"wr"</Text>);</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>if</Text>(arq == NULL) {'{'}</Text>
        <Text style={{ marginLeft: 20 }}>printf(<Text style={{ color: '#0000FF' }}>"Problemas na CRIACAO do arquivo\n"</Text>);</Text>
        <Text style={{ marginLeft: 20 }}>exit(<Text style={{ color: '#0000FF' }}>1</Text>);</Text>
        <Text style={{ marginLeft: 10 }}>{'}'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>char</Text> str[<Text style={{ color: '#0000FF' }}>20</Text>] = <Text style={{ color: '#0000FF' }}>"Hello World!"</Text>;</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>float</Text> x = <Text style={{ color: '#0000FF' }}>5</Text>;</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> v[<Text style={{ color: '#0000FF' }}>5</Text>] = {'{'}<Text style={{ color: '#0000FF' }}>1</Text>,<Text style={{ color: '#0000FF' }}>2</Text>,<Text style={{ color: '#0000FF' }}>3</Text>,<Text style={{ color: '#0000FF' }}>4</Text>,<Text style={{ color: '#0000FF' }}>5</Text>{'}'};</Text>
        <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic'}}>//grava a string toda no arquivo</Text>
        <Text style={{ marginLeft: 10 }}>fwrite(str, <Text style={{ color: '#000080', fontWeight: 'bold' }}>sizeof</Text>(<Text style={{ color: '#000080', fontWeight: 'bold' }}>char</Text>), strlen(str), arq);</Text>
        <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic'}}>//grava apenas os 5 primeiros caracteres da string</Text>
        <Text style={{ marginLeft: 10 }}>fwrite(str, <Text style={{ color: '#000080', fontWeight: 'bold' }}>sizeof</Text>(<Text style={{ color: '#000080', fontWeight: 'bold' }}>char</Text>), <Text style={{ color: '#0000FF' }}>5</Text>, arq);</Text>
        <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic'}}>//grava o valor de x no arquivo</Text>
        <Text style={{ marginLeft: 10 }}>fwrite({'&x'}, <Text style={{ color: '#000080', fontWeight: 'bold' }}>sizeof</Text>(<Text style={{ color: '#000080', fontWeight: 'bold' }}>float</Text>), <Text style={{ color: '#0000FF' }}>1</Text>, arq);</Text>
        <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic'}}>//grava todo o array no arquivo (5 posições)</Text>
        <Text style={{ marginLeft: 10 }}>fwrite(v, <Text style={{ color: '#000080', fontWeight: 'bold' }}>sizeof</Text>(<Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text>), <Text style={{ color: '#0000FF' }}>5</Text>, arq);</Text>
        <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic'}}>//grava apenas as 2 primeiras posições do array</Text>
        <Text style={{ marginLeft: 10 }}>fwrite(v, <Text style={{ color: '#000080', fontWeight: 'bold' }}>sizeof</Text>(<Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text>), <Text style={{ color: '#0000FF' }}>2</Text>, arq);</Text>
        <Text style={{ marginLeft: 10 }}>fclose(arq);{'\n'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>

        <Text>{'};\n'}</Text>
    </Page>
  );
};

export default Aula11_02;
