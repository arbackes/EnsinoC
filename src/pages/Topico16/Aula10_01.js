import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula10_01 = () => {
  return (
    <Page nextRoute='Aula10_02'>
        <Title style={Styles.title}>Leitura de String</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
        Da mesma maneira que gravamos uma string no arquivo, também podemos fazer a sua leitura.{'\n'}
        A função correspondente de leitura de string é <Text style={{ fontWeight: 'bold' }}>fgets()</Text>.{'\n'}{'\n'}
        <Text style={{ color: '#000080', fontWeight: 'bold' }}>char*</Text> fgets(<Text style={{ color: '#000080', fontWeight: 'bold' }}>char</Text> *str, <Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> tamanho, <Text style={{ color: '#000080', fontWeight: 'bold' }}>FILE</Text> *fp);{'\n'}{'\n'}
        Cada invocação dessa função lê e retorna uma sring em <Text style={{ fontWeight: 'bold' }}>str</Text> do arquivo especificado por <Text style={{ fontWeight: 'bold' }}>fp</Text>, sendo <Text style={{ fontWeight: 'bold' }}>tamanho</Text> o número máximo de caracteres a serem lidos.{'\n'}
        Em caso de erro, a função irá retornar a constante <Text style={{ fontWeight: 'bold' }}>NULL</Text>.
        </Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text style={{ fontWeight: 'bold' }}>Exemplo:{'\n'}</Text>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>char</Text> str[<Text style={{ color: '#0000FF' }}>20</Text>];</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>char</Text> *result;</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>FILE</Text> *arq;</Text>
        <Text style={{ marginLeft: 10 }}>arq = fopen(<Text style={{ color: '#0000FF' }}>"ArqGrav.txt"</Text>,<Text style={{ color: '#0000FF' }}>"r"</Text>);</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>if</Text>(arq == NULL) {'{'}</Text>
        <Text style={{ marginLeft: 20 }}>printf(<Text style={{ color: '#0000FF' }}>"Problemas na ABERTURA do arquivo\n"</Text>);</Text>
        <Text style={{ marginLeft: 20 }}>exit(<Text style={{ color: '#0000FF' }}>1</Text>);</Text>
        <Text style={{ marginLeft: 10 }}>{'}'}</Text>
        <Text style={{ marginLeft: 10 }}>result = fgets(str, <Text style={{ color: '#0000FF' }}>13</Text>, arq);</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>if</Text>(result == NULL) {'{'}</Text>
        <Text style={{ marginLeft: 20 }}>printf(<Text style={{ color: '#0000FF' }}>"Erro na leitura\n"</Text>);</Text>
        <Text style={{ marginLeft: 10 }}>{'}'} else {'{'}</Text>
        <Text style={{ marginLeft: 20 }}>printf(<Text style={{ color: '#0000FF' }}>"%s"</Text>, str);</Text>
        <Text style={{ marginLeft: 10 }}>{'}'}</Text>
        <Text style={{ marginLeft: 10 }}>fclose(arq);{'\n'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
        <Text>{'};\n'}</Text>
    </Page>
  );
};

export default Aula10_01;
