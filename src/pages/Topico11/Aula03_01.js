import React from 'react'
import { Divider, Title, Paragraph, Text, Subheading } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula03_01 = () => {
  return (
    <Page nextRoute='Aula03_02'>
        <Title style={Styles.title}>Struct - Acesso aos campos</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>Cada campo da estrutura pode ser acessada com operador ponto.{'\n'}</Paragraph>

        <Paragraph><Text style={{ fontWeight: 'bold' }}>nome_variavel.campo</Text></Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Subheading>Exemplo:</Subheading>
        <Text style={{  color: '#008800', fontStyle: 'italic' }}>//declarando a variável do tipo struct</Text>
        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>struct</Text> cadastro c;</Text>
        <Text style={{  color: '#008800', fontStyle: 'italic' }}>//copiando uma string para dentro do campo "nome"</Text>
        <Text>strcpy(c.nome, <Text style={{ color:'#0000FF' }}>"João"</Text>);</Text>
        <Text style={{  color: '#008800', fontStyle: 'italic' }}>//leitura do campo "idade"</Text>
        <Text>scanf(<Text style={{ color:'#0000FF' }}>"%d"</Text>, {'&'}c.idade);</Text>
        <Text style={{  color: '#008800', fontStyle: 'italic' }}>//copiando uma string para dentro do campo "rua"</Text>
        <Text>strcpy(c.rua, <Text style={{ color:'#0000FF' }}>"Avenida 1"</Text>);</Text>
        <Text style={{  color: '#008800', fontStyle: 'italic' }}>//atribuindo valor ao campo "numero"</Text>
        <Text>c.numero = <Text style={{ color:'#0000FF' }}>1082</Text>;</Text>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          Cada campo dentro da estrutura pode ser acessado de forma independente, sem sofrer interferência dos outros.{'\n'}
          Quando ler os valores dos campos do teclado, deve ser respeitado o seu tipo.
        </Paragraph>

    </Page>
  );
};

export default Aula03_01;
