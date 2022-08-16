import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula07_01 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Ponteiros Genéricos</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
            <Text style={{ fontWeight: 'bold' }}>Acesso ao conteúdo</Text>{'\n'}
            Para acessar o conteúdo de um ponteiro genérico é preciso convertê-lo para o tipo de ponteiro para o qual se deseja trabalhar.{'\n'}
            Para isso usamos <Text style={{ fontWeight: 'bold' }}>type casting</Text>.{'\n'}
        </Paragraph>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>void</Text> *pp;</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> p2 = <Text style={{ color: '#0000FF' }}>10</Text>;{'\n'}</Text>
        <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic'}}> //ponteiro genérico recebe o endereço de um inteiro</Text>
        <Text style={{ marginLeft: 10 }}>pp = {'&p2'};{'\n'}</Text>
        <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic'}}> //Tenta acessar o conteúdo do ponteiro genérico</Text>
        <Text style={{ marginLeft: 10 }}>printf(<Text style={{ color: '#0000FF' }}>"Conteudo: %d"</Text>, *pp);{'\n'}</Text>
        <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic'}}> //Converte o ponteiro genérico pp para (int *)</Text>
        <Text style={{ marginLeft: 10 }}>printf(<Text style={{ color: '#0000FF' }}>"Conteudo: %d"</Text>, *(<Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text>*)pp);{'\n'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
        <Text>{'}\n'}</Text>
    </Page>
  );
};

export default Aula07_01;
