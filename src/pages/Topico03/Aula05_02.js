import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper';
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula04_03 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Sequências de Escape - Exemplo</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> main() {'{'}
        </Text>
        <Text style={{ marginLeft: 12 }}>printf(<Text style={{ color: '#0000FF' }}>"Hello world!"</Text>);{'\n'}</Text>
        <Text style={{ marginLeft: 12 }}>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;
        </Text>
        <Text>{'}\n'}</Text>

        <Paragraph>
          A saída desse código será:{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Hello World!</Text>
        </Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> main() {'{'}
        </Text>
        <Text style={{ marginLeft: 12 }}>printf(<Text style={{ color: '#0000FF' }}>"\"Hello world!\""</Text>);{'\n'}</Text>
        <Text style={{ marginLeft: 12 }}>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;
        </Text>
        <Text>{'}\n'}</Text>

        <Paragraph>
          A saída desse código será:{'\n'}
          <Text style={{ fontWeight: 'bold' }}>"Hello World!"</Text>
        </Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> main() {'{'}
        </Text>
        <Text style={{ marginLeft: 12 }}>printf(<Text style={{ color: '#0000FF' }}>"Hello \n world!"</Text>);{'\n'}</Text>
        <Text style={{ marginLeft: 12 }}>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;
        </Text>
        <Text>{'}\n'}</Text>

        <Paragraph>
          <Text style={{ fontWeight: 'bold' }}>Hello{'\n'}World!</Text>{'\n'}
        </Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>
    </Page>
  );
};

export default Aula04_03;
