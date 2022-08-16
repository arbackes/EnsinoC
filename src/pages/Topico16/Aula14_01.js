import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula14_01 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>A função fscanf()</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
        Para ler de um arquivo um conjunto de dados formatados usa-se a função <Text style={{ fontWeight: 'bold' }}>fscanf()</Text>.{'\n'}
        Seu protótipo é:{'\n'}{'\n'}
        <Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> fscanf(<Text style={{ color: '#000080', fontWeight: 'bold' }}>FILE</Text> *fp, <Text style={{ color: '#0000FF' }}>"tipos de entrada"</Text>, lista de variaveis);{'\n'}{'\n'}
        Perceba que a função fscanf() funciona de maneira semelhante à função scanf():{'\n'}{'\n'}
        <Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> scanf(<Text style={{ color: '#0000FF' }}>"tipos de entrada"</Text>, lista de variaveis);{'\n'}
        </Paragraph>

        <Paragraph>
        A diferença é que, em vez de ler do teclado, a função fscanf() direciona a leitura para o arquivo especificado:{'\n'}{'\n'}
        <Text style={{ color: '#008800', fontStyle: 'italic'}}>// Lê-se do teclado</Text>{'\n'}
        scanf(<Text style={{ color: '#0000FF' }}>"%d"</Text>, {'&x'});{'\n'}{'\n'}
        <Text style={{ color: '#008800', fontStyle: 'italic'}}>// Lê-se do arquivo fp</Text>{'\n'}
        fscanf(fp, <Text style={{ color: '#0000FF' }}>"%d"</Text>, {'&x'});{'\n'}{'\n'}
        </Paragraph>
    </Page>
  );
};

export default Aula14_01;
