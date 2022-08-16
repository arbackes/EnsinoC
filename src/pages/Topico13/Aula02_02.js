import React from 'react'
import { Divider, Title, Paragraph, Text, Subheading } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula02_02 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Recursão em Funções</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          Todo cuidado é pouco ao se fazer funções recursivas.
        </Paragraph>
        
        <Paragraph>
          Duas coisas devem ser muito bem definidas:{'\n'}
          - <Text style={{ fontWeight: 'bold' }}>Critério de parada</Text>: determina quando a função deverá parar de chamar a si mesma.{'\n'}
          - O <Text style={{ fontWeight: 'bold' }}>parâmetro da chamada recursiva</Text> deve ser sempre modificado, de forma que a recursão chegue a um término.{'\n'}
        </Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Subheading>Exemplo:</Subheading>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> fatorial(<Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> n) {'{'}</Text>
        <Text style={{ marginLeft: 10 }}>
          <Text style={{ color: '#000080', fontWeight: 'bold' }}>if</Text>(n == <Text style={{ color: '#0000FF' }}>0</Text>)
          <Text style={{ color: '#008800', fontStyle: 'italic'}}> //critério de parada</Text>
        </Text>
        <Text style={{ marginLeft: 20 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>return</Text> <Text style={{ color: '#0000FF' }}>1</Text>;</Text>
        <Text style={{ marginLeft: 10 }}>
          <Text style={{ color: '#000080', fontWeight: 'bold' }}>else</Text>
          <Text style={{ color: '#008800', fontStyle: 'italic'}}> //parâmetro de fatorial sempre muda</Text>
        </Text>
        <Text style={{ marginLeft: 20 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>return</Text> n*fatorial(n - <Text style={{ color: '#0000FF' }}>1</Text>);</Text>
        <Text>{'}\n'}</Text>

    </Page>
  );
};

export default Aula02_02;
