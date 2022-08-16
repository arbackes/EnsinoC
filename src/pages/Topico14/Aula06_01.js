import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula06_01 = () => {
  return (
    <Page nextRoute='Aula06_02'>
        <Title style={Styles.title}>Operações com Ponteiros</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
            <Text style={{ fontWeight: 'bold' }}>Operações aritméticas</Text>{'\n'}
            Apenas adição e subtração de valores inteiros podem ser utilizadas no endereço armazenado pelo ponteiro. {'\n'}
            Isso permite "caminhar" pelo endereço armazenado nos ponteiros.{'\n'}
            Essas operações dependem do tipo de dado do ponteiro, ou seja, sempre usam um valor proporcional ao tamanho do tipo na memória.{'\n'}
        </Paragraph>

        <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic' }}> //soma 1 vez o tamanho do tipo no endereço armazenado pelo ponteiro.</Text>
        <Text style={{ marginLeft: 10 }}>p++;</Text>
        <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic' }}> //subtrai 1 vez o tamanho do tipo no endereço armazenado pelo ponteiro.</Text>
        <Text style={{ marginLeft: 10 }}>p--;</Text>
        <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic' }}> //soma 15 vezes o tamanho do tipo no endereço armazenado pelo ponteiro.</Text>
        <Text style={{ marginLeft: 10 }}>p = p + <Text style={{ color: '#0000FF' }}>15</Text>;{'\n'}</Text>

        <Paragraph>
            <Text style={{ fontWeight: 'bold' }}>Operações ilegais com ponteiros</Text>{'\n'}
            Dividir ou multiplicar ponteiros{'\n'}
            Somar o endereço de dois ponteiros{'\n'}
            Adicionar ou subtrair valores dos tipos <Text style={{ fontWeight: 'bold' }}>float</Text> ou <Text style={{ fontWeight: 'bold' }}>double</Text>{'\n'}
        </Paragraph>
    </Page>
  );
};

export default Aula06_01;
