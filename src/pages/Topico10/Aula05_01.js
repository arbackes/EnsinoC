import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula05_01 = () => {
  return (
    <Page nextRoute='Aula05_02'>
        <Title style={Styles.title}>Manipulando Strings</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text style={{ fontWeight: 'bold' }}>Como copiar strings?</Text> 
        <Paragraph>
          Como já sabemos, 
          <Text style={{ fontWeight: 'bold' }}> strings </Text>
          são 
          <Text style={{ fontWeight: 'bold' }}> arrays.  </Text>
          Assim, devemos copiar 
          <Text style={{ fontWeight: 'bold' }}>  elemento por elemento:</Text>
        </Paragraph>

        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text style={{ color: '#ff0000', fontWeight: 'bold' }}>Forma Incorreta</Text> 

        <Text style={{ marginTop: 10 }}>
          <Text style={{ color: '#000080', fontWeight: 'bold' }}>char </Text> 
          str1
          [<Text style={{ color: '#0000FF' }}>20</Text>] = 
          <Text style={{ color: '#0000FF' }}> "Hello World"</Text>;
        </Text>
        <Text>
          <Text style={{ color: '#000080', fontWeight: 'bold' }}>char </Text> 
          str2
          [<Text style={{ color: '#0000FF' }}>20</Text>];
        </Text>
        <Text>str2 = str1;</Text>

        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text style={{ color: '#008000', fontWeight: 'bold' }}>Forma correta</Text> 

        <Text style={{ marginTop: 10 }}>
          <Text style={{ color: '#000080', fontWeight: 'bold' }}>char </Text> 
          str1
          [<Text style={{ color: '#0000FF' }}>20</Text>] = 
          <Text style={{ color: '#0000FF' }}> "Hello World"</Text>;
        </Text>
        <Text>
          <Text style={{ color: '#000080', fontWeight: 'bold' }}>char </Text> 
          str2
          [<Text style={{ color: '#0000FF' }}>20</Text>];
        </Text>
        <Text>
          <Text style={{ color: '#000080', fontWeight: 'bold' }}>int </Text> j;
        </Text>
        <Text>
          <Text style={{ color: '#000080', fontWeight: 'bold' }}>for </Text>(j = <Text style={{ color: '#0000FF' }}>0</Text>; str1[j] {'!='} <Text style={{ color: '#800080' }}>'\0'</Text>; j++){'{'}
        </Text>
        <Text style={{ marginLeft: 10 }}>str2[j] = str1[j];</Text> 
        <Text>{'}'}</Text>
        <Text>
          str2[j] = 
          <Text style={{ color: '#800080' }}> '\0'</Text>;
        </Text>
    </Page>
  );
};

export default Aula05_01;
