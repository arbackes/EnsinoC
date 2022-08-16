import React from 'react';
import {Title, Text, Paragraph} from 'react-native-paper';
import Page from '../../components/Page';
import Styles from '../../styles/styles';

const Aula02_01 = () => {
  return (
    <Page nextRoute="Aula02_02">
      <Title style={Styles.title}>Comentário</Title>

      <Paragraph>
        É um trecho de texto incluído dentro do programa para descrever algo.
        Por exemplo, o que uma função implementada faz no programa.
      </Paragraph>
      <Paragraph>
        Comentários não modificam o funcionamento do programa pois são ignorados
        pelo compilador.
      </Paragraph>
      <Paragraph>
        Um comentário pode ser adicionado em qualquer parte do código.
      </Paragraph>
      <Paragraph>
        A linguagem C permite comentários por linha ou por bloco:
      </Paragraph>

      <Text style={{marginLeft: 10, marginBottom: 8}}>
        Para <Text style={{fontWeight: 'bold'}}>comentar uma linha</Text> basta
        adicionar <Text style={{fontWeight: 'bold'}}>//</Text> na frente da
        linha
      </Text>
      <Text style={{marginLeft: 10, marginBottom: 15}}>
        Para <Text style={{fontWeight: 'bold'}}>comentar</Text> um bloco basta
        adicionar <Text style={{fontWeight: 'bold'}}>/*</Text> no início do
        comentário e <Text style={{fontWeight: 'bold'}}>*/</Text> no final do
        comentário.
      </Text>
    </Page>
  );
};

export default Aula02_01;
