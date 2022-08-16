import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula02_02 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Caminho para Arquivo</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>
        
        <Paragraph>
          O endereço de um arquivo pode ser definido de duas formas:{'\n'}
          - caminho absoluto{'\n'}
          - caminho relativo{'\n'}
        </Paragraph>

        <Paragraph>
          <Text style={{ fontWeight: 'bold' }}>Caminho absoluto</Text>{'\n'}
          - Descrição de um caminho desde o diretório raiz{'\n'}
          - "C:\Projetos\NovoProjeto\arquivo.txt"{'\n'}
        </Paragraph>

        <Paragraph>
          <Text style={{ fontWeight: 'bold' }}>Caminho relativo</Text>{'\n'}
          - É o caminho relativo ao local onde o programa se encontra{'\n'}
          - O sistema inicia a pesquisa pelo arquivo a partir do diretório do programa{'\n'}
          - "arquivo.txt"{'\n'}
          - ".\NovoProjeto\arquivo.txt"{'\n'}
        </Paragraph>
    </Page>
  );
};

export default Aula02_02;
