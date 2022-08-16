import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula06_01 = () => {
  return (
    <Page nextRoute='Aula06_02'>
        <Title style={Styles.title}>Modificadores de Tipo</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>	

        <Paragraph>
          Os modificadores de tipo permitem alterar o tamanho do tio de uma variável e como ela irá se comportar.{'\n'}
          Os modificadores são colocados antes do tipo da variável:{'\n'}
        </Paragraph>
        <Text style={{ marginLeft: 10 }}><Text style={{ fontWeight: 'bold' }}>modificador</Text> tipo nome-variável;</Text>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>	
        
        <Paragraph>
          <Text style={{ fontWeight: 'bold' }}>signed:</Text> determina que as variáveis dos tipos <Text style={{ fontWeight: 'bold' }}>char</Text> e <Text style={{ fontWeight: 'bold' }}>int</Text> poderão armazenar valores positivos ou negativos.
        </Paragraph>

        <Text>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> main() {'{'}
        </Text>
        <Text style={{marginLeft: 12 }}><Text style={{ fontWeight: 'bold', color: '#000080' }}>signed char</Text> x;</Text>
        <Text style={{marginLeft: 12 }}><Text style={{ fontWeight: 'bold', color: '#000080' }}>signed int</Text> y;{'\n'}</Text>
        <Text style={{ marginLeft: 12 }}>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> 0;
        </Text>
        <Text>{'}'}</Text>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>	
        
        <Paragraph>
          <Text style={{ fontWeight: 'bold' }}>unsigned:</Text> determina que variáveis dos tipos <Text style={{ fontWeight: 'bold' }}>char</Text> e <Text style={{ fontWeight: 'bold' }}>int</Text> poderão armazenar apenas valores positivos ou o valor zero.
        </Paragraph>

        <Text>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> main() {'{'}
        </Text>
        <Text style={{marginLeft: 12 }}><Text style={{ fontWeight: 'bold', color: '#000080' }}>unsigned char</Text> x;</Text>
        <Text style={{marginLeft: 12 }}><Text style={{ fontWeight: 'bold', color: '#000080' }}>unsigned int</Text> y;{'\n'}</Text>
        <Text style={{ marginLeft: 12 }}>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> 0;
        </Text>
        <Text>{'}'}</Text>
    </Page>
  );
};

export default Aula06_01;
