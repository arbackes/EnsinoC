import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import { Topico12Image4 } from '../../../images'
import ImageZoom from '../../components/ImageZoom'
import Page from '../../components/Page'

const Aula07_05 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Passagem de Parâmetros</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          <Text style={{ fontWeight: 'bold' }}>Passagem por referência{'\n'}</Text>
        </Paragraph>

        <Paragraph>
          No corpo da função, é necessário usar colocar um asterisco “*” sempre que se desejar acessar o conteúdo do parâmetro passado por referência.{'\n'}
        </Paragraph>

        <ImageZoom image={Topico12Image4} />
    </Page>
  );
};

export default Aula07_05;
