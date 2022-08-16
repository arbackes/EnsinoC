import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import { Topico14Image1, Topico14Image2 } from '../../../images'
import Styles from '../../styles/styles'
import ImageZoom from '../../components/ImageZoom'
import Page from '../../components/Page'

const Aula02_01 = () => {
  return (
    <Page nextRoute='Aula02_02'>
        <Title style={Styles.title}>Ponteiros - Inicialização</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          Ponteiros apontam para uma posição de memória, sendo assim devem ser inicializados.{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Cuidado:</Text> ponteiros não inicializados apontam para um lugar indefinido.{'\n'}
          <Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> *p;
        </Paragraph>

        <ImageZoom image={Topico14Image1} />

        <Paragraph>
          {'\n'}
          Um ponteiro pode ter o valor especial <Text style={{ fontWeight: 'bold' }}>NULL</Text> que é o endereço de nenhum lugar.{'\n'}
          <Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> *p = NULL;{'\n'}
        </Paragraph>

        <ImageZoom image={Topico14Image2} />
    </Page>
  );
};

export default Aula02_01;
