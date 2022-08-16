import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper';
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula01_01 = () => {
  return (
    <Page nextRoute='Aula01_02'>
        <Title style={Styles.title}>Struct</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
            As variáveis vistas até agora podem ser classificadas em:{'\n'}
            -Simples: tipos <Text style={{ fontWeight: 'bold' }}>int</Text>, <Text style={{ fontWeight: 'bold' }}>float</Text>, <Text style={{ fontWeight: 'bold' }}>double</Text> e <Text style={{ fontWeight: 'bold' }}>char</Text>{'\n'}
            -Compostas homogêneas: do mesmo tipo definidas por <Text style={{ fontWeight: 'bold' }}>array</Text>{'\n'}
        </Paragraph>
        <Paragraph>
          A linguagem C permite que se crie <Text style={{ fontWeight: 'bold' }}>novos tipos</Text> a partir dos tipos básicos: um deles é a <Text style={{ fontWeight: 'bold' }}>struct</Text>, também chamada de estrutura{'\n'}
          Uma <Text style={{ fontWeight: 'bold' }}>estrutura</Text> pode ser vista como um novo tipo de dado formado pela composição de variáveis de outros tipos.
        </Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>Estruturas são declaradas da seguinte forma:{'\n'}</Paragraph>
        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>struct</Text> nomestruct {'{'}</Text>
        <Text style={{ marginLeft: 10 }}>tipo1 campo1;</Text>
        <Text style={{ marginLeft: 10 }}>tipo2 campo2;</Text>
        <Text style={{ marginLeft: 10 }}>...</Text>
        <Text style={{ marginLeft: 10 }}>tipoN campoN;</Text>
        <Text>{'}'};</Text>

        <Paragraph>Observação: uma <Text style={{ fontWeight: 'bold' }}>struct</Text> pode ser declarada em qualquer escopo.</Paragraph>
    </Page>
  );
};

export default Aula01_01;
