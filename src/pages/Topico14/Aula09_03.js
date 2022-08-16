import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula09_03 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Ponteiro para Ponteiro</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
            A quantidade de asteriscos (*) na declaração do ponteiro indica o número de níveis de apontamento que ele possui.{'\n'}
        </Paragraph>

        <Text style={{ color: '#008800', fontStyle: 'italic'}}> // variável inteira</Text>
        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> x;{'\n'}</Text>
        <Text style={{ color: '#008800', fontStyle: 'italic'}}> // ponteiro para inteiro (1 nível)</Text>
        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> *p1;{'\n'}</Text>
        <Text style={{ color: '#008800', fontStyle: 'italic'}}> // ponteiro para ponteiro para inteiro (2 níveis)</Text>
        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> **p2;{'\n'}</Text>
        <Text style={{ color: '#008800', fontStyle: 'italic'}}> // ponteiro para ponteiro para ponteiro para inteiro (3 níveis)</Text>
        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> ***p3;</Text>
    </Page>
  );
};

export default Aula09_03;
