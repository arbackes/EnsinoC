import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula01_02 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Conceitos de Repetição</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
            Dependendo da 
            <Text style={{ fontWeight: 'bold' }}>condição</Text>, 
            os comandos são repetidos 
            <Text style={{ fontWeight: 'bold' }}> zero </Text> 
            (se <Text style={{ fontWeight: 'bold' }}>falso</Text>) 
            ou
            <Text style={{ fontWeight: 'bold' }}> mais vezes </Text> 
            (se <Text style={{ fontWeight: 'bold' }}>verdadeira</Text>).
        </Paragraph>
        <Paragraph style={{ marginBottom: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>Exemplo:</Text>
        </Paragraph>

        <Text>Leia A;</Text>
        <Text>Leia B;</Text>
        <Text>A {'<'} B</Text>
        <Text style={{ marginLeft: 10 }}>A recebe A+1;</Text>
        <Text style={{ marginLeft: 10 }}>Imprima A;</Text>
        <Text>Fim Enquanto</Text>

        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph style={{ marginBottom: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>Loop Infinito</Text>
        </Paragraph>

        <Text>Neste caso, o programa será executado infinitamente.</Text>
        <Text>Isso ocorre quando:</Text>
        <Text style={{ marginLeft: 10 }}>é cometido um erro ao especificar a condição lógica que controla a repetição;</Text>
        <Text style={{ marginLeft: 10 }}>ou se esquece algum comando dentro da iteração.</Text>

        <Text style={{ marginTop: 10 }}><Text style={{ fontWeight: 'bold' }}>Exemplo:</Text></Text>
        <Text>I = 20;</Text>
        <Text>Enquanto I {'>'} 10</Text>
        <Text style={{ marginLeft: 10 }}>I recebe I+1;</Text>
        <Text>Fim Enquanto</Text>

        <Text style={{ marginTop: 10 }}>Nesse exemplo, a variável <Text style={{ fontWeight: 'bold' }}>I</Text> sempre será maior que 10, assim o loop nunca terá um fim.</Text>
    </Page>
  );
};

export default Aula01_02;
