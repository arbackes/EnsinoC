import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula02_03 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Exemplo</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          Para saber o endereço de memória de uma variável usamos o operador <Text style={{ fontWeight: 'bold' }}>{'&'}</Text>.{'\n'}
          Ao armazenar o endereço, o ponteiro está apontando para aquela variável.
        </Paragraph>
        
        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic'}}> //Declara uma variável int contendo o valor 10</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> c = <Text style={{ color: '#0000FF' }}>10</Text>;</Text>
        <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic'}}> //Declara um ponteiro para int</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> *p;</Text>
        <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic'}}> //Atribui ao ponteiro o endereço da variável int</Text>
        <Text style={{ marginLeft: 10 }}>p = {'&'}c;{'\n'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>return</Text> 0;</Text>
        <Text>{'}\n'}</Text>

    </Page>
  );
};

export default Aula02_03;
