import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula06_01 = () => {
  return (
    <Page nextRoute='Aula06_02'>
        <Title style={Styles.title}>Escrita de Caracteres</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          A maneira mais fácil de se trabalhar com um arquivo é a escrita de um único caractere.{'\n'}
          A função mais básica de escrita de dados é a função <Text style={{ fontWeight: 'bold' }}>fputc()</Text>. Seu protótipo é:{'\n\n'}
          <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> fputc(<Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> ch, <Text style={{ color: '#000080', fontWeight: 'bold' }}>FILE</Text> *fp);{'\n\n'}</Text>
          Cada invocação dessa função grava um único caractere <Text style={{ fontWeight: 'bold' }}>ch</Text> no arquivo especificado por <Text style={{ fontWeight: 'bold' }}>fp</Text>.{'\n'}
          Em caso de erro, a função irá retornar a constante <Text style={{ fontWeight: 'bold' }}>EOF</Text>.
        </Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text style={{ fontWeight: 'bold' }}>Exemplo{'\n'}</Text>
        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>FILE</Text> *arq;</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>char</Text> string[<Text style={{ color: '#0000FF' }}>100</Text>];</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> i;</Text>
        <Text style={{ marginLeft: 10 }}>arq = fopen(<Text style={{ color: '#0000FF' }}>"arquivo.txt"</Text>,<Text style={{ color: '#0000FF' }}>"w"</Text>);</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>if</Text>(arq == NULL) {'{'}</Text>
        <Text style={{ marginLeft: 20 }}>printf(<Text style={{ color: '#0000FF' }}>"Erro na abertura do arquivo.\n"</Text>);</Text>
        <Text style={{ marginLeft: 20 }}>exit(<Text style={{ color: '#0000FF' }}>1</Text>);</Text>
        <Text style={{ marginLeft: 10 }}>{'}'}</Text>
        <Text style={{ marginLeft: 10 }}>printf(<Text style={{ color: '#0000FF' }}>"Entre com a string a ser gravada no arquivo:"</Text>);</Text>
        <Text style={{ marginLeft: 10 }}>gets(string);{'\n'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>for</Text>(i = <Text style={{ color: '#0000FF' }}>0</Text>; i {'<'} strlen(string); i++) {'{'}</Text>
        <Text style={{ marginLeft: 20 }}>fputc(string[i], arq);</Text>
        <Text style={{ marginLeft: 10 }}>{'}'}</Text>
        <Text style={{ marginLeft: 10 }}>fclose(arq);{'\n'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
        <Text>{'};\n'}</Text>
    </Page>
  );
};

export default Aula06_01;
