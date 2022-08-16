import React from 'react';
import {Title, Text, Paragraph, Subheading} from 'react-native-paper';
import Page from '../../components/Page';
import Styles from '../../styles/styles';

const Aula01_02 = () => {
  return (
    <Page nextRoute="Menu">
      <Title style={Styles.title}>Estrutura de um programa</Title>

      <Subheading>Declarações globais</Subheading>
      <Paragraph style={{marginBottom: 15}}>
        São válidas para todo o programa. Por exemplo, o comando:
      </Paragraph>
      <Text style={{marginBottom: 15, color: 'blue'}}>
        #include {'<'}nome_da_biblioteca{'>'}
      </Text>
      <Subheading>Bibliotecas</Subheading>
      <Text style={{marginBottom: 15}}>
        São conjuntos de funções já implementadas que podem ser utilizadas pelo
        programador. Por exemplo, a biblioteca{' '}
        <Text style={{fontWeight: 'bold'}}>math.h</Text> possui funções como{' '}
        <Text style={{fontWeight: 'bold'}}>seno</Text>,{' '}
        <Text style={{fontWeight: 'bold'}}>cosseno</Text> e{' '}
        <Text style={{fontWeight: 'bold'}}>raíz quadrada</Text> já
        implementadas. Utilizando essa biblioteca o programador poderá utilizar
        qualquer uma dessas funções.
      </Text>
    </Page>
  );
};

export default Aula01_02;
