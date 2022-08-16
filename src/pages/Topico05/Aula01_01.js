import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula01_01 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Verdadeiro ou Falso</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          O tipo de dado <Text style={{ fontWeight: 'bold' }}>booleano</Text> pode assumir dois valores: <Text style={{ fontWeight: 'bold' }}>verdadeiro</Text> ou <Text style={{ fontWeight: 'bold' }}>falso</Text> (<Text style={{ fontWeight: 'bold' }}>true</Text> ou <Text style={{ fontWeight: 'bold' }}>false</Text>).{'\n'}
        </Paragraph>
        
        <Paragraph>
          Na linguagem C não existe o tipo de dado <Text style={{ fontWeight: 'bold' }}>booleano</Text>.{'\n'}
        </Paragraph>

        <Paragraph>
          Para armazenar esse tipo de informação, usa-se uma variável do tipo <Text style={{ fontWeight: 'bold' }}>int</Text> (número inteiro).
        </Paragraph>
        <Paragraph style={{ marginLeft: 12 }}>
          Valor <Text style={{ fontWeight: 'bold' }}>0</Text> significa <Text style={{ fontWeight: 'bold' }}>falso</Text>.{'\n'}
          Valores <Text style={{ fontWeight: 'bold' }}>diferentes de zero</Text> significam <Text style={{ fontWeight: 'bold' }}>verdadeiro</Text>.{'\n'}
        </Paragraph>
        <Paragraph>
          Os operadores de comparação de valores retornam <Text style={{ fontWeight: 'bold' }}>1 (verdadeiro)</Text> ou <Text style={{ fontWeight: 'bold' }}>0 (falso)</Text>. {'\n'}
          Assim, é possível fazer inúmeras verificações relevantes para o programa.
        </Paragraph>
    </Page>
  );
};

export default Aula01_01;
