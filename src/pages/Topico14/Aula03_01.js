import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula03_01 = () => {
  return (
    <Page nextRoute='Aula03_02'>
        <Title style={Styles.title}>Operador *</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          <Text style={{ fontWeight: 'bold' }}>Acesso ao conteúdo</Text>{'\n'}
          Usamos o operador asterisco "*" para acessar o conteúdo de um ponteiro.{'\n'}
          Basta usar o operador asterisco "*" na frente do nome do ponteiro: <Text style={{ fontWeight: 'bold' }}>*nome_ponteiro</Text>.{'\n'}
          Esse operador permite acessar e modificar o valor da posição na memória apontada pelo ponteiro.{'\n'}
        </Paragraph>

    </Page>
  );
};

export default Aula03_01;
