import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import { Topico10Image3 } from '../../../images'
import Styles from '../../styles/styles'
import ImageZoom from '../../components/ImageZoom';
import Page from '../../components/Page'

const Aula03_03 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>String - Lixo de Memória</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
            Aprendemos que o 
            <Text style={{ fontWeight: 'bold' }}> '\0' </Text>
            significa fim da sequência de caracteres da
            <Text style={{ fontWeight: 'bold' }}> string.</Text>
        </Paragraph>
        <Paragraph>
            No entanto, pode existir lixo de memória em alguma região não usada (isto, é, após o 
            <Text style={{ fontWeight: 'bold' }}> '\0'</Text>
        ). 
        </Paragraph>

        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text style={{ fontWeight: 'bold' }}>Exemplo:</Text>
        <Text>
          <Text style={{ color: '#000080', fontWeight: 'bold' }}>char </Text> 
          str
          [<Text style={{ color: '#0000FF' }}>6</Text>] = 
          <Text style={{ color: '#0000FF' }}>"Oi"</Text>;
        </Text>

        <ImageZoom image={Topico10Image3} />

        <Paragraph>
            Neste exemplo, a região usada são as
            <Text style={{ fontWeight: 'bold' }}> 2 letras + '\0', </Text> 
            o restante é 
            <Text style={{ fontWeight: 'bold' }}> lixo de memória.</Text>
        </Paragraph>
    </Page>
  );
};

export default Aula03_03;
