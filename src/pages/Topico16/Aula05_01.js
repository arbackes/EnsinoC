import React from 'react'
import { Divider, Title, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula05_01 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Posição do Arquivo</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>
        
        <Paragraph>
          Ao se trabalhar com arquivos, existe uma espécie de posição onde estamos dentro do arquivo.{'\n'}
          É nessa posição onde será lido ou escrito o próximo caractere.{'\n'}
          Quando utilizando o acesso seqüencial, raramente é necessário modificar essa posição.{'\n'}
          Isso por que, quando lemos um caractere, a posição no arquivo é automaticamente atualizada.{'\n'}
          Leitura e escrita em arquivos são parecidos com escrever em uma máquina de escrever.{'\n'}
        </Paragraph>
    </Page>
  );
};

export default Aula05_01;
