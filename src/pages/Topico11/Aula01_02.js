import React from 'react'
import { View } from 'react-native'
import { Divider, Title, Paragraph, Text, DataTable } from 'react-native-paper';
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula01_02 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Struct - Exemplo</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          Em um cadastro de pessoas todas as informações são da mesma pessoa, logo podemos agrupá-las em uma <Text style={{ fontWeight: 'bold' }}>struct</Text>:{'\n'}
        </Paragraph>

        <View style={{ width: '60%' }}>
          <DataTable>
            <DataTable.Row>
              <DataTable.Cell style={{ backgroundColor: '#22d1dc', borderWidth: 2, borderColor: '#ff9a00' }}>char nome[50];</DataTable.Cell>
            </DataTable.Row>
            
            <DataTable.Row>
              <DataTable.Cell style={{ backgroundColor: '#22d1dc', borderWidth: 2, borderColor: '#ff9a00'  }}>int idade;</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell style={{ backgroundColor: '#22d1dc', borderWidth: 2, borderColor: '#ff9a00'  }}>char rua[50];</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell style={{ backgroundColor: '#22d1dc', borderWidth: 2, borderColor: '#ff9a00'  }}>int numero;</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>cadastro</DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </View>

        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          Na linguagem C criamos a <Text style={{ fontWeight: 'bold' }}>struct</Text> cadastro de pessoas da seguinte maneira:{'\n'}
        </Paragraph>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>struct</Text> cadastro {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>char</Text> nome[<Text style={{ color: '#0000FF' }}>50</Text>];</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> idade;</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>char</Text> [<Text style={{ color: '#0000FF' }}>50</Text>];</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> numero;</Text>
        <Text>{'}'};</Text>
    </Page>
  );
};

export default Aula01_02;
