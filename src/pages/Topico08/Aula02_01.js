import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula02_01 = () => {
  return (
    <Page nextRoute='Aula02_02'>
        <Title style={Styles.title}>Comando while</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>Equivale ao comando "enquanto".</Paragraph>
        <Paragraph style={{ marginBottom: 10 }}>
            Repete uma sequência de comandos enquanto a condição for <Text style={{ fontWeight: 'bold' }}>verdadeira.</Text>
        </Paragraph>

        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph style={{ marginBottom: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>Forma geral:</Text>
        </Paragraph>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>while</Text> (condicao) {'{'}</Text>
        <Text style={{ marginLeft: 10 }}>sequencia de comandos;</Text>
        <Text>{'}'}</Text>
     
        <Text style={{ marginTop: 10 }}>As <Text style={{ fontWeight: 'bold' }}>chaves {'{ }'}</Text> são utilizadas para delimitar um bloco de código. Caso seja necessário executar apenas uma linha, as chaves podem ser removidas.</Text>
        <Text>É mais seguro utilizar sempre as <Text style={{ fontWeight: 'bold' }}>chaves {'{ }'}</Text>, pois futuramente pode ser necessário inserir mais linhas no código.</Text>
    </Page>
  );
};

export default Aula02_01;
