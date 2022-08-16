import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import { Topico9Image1 } from '../../../images'
import ImageZoom from '../../components/ImageZoom';
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula04_01 = () => {
  return (
    <Page nextRoute='Aula04_02'>
        <Title style={Styles.title}>Matrizes e Arrays multidimensionais</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
            Os 
            <Text style={{ fontWeight: 'bold' }}> arrays </Text>
            declarados até o momento possuem apenas uma dimensão e são tratados como uma 
            <Text style={{ fontWeight: 'bold' }}> lista de variáveis.</Text>
        </Paragraph>
        <Paragraph>Existem casos em que uma estrutura com mais de uma dimensão é mais útil.</Paragraph>
        <Paragraph>
            Por exemplo, quando os dados são organizados em uma estrutura de linhas e colunas, como uma
            <Text style={{ fontWeight: 'bold' }}> tabela.</Text>
        </Paragraph>
        <Paragraph>
            Para isso usamos um  
            <Text style={{ fontWeight: 'bold' }}> array </Text>
            com duas dimensões, ou seja, uma 
            <Text style={{ fontWeight: 'bold' }}> matriz!</Text>
        </Paragraph>

        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text style={{ marginBottom: 10 }}>Declaração de uma <Text style={{ fontWeight: 'bold' }}> matriz:</Text></Text>

        <Text style={{ marginBottom: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>tipo_var </Text>
            nome_var<Text style={{ fontWeight: 'bold' }}>[num_linhas] </Text>
            <Text style={{ fontWeight: 'bold' }}>[num_col];</Text>
        </Text>

        <Paragraph>
            Uma matriz necessita de dois índices para acessar uma posição: um para a 
            <Text style={{ fontWeight: 'bold' }}> linha </Text> 
            e outro para 
            <Text style={{ fontWeight: 'bold' }}> coluna.</Text> 
        </Paragraph>
        <Paragraph style={{ marginBottom: 10 }}>
            Em uma matriz, os elementos são acessados especificando um par de colchetes e índice para cada dimensão da matriz.
        </Paragraph>

        <Text style={{ color: '#008800', fontStyle: 'italic'}}>//Matriz possui 100 linhas e 50 colunas.</Text>
        <Text>
            <Text style={{ color: '#000080', fontWeight: 'bold' }}>int </Text> 
            mat[
            <Text style={{ color: '#0000FF' }}>100</Text>] 
            [<Text style={{ color: '#0000FF' }}>50</Text>];
        </Text>
        <Text style={{ color: '#008800', fontStyle: 'italic'}}>// Atribuindo o valor 99 para o elemento na linha 0 e coluna 1.</Text>
        <Text>
            <Text style={{ color: '#000080', fontWeight: 'bold' }}>int </Text> 
            mat[
            <Text style={{ color: '#0000FF' }}>0</Text>] 
            [<Text style={{ color: '#0000FF' }}>1</Text>] = <Text style={{ color: '#0000FF' }}>99</Text>;
        </Text>

        <Paragraph style={{ marginTop: 10, marginBottom: 10 }}>
            Como nos 
            <Text style={{ fontWeight: 'bold' }}> arrays </Text> 
            com apenas uma dimensão, os índices começam sempre do 0! E os índices vão até 
            <Text style={{ fontWeight: 'bold' }}> tamanho-1  </Text> 
            assim como nos arrays, onde
            <Text style={{ fontWeight: 'bold' }}> tamanho </Text>  
            é o tamanho daquela dimensão.
        </Paragraph>
            
        <ImageZoom image={Topico9Image1} />
    </Page>
  );
};

export default Aula04_01;
