import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula11_01 = () => {
  return (
    <Page nextRoute='Aula11_02'>
        <Title style={Styles.title}>Escrita de Bloco de Dados</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
        A função <Text style={{ fontWeight: 'bold' }}>fwrite()</Text> é responsável pela escrita de um bloco de dados da memória em um arquivo. Seu protótipo é:{'\n'}{'\n'}
        <Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> fwrite(<Text style={{ color: '#000080', fontWeight: 'bold' }}>void</Text> *buffer, <Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> numero_de_bytes, <Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> count, <Text style={{ color: '#000080', fontWeight: 'bold' }}>FILE</Text> *fp);{'\n'}
        </Paragraph>

        <Paragraph>
        A função <Text style={{ fontWeight: 'bold' }}>fwrite()</Text> recebe 4 argumentos:{'\n'}
        - <Text style={{ fontWeight: 'bold' }}>buffer</Text>: ponteiro para a região de memória na qual estão os dados;{'\n'}
        - <Text style={{ fontWeight: 'bold' }}>numero_de_bytes</Text>: tamanho de cada posição de memória a ser escrita;{'\n'}
        - <Text style={{ fontWeight: 'bold' }}>count</Text>: total de unidades de memória que devem ser escritas;{'\n'}
        - <Text style={{ fontWeight: 'bold' }}>fp</Text>: ponteiro associado ao arquivo onde os dados serão escritos.{'\n'}{'\n'}
        A função retorna o número de unidades efetivamente escritas. Este número pode ser menor que <Text style={{ fontWeight: 'bold' }}>count</Text> quando ocorrer algum erro.
        </Paragraph>
    </Page>
  );
};

export default Aula11_01;
