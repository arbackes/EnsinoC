import React from 'react';
import {Topico1Image1} from '../../../images';
import {Title, Text} from 'react-native-paper';
import ImageZoom from '../../components/ImageZoom';
import Styles from '../../styles/styles';
import Page from '../../components/Page';

const Aula01_01 = () => {
  return (
    <Page nextRoute="Aula01_02">
      <Title style={Styles.title}>Estrutura de um programa</Title>

      <Text style={{marginVertical: 15}}>
        Programas desenvolvidos na linguagem C possuem a seguinte estrutura:
      </Text>

      <ImageZoom image={Topico1Image1} />
    </Page>
  );
};

export default Aula01_01;
