import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula05_02 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Percorrendo uma matriz - Exemplo</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph style={{ marginBottom: 10 }}>
            O programa a seguir realiza a leitura dos elementos de uma matriz.
        </Paragraph>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10 }}>
            <Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> i, j;
        </Text>
        <Text style={{ marginLeft: 10 }}>
            <Text style={{ color: '#000080', fontWeight: 'bold' }}>int </Text> 
            matriz
            [<Text style={{ color: '#0000FF' }}>20</Text>], 
            [<Text style={{ color: '#0000FF' }}>10</Text>];
        </Text>
        <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic'}}>//Para cada linha percorrida...</Text>
        <Text style={{ marginLeft: 10 }}>
            <Text style={{ color: '#000080', fontWeight: 'bold' }}>for </Text>(i = <Text style={{ color: '#0000FF' }}>0</Text>; i {'<'} <Text style={{ color: '#0000FF' }}>20</Text>; i++){'{'}
        </Text>
        <Text style={{ marginLeft: 20, color: '#008800', fontStyle: 'italic'}}>//Percorra todas as colunas.</Text>
        <Text style={{ marginLeft: 20 }}>
            <Text style={{ color: '#000080', fontWeight: 'bold' }}>for </Text>(j = <Text style={{ color: '#0000FF' }}>0</Text>; j {'<'} <Text style={{ color: '#0000FF' }}>10</Text>; j++){'{'}
        </Text>
        <Text style={{ marginLeft: 30, color: '#008800', fontStyle: 'italic'}}>//Leia o elemento da posição i,j.</Text>
        <Text style={{ marginLeft: 30 }}>
            scanf(
            <Text style={{ color: '#0000FF' }}>"%d"</Text>, 
            <Text>
                &matriz[
                <Text style={{ color: '#0000FF' }}>i</Text>] 
                [<Text style={{ color: '#0000FF' }}>j</Text>]
            </Text>
            );
        </Text>
        <Text style={{ marginLeft: 20 }}>{'}'}</Text>
        <Text style={{ marginLeft: 10 }}>{'}'}</Text>
        <Text style={{ marginLeft: 10}}><Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text><Text style={{ color: '#0000FF' }}>0</Text>;</Text>
        <Text>{'}'}</Text>

        <Paragraph style={{ marginTop: 10 }}>
            Para realizar a leitura de uma matriz, é necessário percorrer suas linhas e colunas. Feito isso, podemos chamar o comando 
            <Text style={{ fontWeight: 'bold' }}> scanf() </Text> 
            para a posição especificada da matriz.
        </Paragraph>
    </Page>
  );
};

export default Aula05_02;
