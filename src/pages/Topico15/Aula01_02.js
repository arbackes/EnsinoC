import React from 'react'
import { Divider, Title, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import { Topico15Image2 } from '../../../images'
import ImageZoom from '../../components/ImageZoom'
import Page from '../../components/Page'

const Aula01_02 = () => {
  return (
    <Page nextRoute='Aula01_03'>
        <Title style={Styles.title}>Alocação Estática</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
        Neste tipo de alocação, os dados estão organizados sequencialmente na memória do computador (como os arrays).{'\n'}{'\n'}
        O programador não precisa se preocupar em reservar memória.{'\n'}{'\n'}
        A quantidade de memória necessária para armazenar as suas variáveis é automaticamente reservada na stack (pilha).{'\n'}{'\n'}
        A quantidade total de memória utilizada pelo programa é previamente conhecida e não pode ser mudada.{'\n'}{'\n'}
        Não é possível redimensionar a memória.{'\n'}
        </Paragraph>

        <ImageZoom image={Topico15Image2} />
    </Page>
  );
};

export default Aula01_02;
