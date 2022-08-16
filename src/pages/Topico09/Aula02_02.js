import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula02_02 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Vamos fixar essa ideia!</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph style={{ marginBottom: 10 }}>
            Podemos utilizar uma variável <Text style={{ fontWeight: 'bold' }}> inteira </Text> para acessar os índices do array! 
        </Paragraph>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> notas[<Text style={{ color: '#0000FF' }}>5</Text>];</Text>
        <Text style={{ marginLeft: 10 }}>
            notas[<Text style={{ color: '#0000FF' }}>0</Text>] = <Text style={{ color: '#0000FF' }}>3</Text>;
        </Text>
        <Text style={{ marginLeft: 10 }}>
            notas[<Text style={{ color: '#0000FF' }}>1</Text>] = <Text style={{ color: '#0000FF' }}>7</Text>;
        </Text>
        <Text style={{ marginLeft: 10 }}>
            notas[<Text style={{ color: '#0000FF' }}>2</Text>] = <Text style={{ color: '#0000FF' }}>5</Text>;
        </Text>
        <Text style={{ marginLeft: 10 }}>
            notas[<Text style={{ color: '#0000FF' }}>3</Text>] = <Text style={{ color: '#0000FF' }}>8</Text>;
        </Text>
        <Text style={{ marginLeft: 10 }}>
            notas[<Text style={{ color: '#0000FF' }}>4</Text>] = <Text style={{ color: '#0000FF' }}>5</Text>;
        </Text>
        <Text style={{ marginLeft: 10, marginTop: 10 }}>
            <Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> i = <Text style={{ color: '#0000FF' }}>2</Text>,
            <Text></Text> j = <Text style={{ color: '#0000FF' }}>0</Text>;
        </Text>
        <Text style={{ marginTop: 10,  marginLeft: 10, color: '#008800', fontStyle: 'italic'}}>// É exibido o valor 5 na tela</Text>
        <Text style={{ marginLeft: 10 }}>printf(<Text style={{ color: '#0000FF' }}>"%d \n"</Text>, notas[i]);</Text>
        <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic'}}>// É exibido o valor 5 na tela</Text>
        <Text style={{ marginLeft: 10 }}>printf(<Text style={{ color: '#0000FF' }}>"%d \n"</Text>, notas[<Text style={{ color: '#0000FF' }}>2</Text>]);</Text>
        <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic'}}>// É exibido o valor 3 na tela</Text>
        <Text style={{ marginLeft: 10 }}>printf(<Text style={{ color: '#0000FF' }}>"%d \n"</Text>, notas[j]);</Text>
        <Text style={{ marginTop: 10, marginLeft: 10}}><Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
        <Text>{'}'}</Text>
    </Page>
  );
};

export default Aula02_02;
