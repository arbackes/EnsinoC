import React from 'react'
import { Divider, Title, Paragraph, Text, Subheading, DataTable } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula01_02 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Declaração</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          Como qualquer variável, um ponteiro também possui um tipo:{'\n\n'}
          <Text style={{ color: '#008800', fontStyle: 'italic'}}>//declaracao da variavel</Text>{'\n'}
          tipo_variavel nome_variavel;{'\n\n'}
          <Text style={{ color: '#008800', fontStyle: 'italic'}}>//declaracao de ponteiro</Text>{'\n'}
          tipo_ponteiro *nome_variavel;{'\n\n'}
          O <Text style={{ fontWeight: 'bold' }}>asterisco (*)</Text> é o que informa ao compilador que a variável vai guardar um endereço para o tipo especificado.
        </Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Subheading>Exemplos:</Subheading>

        <DataTable>
          <DataTable.Row>
            <DataTable.Cell><Text style={{ fontWeight: 'bold' }}>Declaração de Variável</Text></DataTable.Cell>
            <DataTable.Cell><Text style={{ fontWeight: 'bold' }}>Declaração de Ponteiros</Text></DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> x;</DataTable.Cell>
            <DataTable.Cell><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> *x;</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell><Text style={{ color: '#000080', fontWeight: 'bold' }}>float</Text> real;</DataTable.Cell>
            <DataTable.Cell><Text style={{ color: '#000080', fontWeight: 'bold' }}>float</Text> *real;</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell><Text style={{ color: '#000080', fontWeight: 'bold' }}>struct</Text> ponto p;</DataTable.Cell>
            <DataTable.Cell><Text style={{ color: '#000080', fontWeight: 'bold' }}>struct</Text> ponto *p;</DataTable.Cell>
          </DataTable.Row>
        </DataTable>

    </Page>
  );
};

export default Aula01_02;
