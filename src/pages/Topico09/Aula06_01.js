import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula06_01 = () => {
  return (
    <Page nextRoute='Aula06_02'>
        <Title style={Styles.title}>Incialização de arrays e matrizes</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
            Agora que você aprendeu como funcionam os 
            <Text style={{ fontWeight: 'bold' }}> arrays </Text>  
            e as 
            <Text style={{ fontWeight: 'bold' }}> matrizes</Text>,  
            vamos aprender sobre como os inicializar.
        </Paragraph>
        <Paragraph>
            Podemos fazer a inicialização estaticamente. Para isso, definimos uma lista de valores entre 
            <Text style={{ fontWeight: 'bold' }}> chaves {'{ }'}. </Text>  
            Os valores devem ser separados por 
            <Text style={{ fontWeight: 'bold' }}> vírgulas.</Text> 
        </Paragraph>

        <Paragraph style={{ marginTop: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>Importante: </Text>essa lista deve ser definida na declaração do array.
        </Paragraph>

        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text style={{ fontWeight: 'bold' }}>Exemplo:</Text>

        <Text style={{ marginTop: 10 }}>
            <Text style={{ color: '#000080', fontWeight: 'bold' }}>int </Text> 
            vetor
            [<Text style={{ color: '#0000FF' }}>4</Text>] = 
            {'{'}<Text style={{ color: '#0000FF' }}> 1, 2, 3, 4 </Text>{'}'};
        </Text>

        <Paragraph style={{ marginTop: 10 }}>
            Em 
            <Text style={{ fontWeight: 'bold' }}> matrizes </Text>
            temos “subgrupos” cercados por chaves, cada subgrupo desse representa uma linha, e cada valor, uma coluna na determinada linha de subgrupo! 
        </Paragraph>

        <Text style={{ marginTop: 10 }}>
            <Text style={{ color: '#000080', fontWeight: 'bold' }}>double </Text> 
            vetor
            [<Text style={{ color: '#0000FF' }}>3</Text>]
            [<Text style={{ color: '#0000FF' }}>3</Text>] = 
            {'{ '} 
            {'{'}<Text style={{ color: '#0000FF' }}> 0.1, 0.2,0.3 </Text>{'}'},
            {' {'}<Text style={{ color: '#0000FF' }}> 1.1, 1.2,1.3 </Text>{'}'},
            {' {'}<Text style={{ color: '#0000FF' }}> 2.1, 2.2,2.3 </Text>{'}'}
            {' }'};
        </Text>

        <Paragraph style={{ marginTop: 10 }}>
            Na linha 0 e na coluna 0 temos o valor 0.1 e assim por diante!
        </Paragraph>
    </Page>
  );
};

export default Aula06_01;
