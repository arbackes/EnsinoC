import React from 'react'
import { Divider, Title, Text, Subheading, DataTable } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula01_02 = () => {
  return (
      <Page nextRoute='Menu'>
        <Title style={Styles.title}>Relembrando</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Subheading>Operadores lógicos:</Subheading>
        <DataTable>
        <DataTable.Header>
            <DataTable.Title style={{ flex: 2 }}>Operador</DataTable.Title>
            <DataTable.Title style={{ flex: 2 }}>Descrição</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
            <DataTable.Cell style={{ flex: 2 }}>&&</DataTable.Cell>
            <DataTable.Cell style={{ flex: 2 }}>E</DataTable.Cell>
        </DataTable.Row>
        
        <DataTable.Row>
            <DataTable.Cell style={{ flex: 2 }}>||</DataTable.Cell>
            <DataTable.Cell style={{ flex: 2 }}>Ou</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
            <DataTable.Cell style={{ flex: 2 }}>!</DataTable.Cell>
            <DataTable.Cell style={{ flex: 2 }}>Negação</DataTable.Cell>
        </DataTable.Row>
        </DataTable>
        <Text>{'\n'}</Text>

        <Subheading>Operadores relacionais:</Subheading>
        <DataTable>
        <DataTable.Header>
            <DataTable.Title style={{ flex: 3 }}>Operador</DataTable.Title>
            <DataTable.Title style={{ flex: 7 }}>Descrição</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
            <DataTable.Cell style={{ flex: 3 }}>{'>'}</DataTable.Cell>
            <DataTable.Cell style={{ flex: 7 }}>Maior que</DataTable.Cell>
        </DataTable.Row>
        
        <DataTable.Row>
            <DataTable.Cell style={{ flex: 3 }}>{'>'}=</DataTable.Cell>
            <DataTable.Cell style={{ flex: 7 }}>Maior ou igual que</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
            <DataTable.Cell style={{ flex: 3 }}>{'<'}</DataTable.Cell>
            <DataTable.Cell style={{ flex: 7 }}>Menor que</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
            <DataTable.Cell style={{ flex: 3 }}>{'<'}=</DataTable.Cell>
            <DataTable.Cell style={{ flex: 7 }}>Menor ou igual que</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
            <DataTable.Cell style={{ flex: 3 }}>==</DataTable.Cell>
            <DataTable.Cell style={{ flex: 7 }}>Igual a (comparação)</DataTable.Cell>
        </DataTable.Row>
        
        <DataTable.Row>
            <DataTable.Cell style={{ flex: 3 }}>!=</DataTable.Cell>
            <DataTable.Cell style={{ flex: 7 }}>Diferente de</DataTable.Cell>
        </DataTable.Row>
        </DataTable>
      </Page>
  );
};

export default Aula01_02;
