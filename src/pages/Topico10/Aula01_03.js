import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import { Topico10Image1, Topico10Image2 } from '../../../images'
import Styles from '../../styles/styles'
import ImageZoom from '../../components/ImageZoom';
import Page from '../../components/Page'

const Aula01_03 = () => {
  return (
    <Page nextRoute='Aula01_04'>
        <Title style={Styles.title}>Declaração e Atribuição de Strings</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
            Por se tratar de um
            <Text style={{ fontWeight: 'bold' }}> array, </Text>   
            cada caractere de uma
            <Text style={{ fontWeight: 'bold' }}> string </Text>   
            podem ser acessados individualmente por meio de um índice. 
        </Paragraph>
        <Paragraph>Tome como exemplo a seguinte string:</Paragraph>

        <Text>
            <Text style={{ color: '#000080', fontWeight: 'bold' }}>char </Text> 
            str
            [<Text style={{ color: '#0000FF' }}>6</Text>] = 
            <Text style={{ color: '#0000FF' }}>"Teste"</Text>;
        </Text>

        <ImageZoom image={Topico10Image1} />

        <Paragraph>Alterando o primeiro caractere, temos:</Paragraph>
        
        <Text>
            str
            [<Text style={{ color: '#0000FF' }}>0</Text>] = 'L';
        </Text>

        <ImageZoom image={Topico10Image2} />
    </Page>
  );
};

export default Aula01_03;
