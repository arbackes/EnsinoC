import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula04_03 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>A função fopen()</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          O exemplo a seguir mostra como abrir um arquivo binário para escrita.{'\n'}
          A condição <Text style={{ fontWeight: 'bold' }}>fp==NULL</Text> testa se o arquivo foi aberto com sucesso.{'\n'}
        </Paragraph>

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

export default Aula04_03;
