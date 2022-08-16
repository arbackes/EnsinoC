import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula06_03 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>A função realloc()</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          <Text style={{ fontWeight: 'bold' }}>Observações sobre realloc()</Text>{'\n'}{'\n'}
          <Text style={{ color: '#000080', fontWeight: 'bold' }}>void</Text>* realloc(<Text style={{ color: '#000080', fontWeight: 'bold' }}>void</Text> *ptr, <Text style={{ color: '#000080', fontWeight: 'bold' }}>unsigned int</Text> num);{'\n'}{'\n'}
            Se <Text style={{ fontWeight: 'bold' }}>ptr</Text> for <Text style={{ fontWeight: 'bold' }}>NULL</Text>, aloca <Text style={{ fontWeight: 'bold' }}>num</Text> bytes e devolve um ponteiro (igual malloc){'\n'}
            Se <Text style={{ fontWeight: 'bold' }}>num</Text> é zero, a memória apontada por <Text style={{ fontWeight: 'bold' }}>ptr</Text> é liberada (igual free).{'\n'}
            Se não houver memória suficiente para a alocação, um ponteiro <Text style={{ fontWeight: 'bold' }}>NULL</Text> é devolvido e o bloco original é deixado inalterado.
        </Paragraph>
    </Page>
  );
};

export default Aula06_03;
