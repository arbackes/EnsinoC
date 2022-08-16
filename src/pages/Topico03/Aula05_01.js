import React from 'react'
import { Divider, Title, Text, Paragraph, DataTable } from 'react-native-paper';
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula04_02 = () => {
  return (
    <Page nextRoute='Aula05_02'>
          <Title style={Styles.title}>Sequências de Escape</Title>
          <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

          <Paragraph>
            Sequências de escape permitem que o comando <Text style={{ fontWeight: 'bold' }}>printf()</Text> imprima caracteres especiais na tela de saída, como tabulações e quebras de linha.{'\n'}
            São combinações de caracteres que consistem em uma barra invertida "\" seguida por uma letra ou por uma combinação de dígitos.
          </Paragraph>
          <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

          <Paragraph>
            Sequências de escape mais utilizadas e seu significado:
          </Paragraph>

          <DataTable>
            <DataTable.Row>
              <DataTable.Cell style={{ flex: 3 }}>\a</DataTable.Cell>
              <DataTable.Cell style={{ flex: 7 }}>bip (alerta)</DataTable.Cell>
            </DataTable.Row>
            
            <DataTable.Row>
              <DataTable.Cell style={{ flex: 3 }}>\b</DataTable.Cell>
              <DataTable.Cell style={{ flex: 7 }}>retrocesso (backspace)</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell style={{ flex: 3 }}>\n</DataTable.Cell>
              <DataTable.Cell style={{ flex: 7 }}>nova linha (new line)</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell style={{ flex: 3 }}>\v</DataTable.Cell>
              <DataTable.Cell style={{ flex: 7 }}>tabulação vertical</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell style={{ flex: 3 }}>\t</DataTable.Cell>
              <DataTable.Cell style={{ flex: 7 }}>tabulação horizontal</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell style={{ flex: 3 }}>\r</DataTable.Cell>
              <DataTable.Cell style={{ flex: 7 }}>retorno de carro (carriage return)</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell style={{ flex: 3 }}>\\</DataTable.Cell>
              <DataTable.Cell style={{ flex: 7 }}>barra</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell style={{ flex: 3 }}>\"</DataTable.Cell>
              <DataTable.Cell style={{ flex: 7 }}>aspas dupla</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell style={{ flex: 3 }}>\'</DataTable.Cell>
              <DataTable.Cell style={{ flex: 7 }}>aspas simples</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell style={{ flex: 3 }}>\%</DataTable.Cell>
              <DataTable.Cell style={{ flex: 7 }}>símbolo de %</DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        <Text>{'\n'}</Text>
    </Page>
  );
};

export default Aula04_02;
