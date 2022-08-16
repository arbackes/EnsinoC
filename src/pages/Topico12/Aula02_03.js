import React from 'react'
import { Divider, Title, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import { Topico12Image2 } from '../../../images'
import ImageZoom from '../../components/ImageZoom'
import Page from '../../components/Page'

const Aula02_02 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Ordem de Execução da Função</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>
        
        <Paragraph>
          Ao chamar uma função, o programa que a chamou é pausado até que a função termine a sua execução.{'\n'}
        </Paragraph>

        <ImageZoom image={Topico12Image2} />

    </Page>
  );
};

export default Aula02_02;
