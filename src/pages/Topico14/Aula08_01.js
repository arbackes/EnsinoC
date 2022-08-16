import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import { Topico14Image5 } from '../../../images'
import ImageZoom from '../../components/ImageZoom'
import Page from '../../components/Page'

const Aula08_01 = () => {
  return (
    <Page nextRoute='Aula08_02'>
        <Title style={Styles.title}>Ponteiros e Arrays</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
            <Text style={{ fontWeight: 'bold' }}>Ponteiros e arrays possuem uma ligação muito forte.</Text>{'\n'}{'\n'}
            Arrays são agrupamentos de dados do mesmo tipo na memória.{'\n'}
            Quando declaramos um array, informamos ao computador para reservar uma certa quantidade de memória a fim de armazenar os elementos do array de forma sequencial.{'\n'}
            Como resultado dessa operação, o computador nos devolve um ponteiro que aponta para o começo dessa sequência de bytes na memória.{'\n'}
            O nome do array (sem índice) é apenas um ponteiro que aponta para o primeiro elemento do array.
        </Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>
        
        <Text style={{ fontWeight: 'bold' }}>Exemplo</Text>
        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> vet[<Text style={{ color: '#0000FF' }}>5</Text>] = {'{'}<Text style={{ color: '#0000FF' }}>10</Text>, <Text style={{ color: '#0000FF' }}>20</Text>, <Text style={{ color: '#0000FF' }}>30</Text>, <Text style={{ color: '#0000FF' }}>40</Text>, <Text style={{ color: '#0000FF' }}>50</Text>;{'}\n'}</Text>
        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> *p;{'\n'}</Text>
        <Text>p = vet;</Text>

        <ImageZoom image={Topico14Image5} />
    </Page>
  );
};

export default Aula08_01;
