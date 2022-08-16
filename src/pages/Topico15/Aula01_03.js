import React from 'react'
import { Divider, Title, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import { Topico15Image3 } from '../../../images'
import ImageZoom from '../../components/ImageZoom'
import Page from '../../components/Page'

const Aula01_01 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Alocação Dinâmica</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
        Neste tipo de alocação, o programador tem total controle sobre o tamanho e o tempo de vida das posições de memória dos seus dados.{'\n'}{'\n'}
        O programador é responsável por reservar a quantidade de memória necessária para seus dados.{'\n'}{'\n'}
        Essa memória não é mais reservada na stack, mas em outra área de memória, chamada heap.{'\n'}{'\n'}
        As variáveis armazenadas na heap não dependem do escopo e devem ser liberadas manualmente pelo programador.{'\n'}{'\n'}
        Nesta alocação, os dados podem estar dispersos na memória do computador.{'\n'}
        </Paragraph>

        <ImageZoom image={Topico15Image3} />
    </Page>
  );
};

export default Aula01_01;
