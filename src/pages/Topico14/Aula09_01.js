import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula09_01 = () => {
  return (
    <Page nextRoute='Aula09_02'>
        <Title style={Styles.title}>Ponteiro para Ponteiro</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
            É possível criar um ponteiro que aponte para outro ponteiro, criando assim vários níveis de apontamento{'\n'}
            Assim, um ponteiro poderá apontar para outro ponteiro que, por sua vez, aponta para outro ponteiro, que aponta para um terceiro ponteiro e assim por diante.{'\n'}
        </Paragraph>
        
        <Text style={{ fontWeight: 'bold' }}>Declaração de um ponteiro para um ponteiro</Text>
        <Text style={{ marginLeft: 10 }}>tipo_ponteiro **nome_ponteiro;{'\n'}</Text>

        <Text style={{ fontWeight: 'bold' }}>Acesso ao conteúdo</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ fontWeight: 'bold' }}>**nome_ponteiro</Text> é o conteúdo final da variável apontada;</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ fontWeight: 'bold' }}>*nome_ponteiro</Text> é o conteúdo do ponteiro intermediário.</Text>
    </Page>
  );
};

export default Aula09_01;
