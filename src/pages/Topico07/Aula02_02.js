import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula02_02 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Comando if - Exemplo</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph style={{marginBottom: 10 }}>
          Faça um programa que leia a nota de um aluno e se ela for maior ou igual a 60 imprima "Aluno Aprovado".
        </Paragraph>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> nota;</Text>
        <Text style={{ marginLeft: 10 }}>printf(<Text style={{ color: '#0000FF' }}>"Insira a nota:"</Text>);</Text>
        <Text style={{ marginLeft: 10 }}>scanf(<Text style={{ color: '#0000FF' }}>"%d"</Text>, &nota);</Text>
        <Text style={{ marginLeft: 10, marginTop: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold'}}>if</Text>(nota {'>='} 60){'{'}</Text>
        <Text style={{ marginLeft: 20 }}>printf(<Text style={{ color: '#0000FF' }}>"Aluno Aprovado\n"</Text>);</Text>
        <Text style={{ marginLeft: 10 }}>{'}'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> 0;</Text>
        <Text>{'}'}</Text>

        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>Nesse exemplo, o comando <Text style={{ fontWeight: 'bold' }}>if</Text> foi utilizado em conjunto com o operador <Text style={{ fontWeight: 'bold' }}>{'>='}</Text>.</Paragraph>
        <Paragraph>Porém, ele pode ser utilizado com quaisquer operadores da linguagem C, o que o torna muito útil e extremamente importante!</Paragraph>
        <Paragraph style={{ marginTop: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>Obs: </Text>
          As 
          <Text style={{ fontWeight: 'bold' }}> chaves {'{}'} </Text>
          devem ser usadas no caso de mais de uma instrução ser executada pelo Comando
          <Text style={{ fontWeight: 'bold' }}> if.</Text>
        </Paragraph>
        <Paragraph style={{ marginTop: 10 }}>
          Quando a condição do
          <Text style={{ fontWeight: 'bold' }}> if </Text>
          for satisfeita 
          <Text style={{ fontWeight: 'bold' }}> (verdadeiro), </Text>
          os comandos localizados dentro das chaves será executado.
        </Paragraph>
    </Page>
  );
};

export default Aula02_02;
