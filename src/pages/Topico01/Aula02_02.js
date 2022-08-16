import React from 'react';
import {Title, Text, Paragraph} from 'react-native-paper';
import Page from '../../components/Page';
import Styles from '../../styles/styles';

const Aula02_02 = () => {
  return (
    <Page nextRoute="Menu">
      <Title style={Styles.title}>Comentário</Title>
      <Paragraph style={{marginBottom: 10}}>
        No código abaixo podemos ver os dois tipos de comentário em verde:
      </Paragraph>
      <Text>
        <Text style={{fontWeight: 'bold', color: '#000080'}}>int</Text> main(){' '}
        {'{'}
      </Text>
      <Text style={{marginLeft: 12, color: '#008800', fontStyle: 'italic'}}>
        /*A função printf() imprime o que o programador deseja na tela*/
      </Text>
      <Text style={{marginLeft: 12}}>
        printf(<Text style={{color: '#0000FF'}}>"Hello world!\n"</Text>);
      </Text>
      <Text
        style={{
          marginLeft: 12,
          marginTop: 10,
          color: '#008800',
          fontStyle: 'italic',
        }}>
        //faz uma pausa no programa
      </Text>
      <Text style={{marginLeft: 12}}>
        system(<Text style={{color: '#0000FF'}}>"pause"</Text>);
      </Text>
      <Text style={{marginLeft: 12}}>
        <Text style={{fontWeight: 'bold', color: '#000080'}}>return</Text> 0;
      </Text>
      <Text>{'}'}</Text>
      <Paragraph style={{marginTop: 15}}>
        O uso de comentários é uma boa prática de programação. Ele auxilia o
        programador na documentação interna do programa. Ele também facilita
        futuras manutenções no código por outros programadores.
      </Paragraph>
    </Page>
  );
};

export default Aula02_02;
