import React from 'react'
import { Divider, Title, Paragraph, Text, Subheading } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula05_01 = () => {
  return (
    <Page nextRoute='Aula05_02'>
        <Title style={Styles.title}>Aninhamento de Estruturas</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          Uma <Text style={{ fontWeight: 'bold' }}>estrutura</Text> pode agrupar um número arbitrário de variáveis de tipos diferentes.{'\n'}
          Como a <Text style={{ fontWeight: 'bold' }}>estrutura</Text> também é um <Text style={{ fontWeight: 'bold' }}>tipo de dado</Text>, podemos declarar uma estrutura que utilize outra estrutura previamente definida.
        </Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Subheading>Forma Geral:</Subheading>
        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>struct</Text> nome_struct_1 {'{'}</Text>
        <Text style={{ marginLeft: 10 }}>...</Text>
        <Text>{'};\n'}</Text>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>struct</Text> nome_struct_2 {'{'}</Text>
        <Text style={{ marginLeft: 10 }}>...</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>struct</Text> nome_struct_1 variavel;{'\n'}</Text>
        <Text>{'};\n'}</Text>

        <Paragraph>Resumindo: temos agora uma <Text style={{ fontWeight: 'bold' }}>estrutura</Text> dentro de outra <Text style={{ fontWeight: 'bold' }}>estrutura</Text>!</Paragraph>
    </Page>
  );
};

export default Aula05_01;
