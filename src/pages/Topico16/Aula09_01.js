import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula09_01 = () => {
  return (
    <Page nextRoute='Aula09_02'>
        <Title style={Styles.title}>Escrita de String</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          Para se escrever uma string em um arquivo usamos a função <Text style={{ fontWeight: 'bold' }}>fputs()</Text>. Seu protótipo é:{'\n'}{'\n'}
          <Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> fputs(<Text style={{ color: '#000080', fontWeight: 'bold' }}>char</Text> *str, <Text style={{ color: '#000080', fontWeight: 'bold' }}>FILE</Text> *fp);{'\n'}{'\n'}
          Cada invocação dessa função grava uma única string <Text style={{ fontWeight: 'bold' }}>str</Text> no arquivo especificado por <Text style={{ fontWeight: 'bold' }}>fp</Text>.{'\n'}
          Em caso de erro, a função irá retornar a constante <Text style={{ fontWeight: 'bold' }}>EOF</Text>.
        </Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text style={{ fontWeight: 'bold' }}>Exemplo:{'\n'}</Text>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>char</Text> str[<Text style={{ color: '#0000FF' }}>20</Text>] = <Text style={{ color: '#0000FF' }}>"Hello World!"</Text>;</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> result;</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>FILE</Text> *arq;</Text>
        <Text style={{ marginLeft: 10 }}>arq = fopen(<Text style={{ color: '#0000FF' }}>"ArqGrav.txt"</Text>,<Text style={{ color: '#0000FF' }}>"w"</Text>);</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>if</Text>(arq == NULL) {'{'}</Text>
        <Text style={{ marginLeft: 20 }}>printf(<Text style={{ color: '#0000FF' }}>"Problemas na CRIACAO do arquivo\n"</Text>);</Text>
        <Text style={{ marginLeft: 20 }}>exit(<Text style={{ color: '#0000FF' }}>1</Text>);</Text>
        <Text style={{ marginLeft: 10 }}>{'}'}</Text>
        <Text style={{ marginLeft: 10 }}>result = fputs(str, arq);</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>if</Text>(result == EOF) {'{'}</Text>
        <Text style={{ marginLeft: 20 }}>printf(<Text style={{ color: '#0000FF' }}>"Erro na Gravacao\n"</Text>);</Text>
        <Text style={{ marginLeft: 10 }}>{'}'}</Text>
        <Text style={{ marginLeft: 10 }}>fclose(arq);{'\n'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
        <Text>{'};\n'}</Text>
    </Page>
  );
};

export default Aula09_01;
