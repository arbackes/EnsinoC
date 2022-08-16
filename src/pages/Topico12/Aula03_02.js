import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula03_02 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Parâmetros</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>
        
        <Paragraph>
          Podemos fazer uma função sem passar nenhum parâmetro.{'\n'}
          Neste caso, basta deixar a lista de parâmetros vazia:{'\n'}
        </Paragraph>

        <Paragraph>
          <Text style={{ color: '#000080', fontWeight: 'bold' }}>void</Text> vazio();
          <Text style={{ color: '#008800', fontStyle: 'italic'}}> //protótipo de função sem parâmetros</Text>{'\n'}
        </Paragraph>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic'}}>// chamada da função</Text>
        <Text style={{ marginLeft: 10 }}>vazio();</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
        <Text>{'};\n'}</Text>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>void</Text> vazio() {'{'}</Text>
        <Text style={{ marginLeft: 10 }}>printf(<Text style={{ color: '#0000FF' }}>"Não faz nada;"</Text>);</Text>
        <Text>{'};\n'}</Text>
    </Page>
  );
};

export default Aula03_02;
