import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula01_01 = () => {
  return (
    <Page nextRoute='Aula01_02'>
        <Title style={Styles.title}>Ponteiros</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          <Text style={{ fontWeight: 'bold' }}>Variável</Text>{'\n'}
          É um espaço reservado de memória usado para guardar um <Text style={{ fontWeight: 'bold' }}>valor</Text> que pode ser modificado pelo programa.{'\n\n'}
          <Text style={{ fontWeight: 'bold' }}>Ponteiro</Text>{'\n'}
          É um espaço reservado de memória usado para guardar o <Text style={{ fontWeight: 'bold' }}>endereço de memória</Text> de uma outra variável.{'\n'}
          Um ponteiro é uma variável como qualquer outra do programa.{'\n'}
          Sua diferença é que ela não armazena um valor inteiro, real, caractere ou booleano.{'\n'}
          Um ponteiro serve para armazenar endereços de memória, que são valores inteiros sem sinal.
        </Paragraph>

    </Page>
  );
};

export default Aula01_01;
