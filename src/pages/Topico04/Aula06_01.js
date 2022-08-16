import React from 'react'
import { Divider, Title, DataTable, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula06_01 = () => {
  return (
    <Page nextRoute='Aula06_02'>
        <Title style={Styles.title}>Atribuição Simplificada</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          Os operadores são sempre utilizados em conjunto do operador de atribuição.{'\n'}
          Para tornar essa tarefa mais simples, a linguagem C permite simplificar algumas expressões.
        </Paragraph>
        <Paragraph style={{ fontWeight: 'bold' }}>
          Abaixo podemos ver a tabela de atribuições simplificadas
        </Paragraph>
        
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Operador</DataTable.Title>
            <DataTable.Title>Exemplo</DataTable.Title>
            <DataTable.Title>Equivale a</DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell style={{ flex: 6 }}>Soma e atribui</DataTable.Cell>
            <DataTable.Cell style={{ flex: 2 }}>x += y;</DataTable.Cell>
            <DataTable.Cell style={{ flex: 2 }}>x = x + y;</DataTable.Cell>
          </DataTable.Row>
          
          <DataTable.Row>
            <DataTable.Cell style={{ flex: 6 }}>Subtrai e atribui</DataTable.Cell>
            <DataTable.Cell style={{ flex: 2 }}>x -= y;</DataTable.Cell>
            <DataTable.Cell style={{ flex: 2 }}>x = x - y;</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell style={{ flex: 6 }}>Multiplica e atribui</DataTable.Cell>
            <DataTable.Cell style={{ flex: 2 }}>x *= y;</DataTable.Cell>
            <DataTable.Cell style={{ flex: 2 }}>x = x * y;</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell style={{ flex: 6 }}>Divide e atribui o quociente</DataTable.Cell>
            <DataTable.Cell style={{ flex: 2 }}>x /= y;</DataTable.Cell>
            <DataTable.Cell style={{ flex: 2 }}>x = x / y;</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell style={{ flex: 6 }}>Divide e atribui o resto</DataTable.Cell>
            <DataTable.Cell style={{ flex: 2 }}>x %= y;</DataTable.Cell>
            <DataTable.Cell style={{ flex: 2 }}>x = x % y;</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
    </Page>
  );
};

export default Aula06_01;
