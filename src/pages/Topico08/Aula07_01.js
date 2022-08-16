import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula07_01 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Comando Break</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph style={{ marginBottom: 10 }}>
            O comando 
            <Text style={{ fontWeight: 'bold' }}> break </Text> 
            serve para interromper a execução de qualquer 
            <Text style={{ fontWeight: 'bold' }}> loop (for, while ou do-while).</Text> 
        </Paragraph>

        <Paragraph>
            Esse comando encerra de forma abrupta uma repetição.
        </Paragraph>
        <Paragraph style={{ marginLeft: 10 }}>
            O <Text style={{ fontWeight: 'bold' }}>laço</Text> é interrompido
        </Paragraph>
        <Paragraph style={{ marginLeft: 10 }}>
            o programa continua no comando seguinte ao <Text style={{ fontWeight: 'bold' }}>laço</Text>
        </Paragraph>

        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text style={{ fontWeight: 'bold' }}>Exemplo:</Text>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> a, b;</Text>
        <Text style={{ marginLeft: 10 }}>printf(<Text style={{ color: '#0000FF' }}>"Digite o valor de a:"</Text>);</Text>
        <Text style={{ marginLeft: 10 }}>scanf(<Text style={{ color: '#0000FF' }}>"%d"</Text>, &a);</Text>
        <Text style={{ marginLeft: 10 }}>printf(<Text style={{ color: '#0000FF' }}>"Digite o valor de b:"</Text>);</Text>
        <Text style={{ marginLeft: 10 }}>scanf(<Text style={{ color: '#0000FF' }}>"%d"</Text>, &b);</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>while</Text> (a {'<='} b) {'{'}</Text>
        <Text style={{ marginLeft: 20 }}>a = a + <Text style={{ color: '#0000FF' }}>1</Text>;</Text>
        <Text style={{ marginLeft: 20 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>if</Text> (a == 5)</Text>
        <Text style={{ marginLeft: 30 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>break</Text>;</Text>
        <Text style={{ marginLeft: 20 }}>printf(<Text style={{ color: '#0000FF' }}>"%d\n"</Text>, a);</Text>
        <Text style={{ marginLeft: 10 }}>{'}'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
        <Text>{'}'}</Text>
    </Page>
  );
};

export default Aula07_01;