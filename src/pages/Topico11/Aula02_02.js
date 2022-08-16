import React from 'react'
import { Divider, Title, Paragraph, Text, Subheading } from 'react-native-paper';
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula02_02 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Atribuição entre Estruturas</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          Atribuições entre <Text style={{ fontWeight: 'bold' }}>estruturas</Text> só podem ser feitas quando as <Text style={{ fontWeight: 'bold' }}>estruturas</Text> são as <Text style={{ fontWeight: 'bold' }}>mesmas</Text>, ou seja, possuem o mesmo tipo/nome!{'\n'}
        </Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Subheading>
          Exemplo:
        </Subheading>

        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>struct</Text> cadastro c1, c2;</Text>
        <Text style={{ marginLeft: 10 }}>c1 = c2;<Text style={{ color: '#008800', fontStyle: 'italic'}}> //Correto!</Text>{'\n'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>struct</Text> cadastro c1;</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>struct</Text> ficha f1;</Text>
        <Text style={{ marginLeft: 10 }}>c1 = f1;<Text style={{ color: '#008800', fontStyle: 'italic'}}> //Errado, tipos diferentes!</Text>{'\n'}</Text>
        <Text>{'}'};</Text>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>No caso de se trabalhar com arrays, a atribuição entre elementos diferentes do array é sempre válida.{'\n'}</Paragraph>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>struct</Text> cadastro c[10];{'\n'}</Text>

        <Paragraph>
          Note que, nesse caso, os tipos dos diferentes elementos do <Text style={{ fontWeight: 'bold' }}>array</Text> são sempre <Text style={{ fontWeight: 'bold' }}>iguais</Text>.
        </Paragraph>
      
    </Page>
  );
};

export default Aula02_02;
