import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula08_02 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Função feof()</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          Podemos também utilizar a função feof() para verificar se um arquivo chegou ao fim.{'\n'}
          Seu protótipo é:{'\n'}{'\n'}
          <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> feof(<Text style={{ color: '#000080', fontWeight: 'bold' }}>FILE</Text> *fp);{'\n'}{'\n'}</Text>
          Essa função recebe como parâmetro o ponteiro fp, que determina o arquivo a ser verificado.{'\n'}{'\n'}
          Como resultado, a função retorna:{'\n'}
          - ZERO se ainda não tiver atingido o final do arquivo.{'\n'}
          - Um valor diferente de ZERO se tiver atingido o final do arquivo.
        </Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text style={{ fontWeight: 'bold' }}>Exemplo:{'\n'}</Text>

        <Text style={{ color: '#008800', fontStyle: 'italic'}}>#include {'<stdio.h>'}</Text>
        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>FILE</Text> *fp;</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>char</Text> c;</Text>
        <Text style={{ marginLeft: 10 }}>fp = fopen(<Text style={{ color: '#0000FF' }}>"arquivo.txt"</Text>,<Text style={{ color: '#0000FF' }}>"r"</Text>);</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>if</Text>(fp == NULL) {'{'}</Text>
        <Text style={{ marginLeft: 20 }}>printf(<Text style={{ color: '#0000FF' }}>"Erro na abertura do arquivo.\n"</Text>);</Text>
        <Text style={{ marginLeft: 20 }}>exit(<Text style={{ color: '#0000FF' }}>1</Text>);</Text>
        <Text style={{ marginLeft: 10 }}>{'}'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>while</Text>(<Text style={{ color: '#0000FF' }}>1</Text>) {'{'}</Text>
        <Text style={{ marginLeft: 20 }}>c = fgetc(fp);</Text>
        <Text style={{ marginLeft: 20 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>if</Text>(feof(fp)) {'{'}</Text>
        <Text style={{ marginLeft: 30 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>break</Text>;</Text>
        <Text style={{ marginLeft: 20 }}>{'}'}</Text>
        <Text style={{ marginLeft: 20 }}>printf(<Text style={{ color: '#000080', fontWeight: 'bold' }}>"%c"</Text>, c);</Text>
        <Text style={{ marginLeft: 10 }}>{'}'}</Text>
        <Text style={{ marginLeft: 10 }}>fclose(fp);{'\n'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
        <Text>{'};\n'}</Text>
    </Page>
  );
};

export default Aula08_02;
