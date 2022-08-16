import React from 'react'
import { Divider, Title, Text, Paragraph, Subheading } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula04_02 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Inicialização de Variáveis</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Subheading>Atribuição</Subheading>
        <Paragraph>Podemos inicializar variáveis no momento de sua declaração.</Paragraph>
        <Paragraph style={{ fontWeight: 'bold' }}>Forma geral:</Paragraph>
        <Text>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>tipo_da_variável</Text> nome_da_variavel = valor ou expressao;
        </Text>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>
         
        <Subheading>Exemplo:</Subheading>
        <Text>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> main() {'{'}
        </Text>
        <Text style={{marginLeft: 12 }}>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>char</Text> ch = <Text style={{ color: '#800080' }}>'D'</Text>;
        </Text>
        <Text style={{marginLeft: 12 }}>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> count = <Text style={{ color: '#0000FF' }}>0</Text>;
        </Text>
        <Text style={{marginLeft: 12 }}>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>float</Text> pi = <Text style={{ color: '#0000FF' }}>3.141</Text>;{'\n'}
        </Text>
        <Text style={{ marginLeft: 12 }}>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> 0;
        </Text>
        <Text>{'}'}</Text>

      <Subheading>Importante</Subheading>
	    <Paragraph>
        Se nenhum valor for atribuído a uma variável, ela terá um valor indefinido.
      </Paragraph>
    </Page>
  );
};

export default Aula04_02;
