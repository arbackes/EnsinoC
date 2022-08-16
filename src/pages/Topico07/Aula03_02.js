import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula03_02 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Comando else - Exemplo</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph style={{marginBottom: 10 }}>
            O programa a seguir define se um aluno foi aprovado ou reprovado
        </Paragraph>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> nota;</Text>
        <Text style={{ marginLeft: 10 }}>printf(<Text style={{ color: '#0000FF' }}>"Insira a nota:"</Text>);</Text>
        <Text style={{ marginLeft: 10 }}>scanf(<Text style={{ color: '#0000FF' }}>"%d"</Text>, &nota);</Text>
        <Text style={{ marginLeft: 10, marginTop: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold'}}>if</Text>(nota {'>='} 60){'{'}</Text>
        <Text style={{ marginLeft: 20 }}>printf(<Text style={{ color: '#0000FF' }}>"Aluno Aprovado\n"</Text>);</Text>
        <Text style={{ marginLeft: 10 }}>{'}'}<Text style={{ color: '#000080', fontWeight: 'bold'}}>else</Text>{'{'}</Text>
        <Text style={{ marginLeft: 20 }}>printf(<Text style={{ color: '#0000FF' }}>"Aluno Reprovado\n"</Text>);</Text>
        <Text style={{ marginLeft: 10 }}>{'}'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> 0;</Text>
        <Text>{'}'}</Text>
    </Page>
  );
};

export default Aula03_02;
