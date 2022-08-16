import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula04_01 = () => {
  return (
    <Page nextRoute='Aula04_02'>
        <Title style={Styles.title}>A função fclose()</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>
        
        <Paragraph>
          A função <Text style={{ fontWeight: 'bold' }}>fclose()</Text> serve para fechar um arquivo. Seu protótipo é:{'\n'}
          <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> fclose (<Text style={{ color: '#000080', fontWeight: 'bold' }}>FILE</Text> *fp);{'\n'}</Text>
        </Paragraph>

        <Paragraph>
          Ela recebe o ponteiro que determina o arquivo a ser fechado (<Text style={{ fontWeight: 'bold' }}>fp</Text>).{'\n'}
          A função retorna zero no caso de sucesso. {'\n'}
        </Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text style={{ fontWeight: 'bold' }}>Exemplo{'\n'}</Text>
        <Text style={{ color: '#008800', fontStyle: 'italic'}}>#include {'<stdio.h>'}</Text>
        <Text style={{ color: '#008800', fontStyle: 'italic'}}>#include {'<stdlib.h>'}</Text>
        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>FILE</Text> *fp;</Text>
        <Text style={{ marginLeft: 10 }}>fp = fopen(<Text style={{ color: '#0000FF' }}>"exemplo.bin"</Text>,<Text style={{ color: '#0000FF' }}>"wb"</Text>);</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>if</Text>(fp == NULL) {'{'}</Text>
        <Text style={{ marginLeft: 20 }}>printf(<Text style={{ color: '#0000FF' }}>"Erro na abertura do arquivo.\n"</Text>);</Text>
        <Text style={{ marginLeft: 20 }}>exit(<Text style={{ color: '#0000FF' }}>1</Text>);</Text>
        <Text style={{ marginLeft: 10 }}>{'}'}</Text>
        <Text style={{ marginLeft: 10 }}>fclose(fp);{'\n'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
        <Text>{'};\n'}</Text>
    </Page>
  );
};

export default Aula04_01;
