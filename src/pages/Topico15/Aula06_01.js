import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula06_01 = () => {
  return (
    <Page nextRoute='Aula06_02'>
        <Title style={Styles.title}>A função realloc()</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>
        
        <Paragraph>
          A função <Text style={{ fontWeight: 'bold' }}>realloc()</Text> serve para realocar memória. Dado:{'\n'}
          - o ponteiro para um bloco de memória previamente alocado (<Text style={{ fontWeight: 'bold' }}>ptr</Text>) e{'\n'}
          - o número de bytes que queremos alocar (<Text style={{ fontWeight: 'bold' }}>num</Text>){'\n'}
          Essa função modifica o tamanho da memória previamente alocada e apontada por ptr para aquele especificado por num.{'\n'}{'\n'}
          Seu protótipo é:{'\n'}{'\n'}
          <Text style={{ color: '#000080', fontWeight: 'bold' }}>void</Text>* realloc(<Text style={{ color: '#000080', fontWeight: 'bold' }}>void</Text> *ptr, <Text style={{ color: '#000080', fontWeight: 'bold' }}>unsigned int</Text> num);{'\n'}{'\n'}
          O ponteiro <Text style={{ fontWeight: 'bold' }}>void*</Text> pode ser atribuído a qualquer tipo de ponteiro via <Text style={{ fontWeight: 'bold' }}>type cast</Text>.{'\n'}
          Se não houver memória suficiente para alocar a memória requisitada a função malloc() retorna um ponteiro <Text style={{ fontWeight: 'bold' }}>NULL</Text>.
        </Paragraph>
    </Page>
  );
};

export default Aula06_01;
