import React from 'react'
import { Divider, Title, Paragraph, Text, Subheading } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula06_02 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Inicialização de Estruturas</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          Também podemos inicializar todos os campos da <Text style={{ fontWeight: 'bold' }}>estrutura</Text> na declaração da variável usando o operador <Text style={{ fontWeight: 'bold' }}>chaves {'{ }'}</Text>:{'\n'}
          - Definimos uma lista de valores separados por <Text style={{ fontWeight: 'bold' }}>vírgula</Text> dentro das <Text style={{ fontWeight: 'bold' }}>chaves {'{ }'}</Text>{'\n'}
          - Os valores devem ser definidos na mesma ordem que os <Text style={{ fontWeight: 'bold' }}>campos</Text>{'\n'}
          - Essa lista é atribuida a variável da estrutura{'\n'}
        </Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Subheading>Exemplo:</Subheading>
        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>struct</Text> Ponto {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> x, y;</Text>
        <Text>{'};\n'}</Text>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>struct</Text> Ponto p = {'{'} <Text style={{ color: '#0000FF' }}>10</Text>, <Text style={{ color: '#0000FF' }}>4</Text>, <Text style={{ color: '#0000FF' }}>8</Text>{'}'};</Text>
        <Text style={{ color: '#008800', fontStyle: 'italic'}}>//Equivale a p.x = 10; p.y = 4; p.z = 8;{'\n'}</Text>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>Já na inicialização de uma <Text style={{ fontWeight: 'bold' }}>estrutura</Text> de <Text style={{ fontWeight: 'bold' }}>estruturas</Text> temos:</Paragraph>
        
        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>struct</Text> Ponto {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> x, y;</Text>
        <Text>{'};\n'}</Text>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>struct</Text> Retangulo {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>struct</Text> ponto inicio, fim;</Text>
        <Text>{'};\n'}</Text>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>struct</Text> Retangulo r = {'{{'}<Text style={{ color: '#0000FF' }}>10,20</Text>{'},{'},<Text style={{ color: '#0000FF' }}>30,40</Text>{'}}'};</Text>

    </Page>
  );
};

export default Aula06_02;
