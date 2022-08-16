import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula01_01 = () => {
  return (
    <Page nextRoute='Aula01_02'>
        <Title style={Styles.title}>Verdadeiro e Falso</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          Um tipo <Text style={{ fontWeight: 'bold' }}>booleano</Text> pode assumir dois valores: <Text style={{ fontWeight: 'bold' }}>verdadeiro</Text> ou <Text style={{ fontWeight: 'bold' }}>falso</Text> (<Text style={{ fontWeight: 'bold' }}>true</Text> ou <Text style={{ fontWeight: 'bold' }}>false</Text>).{'\n'}
          Na linguagem C não existe o tipo de dado <Text style={{ fontWeight: 'bold' }}>booleano</Text>.{'\n'}
        </Paragraph>

        <Paragraph>
          Para armazenar esse tipo de informação, use-se uma variável do tipo <Text style={{ fontWeight: 'bold' }}>int</Text> (número inteiro).{'\n'}
          Valor <Text style={{ fontWeight: 'bold' }}>0</Text> significa <Text style={{ fontWeight: 'bold' }}>falso</Text>.{'\n'}
          Valores diferentes de zero: <Text style={{ fontWeight: 'bold' }}>verdadeiro</Text>.{'\n'}
        </Paragraph>

        <Paragraph>
          Os operadores relacionais são operadores de comparação de valores e retornam <Text style={{ fontWeight: 'bold' }}>verdadeiro</Text> ou <Text style={{ fontWeight: 'bold' }}>falso</Text>.
        </Paragraph>
    </Page>
  );
};

export default Aula01_01;
