import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula04_02 = () => {
  return (
    <Page nextRoute='Aula04_03'>
        <Title style={Styles.title}>Matrizes e Arrays multidimensionais</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph style={{ marginBottom: 10 }}>
            Cada elemento da matriz tem todas as características de uma variável e pode aparecer em expressões e atribuições (respeitando os seus tipos):
        </Paragraph>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> x = <Text style={{ color: '#0000FF' }}>2</Text>;</Text>
        <Text style={{ marginBottom: 10 }}>
            <Text style={{ color: '#000080', fontWeight: 'bold' }}>int </Text> 
            mat[
            <Text style={{ color: '#0000FF' }}>100</Text>] 
            [<Text style={{ color: '#0000FF' }}>50</Text>];
        </Text>
        <Text style={{ color: '#008800', fontStyle: 'italic'}}>//Leitura do teclado</Text>
        <Text style={{ marginBottom: 10 }}>
            scanf(
            <Text style={{ color: '#0000FF' }}>"%d"</Text>, 
            <Text>
                &mat[
                <Text style={{ color: '#0000FF' }}>5</Text>] 
                [<Text style={{ color: '#0000FF' }}>3</Text>]
            </Text>
            );
        </Text>
        <Text style={{ color: '#008800', fontStyle: 'italic'}}>//Escrita em tela</Text>
        <Text style={{ marginBottom: 10 }}>
            printf(
            <Text style={{ color: '#0000FF' }}>"%d"</Text>, 
            <Text>
                mat[
                <Text style={{ color: '#0000FF' }}>15</Text>] 
                [<Text style={{ color: '#0000FF' }}>34</Text>]
            </Text>
            );
        </Text>
        <Text style={{ color: '#008800', fontStyle: 'italic'}}>//Operações entre valores da matriz e outras variáveis</Text>
        <Text style={{ marginBottom: 10 }}>
            mat[
            <Text style={{ color: '#0000FF' }}>0</Text>] 
            [<Text style={{ color: '#0000FF' }}>1</Text>] 
            = x + mat [
            <Text style={{ color: '#0000FF' }}>1</Text>] 
            [<Text style={{ color: '#0000FF' }}>5</Text>];
        </Text>
        <Text style={{ color: '#008800', fontStyle: 'italic'}}>//Comparação de valores da matriz </Text>
        <Text style={{ color: '#000080', fontWeight: 'bold' }}>if(
            <Text>
                mat[
                <Text style={{ color: '#0000FF' }}>5</Text>] 
                [<Text style={{ color: '#0000FF' }}>7</Text>] {'>'}
                <Text style={{ color: '#0000FF' }}> 0</Text>)
            </Text>
        </Text>
    </Page>
  );
};

export default Aula04_02;
