import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula01_03 = () => {
  return (
    <Page nextRoute='Aula01_04'>
        <Title style={Styles.title}>Tipos de Arquivos</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>
        
        <Paragraph>
          <Text style={{ fontWeight: 'bold' }}>Arquivo Texto</Text>{'\n'}
          Os dados são gravados exatamente como seriam impressos na tela.{'\n'} 
          Os dados são gravados como caracteres de 8 bits utilizando a tabela ASCII.{'\n'}
          Podem ser modificados por um editor de texto simples como o Bloco de Notas.{'\n'}
          Acesso mais lento aos dados{'\n'}
        </Paragraph>

        <Paragraph>
          <Text style={{ fontWeight: 'bold' }}>Arquivo Binário</Text>{'\n'}
          Os dados são gravados exatamente como estão organizados na memória do computador{'\n'} 
          Não existe uma etapa de "conversão" dos dados.{'\n'}
          Suas operações de escrita e leitura são mais rápidas do que as em arquivos texto.{'\n'}
        </Paragraph>

    </Page>
  );
};

export default Aula01_03;
