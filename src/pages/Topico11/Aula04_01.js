import React from 'react'
import { Divider, Title, Paragraph, Text, Subheading } from 'react-native-paper'
import { Topico11Image3 } from '../../../images'
import Styles from '../../styles/styles'
import ImageZoom from '../../components/ImageZoom'
import Page from '../../components/Page'

const Aula04_01 = () => {
  return (
    <Page nextRoute='Aula04_02'>
        <Title style={Styles.title}>Array de Estruturas</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          <Text style={{ fontWeight: 'bold' }}>Array</Text>: É uma “lista” de elementos do mesmo tipo.{'\n'}
          Podemos criar um <Text style={{ fontWeight: 'bold' }}>array</Text> de qualquer tipo de dado, inclusive de uma <Text style={{ fontWeight: 'bold' }}>struct.</Text>
        </Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          <Text style={{ fontWeight: 'bold' }}>Exemplo: </Text>Declarar um <Text style={{ fontWeight: 'bold' }}>array</Text> de 100 posições, onde cada posição é do tipo <Text style={{ fontWeight: 'bold' }}>struct cadastro.</Text>
        </Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <ImageZoom image={Topico11Image3} />

        <Paragraph>
          Desse modo, declara-se um array de 100 posições, onde cada posição é do tipo <Text style={{ fontWeight: 'bold' }}>struct cadastro</Text>.{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Importante:</Text> no <Text style={{ fontWeight: 'bold' }}>array</Text> de estruturas, o operador <Text style={{ fontWeight: 'bold' }}>ponto (.)</Text> vem depois dos <Text style={{ fontWeight: 'bold' }}>colchetes ([])</Text> do índice do <Text style={{ fontWeight: 'bold' }}>array</Text>.{'\n'}
        </Paragraph>

        <Subheading>Lembrando:</Subheading>
        <Paragraph>
          <Text style={{ fontWeight: 'bold' }}>struct:</Text> define um "conjunto" de variáveis que podem ser de tipos diferentes.{'\n'}
          <Text style={{ fontWeight: 'bold' }}>array:</Text> array: é uma "lista" de elementos de mesmo tipo.{'\n'}
        </Paragraph>

    </Page>
  );
};

export default Aula04_01;
