import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula03_02 = () => {
  return (
    <Page nextRoute='Aula03_03'>
        <Title style={Styles.title}>Tamanho da string - strlen()</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
            A função 
            <Text style={{ fontWeight: 'bold' }}> strlen() </Text>
            retorna um valor inteiro que é o tamanho da string passada por parâmetro:
        </Paragraph>

        <Text style={{ marginTop: 10 }}>
          <Text style={{ color: '#000080', fontWeight: 'bold' }}>char </Text> 
          str
          [<Text style={{ color: '#0000FF' }}>15</Text>] = 
          <Text style={{ color: '#0000FF' }}>"TESTE"</Text>;
        </Text>
        <Text>printf(<Text style={{ color: '#0000FF' }}>"%d \n"</Text>, strlen(str));</Text>

        <Paragraph style={{ marginTop: 10 }}>
            Neste caso, a função retornará o valor 5, já que o tamanho da string é o número de caracteres da palavra 
            <Text style={{ fontWeight: 'bold' }}> "TESTE" </Text>
            , e não o tamanho do array.
        </Paragraph>

        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text style={{ fontWeight: 'bold' }}>Importante:</Text>
        <Paragraph style={{ marginLeft: 10 }}>
            A função não conta o caractere 
            <Text style={{ fontWeight: 'bold' }}> '\0', </Text>
            mas ele está presente na posição 
            <Text style={{ fontWeight: 'bold' }}> str[5].</Text>
        </Paragraph>
        <Paragraph style={{ marginLeft: 10 }}>
            O caractere 
            <Text style={{ fontWeight: 'bold' }}> '\0' </Text>
            está sempre na posição equivalente ao tamanho da string: 
            <Text style={{ fontWeight: 'bold' }}> str[strlen(str)].</Text>
        </Paragraph>
    </Page>
  );
};

export default Aula03_02;
