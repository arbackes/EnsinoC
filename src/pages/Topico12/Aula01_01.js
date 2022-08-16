import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula01_01 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Funções</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>Funções são blocos de código que podem ser nomeados e chamados de dentro de um programa.</Paragraph>
        
        <Paragraph>
          -<Text style={{ fontWeight: 'bold' }}>printf()</Text>: função que escreve na tela{'\n'}
          -<Text style={{ fontWeight: 'bold' }}>scanf()</Text>: função que lê do teclado{'\n'}
        </Paragraph>
         
        <Paragraph>
          Vantagens de usar função:{'\n'}
          -Programas grandes e complexos podem ser construídos bloco a bloco.{'\n'}
          -Evita a cópia desnecessária de trechos de código que realizam a mesma tarefa, diminuindo assim o tamanho do programa.{'\n'}
        </Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          Quais outras funções você conhece? Sabe a <Text style={{ fontWeight: 'bold' }}>main()</Text>? Então, ela também é uma função:
        </Paragraph>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10 }}>printf(<Text style={{ color: '#0000FF' }}>"Função main()"</Text>);{'\n'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
        <Text>{'};\n'}</Text>

    </Page>
  );
};

export default Aula01_01;
