import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import { Topico11Image2 } from '../../../images'
import Styles from '../../styles/styles'
import ImageZoom from '../../components/ImageZoom'
import Page from '../../components/Page'

const Aula02_01 = () => {
  return (
    <Page nextRoute='Aula02_02'>
        <Title style={Styles.title}>Declaração de uma struct</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>Relembrando a <Text style={{ fontWeight: 'bold' }}>struct</Text> cadastro de pessoas:{'\n'}</Paragraph>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>struct</Text> cadastro {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>char</Text> nome[<Text style={{ color: '#0000FF' }}>50</Text>];</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> idade;</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>char</Text> [<Text style={{ color: '#0000FF' }}>50</Text>];</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> numero;</Text>
        <Text>{'}'};</Text>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          Após definir a <Text style={{ fontWeight: 'bold' }}>struct</Text>, uma variável pode ser declarada de modo similar aos tipos existentes:{'\n'}{'\n'}
          <Text style={{ color: '#000080', fontWeight: 'bold' }}>struct</Text> cadastro c;{'\n'}{'\n'}
          Por ser um tipo definido pelo programador, usa-se a palavra <Text style={{ fontWeight: 'bold' }}>struct</Text> antes do tipo da nova variável!{'\n'}
        </Paragraph>

        <ImageZoom image={Topico11Image2} />

    </Page>
  );
};

export default Aula02_01;
