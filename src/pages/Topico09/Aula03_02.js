import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula03_02 = () => {
  return (
    <Page nextRoute='Aula03_03'>
        <Title style={Styles.title}>Percorrer um Array</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph style={{ marginBottom: 10 }}>Mas e se o array for muito grande? Percorrê-lo manualmente é inviável!</Paragraph>
        <Paragraph>
            <Text style={{ fontWeight: 'bold' }}>Dica: </Text>
            podemos usar comandos de repetição 
            (<Text style={{ fontWeight: 'bold' }}>for, while e do-while</Text>)
            para percorrer um array.
        </Paragraph>

        <Text style={{ marginTop: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic'}}>//Array com 200 posições!</Text>
        <Text style={{ marginLeft: 10, marginBottom: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> listas[<Text style={{ color: '#0000FF' }}>200</Text>], i;</Text>
        <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic'}}>//Variável i agora irá de 0 a 199!</Text>
        <Text style={{ marginLeft: 10 }}>
          <Text style={{ color: '#000080', fontWeight: 'bold' }}>for </Text>(i = <Text style={{ color: '#0000FF' }}>0</Text>; i {'<'} <Text style={{ color: '#0000FF' }}>200</Text>; i++)
        </Text>
        <Text style={{ marginLeft: 20 }}>
            listas[<Text style={{ color: '#0000FF' }}>i</Text>] = <Text style={{ color: '#0000FF' }}>12;</Text>
            <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic'}}>  //Cada posição do array recebe 12</Text>
        </Text>
        <Text style={{ marginTop: 10, marginLeft: 10}}><Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
        <Text>{'}'}</Text>
    </Page>
  );
};

export default Aula03_02;
