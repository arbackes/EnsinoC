import React from 'react'
import { Divider, Title, Text, Paragraph, Subheading } from 'react-native-paper';
import Styles from '../../styles/styles'
import Page from '../../components/Page';

const Aula04_01 = () => {
  return (
    <Page nextRoute='Aula04_02'>
        <Title style={Styles.title}>Atribuição de Variáveis</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Subheading>Atribuição</Subheading>
        <Paragraph>
          O operador de atribuição ‘=’ é responsável por atribuir um valor para uma variável.
          {'\n'}
        </Paragraph>

        <Subheading>Forma geral:</Subheading>
        <Paragraph>
          variavel = valor ou expressao;
        </Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Subheading>Exemplo:</Subheading>
        <Text>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> main() {'{'}
        </Text>
        <Text style={{marginLeft: 12 }}><Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> x;</Text>
        <Text style={{marginLeft: 12 }}><Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> y;{'\n'}</Text>
        <Text style={{ marginLeft: 12, color: '#008800', fontStyle: 'italic'}}>
          //x recebe 5
        </Text>
        <Text style={{ marginLeft: 12 }}>
          x = <Text style={{ color: '#0000FF' }}>5</Text>;
        </Text>
        <Text style={{ marginLeft: 12, color: '#008800', fontStyle: 'italic'}}>
          //y recebe x + 3
        </Text>
        <Text style={{ marginLeft: 12 }}>
          y = x + <Text style={{ color: '#0000FF' }}>3</Text>;
        </Text>
        <Text style={{ marginLeft: 12 }}>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> 0;
        </Text>
        <Text>{'}'}</Text>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          A linguagem C também suporta múltiplas atribuições:
        </Paragraph>
        <Text style={{ marginLeft: 12 }}>
          x = y = z = <Text style={{ color: '#0000FF' }}>0</Text>;
        </Text>
        <Paragraph>
          Dessa forma, as variáveis x, y e z receberão o valor 0.
        </Paragraph>
    </Page>
  );
};

export default Aula04_01;
