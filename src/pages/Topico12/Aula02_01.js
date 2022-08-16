import React from 'react'
import { Topico12Image1 } from '../../../images'
import { Divider, Title, Paragraph, Text, Subheading } from 'react-native-paper'
import Styles from '../../styles/styles'
import ImageZoom from '../../components/ImageZoom'
import Page from '../../components/Page'

const Aula02_01 = () => {
  return (
    <Page nextRoute='Aula02_02'>
        <Title style={Styles.title}>Funções</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Subheading>Forma geral de uma função:</Subheading>
        
        <ImageZoom image={Topico12Image1} />

        <Paragraph>
        -<Text style={{ fontWeight: 'bold' }}>Corpo da função</Text>:  é formado pelos comandos que a função deve executar.{'\n'}
        -<Text style={{ fontWeight: 'bold' }}>Parâmetros</Text>: é uma lista de variáveis juntamente com seus tipos (passado entre os parênteses).{'\n'}
        -<Text style={{ fontWeight: 'bold' }}>Retorno</Text>: é o valor retornado pela função, dado pelo comando <Text style={{ fontWeight: 'bold' }}>return</Text> (se houver).{'\n'}
        </Paragraph>
        
        <Paragraph>
        Vamos aprender detalhamente cada um destes...
        </Paragraph>

    </Page>
  );
};

export default Aula02_01;
