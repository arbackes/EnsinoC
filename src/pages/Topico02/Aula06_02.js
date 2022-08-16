import React from 'react'
import { Divider, Title, Text, Paragraph, Subheading } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula06_02 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Modificadores de Tipo</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>	
        
        <Paragraph>
          <Text style={{ fontWeight: 'bold' }}>short:</Text> determina que uma variável do tipo <Text style={{ fontWeight: 'bold' }}>int</Text> terá somente 16 bits (inteiro pequeno), independente do processador.
        </Paragraph>

        <Text>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> main() {'{'}
        </Text>
        <Text style={{marginLeft: 12 }}><Text style={{ fontWeight: 'bold', color: '#000080' }}>short int</Text> i;{'\n'}</Text>
        <Text style={{ marginLeft: 12 }}>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> 0;
        </Text>
        <Text>{'}'}</Text>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>	
        
        <Paragraph>
          <Text style={{ fontWeight: 'bold' }}>long:</Text> determina que uma variável do tipo <Text style={{ fontWeight: 'bold' }}>int</Text> terá 32 bits (inteiro grande), independente do processador.
        </Paragraph>

        <Text>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> main() {'{'}
        </Text>
        <Text style={{marginLeft: 12 }}><Text style={{ fontWeight: 'bold', color: '#000080' }}>long int</Text> n;{'\n'}</Text>
        <Text style={{ marginLeft: 12 }}>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> 0;
        </Text>
        <Text>{'}'}</Text>
    </Page>
  );
};

export default Aula06_02;
