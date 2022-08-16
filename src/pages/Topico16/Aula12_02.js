import React from 'react'
import { Divider, Title, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula12_02 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Leitura de Bloco de Dados</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text style={{ fontWeight: 'bold' }}>Exemplo:{'\n'}</Text>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>FILE</Text> *arq;</Text>
        <Text style={{ marginLeft: 10 }}>arq = fopen(<Text style={{ color: '#0000FF' }}>"ArqGrav.txt"</Text>,<Text style={{ color: '#0000FF' }}>"rb"</Text>);</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>if</Text>(arq == NULL) {'{'}</Text>
        <Text style={{ marginLeft: 20 }}>printf(<Text style={{ color: '#0000FF' }}>"Problemas na ABERTURA do arquivo\n"</Text>);</Text>
        <Text style={{ marginLeft: 20 }}>exit(<Text style={{ color: '#0000FF' }}>1</Text>);</Text>
        <Text style={{ marginLeft: 10 }}>{'}'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>char</Text> str1[<Text style={{ color: '#0000FF' }}>20</Text>], str2[<Text style={{ color: '#0000FF' }}>20</Text>];</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>float</Text> x;</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> i, v1[<Text style={{ color: '#0000FF' }}>5</Text>], v2[<Text style={{ color: '#0000FF' }}>5</Text>];{'\n'}</Text>
        <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic'}}>//lê a string toda no arquivo</Text>
        <Text style={{ marginLeft: 10 }}>fread(str1, <Text style={{ color: '#000080', fontWeight: 'bold' }}>sizeof</Text>(<Text style={{ color: '#000080', fontWeight: 'bold' }}>char</Text>), <Text style={{ color: '#0000FF' }}>12</Text>, arq);</Text>
        <Text style={{ marginLeft: 10 }}>str1[<Text style={{ color: '#0000FF' }}>12</Text>] = <Text style={{ color:'#800080' }}>'\0'</Text>;</Text>
        <Text style={{ marginLeft: 10 }}>printf(<Text style={{ color: '#0000FF' }}>"%s\n"</Text>, str1);{'\n'}</Text>
        <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic'}}>//lê apenas os 5 primeiros caracteres da string</Text>
        <Text style={{ marginLeft: 10 }}>fread(str2, <Text style={{ color: '#000080', fontWeight: 'bold' }}>sizeof</Text>(<Text style={{ color: '#000080', fontWeight: 'bold' }}>char</Text>), <Text style={{ color: '#0000FF' }}>5</Text>, arq);</Text>
        <Text style={{ marginLeft: 10 }}>str2[<Text style={{ color: '#0000FF' }}>5</Text>] = <Text style={{ color:'#800080' }}>'\0'</Text>;</Text>
        <Text style={{ marginLeft: 10 }}>printf(<Text style={{ color: '#0000FF' }}>"%s\n"</Text>, str2);{'\n'}</Text>
        <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic'}}>//lê o valor de x no arquivo</Text>
        <Text style={{ marginLeft: 10 }}>fread({'&x'}, <Text style={{ color: '#000080', fontWeight: 'bold' }}>sizeof</Text>(<Text style={{ color: '#000080', fontWeight: 'bold' }}>float</Text>), <Text style={{ color: '#0000FF' }}>1</Text>, arq);</Text>
        <Text style={{ marginLeft: 10 }}>printf(<Text style={{ color: '#0000FF' }}>"%f\n"</Text>, x);{'\n'}</Text>
        <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic'}}>//lê todo o array no arquivo (5 posições)</Text>
        <Text style={{ marginLeft: 10 }}>fread(v1, <Text style={{ color: '#000080', fontWeight: 'bold' }}>sizeof</Text>(<Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text>), <Text style={{ color: '#0000FF' }}>5</Text>, arq);</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>for</Text> (i = <Text style={{ color: '#0000FF' }}>0</Text>; i {'<'} <Text style={{ color: '#0000FF' }}>5</Text>; i++) {'{'}</Text>
        <Text style={{ marginLeft: 20 }}>printf(<Text style={{ color: '#0000FF' }}>"v1[%d] = %d\n"</Text>, i, v1[i]);</Text>
        <Text style={{ marginLeft: 10 }}>{'}\n'}</Text>
        <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic'}}>//lê apenas as 2 primeiras posições do array</Text>
        <Text style={{ marginLeft: 10 }}>fread(v2, <Text style={{ color: '#000080', fontWeight: 'bold' }}>sizeof</Text>(<Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text>), <Text style={{ color: '#0000FF' }}>2</Text>, arq);</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>for</Text> (i = <Text style={{ color: '#0000FF' }}>0</Text>; i {'<'} <Text style={{ color: '#0000FF' }}>2</Text>; i++) {'{'}</Text>
        <Text style={{ marginLeft: 20 }}>printf(<Text style={{ color: '#0000FF' }}>"v2[%d] = %d\n"</Text>, i, v2[i]);</Text>
        <Text style={{ marginLeft: 10 }}>{'}\n'}</Text>
        <Text style={{ marginLeft: 10 }}>fclose(arq);{'\n'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>

        <Text>{'};\n'}</Text>
    </Page>
  );
};

export default Aula12_02;
