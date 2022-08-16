import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import { Topico14Image6 } from '../../../images'
import ImageZoom from '../../components/ImageZoom'
import Page from '../../components/Page'

const Aula09_02 = () => {
  return (
    <Page nextRoute='Aula09_03'>
        <Title style={Styles.title}>Ponteiro para Ponteiro</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>
        
        <Text style={{ fontWeight: 'bold' }}>Exemplo</Text>
        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> x = <Text style={{ color: '#0000FF' }}>10</Text>;</Text>
        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> *p1 = {'&x'};</Text>
        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> **p2 = {'&p1'};{'\n'}</Text>

        <Text>printf(<Text style={{ color: '#0000FF' }}>"Endereco em p2: %p\n"</Text>,p2);{'\n'}</Text>
        <Text>printf(<Text style={{ color: '#0000FF' }}>"Conteudo do endereco em p2: %p\n"</Text>, *p2);{'\n'}</Text>
        <Text>printf(<Text style={{ color: '#0000FF' }}>"Conteudo do endereco do endereco em p2: %p\n"</Text>, **p2);{'\n'}</Text>

        <ImageZoom image={Topico14Image6} />
    </Page>
  );
};

export default Aula09_02;
