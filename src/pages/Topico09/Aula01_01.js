import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula01_01 = () => {
  return (
    <Page nextRoute='Aula01_02'>
        <Title style={Styles.title}>Array</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>Imagine que você deva ler as notas de 4 alunos e imprimir as notas que são maiores que a média da turma.</Paragraph>
        <Paragraph style={{ marginBottom: 10 }}>Basta criar 4 variáveis e armazenar as notas de cada aluno</Paragraph>

        <Text style={{ marginLeft: 10 }}><Text style={{ fontWeight: 'bold' }}>int</Text> nota1, nota2, nota3, nota4;</Text>

        <Paragraph style={{ marginTop: 10 }}>E se a turma possuir 200 alunos? Criar essa quantidade de variáveis é inviável!</Paragraph>

        <Paragraph style={{ marginTop: 10 }}>É aí que um <Text style={{ fontWeight: 'bold' }}>array</Text>  vai te ajudar!</Paragraph>
        <Paragraph style={{ marginBottom: 10 }}>Um <Text style={{ fontWeight: 'bold' }}>array</Text> é uma sequência de variáveis do mesmo tipo, onde cada variável é identificada por um indice!</Paragraph>

        <Paragraph style={{ marginTop: 10, marginBottom: 10 }}>Declaração de um  <Text style={{ fontWeight: 'bold' }}>array:</Text></Paragraph>
        <Text style={{ marginLeft: 10 }}><Text style={{ fontWeight: 'bold' }}>tipo_dado</Text> nome_array<Text style={{ fontWeight: 'bold' }}>[tamanho]</Text>;</Text>

        <Paragraph style={{ marginTop: 10 }}>
            Um 
            <Text style={{ fontWeight: 'bold' }}> array </Text>
            de 
            <Text style={{ fontWeight: 'bold' }}> nome_array </Text>
            é capaz de armazenar 
            <Text style={{ fontWeight: 'bold' }}> tamanho </Text>
            elementos adjacentes na memória do
            <Text style={{ fontWeight: 'bold' }}> tipo_dado.</Text> 
        </Paragraph>
    </Page>
  );
};

export default Aula01_01;
