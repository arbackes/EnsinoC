import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula05_03 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Aninhamento de Estruturas</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          Como temos agoa uma estrutura dentro da outra, o acesso aos dados do endereço do cadastro é feito utilizando novamente o <Text style={{ fontWeight: 'bold' }}>operador ponto "."</Text>:{'\n'}
        </Paragraph>
        
        <Paragraph>
          <Text style={{ color: '#000080', fontWeight: 'bold' }}>struct</Text> cadastro c;{'\n'}
        </Paragraph>

        <Paragraph>
          <Text style={{  color: '#008800', fontStyle: 'italic' }}>//c é uma struct, usamos o "." para acessar seus campos</Text>{'\n'}
          gets(c.nome);
        </Paragraph>

        <Paragraph>
          <Text style={{  color: '#008800', fontStyle: 'italic' }}>//c.ender é uma struct, usamos o "." para acessar seus campos</Text>{'\n'}
          gets(c.ender.rua);
        </Paragraph>

    </Page>
  );
};

export default Aula05_03;
