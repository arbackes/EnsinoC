import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula07_01 = () => {
  return (
    <Page nextRoute='Aula07_02'>
        <Title style={Styles.title}>Leitura de Caracteres</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          Da mesma maneira que gravamos um único caractere no arquivo, também podemos ler um único caractere.{'\n'}
          A função correspondente de leitura de caracteres é <Text style={{ fontWeight: 'bold' }}>fgetc()</Text>.{'\n'}{'\n'}
          <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> fgetc(<Text style={{ color: '#000080', fontWeight: 'bold' }}>FILE</Text> *fp);{'\n\n'}</Text>
          Cada invocação dessa função lê e retorna um único caractere do arquivo especificado por <Text style={{ fontWeight: 'bold' }}>fp</Text>.{'\n'}
          Em caso de erro, a função irá retornar a constante <Text style={{ fontWeight: 'bold' }}>EOF</Text>.
        </Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text style={{ fontWeight: 'bold' }}>Exemplo{'\n'}</Text>
        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>FILE</Text> *arq;</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>char</Text> c;</Text>
        <Text style={{ marginLeft: 10 }}>arq = fopen(<Text style={{ color: '#0000FF' }}>"arquivo.txt"</Text>,<Text style={{ color: '#0000FF' }}>"r"</Text>);</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>if</Text>(arq == NULL) {'{'}</Text>
        <Text style={{ marginLeft: 20 }}>printf(<Text style={{ color: '#0000FF' }}>"Erro na abertura do arquivo.\n"</Text>);</Text>
        <Text style={{ marginLeft: 20 }}>exit(<Text style={{ color: '#0000FF' }}>1</Text>);</Text>
        <Text style={{ marginLeft: 10 }}>{'}'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>while</Text>((c = fgetc(arq)) != EOF) {'{'}</Text>
        <Text style={{ marginLeft: 20 }}>print(<Text style={{ color: '#0000FF' }}>"%c"</Text>, c);</Text>
        <Text style={{ marginLeft: 10 }}>{'}'}</Text>
        <Text style={{ marginLeft: 10 }}>fclose(arq);{'\n'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
        <Text>{'};\n'}</Text>

    </Page>
  );
};

export default Aula07_01;
