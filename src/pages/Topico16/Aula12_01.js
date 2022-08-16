import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula12_01 = () => {
  return (
    <Page nextRoute='Aula12_02'>
        <Title style={Styles.title}>Leitura de Bloco de Dados</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
        A função <Text style={{ fontWeight: 'bold' }}>fread()</Text> é responsável pela leitura de um bloco de dados de um arquivo. Seu protótipo é:{'\n'}{'\n'}
        <Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> fread(<Text style={{ color: '#000080', fontWeight: 'bold' }}>void</Text> *buffer, <Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> numero_de_bytes, <Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> count, <Text style={{ color: '#000080', fontWeight: 'bold' }}>FILE</Text> *fp);{'\n'}
        </Paragraph>

        <Paragraph>
        A função <Text style={{ fontWeight: 'bold' }}>fread()</Text> recebe 4 argumentos:{'\n'}
        - <Text style={{ fontWeight: 'bold' }}>buffer</Text>: ponteiro para a região de memória na qual serão armazenados os dados lidos;{'\n'}
        - <Text style={{ fontWeight: 'bold' }}>numero_de_bytes</Text>: tamanho de cada posição de memória a ser lida;{'\n'}
        - <Text style={{ fontWeight: 'bold' }}>count</Text>: total de unidades de memória que devem ser lidas;{'\n'}
        - <Text style={{ fontWeight: 'bold' }}>fp</Text>: ponteiro associado ao arquivo onde os dados serão lidos.{'\n'}{'\n'}
        A função retorna o número de unidades efetivamente lidas do arquivo. Este número pode ser menor que <Text style={{ fontWeight: 'bold' }}>count</Text> quando ocorrer algum erro.
        </Paragraph>
    </Page>
  );
};

export default Aula12_01;
