import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula06_02 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Incialização de arrays e matrizes</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
            A outra forma de inicialização é utilizando o comando
            <Text style={{ fontWeight: 'bold' }}> scanf().</Text> 
        </Paragraph>
        <Paragraph>
            Com ele precisamos percorrer os vetores e
            <Text style={{ fontWeight: 'bold' }}> matrizes. </Text> 
            Mas isso já não é problema, não é mesmo?
        </Paragraph>

        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text style={{ fontWeight: 'bold' }}>Exemplo:</Text>
        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10 }}>
            <Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> j, i;
        </Text>
        <Text style={{ marginTop: 10, marginLeft: 10 }}>
            <Text style={{ color: '#000080', fontWeight: 'bold' }}>int </Text> 
            vetor
            [<Text style={{ color: '#0000FF' }}>4</Text>];
        </Text>
        <Text style={{ marginLeft: 10 }}>
            <Text style={{ color: '#000080', fontWeight: 'bold' }}>for </Text>(i = <Text style={{ color: '#0000FF' }}>0</Text>; i {'<'} <Text style={{ color: '#0000FF' }}>4</Text>; i++)
        </Text>
        <Text style={{ marginLeft: 20, color: '#008800', fontStyle: 'italic'}}>// O valor lido do teclado será armazenado na posição i!</Text>
        <Text style={{ marginLeft: 20 }}>
            scanf(
            <Text style={{ color: '#0000FF' }}>"%d"</Text>, 
            <Text>
                &vetor[<Text style={{ color: '#0000FF' }}>i</Text>]
            </Text>
            );
        </Text>
        <Text style={{ marginTop: 10, marginLeft: 10 }}>
            <Text style={{ color: '#000080', fontWeight: 'bold' }}>int </Text> 
            matriz
            [<Text style={{ color: '#0000FF' }}>3</Text>]
            [<Text style={{ color: '#0000FF' }}>4</Text>];
        </Text>
        <Text style={{ marginLeft: 10 }}>
            <Text style={{ color: '#000080', fontWeight: 'bold' }}>for </Text>(j = <Text style={{ color: '#0000FF' }}>0</Text>; j {'<'} <Text style={{ color: '#0000FF' }}>3</Text>; j++)
        </Text>
        <Text style={{ marginLeft: 20 }}>
            <Text style={{ color: '#000080', fontWeight: 'bold' }}>for </Text>(i = <Text style={{ color: '#0000FF' }}>0</Text>; j {'<'} <Text style={{ color: '#0000FF' }}>4</Text>; i++)
        </Text>
        <Text style={{ marginLeft: 30 }}>
            scanf(
            <Text style={{ color: '#0000FF' }}>"%d"</Text>, 
            <Text>
                &matriz
                [<Text style={{ color: '#0000FF' }}>j</Text>]
                [<Text style={{ color: '#0000FF' }}>i</Text>]
            </Text>
            );
        </Text>
        <Text style={{ marginLeft: 10}}><Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text><Text style={{ color: '#0000FF' }}> 0</Text>;</Text>
        <Text>{'}'}</Text>
    </Page>
  );
};

export default Aula06_02;
