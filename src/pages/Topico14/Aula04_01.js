import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula04_01 = () => {
  return (
    <Page nextRoute='Aula04_02'>
        <Title style={Styles.title}>Atribuição entre Ponteiros</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          <Text style={{ fontWeight: 'bold' }}>Cuidados com a atribuição</Text>{'\n'}
          Devemos ter cuidado com a operação de atribuição quando estamos trabalhando com ponteiros.{'\n'}
          Diferentes tipos de variáveis ocupam espaços de memória de tamanhos diferentes.{'\n'}
          Um ponteiro só pode receber o endereço de memória de uma variável do mesmo tipo do ponteiro.{'\n'}{'\n'}
          <Text style={{ fontWeight: 'bold' }}>char:</Text> 1 byte{'\n'}
          <Text style={{ fontWeight: 'bold' }}>int:</Text> 8 bytes{'\n'}
        </Paragraph>

    </Page>
  );
};

export default Aula04_01;
