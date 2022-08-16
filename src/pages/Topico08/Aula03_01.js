import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula03_01 = () => {
  return (
    <Page nextRoute='Aula03_02'>
        <Title style={Styles.title}>Comando do-while</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>É utilizado sempre que o bloco de comandos a ser repetido deve ser executado <Text style={{ fontWeight: 'bold' }}>ao menos uma vez.</Text></Paragraph>
        <Paragraph style={{ marginBottom: 10 }}>Executa a sequência de comandos. Somente após essa execução ele testa a condição.</Paragraph>
        <Paragraph style={{ marginLeft: 10 }}>Se a condição for <Text style={{ fontWeight: 'bold' }}>verdadeira</Text>, a sequência de comandos é executada novamente.</Paragraph>
        <Paragraph style={{ marginLeft: 10 }}>Caso a condição for <Text style={{ fontWeight: 'bold' }}>falsa</Text>, o laço é finalizado.</Paragraph>

        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text style={{ marginBottom: 10, fontWeight: 'bold' }}>Forma geral:</Text>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>do</Text> {'{'}</Text>
        <Text style={{ marginLeft: 10 }}>sequencia de comandos;</Text>
        <Text>{'}'}<Text style={{ color: '#000080', fontWeight: 'bold' }}> while </Text>(condicao);</Text>
    </Page>
  );
};

export default Aula03_01;
