import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula09_02 = () => {
  return (
    <Page nextRoute='Aula09_03'>
          <Title style={Styles.title}>Struct como parâmetro</Title>
          <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

          <Paragraph>
            Passando por parâmetro apenas um campo específico da <Text style={{ fontWeight: 'bold' }}>struct</Text>:{'\n'}
            - Valem as mesmas regras vistas até o momento.{'\n'}
            - Cada campo da <Text style={{ fontWeight: 'bold' }}>struct</Text> é como uma variável independente.{'\n'}
            - Ela pode, portanto, ser passada individualmente <Text style={{ fontWeight: 'bold' }}>por valor</Text> ou <Text style={{ fontWeight: 'bold' }}>por referência</Text>.{'\n'}
          </Paragraph>
          <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

          <Text style={{ fontWeight: 'bold' }}>Exemplo:{'\n'}</Text>
          <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>struct</Text> ponto {'{'}</Text>
          <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> x, y;</Text>
          <Text>{'};\n'}</Text>

          <Text style={{ color: '#008800', fontStyle: 'italic'}}>//passagem por valor</Text>
          <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>void</Text> incrementa_valor(<Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> n) {'{'}</Text>
          <Text style={{ marginLeft: 10 }}>n = n + <Text style={{ color: '#0000FF' }}>1</Text>;</Text>
          <Text>{'}\n'}</Text>

          <Text style={{ color: '#008800', fontStyle: 'italic'}}>//passagem por referência</Text>
          <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>void</Text> incrementa_referencia(<Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> *n) {'{'}</Text>
          <Text style={{ marginLeft: 10 }}>*n = *n + <Text style={{ color: '#0000FF' }}>1</Text>;</Text>
          <Text>{'}\n'}</Text>

          <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
          <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>struct</Text> ponto po = {'{'}<Text style={{ color: '#0000FF' }}>10</Text>,<Text style={{ color: '#0000FF' }}>20</Text>{'}'};{'\n'}</Text>
          <Text style={{ marginLeft: 10 }}>incrementa_valor(po.x);</Text>
          <Text style={{ marginLeft: 10 }}>incrementa_referencia({'&'}po.y);{'\n'}</Text>
          <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
          <Text>{'};\n'}</Text>
    </Page>
  );
};

export default Aula09_02;
