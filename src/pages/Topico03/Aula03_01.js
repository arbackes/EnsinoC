import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper';
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula03_01 = () => {
  return (
    <Page nextRoute='Aula03_02'>
        <Title style={Styles.title}>Comando printf()</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          Geralmente, um programa precisa exibir mensagens para o usuário.{'\n'}
          Para isso, usamos o comando <Text style={{ fontWeight: 'bold' }}>printf</Text> (<Text style={{ fontWeight: 'bold' }}>print</Text> formatted).{'\n'}
          Esse comando pode ser utilizado para imprimir texto e/ou variáveis na tela.
        </Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          Podemos usar o printf() para exibir um texto, o qual deve ser sempre colocado entre “aspas duplas”.{'\n'}
          printf(<Text style={{ color: '#0000FF' }}>"texto"</Text>);
        </Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          Quando queremos escrever dados formatados na tela usamos a forma geral da função, a qual possui os <Text style={{ fontWeight: 'bold' }}>tipos de saída</Text>.{'\n'}
          Os <Text style={{ fontWeight: 'bold' }}>tipos de saída</Text> especificam o formato dos dados que serão escritos pela função <Text style={{ fontWeight: 'bold' }}>printf()</Text>.{'\n'}
          printf(<Text style={{ color: '#0000FF' }}>"%formato_de_saida"</Text>, variável);{'\n'}
        </Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          Podemos ainda imprimir mais de uma variável:{'\n'}
          printf(<Text style={{ color: '#0000FF' }}>"%tipo1 %tipo2"</Text>, variável1, variavel2);{'\n'}
        </Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          Podemos também misturar o texto a ser mostrado com os especificadores de formato.{'\n'}
          printf(<Text style={{ color: '#0000FF' }}>"Exemplo: %tipo1 %tipo2"</Text>, variável1, variavel2);{'\n'}
        </Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>
    </Page>
  );
};

export default Aula03_01;
