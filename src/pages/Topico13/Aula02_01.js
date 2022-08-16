import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula02_01 = () => {
  return (
    <Page nextRoute='Aula02_02'>
        <Title style={Styles.title}>Recursão em Funções</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
        Na linguagem C, uma <Text style={{ fontWeight: 'bold' }}></Text>função pode chamar outra <Text style={{ fontWeight: 'bold' }}>função</Text>.{'\n'}
        A função <Text style={{ fontWeight: 'bold' }}>main()</Text> pode chamar qualquer função, sendo ela da biblioteca da linguagem ou definida pelo programador.{'\n'}
        </Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>
        
        <Paragraph>
        Uma <Text style={{ fontWeight: 'bold' }}>função recursiva</Text> é uma função que chama a si própria.{'\n\n'}
        A recursão também é chamada de definição circular e ocorre quando algo é definido em termos de si mesmo.{'\n'}
        Em geral, formulações recursivas de algoritmos são consideradas "mais enxutas" ou "mais elegantes" que as formulações iterativas.{'\n'}
        Os mesmos princípios de{'\n'}
        - <Text style={{ fontWeight: 'bold' }}>caso-base</Text>{'\n'}
        - <Text style={{ fontWeight: 'bold' }}>caminho de ida da recursão</Text>{'\n'}
        - <Text style={{ fontWeight: 'bold' }}>caminho de volta da recursão</Text>{'\n'}
        presentes no exemplo matemático da recusão, estão também presentes na recursão de uma função computacional.
        </Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
        <Text style={{ fontWeight: 'bold' }}>Desvantagens:</Text>{'\n'}
        Porém, algoritmos recursivos tendem a necessitar de mais espaço do que algoritmos iterativos.{'\n'}
        Um algorítimo recursivo também pode demandar mais tempo para ser processado.
        </Paragraph>

    </Page>
  );
};

export default Aula02_01;
