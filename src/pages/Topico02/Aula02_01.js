import React from 'react'
import { Divider, Title, Subheading, Text, Paragraph } from 'react-native-paper';
import Styles from '../../styles/styles'
import Page from '../../components/Page';

const Aula02_01 = () => {
  return (
    <Page nextRoute='Aula02_02'>
        <Title style={Styles.title}>Variável</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          Uma variável é armazenada em uma posição de memória.
          Uma váriavel pode ser modificada pelo programa e deve ser definida antes de ser usada.
        </Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text style={{ marginBottom: 6 }}>Declaração de variáveis em C:</Text>
        <Text style={{ marginBottom: 6 }}>
          <Text style={{ color: '#000080', fontWeight: 'bold' }}>tipo_da_variavel</Text> nome_da_variavel;
        </Text>

        <Text style={{ marginBottom: 6 }}>Pode-se declarar mais de uma variável separando cada nome por vírgula:</Text>
        <Text style={{ marginBottom: 6 }}>
          <Text style={{ color: '#000080', fontWeight: 'bold' }}>tipo_da_variavel</Text> nome1, nome2;
        </Text>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>
        <Subheading style={{ fontWeight: 'bold' }}>
          Nome da variável
        </Subheading>
        <Paragraph>
          <Text>É o nome que o programador dá para a variável.</Text>
          <Text>{'\n'}Deve iniciar com letras ou underscore <Text style={{ fontWeight: 'bold' }}>(_)</Text>.</Text>
          <Text>{'\n'}O nome pode ser composto por letras, números ou underscores.</Text>
          <Text>{'\n'}<Text style={{ fontWeight: 'bold' }}>Palavras chaves</Text> usadas pela linguagem não podem ser usadas como nomes.</Text>
          <Text>{'\n'}Letras maiúsculas e minúsculas são consideradas diferentes.</Text>
        </Paragraph>
    </Page>
  );
};

export default Aula02_01;
