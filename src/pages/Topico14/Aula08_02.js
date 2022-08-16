import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula08_02 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Ponteiros e Arrays</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
            <Text style={{ fontWeight: 'bold' }}>Acesso ao conteúdo</Text>{'\n'}{'\n'}
            Os colchetes [ ] substituem o uso conjunto de operações aritméticas e de acesso ao conteúdo (operador “*”) no acesso ao conteúdo de uma posição de um array ou ponteiro.{'\n'}
            O valor entre colchetes é o deslocamento a partir da posição inicial (posição 0) do array.{'\n'}
        </Paragraph>
        
        <Text style={{ fontWeight: 'bold' }}>Temos que: </Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ fontWeight: 'bold' }}>*p</Text> é equivalente a <Text style={{ fontWeight: 'bold' }}>vet[0]</Text></Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ fontWeight: 'bold' }}>vet[índice]</Text> é equivalente a <Text style={{ fontWeight: 'bold' }}>*(p + índice)</Text></Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ fontWeight: 'bold' }}>vet</Text> é equivalente a <Text style={{ fontWeight: 'bold' }}>{'&'}vet[0]</Text></Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ fontWeight: 'bold' }}>{'&'}vet[índice]</Text> é equivalente a <Text style={{ fontWeight: 'bold' }}>(vet + índice)</Text></Text>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text style={{ fontWeight: 'bold' }}>Exemplo</Text>
        <Text>Nesse caso, <Text style={{ fontWeight: 'bold' }}>p[2]</Text> equivale a <Text style={{ fontWeight: 'bold' }}>*(p+2)</Text>.{'\n'}</Text>
        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> vet[<Text style={{ color: '#0000FF' }}>5</Text>] = {'{'}<Text style={{ color: '#0000FF' }}>10</Text>, <Text style={{ color: '#0000FF' }}>20</Text>, <Text style={{ color: '#0000FF' }}>30</Text>, <Text style={{ color: '#0000FF' }}>40</Text>, <Text style={{ color: '#0000FF' }}>50</Text>{'}'};{'\n'}</Text>
        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> *p;{'\n'}</Text>
        <Text>p = vet;{'\n'}</Text>
        <Text>printf(<Text style={{ color: '#0000FF' }}>"%d\n"</Text>, p[<Text style={{ color: '#0000FF' }}>2</Text>]);{'\n'}</Text>
        <Text>printf(<Text style={{ color: '#0000FF' }}>"%d\n"</Text>, *(p+<Text style={{ color: '#0000FF' }}>2</Text>));</Text>
    </Page>
  );
};

export default Aula08_02;
