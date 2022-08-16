import React from 'react'
import { Divider, Title, Text, Paragraph, Subheading } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula03_01 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Precedência dos operadores</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          Cuidado com a ordem das operações aritméticas!{'\n'}
          Operações de multiplicação, divisão e resto são executadas antes das operações de adição e subtração.{'\n'}{'\n'}
          Mas como executamos uma operação antes das demais?{'\n'}
          Colocamos as operações entre parênteses!{'\n'}
        </Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Subheading>Exemplo:</Subheading>
        
        <Text>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> main() {'{'}
        </Text>
        <Text style={{marginLeft: 12 }}>
          <Text style={{ color: '#008800', fontStyle: 'italic'}}>// x * y e depois é somado 10 ao resultado.</Text>{'\n'}
          z = x * y + <Text style={{ color: '#0000FF' }}>10</Text>;
        </Text>
        <Text style={{marginLeft: 12 }}>
          <Text style={{ color: '#008800', fontStyle: 'italic'}}>// y + 10 e depois multiplica-se x ao resultado.</Text>{'\n'}
          z = x * (y + <Text style={{ color: '#0000FF' }}>10</Text>);
        </Text>
        <Text style={{marginLeft: 12 }}>
          <Text style={{ color: '#008800', fontStyle: 'italic'}}>// x + y, o resultado é multiplicado por 2 e depois dividido por 4.</Text>{'\n'}
          z = ((x + y) * <Text style={{ color: '#0000FF' }}>2</Text>) / <Text style={{ color: '#0000FF' }}>4</Text>;{'\n'}
        </Text>
        <Text style={{ marginLeft: 12 }}>
            <Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> 0;
          </Text>
          <Text>{'}'}</Text>
    </Page>
  );
};

export default Aula03_01;
