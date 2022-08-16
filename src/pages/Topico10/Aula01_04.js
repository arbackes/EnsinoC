import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula01_04 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Declaração e Atribuição de Strings</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph style={{ marginBottom: 10 }}>Strings são arrays. Portanto, não se pode atribuir uma string para outra:</Paragraph>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10 }}>
          <Text style={{ color: '#000080', fontWeight: 'bold' }}>char </Text> 
          str1
          [<Text style={{ color: '#0000FF' }}>20</Text>] = 
          <Text style={{ color: '#0000FF' }}>" Hello World"</Text>;
        </Text>
        <Text style={{ marginLeft: 10 }}>
          <Text style={{ color: '#000080', fontWeight: 'bold' }}>char </Text> 
          str2
          [<Text style={{ color: '#0000FF' }}>20</Text>];
        </Text>
        <Text style={{ marginTop: 10, marginLeft: 10 }}>str2 = str1; <Text style={{ marginLeft: 20, color: '#008800', fontStyle: 'italic'}}>// Erro!</Text></Text>
        <Text style={{ marginTop: 10, marginLeft: 10}}><Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text><Text style={{ color: '#0000FF' }}> 0</Text>;</Text>
        <Text>{'}'}</Text>

        <Paragraph style={{ marginTop: 10, marginBottom: 10 }}>O correto é copiar a string elemento por elemento:</Paragraph>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10 }}>
          <Text style={{ color: '#000080', fontWeight: 'bold' }}>char </Text> 
          str1
          [<Text style={{ color: '#0000FF' }}>20</Text>] = 
          <Text style={{ color: '#0000FF' }}>" Hello World"</Text>;
        </Text>
        <Text style={{ marginLeft: 10 }}>
          <Text style={{ color: '#000080', fontWeight: 'bold' }}>char </Text> 
          str2
          [<Text style={{ color: '#0000FF' }}>20</Text>];
        </Text>
        <Text style={{ marginLeft: 10, marginBottom: 10 }}>
          <Text style={{ color: '#000080', fontWeight: 'bold' }}>int </Text> i;
        </Text>
        <Text style={{ marginLeft: 10 }}>
          <Text style={{ color: '#000080', fontWeight: 'bold' }}>for </Text>(i = <Text style={{ color: '#0000FF' }}>0</Text>; str1[i] {'!='} <Text style={{ color: '#800080' }}>'\0'</Text>; i++)
        </Text>
        <Text style={{ marginLeft: 20 }}>str2[i] = str1[i];</Text>
        <Text style={{ marginLeft: 10, marginBottom: 10 }}>str2[i] = <Text style={{ color: '#800080' }}>'\0'</Text>;</Text>
        <Text style={{ marginLeft: 10}}><Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text><Text style={{ color: '#0000FF' }}> 0</Text>;</Text>
        <Text>{'}'}</Text>
    </Page>
  );
};

export default Aula01_04;
