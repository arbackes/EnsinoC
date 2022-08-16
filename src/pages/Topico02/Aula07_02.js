import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper';
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula07_02 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Constantes</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>	

        <Text style={{ fontWeight: 'bold' }}>O comando const</Text>
        
        <Paragraph>
          O prefixo <Text style={{ fontWeight: 'bold' }}>const</Text> informa ao programa que a variável declarada não poderá ter o seu valor alterado.{'\n'}
          A variável deve ser inicializada no momento de sua declaração.{'\n'}
        </Paragraph>
        <Text style={{ fontWeight: 'bold' }}>Forma geral:{'\n'}</Text>
        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>const tipo_da_constante</Text> nome_da_constante = valor_da_constante;{'\n'}</Text>
        
        <Text style={{ fontWeight: 'bold' }}>Exemplo:{'\n'}</Text>
        <Text>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> main() {'{'}
        </Text>
        <Text style={{marginLeft: 12 }}><Text style={{ fontWeight: 'bold', color: '#000080' }}>const float</Text> PI = <Text style={{ color: '#0000FF' }}>3.1415</Text>;{'\n'}</Text>
        <Text style={{ marginLeft: 12 }}>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> 0;
        </Text>
        <Text>{'}'}</Text>
    </Page>
  );
};

export default Aula07_02;
