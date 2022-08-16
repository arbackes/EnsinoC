import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula04_02 = () => {
  return (
    <Page nextRoute='Aula04_03'>
        <Title style={Styles.title}>Atribuição entre Ponteiros</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          <Text style={{ fontWeight: 'bold' }}>Exemplo</Text>{'\n'}
          Podemos atribuir a um ponteiro de inteiro <Text style={{ fontWeight: 'bold' }}>(int*)</Text> o endereço de uma variável do tipo <Text style={{ fontWeight: 'bold' }}>float</Text>.{'\n'}
          Neste caso, o compilador assume que qualquer endereço que esse ponteiro armazene obrigatoriamente apontará para uma variável do tipo int.{'\n'}
          Consequentemente qualquer tentativa de uso desse ponteiro causa um comportamento indefinido no programa.{'\n'}
        </Paragraph>

    </Page>
  );
};

export default Aula04_02;
