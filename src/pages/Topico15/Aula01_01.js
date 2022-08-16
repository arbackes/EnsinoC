import React from 'react'
import { Divider, Title, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import { Topico15Image1 } from '../../../images'
import ImageZoom from '../../components/ImageZoom'
import Page from '../../components/Page'

const Aula01_01 = () => {
  return (
    <Page nextRoute='Aula01_02'>
        <Title style={Styles.title}>Alocação Dinâmica</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
        Sempre que escrevemos um programa, é preciso reservar espaço para os dados que serão processados.{'\n'}{'\n'}
        Para isso utilizamos as variáveis, que devem ser definidas antes de serem usadas.{'\n'}{'\n'}
        Infelizmente, nem sempre é possível saber, em tempo de execução, o quanto de memória um programa irá precisar.{'\n'}{'\n'}
        A alocação dinâmica permite ao programador criar “variáveis” em tempo de execução.{'\n'}{'\n'}
        Podemos usar um ponteiro para alocar memória para novas variáveis quando o programa está sendo executado, e não apenas quando se está escrevendo o programa.{'\n'}
        </Paragraph>

        <ImageZoom image={Topico15Image1} />

    </Page>
  );
};

export default Aula01_01;
