import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula05_01 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Omitindo as cláusulas do comando for</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>Podemos omitir qualquer um dos elementos do comando <Text style={{ fontWeight: 'bold' }}>for: inicialização, condição ou incremento.</Text></Paragraph>

        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text style={{ fontWeight: 'bold' }}>for sem inicialização:</Text>

        <Paragraph style={{ marginBottom: 10, marginTop: 10 }}>Neste caso, a variável a foi inicializada pelo <Text style={{ fontWeight: 'bold' }}>scanf().</Text></Paragraph>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> a, b;</Text>
        <Text style={{ marginLeft: 10 }}>scanf(<Text style={{ color: '#0000FF' }}>"%d"</Text>, &a);</Text>
        <Text style={{ marginLeft: 10, marginTop: 10 }}>
            <Text style={{ color: '#000080', fontWeight: 'bold' }}>for</Text>(; a {'<='} b; a++){'{'}
        </Text>
        <Text style={{ marginLeft: 20 }}>printf(<Text style={{ color: '#0000FF' }}>"%d\n"</Text>, a);</Text>
        <Text style={{ marginLeft: 10 }}>{'}'}</Text>
        <Text style={{ marginLeft: 10, marginBottom: 10 }}><Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
        <Text>{'}'}</Text>

        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph style={{ fontWeight: 'bold' }}>for sem condição:</Paragraph>

        <Paragraph style={{ marginTop: 10 }}>Omitir a condição cria um <Text style={{ fontWeight: 'bold' }}>laço infinito.</Text></Paragraph>
        <Paragraph style={{ marginBottom: 10 }}>Condição sempre será <Text style={{ fontWeight: 'bold' }}>verdadeira.</Text></Paragraph>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> a, b;</Text>
        <Text style={{ marginLeft: 10 }}>scanf(<Text style={{ color: '#0000FF' }}>"%d"</Text>, &a);</Text>
        <Text style={{ marginLeft: 10, marginTop: 10 }}>
            <Text style={{ color: '#000080', fontWeight: 'bold' }}>for</Text>(a = <Text style={{ color: '#0000FF' }}>5</Text>; ; a++){'{'}
        </Text>
        <Text style={{ marginLeft: 20 }}>printf(<Text style={{ color: '#0000FF' }}>"%d\n"</Text>, a);</Text>
        <Text style={{ marginLeft: 10 }}>{'}'}</Text>
        <Text style={{ marginLeft: 10, marginTop: 10 }}><Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
        <Text>{'}'}</Text>

        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph style={{ fontWeight: 'bold' }}>for sem incremento:</Paragraph>

        <Paragraph style={{ marginBottom: 10, marginTop: 10 }}>
            Omitir o incremento cria um 
            <Text style={{ fontWeight: 'bold' }}> laço infinito, </Text> 
            a menos que o contador seja incrementado dentro do 
            <Text style={{ fontWeight: 'bold' }}> for.</Text>
        </Paragraph>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> b, c;</Text>
        <Text style={{ marginLeft: 10, marginTop: 10 }}>
            <Text style={{ color: '#000080', fontWeight: 'bold' }}>for</Text>(c = <Text style={{ color: '#0000FF' }}>1</Text>; c {'<='} b;){'{'}
        </Text>
        <Text style={{ marginLeft: 20 }}>printf(<Text style={{ color: '#0000FF' }}>"%d\n"</Text>, c);</Text>
        <Text style={{ marginLeft: 20 }}>c++;</Text>
        <Text style={{ marginLeft: 10 }}>{'}'}</Text>
        <Text style={{ marginLeft: 10, marginTop: 10 }}><Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
        <Text>{'}'}</Text>
    </Page>
  );
};

export default Aula05_01;