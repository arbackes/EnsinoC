import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import { Topico14Image4 } from '../../../images'
import ImageZoom from '../../components/ImageZoom'
import Page from '../../components/Page'

const Aula06_02 = () => {
  return (
    <Page nextRoute='Aula06_03'>
        <Title style={Styles.title}>Operações com Ponteiros</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
            <Text style={{ fontWeight: 'bold' }}>Operações aritméticas dependem do tipo</Text>{'\n'}{'\n'}
            O tipo <Text style={{ fontWeight: 'bold' }}>int</Text> ocupa um espaço de 4 bytes na memória.{'\n'}
            Em um ponteiro para inteiro, <Text style={{ fontWeight: 'bold' }}>int</Text> *, as operações são feitas em múltiplos de 4.{'\n'}
            Assim, nas operações de adição e subtração são adicionados ou subtraídos 4 bytes por incremento ou decremento.{'\n'}
            Se fosse um ponteiro para <Text style={{ fontWeight: 'bold' }}>char</Text>, as operações serião feitas de 1 em 1 byte.{'\n'}
        </Paragraph>
        
        <ImageZoom image={Topico14Image4} />
    </Page>
  );
};

export default Aula06_02;
