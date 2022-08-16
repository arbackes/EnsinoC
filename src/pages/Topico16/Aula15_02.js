import React from 'react'
import { Divider, Title, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula15_02 = () => {
  return (
    <Page nextRoute='Aula15_03'>
        <Title style={Styles.title}>Movendo-se pelo Arquivo</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text style={{ fontWeight: 'bold' }}>Exemplo:{'\n'}</Text>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>struct</Text> cadastro {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>char</Text> nome[<Text style={{ color: '#0000FF' }}>20</Text>], rua[<Text style={{ color: '#0000FF' }}>20</Text>];</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> idade;</Text>
        <Text>{'};\n'}</Text>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>FILE</Text> *f = fopen(<Text style={{ color: '#0000FF' }}>"arquivo.txt"</Text>,<Text style={{ color: '#0000FF' }}>"wb"</Text>);</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>if</Text>(f == NULL) {'{'}</Text>
        <Text style={{ marginLeft: 20 }}>printf(<Text style={{ color: '#0000FF' }}>"Erro na abertura\n"</Text>);</Text>
        <Text style={{ marginLeft: 20 }}>exit(<Text style={{ color: '#0000FF' }}>1</Text>);</Text>
        <Text style={{ marginLeft: 10 }}>{'}'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>struct</Text> cadastro c, cad[<Text>4</Text>] = {'{'}</Text>
        <Text style={{ marginLeft: 20 }}><Text style={{ color: '#0000FF' }}>"Ricardo"</Text>, <Text style={{ color: '#0000FF' }}>"Rua 1"</Text>, <Text style={{ color: '#0000FF' }}>31</Text>,</Text>
        <Text style={{ marginLeft: 20 }}><Text style={{ color: '#0000FF' }}>"Carlos"</Text>, <Text style={{ color: '#0000FF' }}>"Rua 2"</Text>, <Text style={{ color: '#0000FF' }}>28</Text>,</Text>
        <Text style={{ marginLeft: 20 }}><Text style={{ color: '#0000FF' }}>"Ana"</Text>, <Text style={{ color: '#0000FF' }}>"Rua 3"</Text>, <Text style={{ color: '#0000FF' }}>45</Text>,</Text>
        <Text style={{ marginLeft: 20 }}><Text style={{ color: '#0000FF' }}>"Marcia"</Text>, <Text style={{ color: '#0000FF' }}>"Rua 4"</Text>, <Text style={{ color: '#0000FF' }}>32</Text></Text>
        <Text style={{ marginLeft: 10 }}>{'}\n'}</Text>
        <Text style={{ marginLeft: 10 }}>fwrite(cad, <Text style={{ color: '#000080', fontWeight: 'bold' }}>sizeof</Text>(<Text style={{ color: '#000080', fontWeight: 'bold' }}>struct</Text> cadastro), <Text style={{ color: '#0000FF' }}>4</Text>, f);</Text>
        <Text style={{ marginLeft: 10 }}>fclose(f);{'\n'}</Text>
        <Text style={{ marginLeft: 10 }}>f = fopen(<Text style={{ color: '#0000FF' }}>"arquivo.txt"</Text>,<Text style={{ color: '#0000FF' }}>"rb"</Text>);</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>if</Text>(f == NULL) {'{'}</Text>
        <Text style={{ marginLeft: 20 }}>printf(<Text style={{ color: '#0000FF' }}>"Erro na abertura\n"</Text>);</Text>
        <Text style={{ marginLeft: 20 }}>system(<Text style={{ color: '#0000FF' }}>"pause"</Text>);</Text>
        <Text style={{ marginLeft: 20 }}>exit(<Text style={{ color: '#0000FF' }}>1</Text>);</Text>
        <Text style={{ marginLeft: 10 }}>{'}'}</Text>
        <Text style={{ marginLeft: 10 }}>fseek(f, <Text style={{ color: '#0000FF' }}>2</Text>*<Text style={{ color: '#000080', fontWeight: 'bold' }}>sizeof</Text>(<Text style={{ color: '#000080', fontWeight: 'bold' }}>struct</Text> cadastro), SEEK_SET);</Text>
        <Text style={{ marginLeft: 10 }}>fread({'&c'}, <Text style={{ color: '#000080', fontWeight: 'bold' }}>sizeof</Text>(<Text style={{ color: '#000080', fontWeight: 'bold' }}>struct</Text> cadastro), <Text style={{ color: '#0000FF' }}>1</Text>, f);</Text>
        <Text style={{ marginLeft: 10 }}>printf(<Text style={{ color: '#0000FF' }}>"%s\n%s\n%d\n"</Text>, c.nome,c.rua,c.idade);</Text>
        <Text style={{ marginLeft: 10 }}>fclose(f);{'\n'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
        <Text>{'};\n'}</Text>
    </Page>
  );
};

export default Aula15_02;
