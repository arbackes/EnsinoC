import React from 'react'
import { Divider, Title, Text, Paragraph, DataTable } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula02_01 = () => {
  return (
    <Page nextRoute='Aula02_02'>
        <Title style={Styles.title}>Operadores Relacionais</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
        São aqueles que verificam a magnitude (qual é maior ou menor) e/ou igualdade entre dois valores e/ou expressões.{'\n'}
        Eles comparam valores e retornam <Text style={{ fontWeight: 'bold' }}>1 (verdadeiro</Text>) ou  <Text style={{ fontWeight: 'bold' }}>0 (falso)</Text>.{'\n'}
        </Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
        Tipos de operadores relacionais:{'\n'}
        </Paragraph>

        <DataTable>
        <DataTable.Header>
            <DataTable.Title>Operador</DataTable.Title>
            <DataTable.Title>Descrição</DataTable.Title>
            <DataTable.Title>Exemplo</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
            <DataTable.Cell style={{ flex: 2 }}>{'>'}</DataTable.Cell>
            <DataTable.Cell style={{ flex: 6 }}>Maior que</DataTable.Cell>
            <DataTable.Cell style={{ flex: 2 }}>x {'>'} y;</DataTable.Cell>
        </DataTable.Row>
        
        <DataTable.Row>
            <DataTable.Cell style={{ flex: 2 }}>{'>'}=</DataTable.Cell>
            <DataTable.Cell style={{ flex: 6 }}>Maior ou igual que</DataTable.Cell>
            <DataTable.Cell style={{ flex: 2 }}>x {'>'}= y;</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
            <DataTable.Cell style={{ flex: 2 }}>{'<'}</DataTable.Cell>
            <DataTable.Cell style={{ flex: 6 }}>Menor que</DataTable.Cell>
            <DataTable.Cell style={{ flex: 2 }}>x {'<'} y;</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
            <DataTable.Cell style={{ flex: 2 }}>{'<'}=</DataTable.Cell>
            <DataTable.Cell style={{ flex: 6 }}>Menor ou igual que</DataTable.Cell>
            <DataTable.Cell style={{ flex: 2 }}>x {'<'}= y;</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
            <DataTable.Cell style={{ flex: 2 }}>==</DataTable.Cell>
            <DataTable.Cell style={{ flex: 6 }}>Igual a (comparação)</DataTable.Cell>
            <DataTable.Cell style={{ flex: 2 }}>x == y;</DataTable.Cell>
        </DataTable.Row>
        
        <DataTable.Row>
            <DataTable.Cell style={{ flex: 2 }}>!=</DataTable.Cell>
            <DataTable.Cell style={{ flex: 6 }}>Diferente de</DataTable.Cell>
            <DataTable.Cell style={{ flex: 2 }}>x != y;</DataTable.Cell>
        </DataTable.Row>
        </DataTable>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>Observe que = e == são totalmente diferentes!{'\n'}</Paragraph>

        <Text>
        <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> main() {'{'}
        </Text>
        <Text style={{marginLeft: 12 }}>
        <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> variavel;{'\n'}
        </Text>
        <Text style={{marginLeft: 12 }}>
        <Text style={{ color: '#008800', fontStyle: 'italic'}}>//Variavel é igual a 60?</Text>{'\n'}
        variavel == <Text style={{ color: '#0000FF' }}>60</Text>;{'\n'}
        </Text>
        <Text style={{marginLeft: 12 }}>
        <Text style={{ color: '#008800', fontStyle: 'italic'}}>//Variavel recebe 60!</Text>{'\n'}
        variavel = <Text style={{ color: '#0000FF' }}>60</Text>;{'\n'}
        </Text>
        
        <Text style={{ marginLeft: 12 }}>
        <Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> 0;
        </Text>
        <Text>{'}\n'}</Text>
    </Page>
  );
};

export default Aula02_01;
