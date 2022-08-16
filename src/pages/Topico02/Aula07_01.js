import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper';
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula07_01 = () => {
  return (
    <Page nextRoute='Aula07_02'>
        <Title style={Styles.title}>Constantes</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>	

        <Paragraph>
          Permitem guardar um determinado dado ou valor.{'\n'}
          Este dado ou valor não poderá ser alterado durante a execução do programa.{'\n'}
          Pode ser feito de duas maneiras:
        </Paragraph>
        <Text style={{ marginLeft: 10 }}>Com o comando <Text style={{ fontWeight: 'bold' }}>#define</Text></Text>
        <Text style={{ marginLeft: 10 }}>Com o comando <Text style={{ fontWeight: 'bold' }}>const</Text></Text>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>	

        <Text style={{ fontWeight: 'bold' }}>O comando #define</Text>
        
        <Paragraph>
          É uma diretiva de compilação que informa ao compilador que ele deverá substituir todas as ocorrências do termo nome_da_constante por valor_da_constante quando o programa for compilado.{'\n'}
        </Paragraph>
        <Text style={{ fontWeight: 'bold' }}>Forma geral:{'\n'}</Text>
        <Text style={{ color: '#008080' }}>#define tipo_da_constante valor_da_constante{'\n'}</Text>
        
        <Text style={{ fontWeight: 'bold' }}>Exemplo:{'\n'}</Text>
        <Text style={{ color: '#008080' }}>#define PI 3.1415{'\n'}</Text>

        <Paragraph>
          Nesse exemplo, o valor de <Text style={{ fontWeight: 'bold' }}>PI</Text> será de <Text style={{ fontWeight: 'bold' }}>3.1415</Text> para todo o programa, dispensando a necessidade de atribuir esse valor para a constante mais de uma vez.
        </Paragraph>
    </Page>
  );
};

export default Aula07_01;
