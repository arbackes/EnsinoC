import React from 'react'
import { Divider, Title, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import { Topico16Image2 } from '../../../images'
import ImageZoom from '../../components/ImageZoom'
import Page from '../../components/Page'

const Aula01_04 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Tipos de Arquivos</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>
        
        <Paragraph>
        Os dois trechos de arquivo abaixo possuem os mesmo dados{'\n'}
        </Paragraph>

        <ImageZoom image={Topico16Image2} />
    </Page>
  );
};

export default Aula01_04;
