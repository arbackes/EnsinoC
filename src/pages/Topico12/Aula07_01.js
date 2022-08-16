import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import { Topico12Image3 } from '../../../images'
import ImageZoom from '../../components/ImageZoom'
import Page from '../../components/Page'

const Aula07_01 = () => {
  return (
      <Page nextRoute='Aula07_02'>
          <Title style={Styles.title}>Passagem de Parâmetros</Title>
          <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

          <Paragraph>
            <Text style={{ fontWeight: 'bold' }}>Passagem por valor</Text>
          </Paragraph>

          <Paragraph>
            Na linguagem C, os parâmetros de uma função são sempre passados por valor.{'\n'}
            Isso significa que uma cópia do valor do parâmetro é feita e passada para a função.{'\n'}
            Mesmo que esse valor mude dentro da função, nada acontece com o valor de fora da função.{'\n'}
          </Paragraph>

          <ImageZoom image={Topico12Image3} />

      </Page>
  );
};

export default Aula07_01;
