import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula08_04 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Arrays como parâmetros</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          Logo, o compilador precisa saber o tamanho de cada elemento do array.{'\n'}{'\n'}
          No exemplo a seguir, informamos ao compilador que estamos passando um array, onde cada elemento dele é outro array de 5 posições inteiras.{'\n'}{'\n'}
          Neste caso, a função <Text style={{ fontWeight: 'bold' }}>imprime()</Text> pode receber uma matriz com qualquer número de linhas, definido pelo parâmetro <Text style={{ fontWeight: 'bold' }}>N</Text>, mas sempre contendo 5 colunas.{'\n'}{'\n'}
          <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> m[<Text style={{ color: '#0000FF' }}>4</Text>][<Text style={{ color: '#0000FF' }}>5</Text>];</Text>{'\n'}{'\n'}
          <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>void</Text> imprime(<Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> matriz[][<Text style={{ color: '#0000FF' }}>5</Text>], <Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> N);{'\n'}{'\n'}</Text>
        </Paragraph>
    </Page>
  );
};

export default Aula08_04;
