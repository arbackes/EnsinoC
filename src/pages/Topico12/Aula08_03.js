import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula08_03 = () => {
  return (
    <Page nextRoute='Aula08_04'>
        <Title style={Styles.title}>Arrays como parâmetros</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          Vimos que para arrays, não é necessário especificar o número de elementos do array para a função:{'\n'}{'\n'}
          <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>void</Text> imprime(<Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> *array, <Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> N);{'\n'}{'\n'}</Text>
          <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>void</Text> imprime(<Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> array[], <Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> N);{'\n'}{'\n'}</Text>
        </Paragraph>

        <Paragraph>
          No entanto, para arrays com mais de uma dimensão, é necessário especificar o tamanho de todas as dimensões, exceto da primeira:{'\n'}{'\n'}
          <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>void</Text> imprime(<Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> matriz[][<Text style={{ color: '#0000FF' }}>5</Text>], <Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> N);{'\n'}{'\n'}</Text>
        </Paragraph>

        <Paragraph>
          Isso ocorre porque o compilador precisar saber o tamanho de cada elemento, não o número de elementos.{'\n'}
          Neste caso, a matriz pode ser interpretada como um array de arrays.{'\n'}
          Assim, "int m[4][5]" seria um array de 4 elementos e cada elemento é um array de 5 posições inteiras.
        </Paragraph>
    </Page>
  );
};

export default Aula08_03;
