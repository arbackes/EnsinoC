import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import { Topico16Image3 } from '../../../images'
import ImageZoom from '../../components/ImageZoom'
import Page from '../../components/Page'

const Aula03_02 = () => {
  return (
    <Page nextRoute='Aula03_03'>
        <Title style={Styles.title}>A função fopen()</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>
        
        <Paragraph>
          No parâmetro <Text style={{ fontWeight: 'bold' }}>nome</Text> pode-se trabalhar com caminhos absolutos ou relativos{'\n'}
          <Text style={{ color: '#000080', fontWeight: 'bold' }}>FILE</Text> *fopen(<Text style={{ color: '#000080', fontWeight: 'bold' }}>char</Text> *nome,<Text style={{ color: '#000080', fontWeight: 'bold' }}>char</Text> *modo);{'\n'}
        </Paragraph>

        <Paragraph>
          <Text style={{ fontWeight: 'bold' }}>Modo de abertura</Text>{'\n'}
          Determina que tipo de uso será feito do arquivo.{'\n'}
          O arquivo deve sempre ser aberto em um modo que permita executar as operações desejadas.{'\n'}
          A tabela a seguir apresenta os mais utilizados.{'\n'}
        </Paragraph>

        <ImageZoom image={Topico16Image3} />
    </Page>
  );
};

export default Aula03_02;
