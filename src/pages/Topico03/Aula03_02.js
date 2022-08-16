import React from 'react'
import { Divider, Title, Text, Paragraph, DataTable } from 'react-native-paper';
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula03_02 = () => {
  return (
    <Page nextRoute='Aula03_03'>
        <Title style={Styles.title}>Formatos de Saída do printf()</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          <Text style={{ fontWeight: 'bold' }}>Observação:</Text> Fique de olho no tipo da variável a ser impressa para definir o formato de saída correto!.{'\n'}
        </Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <DataTable>
          <DataTable.Row>
            <DataTable.Cell style={{ flex: 3 }}>%c</DataTable.Cell>
            <DataTable.Cell style={{ flex: 7 }}>caractere (char)</DataTable.Cell>
          </DataTable.Row>
          
          <DataTable.Row>
            <DataTable.Cell style={{ flex: 3 }}>%d ou %i</DataTable.Cell>
            <DataTable.Cell style={{ flex: 7 }}>números inteiros (int ou char)</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell style={{ flex: 3 }}>%u</DataTable.Cell>
            <DataTable.Cell style={{ flex: 7 }}>números inteiros sem sinal (unsigned)</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell style={{ flex: 3 }}>%f</DataTable.Cell>
            <DataTable.Cell style={{ flex: 7 }}>números reais(float ou double)</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell style={{ flex: 3 }}>%s</DataTable.Cell>
            <DataTable.Cell style={{ flex: 7 }}>vários caracteres</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell style={{ flex: 3 }}>%p</DataTable.Cell>
            <DataTable.Cell style={{ flex: 7 }}>endereço de memória</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell style={{ flex: 3 }}>%e ou %E</DataTable.Cell>
            <DataTable.Cell style={{ flex: 7 }}>notação científica</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
    </Page>
  );
};

export default Aula03_02;
