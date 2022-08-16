import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import { Topico13Image2 } from '../../../images'
import ImageZoom from '../../components/ImageZoom'
import Page from '../../components/Page'

const Aula03_01 = () => {
  return (
    <Page nextRoute='Aula03_02'>
          <Title style={Styles.title}>Recursão</Title>
          <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

          <Paragraph>
            A sequência Fibonacci é um clássico exemplo de recursão:{'\n'}{'\n'}
            <Text style={{ marginLeft: 10 }}>0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89,...</Text>{'\n'}{'\n'}
            É definida como uma função recursiva utilizando a fórmula a seguir:{'\n'}
          </Paragraph>
          
          <ImageZoom image={Topico13Image2} />

        <Paragraph>
          Sua solução recursiva é muito elegante...
        </Paragraph>
    </Page>
  );
};

export default Aula03_01;
