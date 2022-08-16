import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula07_03 = () => {
  return (
    <Page nextRoute='Aula07_04'>
        <Title style={Styles.title}>Passagem de Parâmetros</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          <Text style={{ fontWeight: 'bold' }}>Função scanf()</Text>{'\n'}
        </Paragraph>

        <Paragraph>
          Sempre que desejamos ler algo do teclado, passamos para a função <Text style={{ fontWeight: 'bold' }}>scanf()</Text> o nome da variável onde o dado será armazenado.{'\n'}
          Essa variável tem seu valor modificado dentro da função <Text style={{ fontWeight: 'bold' }}>scanf()</Text>, e seu valor pode ser acessado no programa principal.{'\n'}
        </Paragraph>

        <Paragraph>
          O exemplo abaixo ilustra isso:{'\n'}
        </Paragraph>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> x = <Text style={{ color: '#0000FF' }}>5</Text>;</Text>
        <Text style={{ marginLeft: 10 }}>printf(<Text style={{ color: '#0000FF' }}>"X = %d\n"</Text>, x);{'\n'}</Text>
        <Text style={{ marginLeft: 10 }}>printf(<Text style={{ color: '#0000FF' }}>"Digite X: "</Text>);</Text>
        <Text style={{ marginLeft: 10 }}>scanf(<Text style={{ color: '#0000FF' }}>"%d"</Text>, x);{'\n'}</Text>
        <Text style={{ marginLeft: 10 }}>printf(<Text style={{ color: '#0000FF' }}>"X = %d\n"</Text>, x);</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
        <Text>{'};\n'}</Text>
    </Page>
  );
};

export default Aula07_03;
