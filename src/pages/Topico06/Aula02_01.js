import React from 'react'
import { Divider, Title, Text, Paragraph, DataTable } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula02_01 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Tabela Verdade</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          Uma tabela verdade é uma tabela matemática usada em álgebra booleana.{'\n'}
          A tabela mostra o valores de saída de expressões lógicas para cada combinação possível dos valores de suas variáveis.{'\n'}
          Tabelas verdade são usadas para representar o retorno de expressões que resultam em Verdadeiro (1) ou Falso (0).{'\n'}
          Na tabela abaixo, os termos A e B representam o resultado de duas expressões relacionais, como por exemplo:{'\n'}
          X {'>'}= 5 ou Y {'<'} Z, etc:{'\n'}
        </Paragraph>
        
        <DataTable>
          <DataTable.Row>
            <DataTable.Cell><Text style={{ fontWeight: 'bold' }}>A</Text></DataTable.Cell>
            <DataTable.Cell><Text style={{ fontWeight: 'bold' }}>B</Text></DataTable.Cell>
            <DataTable.Cell>!A</DataTable.Cell>
            <DataTable.Cell>!B</DataTable.Cell>
            <DataTable.Cell>A && B</DataTable.Cell>
            <DataTable.Cell>A || B</DataTable.Cell>
          </DataTable.Row>
            
          <DataTable.Row>
            <DataTable.Cell><Text style={{ fontWeight: 'bold' }}>0</Text></DataTable.Cell>
            <DataTable.Cell><Text style={{ fontWeight: 'bold' }}>0</Text></DataTable.Cell>
            <DataTable.Cell>1</DataTable.Cell>
            <DataTable.Cell>1</DataTable.Cell>
            <DataTable.Cell>0</DataTable.Cell>
            <DataTable.Cell>0</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell><Text style={{ fontWeight: 'bold' }}>0</Text></DataTable.Cell>
            <DataTable.Cell><Text style={{ fontWeight: 'bold' }}>1</Text></DataTable.Cell>
            <DataTable.Cell>1</DataTable.Cell>
            <DataTable.Cell>0</DataTable.Cell>
            <DataTable.Cell>0</DataTable.Cell>
            <DataTable.Cell>1</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell><Text style={{ fontWeight: 'bold' }}>1</Text></DataTable.Cell>
            <DataTable.Cell><Text style={{ fontWeight: 'bold' }}>0</Text></DataTable.Cell>
            <DataTable.Cell>0</DataTable.Cell>
            <DataTable.Cell>1</DataTable.Cell>
            <DataTable.Cell>0</DataTable.Cell>
            <DataTable.Cell>1</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell><Text style={{ fontWeight: 'bold' }}>1</Text></DataTable.Cell>
            <DataTable.Cell><Text style={{ fontWeight: 'bold' }}>1</Text></DataTable.Cell>
            <DataTable.Cell>0</DataTable.Cell>
            <DataTable.Cell>0</DataTable.Cell>
            <DataTable.Cell>1</DataTable.Cell>
            <DataTable.Cell>1</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
    </Page>
  );
};

export default Aula02_01;
