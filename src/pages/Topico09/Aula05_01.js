import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula05_01 = () => {
  return (
    <Page nextRoute='Aula05_02'>
        <Title style={Styles.title}>Percorrendo uma matriz</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph style={{ marginBottom: 10 }}>
            Como uma matriz possui 
            <Text style={{ fontWeight: 'bold' }}> dois índices, </Text> 
            precisamos 
            <Text style={{ fontWeight: 'bold' }}> dois comandos de repetição </Text> 
            para percorrer todos os seus elementos.
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
        <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic'}}>//Para cada linha ...</Text>
        <Text style={{ marginLeft: 10 }}>
            <Text style={{ color: '#000080', fontWeight: 'bold' }}>for </Text>(i = <Text style={{ color: '#0000FF' }}>0</Text>; i {'<'} <Text style={{ color: '#0000FF' }}>20</Text>; i++){'{'}
        </Text>
        <Text style={{ marginLeft: 20, color: '#008800', fontStyle: 'italic'}}>//Percorra todas as colunas.</Text>
        <Text style={{ marginLeft: 20 }}>
            <Text style={{ color: '#000080', fontWeight: 'bold' }}>for </Text>(j = <Text style={{ color: '#0000FF' }}>0</Text>; j {'<'} <Text style={{ color: '#0000FF' }}>10</Text>; j++){'{'}
        </Text>
        <Text style={{ marginLeft: 30, color: '#008800', fontStyle: 'italic'}}>//Atribui 10 para o elemento na linha i da coluna j.</Text>
        <Text style={{ marginLeft: 30 }}>matriz[i][j] = <Text style={{ color: '#0000FF' }}>10</Text></Text>
        <Text style={{ marginLeft: 20 }}>{'}'}</Text>
        <Text style={{ marginLeft: 10 }}>{'}'}</Text>
        <Text style={{ marginLeft: 10}}><Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
        <Text>{'}'}</Text>
    </Page>
  );
};

export default Aula05_01;
