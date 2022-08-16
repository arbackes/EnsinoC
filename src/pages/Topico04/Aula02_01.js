import React from 'react'
import { Divider, Title, Paragraph, DataTable, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula02_01 = () => {
  return (
    <Page nextRoute='Aula02_02'>
        <Title style={Styles.title}>Operadores Aritméticos</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          Os operadores aritméticos operam sobre variáveis, constantes, chamadas de funções e expressões.{'\n'}
          São utilizados em conjunto com o operador de atribuição e seus resultados são valores numéricos.
        </Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>Tabela de operadores aritméticos:</Paragraph>

        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Operador</DataTable.Title>
            <DataTable.Title>Significado</DataTable.Title>
            <DataTable.Title>Exemplo</DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell style={{ flex: 3 }}>+</DataTable.Cell>
            <DataTable.Cell style={{ flex: 3 }}>Soma</DataTable.Cell>
            <DataTable.Cell style={{ flex: 4 }}>
              <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> z = x + <Text style={{ color: '#0000FF' }}>6</Text>;
            </DataTable.Cell>
          </DataTable.Row>
          
          <DataTable.Row>
            <DataTable.Cell style={{ flex: 3 }}>-</DataTable.Cell>
            <DataTable.Cell style={{ flex: 3 }}>Subtração</DataTable.Cell>
            <DataTable.Cell style={{ flex: 4 }}>
              <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> z = x - <Text style={{ color: '#0000FF' }}>16</Text>;
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell style={{ flex: 3 }}>*</DataTable.Cell>
            <DataTable.Cell style={{ flex: 3 }}>Multiplicação</DataTable.Cell>
            <DataTable.Cell style={{ flex: 4 }}>
              <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> z = x * <Text style={{ color: '#0000FF' }}>34</Text>;
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell style={{ flex: 3 }}>/</DataTable.Cell>
            <DataTable.Cell style={{ flex: 3 }}>Divisão</DataTable.Cell>
            <DataTable.Cell style={{ flex: 4 }}>
              <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> z = x / <Text style={{ color: '#0000FF' }}>5</Text>;
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell style={{ flex: 3 }}>%</DataTable.Cell>
            <DataTable.Cell style={{ flex: 3 }}>Resto</DataTable.Cell>
            <DataTable.Cell style={{ flex: 4 }}>
              <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> z = x % <Text style={{ color: '#0000FF' }}>2</Text>;
            </DataTable.Cell>
          </DataTable.Row>
        </DataTable>
    </Page>
  );
};

export default Aula02_01;
