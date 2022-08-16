import React from 'react'
import { Divider, Title, DataTable, Paragraph } from 'react-native-paper';
import Styles from '../../styles/styles'
import Page from '../../components/Page';

const Aula03_01 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Palavras Chave</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          Conjunto de 32 palavras utilizadas pela linguagem C. 
          Formam a sintaxe dessa linguagem de programação.
        </Paragraph>
        <Paragraph>
          Essas palavras possuem funções específicas dentro da linguagem C. 
          {'\n'}Por esse motivo, não podem ser utilizadas para outro fim, como nomes de variáveis.
        </Paragraph>
        
        <DataTable>
          <DataTable.Row>
            <DataTable.Cell>auto</DataTable.Cell>
            <DataTable.Cell>goto</DataTable.Cell>
            <DataTable.Cell>char</DataTable.Cell>
            <DataTable.Cell>switch</DataTable.Cell>
            <DataTable.Cell>void</DataTable.Cell>
          </DataTable.Row>
          
          <DataTable.Row>
            <DataTable.Cell>else</DataTable.Cell>
            <DataTable.Cell>if</DataTable.Cell>
            <DataTable.Cell>union</DataTable.Cell>
            <DataTable.Cell>continue</DataTable.Cell>
            <DataTable.Cell>while</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>enum</DataTable.Cell>
            <DataTable.Cell>case</DataTable.Cell>
            <DataTable.Cell>unsigned</DataTable.Cell>
            <DataTable.Cell>default</DataTable.Cell>
            <DataTable.Cell>typeof</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>float</DataTable.Cell>
            <DataTable.Cell>int</DataTable.Cell>
            <DataTable.Cell>const</DataTable.Cell>
            <DataTable.Cell>extern</DataTable.Cell>
            <DataTable.Cell>double</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>break</DataTable.Cell>
            <DataTable.Cell>long</DataTable.Cell>
            <DataTable.Cell>static</DataTable.Cell>
            <DataTable.Cell>register</DataTable.Cell>
            <DataTable.Cell>return</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>for</DataTable.Cell>
            <DataTable.Cell>short</DataTable.Cell>
            <DataTable.Cell>struct</DataTable.Cell>
            <DataTable.Cell>do</DataTable.Cell>
            <DataTable.Cell>sizeof</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
    </Page>
  );
};

export default Aula03_01;
