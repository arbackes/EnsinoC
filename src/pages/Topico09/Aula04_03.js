import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula04_03 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Matrizes e Arrays Multidimensionais</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph style={{ marginBottom: 10 }}>
            Os 
            <Text style={{ fontWeight: 'bold' }}> arrays </Text> 
            podem ter diversas dimensões, cada uma identificada por um par de 
            <Text style={{ fontWeight: 'bold' }}> colchetes </Text> 
            na declaração:
        </Paragraph>

        <Text style={{ color: '#008800', fontStyle: 'italic'}}>//array com 2 dimensões </Text>
        <Text style={{ marginBottom: 10 }}>
            <Text style={{ color: '#000080', fontWeight: 'bold' }}>float </Text> 
            matriz[
            <Text style={{ color: '#0000FF' }}>5</Text>] 
            [<Text style={{ color: '#0000FF' }}>5</Text>];
        </Text>

        <Text style={{ color: '#008800', fontStyle: 'italic'}}>//array com 3 dimensões </Text>
        <Text style={{ marginBottom: 10 }}>
            <Text style={{ color: '#000080', fontWeight: 'bold' }}>double </Text> 
            cubo[
            <Text style={{ color: '#0000FF' }}>10</Text>] 
            [<Text style={{ color: '#0000FF' }}>22</Text>]
            [<Text style={{ color: '#0000FF' }}>5</Text>];
        </Text>

        <Text style={{ color: '#008800', fontStyle: 'italic'}}>//array com 4 dimensões </Text>
        <Text style={{ marginBottom: 10 }}>
            <Text style={{ color: '#000080', fontWeight: 'bold' }}>int </Text> 
            x[
            <Text style={{ color: '#0000FF' }}>6</Text>] 
            [<Text style={{ color: '#0000FF' }}>4</Text>]
            [<Text style={{ color: '#0000FF' }}>4</Text>]
            [<Text style={{ color: '#0000FF' }}>2</Text>];
        </Text>

        <Paragraph style={{ marginBottom: 10 }}>
            Um
            <Text style={{ fontWeight: 'bold' }}> array  </Text> 
            N-dimensional funciona basicamente como outros tipos de
            <Text style={{ fontWeight: 'bold' }}> array. </Text> 
            Basta lembrar que o índice que varia mais rapidamente é o índice mais à direita.
        </Paragraph>
    </Page>
  );
};

export default Aula04_03;
