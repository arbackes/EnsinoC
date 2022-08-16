import React from 'react'
import { Divider, Title, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula04_02 = () => {
  return (
    <Page nextRoute='Aula04_03'>
        <Title style={Styles.title}>Exemplo</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>
        
        <Text style={{ color: '#008800', fontStyle: 'italic'}}>//Função que retorna a soma de dois inteiros</Text>
        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> soma(<Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> x, <Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> y) {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>return</Text> x + y;</Text>
        <Text>{'};\n'}</Text>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic'}}>// a função soma é chamada e seu valor é atribuido a variável z</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> z = soma(<Text style={{ color: '#0000FF' }}>2</Text>,<Text style={{ color: '#0000FF' }}>3</Text>);</Text>
        <Text style={{ marginLeft: 10 }}>printf(<Text style={{ color: '#0000FF' }}>"%d"</Text>, z);{'\n'}</Text>
        <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic'}}>// aqui a função soma é chamada e já impressa</Text>
        <Text style={{ marginLeft: 10 }}>printf(<Text style={{ color: '#0000FF' }}>"%d"</Text>, soma(<Text style={{ color: '#0000FF' }}>5</Text>,<Text style={{ color: '#0000FF' }}>5</Text>));{'\n'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
        <Text>{'};\n'}</Text>
    </Page>
  );
};

export default Aula04_02;
