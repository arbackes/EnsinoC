import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula01_01 = () => {
  return (
        <Page nextRoute='Aula01_02'>
            <Title style={Styles.title}>Recursividade</Title>
            <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

            <Paragraph>
            A <Text style={{ fontWeight: 'bold' }}>recursividade</Text> é uma estratégia que pode ser utilizada sempre que o cálculo de uma função para o valor n pode ser descrito a partir do cálculo desta mesma função para o valor anterior, <Text style={{ fontWeight: 'bold' }}>(n-1)</Text>.
            </Paragraph>
            
            <Paragraph>
            A ideia básica da recursão é <Text style={{ fontWeight: 'bold' }}>dividir</Text> e <Text style={{ fontWeight: 'bold' }}>conquistar</Text>:{'\n'}
            - Divide-se um problema maior em um conjunto de problemas menores.{'\n'}
            - Esses problemas menores são então resolvidos de forma independente.{'\n'}
            </Paragraph>
            
            <Paragraph>
            As soluções dos problemas menores são combinadas para gerar a solução geral.{'\n'}
            </Paragraph>
            <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

            <Paragraph>
            Um exemplo clássico de uma função que usa recursão é o cálculo do fatorial de um número:
            </Paragraph>

            <Paragraph>
            0! = 1{'\n'}
            1! = 1 * 0!{'\n'}
            2! = 2 * 1!{'\n'}
            3! = 3 * 2!{'\n'}
            4! = 4 * 3!{'\n'}
            n! = n * (n - 1)!{'\n'}
            </Paragraph>

    </Page>
  );
};

export default Aula01_01;
