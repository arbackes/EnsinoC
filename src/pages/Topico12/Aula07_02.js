import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula07_02 = () => {
  return (
    <Page nextRoute='Aula07_03'>
        <Title style={Styles.title}>Passagem de Parâmetros</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          <Text style={{ fontWeight: 'bold' }}>Passagem por referência</Text>{'\n'}
        </Paragraph>

        <Paragraph>
          Quando se quer que o valor da variável mude dentro da função, usa-se passagem de parâmetros por <Text style={{ fontWeight: 'bold' }}>referência</Text>.{'\n'}{'\n'}

          Neste tipo de chamada não se passa para a função o valor da variável, mas a sua <Text style={{ fontWeight: 'bold' }}>referência</Text> (seu endereço na memória);{'\n'}{'\n'}

          Utilizando o endereço da variável, qualquer alteração que a variável sofra dentro da função será refletida fora da função.{'\n'}{'\n'}

          Um exemplo de função com passagem por referência é a função <Text style={{ fontWeight: 'bold' }}>scanf().</Text>{'\n'}
        </Paragraph>
    </Page>
  );
};

export default Aula07_02;
