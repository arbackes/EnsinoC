import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper';
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula04_01 = () => {
  return (
      <Page nextRoute='Aula04_02'>
          <Title style={Styles.title}>Comando scanf()</Title>
          <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

          <Paragraph>
            Geralmente, um programa precisa ler dados digitados pelo usuário.{'\n'}
            Para isso usamos o comando <Text style={{ fontWeight: 'bold' }}>scanf</Text> (<Text style={{ fontWeight: 'bold' }}>scan f</Text>ormatted).{'\n'}
            Esse comando é responsável por receber um dado ou valor digitado pelo usuário e o armazenar em uma variável.
          </Paragraph>

          <Paragraph>Forma geral:</Paragraph>
          <Paragraph>scanf(<Text style={{ color: '#0000FF' }}>"%tipo_de_entrada"</Text>,&variavel);</Paragraph>
          <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

          <Paragraph>
            O <Text style={{ fontWeight: 'bold' }}>scanf()</Text>, assim como o <Text style={{ fontWeight: 'bold' }}>printf()</Text>, precisa da especificação do tipo do dado de entrada para armazena-lo corretamente na variável desejada.{'\n'}
            O tipo de entrada está definido entre <Text style={{ fontWeight: 'bold' }}>"aspas duplas"</Text>.{'\n'}
          </Paragraph>

          <Paragraph>scanf(<Text style={{ color: '#0000FF' }}>"%tipo_de_entrada"</Text>,&var);{'\n'}</Paragraph>

          <Paragraph>
            Após a vírgula, encontra-se o caractere <Text style={{ fontWeight: 'bold' }}>&</Text> seguido de uma variável. Esse caractere indica o endereço da variável que irá receber os dados lidos.{'\n'}
            Nesse caso, o que foi digitado pelo usuário será armazenado na variável <Text style={{ fontWeight: 'bold' }}>var</Text>.
          </Paragraph>
          <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

          <Paragraph>
            Também é possível realizar a leitura de mais de um valor em um único comando:
          </Paragraph>

          <Paragraph>scanf(<Text style={{ color: '#0000FF' }}>"%tipo1 %tipo2"</Text>,&var1,&var2);{'\n'}</Paragraph>

          <Paragraph>
            Nesse caso, devemos especificar o tipo de entrada de cada variável.
            No exemplo, o primeiro valor digitado pelo usuário será armazenado em <Text style={{ fontWeight: 'bold' }}>var1</Text> e o segundo em <Text style={{ fontWeight: 'bold' }}>var2</Text>.
          </Paragraph>
      </Page>
  );
};

export default Aula04_01;
