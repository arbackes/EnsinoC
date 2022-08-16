import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula07_04 = () => {
  return (
    <Page nextRoute='Aula07_05'>
        <Title style={Styles.title}>Passagem de Parâmetros</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          <Text style={{ fontWeight: 'bold' }}>Passagem por referência</Text>{'\n'}
        </Paragraph>

        <Paragraph>
          Para passar um parâmetro por referência, coloca-se um asterisco “*” na frente do nome do parâmetro na declaração da função:{'\n'}
        </Paragraph>

        <Text style={{ color: '#008800', fontStyle: 'italic'}}>//passagem por valor</Text>
        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>void</Text> incrementa(<Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> n);{'\n'}</Text>

        <Text style={{ color: '#008800', fontStyle: 'italic'}}>//passagem por referência</Text>
        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>void</Text> incrementa(<Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> *n);{'\n'}</Text>

        <Paragraph>
          Ao se chamar a função, é necessário agora utilizar o operador “{'&'}”, igual como é feito com a função scanf():{'\n'}
        </Paragraph>

        <Text style={{ color: '#008800', fontStyle: 'italic'}}>//passagem por valor</Text>
        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> x = <Text style={{ color: '#0000FF' }}>10</Text>;</Text>
        <Text>incrementa(x);{'\n'}</Text>

        <Text style={{ color: '#008800', fontStyle: 'italic'}}>//passagem por referência</Text>
        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> x = <Text style={{ color: '#0000FF' }}>10</Text>;</Text>
        <Text>incrementa({'&x'});{'\n'}</Text>
    </Page>
  );
};

export default Aula07_04;
