import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import { Topico14Image3 } from '../../../images'
import Styles from '../../styles/styles'
import ImageZoom from '../../components/ImageZoom'
import Page from '../../components/Page'

const Aula02_02 = () => {
  return (
    <Page nextRoute='Aula02_03'>
        <Title style={Styles.title}>Ponteiros - Inicialização</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          Os ponteiros devem ser inicializados antes de serem usados.{'\n'}
          Assim, devemos apontar um ponteiro para um lugar conhecido.{'\n'}
          Podemos apontá-lo para uma variável que já exista no programa.{'\n'}{'\n'}
          <Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> c = <Text stle={{ color: '#0000FF' }}>10</Text>;{'\n'}
          <Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> *p = {'&'}c;{'\n'}
        </Paragraph>

        <ImageZoom image={Topico14Image3} />

        <Paragraph>O ponteiro armazena o endereço da variável para onde ele aponta.</Paragraph>
    </Page>
  );
};

export default Aula02_02;
