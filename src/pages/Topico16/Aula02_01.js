import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula02_01 = () => {
  return (
    <Page nextRoute='Aula02_02'>
        <Title style={Styles.title}>Ponteiro para Arquivo</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>
        
        <Paragraph>
          A linguagem C usa um tipo especial de ponteiro para manipular arquivos.{'\n'}
          Todas as funções de manipulação de arquivos trabalham com esse pontero.{'\n'}
          Podemos declarar um ponteiro para arquivo da seguinte maneira:{'\n'}
          FILE *p;{'\n'}
        </Paragraph>
    </Page>
  );
};

export default Aula02_01;
