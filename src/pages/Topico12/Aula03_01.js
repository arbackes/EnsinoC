import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula03_01 = () => {
  return (
      <Page nextRoute='Aula03_02'>
          <Title style={Styles.title}>Parâmetros</Title>
          <Divider style={{ marginTop: 10, marginBottom: 10 }}/>
          
          <Paragraph>
            É por meio dos parâmetros que uma função recebe informação do programa principal (ou de quem o chamou).{'\n'}
            A declaração dos parâmetros fica sempre entre parênteses <Text style={{ fontWeight: 'bold' }}>()</Text>.{'\n'}{'\n'}
            É uma lista de variáveos juntamente com seus tipos:{'\n'}
            <Text style={{ fontWeight: 'bold' }}>tipo1 nome1, tipo2 nome2, ..., tipoN nomeN</Text>{'\n'}
          </Paragraph>
          <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

          <Text style={{ fontWeight: 'bold' }}>Exemplo:{'\n'}</Text>
          <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> soma(<Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> x, <Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> y) {'{'}</Text>
          <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>return</Text> x + y;</Text>
          <Text>{'};\n'}</Text>

          <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
          <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic'}}>// chamada da função</Text>
          <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> z = soma(<Text style={{ color: '#0000FF' }}>2</Text>,<Text style={{ color: '#0000FF' }}>3</Text>);</Text>
          <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic'}}>/*aqui a função é chamada e seu valor de retorno já é impresso*/</Text>
          <Text style={{ marginLeft: 10 }}>printf(<Text style={{ color: '#0000FF' }}>"%d"</Text>, soma(<Text style={{ color: '#0000FF' }}>10</Text>,<Text style={{ color: '#0000FF' }}>15</Text>));{'\n'}</Text>
          <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
          <Text>{'};\n'}</Text>

          <Paragraph>
            <Text style={{ fontWeight: 'bold' }}>Atenção:</Text> não é preciso fazer a leitura das variáveis dos parâmetros dentro da função, eles são especificados quando a função for chamada (neste exemplo acima, são definidos na main()).
          </Paragraph>
      </Page>
  );
};

export default Aula03_01;
