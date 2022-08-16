import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula04_01 = () => {
  return (
    <Page nextRoute='Aula04_02'>
        <Title style={Styles.title}>Retorno</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>
        
        <Paragraph>
          Uma funçao pode ou não retornar um valor:{'\n'}
          se ela retornar um valor, alguém deverá receber este valor;{'\n'}
        </Paragraph>

        <Paragraph>
          Uma função que não retorna algo é definida colocando o tipo <Text style={{ fontWeight: 'bold' }}>void</Text>;{'\n'}
        </Paragraph>

        <Paragraph>
          Os tipos de retorno podem sem qualquer tipo pre-definido (<Text style={{ fontWeight: 'bold' }}>int, char,</Text>...) ou algum definido pelo usuário (<Text style={{ fontWeight: 'bold' }}>struct</Text>);{'\n'}
        </Paragraph>

        <Paragraph>
          <Text style={{ color: '#008800', fontStyle: 'italic'}}> //Usado para retornar algo para quem chamou a função</Text>{'\n'}
          <Text style={{ color: '#000080', fontWeight: 'bold' }}>return</Text> valor ou expressão;{'\n'}
        </Paragraph>

        <Paragraph>
          <Text style={{ color: '#008800', fontStyle: 'italic'}}> //Usado para terminar uma função do tipo void</Text>{'\n'}
          <Text style={{ color: '#000080', fontWeight: 'bold' }}>return</Text>;{'\n'}
        </Paragraph>

        <Paragraph>
          <Text style={{ fontWeight: 'bold' }}>Importante:</Text> o tipo do retorno deve ser compatível com o definido na declaração da função.
        </Paragraph>
    </Page>
  );
};

export default Aula04_01;
