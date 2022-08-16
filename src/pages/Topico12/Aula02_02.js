import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula02_02 = () => {
  return (
    <Page nextRoute='Aula02_03'>
        <Title style={Styles.title}>Corpo da Função</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>
        
        <Paragraph>
          O <Text style={{ fontWeight: 'bold' }}>corpo da função</Text> é formado pelos comandos que a função deve executar, como na função <Text style={{ fontWeight: 'bold' }}>main()</Text>.{'\n'}
          Ele processa os parâmetros (se houver) e realiza outras tarefas e gera saídas (se necessário).{'\n'}
        </Paragraph>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft:10, color: '#008800', fontStyle: 'italic'}}>//conjunto de declarações e comandos</Text>
        <Text style={{ marginLeft:10, color: '#008800', fontStyle: 'italic'}}>//qualquer comando pode ser usado aqui{'\n'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
        <Text>{'}\n'}</Text>

    </Page>
  );
};

export default Aula02_02;
