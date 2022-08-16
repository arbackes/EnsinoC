import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula13_01 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>A função fprintf()</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
        Para escrever em um arquivo um conjunto de dados formatados usa-se a função <Text style={{ fontWeight: 'bold' }}>fprintf()</Text>.{'\n'}
        Seu protótipo é:{'\n'}{'\n'}
        <Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> fprintf(<Text style={{ color: '#000080', fontWeight: 'bold' }}>FILE</Text> *fp, <Text style={{ color: '#0000FF' }}>"tipos de saída"</Text>, lista de variaveis);{'\n'}{'\n'}
        Perceba que a função fprintf() funciona de maneira semelhante à função printf():{'\n'}{'\n'}
        <Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> printf(<Text style={{ color: '#0000FF' }}>"tipos de saída"</Text>, lista de variaveis);{'\n'}
        </Paragraph>

        <Paragraph>
        A diferença é que, em vez de escrever na tela, a função fprintf() direciona os dados para o arquivo especificado:{'\n'}{'\n'}
        <Text style={{ color: '#008800', fontStyle: 'italic'}}>// Escreve na tela</Text>{'\n'}
        printf(<Text style={{ color: '#0000FF' }}>"Total = %d\n"</Text>, x);{'\n'}{'\n'}
        <Text style={{ color: '#008800', fontStyle: 'italic'}}>// Escreve no arquivo fp</Text>{'\n'}
        fprintf(fp, <Text style={{ color: '#0000FF' }}>"Total = %d\n"</Text>, x);{'\n'}{'\n'}
        </Paragraph>
    </Page>
  );
};

export default Aula13_01;
