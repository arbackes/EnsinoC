import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula04_01 = () => {
  return (
    <Page nextRoute='Aula03_02'>
        <Title style={Styles.title}>A função fopen()</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>
        
        <Paragraph>
          A função <Text style={{ fontWeight: 'bold' }}>fopen()</Text> serve para abrir um arquivo. Seu protótipo é:{'\n'}
          <Text style={{ color: '#000080', fontWeight: 'bold' }}>FILE</Text> *fopen(<Text style={{ color: '#000080', fontWeight: 'bold' }}>char</Text> *nome,<Text style={{ color: '#000080', fontWeight: 'bold' }}>char</Text> *modo);{'\n'}
        </Paragraph>

        <Paragraph>
          Ela recebe dois parâmetros de entrada:{'\n'}
            - uma string contendo o nome do arquivo (<Text style={{ fontWeight: 'bold' }}>nome</Text>){'\n'}
            - uma string contendo o modo de abertura do arquivo (<Text style={{ fontWeight: 'bold' }}>modo</Text>){'\n'}
        </Paragraph>

        <Paragraph>
          E retorna{'\n'}
            - o ponteiro para o arquivo aberto{'\n'}
            - <Text style={{ fontWeight: 'bold' }}>NULL</Text> em caso de erro{'\n'}
        </Paragraph>
    </Page>
  );
};

export default Aula04_01;
