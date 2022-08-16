import React from 'react'
import { Divider, Title, Text, Paragraph, Subheading, DataTable } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula01_01 = () => {
  return (
    <Page nextRoute='Aula01_02'>
        <Title style={Styles.title}>Operadores Lógicos</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
        Operadores relacionais ou aritiméticos possuem algumas limitações.{'\n'}
        Algumas situações não podem ser modeladas utilizando apenas os operadores aritméticos e/ou relacionais.{'\n'}
        </Paragraph>

        <Paragraph>
        Um exemplo é como verificar se determinada variável está dentro de uma faixa de valores:{'\n'}
        </Paragraph>

        <Paragraph>
        <Text style={{ color: '#0000FF' }}>0</Text> {'<'} x {'<'} <Text style={{ color: '#0000FF' }}>10</Text> <Text style={{ fontWeight: 'bold' }}>equivale a:</Text> x {'>'} <Text style={{ color: '#0000FF' }}>0</Text> && x {'<'} <Text style={{ color: '#0000FF' }}>10</Text>{'\n'}
        </Paragraph>

        <Paragraph>
        Outro exemplo é quando precisa-se verificar se determinada variável equivale a um dentre dois valores possíveis.{'\n'}
        Por exemplo, queremos saber se x é igual a 10 ou igual a 5. Utilizando operadores relacionais ou aritiméticos teríamos que fazer duas verificações separadas.{'\n'}
        Utilizando o operador lógico <Text style={{ fontWeight: 'bold' }}>OU</Text> "||" essa tarefa se torna muito mais fácil!{'\n'}
        </Paragraph>

        <Subheading>Exemplo:</Subheading>
        <Paragraph>
        <Text style={{ color: '#008800', fontStyle: 'italic'}}>// x é igual a 5 ou igual a 10? Se x for igual a 5 ou igual a 10, temos verdadeiro (1) como retorno</Text>{'\n'}
        r = (x==<Text style={{ color: '#0000FF' }}>5</Text>) || (x==<Text style={{ color: '#0000FF' }}>10</Text>);
        </Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
        Os operadores lógicos permitem representar situações lógicas unindo duas ou mais expressões relacionais simples em uma composta!{'\n'}
        Operadores lógicos retornam verdadeiro (1) ou falso (0).{'\n'}
        Existem três operadores lógicos:{'\n'}
        </Paragraph>
        
        <DataTable>
        <DataTable.Header>
            <DataTable.Title style={{ flex: 2 }}>Operador</DataTable.Title>
            <DataTable.Title style={{ flex: 2 }}>Descrição</DataTable.Title>
            <DataTable.Title style={{ flex: 6 }}>Exemplo</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
            <DataTable.Cell style={{ flex: 2 }}>&&</DataTable.Cell>
            <DataTable.Cell style={{ flex: 2 }}>E</DataTable.Cell>
            <DataTable.Cell style={{ flex: 6 }}>
            r = (x {'>'} <Text style={{ color: '#0000FF' }}>2</Text>) && (y {'<'} x);
            </DataTable.Cell>
        </DataTable.Row>
        
        <DataTable.Row>
            <DataTable.Cell style={{ flex: 2 }}>||</DataTable.Cell>
            <DataTable.Cell style={{ flex: 2 }}>Ou</DataTable.Cell>
            <DataTable.Cell style={{ flex: 6 }}>
            r = (x {'>'} <Text style={{ color: '#0000FF' }}>2</Text>) || (y {'<'} x);
            </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
            <DataTable.Cell style={{ flex: 2 }}>!</DataTable.Cell>
            <DataTable.Cell style={{ flex: 2 }}>Negação</DataTable.Cell>
            <DataTable.Cell style={{ flex: 6 }}>	
            r = ! (y {'<'} x);
            </DataTable.Cell>
        </DataTable.Row>
        </DataTable>
        <Text>{'\n'}</Text>
    </Page>
  );
};

export default Aula01_01;
