import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula08_01 = () => {
  return (
    <Page nextRoute='Aula08_02'>
        <Title style={Styles.title}>Arrays como parâmetros</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          Para utilizar arrays como parâmetros de funções alguns cuidados simples são necessários.{'\n'}{'\n'}

          Arrays são sempre passados <Text style={{ fontWeight: 'bold' }}>por referência</Text> para uma função.{'\n'}{'\n'}

          Isso evita a cópia desnecessária de grandes quantidades de dados durante a chamada da função, o que afetaria o desempenho do programa.{'\n'}{'\n'}

          É recomendado declarar um segundo parâmetro (em geral, uma variável inteira) para passar para a função o tamanho do array separadamente.{'\n'}{'\n'}

          Quando passamos um array por parâmetro, independente do seu tipo, o que é de fato passado é o endereço do primeiro elemento do array.{'\n'}{'\n'}
        </Paragraph>
    </Page>
  );
};

export default Aula08_01;
