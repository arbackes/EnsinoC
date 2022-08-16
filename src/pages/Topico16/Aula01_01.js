import React from 'react'
import { Divider, Title, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula01_01 = () => {
  return (
    <Page nextRoute='Aula01_02'>
        <Title style={Styles.title}>Arquivos</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          É uma coleção de bytes armazenados em um dispositivo de armazenamento secundário:{'\n'}
          - disco rígido{'\n'}
          - CD{'\n'}
          - DVD{'\n'}
          - etc{'\n'}
        </Paragraph>
        
        <Paragraph>
          Essa coleção de bytes pode ser interpretada das mais variadas maneiras:{'\n'}
          - Caracteres, palavras ou frases de um documento de texto.{'\n'}
          - Campos e registros de uma tabela de banco de dados.{'\n'}
          - Pixels de uma imagem.{'\n'}
          - etc.{'\n'}
        </Paragraph>
    </Page>
  );
};

export default Aula01_01;
