import React from 'react'
import { Divider, Title, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula05_03 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Vamos fixar essa ideia!</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> main() {'{'}
        </Text>
        <Text style={{marginLeft: 12 }}>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> a, b;{'\n'}
          a = <Text style={{ color: '#0000FF' }}>10</Text>;{'\n'}
          b = a++;{'\n'}
        </Text>
        <Text style={{marginLeft: 12 }}>
          <Text style={{ color: '#008800', fontStyle: 'italic'}}>//O valor imprimido será 11</Text>{'\n'}
          printf(<Text style={{ color: '#0000FF' }}>"Valor de a = %d"</Text>, a);{'\n'}{'\n'}

          <Text style={{ color: '#008800', fontStyle: 'italic'}}>//O valor imprimido será 10</Text>{'\n'}
          printf(<Text style={{ color: '#0000FF' }}>"Valor de b = %d"</Text>, b);{'\n'}{'\n'}
          
          b = ++a;{'\n'}{'\n'}

          <Text style={{ color: '#008800', fontStyle: 'italic'}}>//O valor imprimido será 12</Text>{'\n'}
          printf(<Text style={{ color: '#0000FF' }}>"Valor de a = %d"</Text>, a);{'\n'}{'\n'}

          <Text style={{ color: '#008800', fontStyle: 'italic'}}>//O valor imprimido será 12</Text>{'\n'}
          printf(<Text style={{ color: '#0000FF' }}>"Valor de b = %d"</Text>, b);{'\n'}{'\n'}
        </Text>
        <Text style={{ marginLeft: 12 }}>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> 0;
        </Text>
        <Text>{'}'}</Text>
    </Page>
  );
};

export default Aula05_03;
