import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula04_02 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>A função fclose()</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>
        
        <Paragraph>
          <Text style={{ fontWeight: 'bold' }}>Por que devemos fechar o arquivo?</Text>{'\n'}
          Ao fechar um arquivo, todo caractere que tenha permanecido no "buffer" é gravado.{'\n'}
          O "buffer" é uma região de memória que armazena temporariamente os caracteres a serem gravados em disco imediatamente. {'\n'}
          Apenas quando o "buffer" está cheio é que seu conteúdo é escrito no disco.{'\n'}
        </Paragraph>
    </Page>
  );
};

export default Aula04_02;
