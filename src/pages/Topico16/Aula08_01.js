import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula08_01 = () => {
  return (
    <Page nextRoute='Aula08_02'>
        <Title style={Styles.title}>Fim do Arquivo</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          A constante <Text style={{ fontWeight: 'bold' }}>EOF (End Of File)</Text> indica o fim de um arquivo.{'\n'}
          Ela está definida na biblioteca <Text style={{ fontWeight: 'bold' }}>stdio.h</Text>.{'\n'}
          Ela é usada como retorno de várias funções, como a fgetc().{'\n'}
        </Paragraph>

        <Text style={{ fontWeight: 'bold' }}>Exemplo:{'\n'}</Text>
        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>char</Text> c;</Text>
        <Text>ch = fgetc(fp);</Text>
        <Text>if(c == EOF){'{'}</Text>
        <Text style={{ marginLeft: 10 }}>printf(<Text style={{ color: '#0000FF' }}>"fim do arquivo\n"</Text>);</Text>
        <Text>{'}'}</Text>

    </Page>
  );
};

export default Aula08_01;
