import React from 'react'
import { Divider, Title, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula06_02 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Vamos fixar essa ideia!</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>
        
        <Text>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> main() {'{'}
        </Text>
        <Text style={{marginLeft: 12 }}>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> x = <Text style={{ color: '#0000FF' }}>2</Text>;{'\n'}
        </Text>
        <Text style={{marginLeft: 12 }}>
          <Text style={{ color: '#008800', fontStyle: 'italic'}}>// equivale a x = x + 3;</Text>{'\n'}
          x += <Text style={{ color: '#0000FF' }}>3</Text>;
        </Text>
        <Text style={{marginLeft: 12 }}>
          <Text style={{ color: '#008800', fontStyle: 'italic'}}>// equivale a x = x - 2;</Text>{'\n'}
          x -= <Text style={{ color: '#0000FF' }}>2</Text>;
        </Text>
        <Text style={{marginLeft: 12 }}>
          <Text style={{ color: '#008800', fontStyle: 'italic'}}>// equivale a x = x * 2;</Text>{'\n'}
          x *= <Text style={{ color: '#0000FF' }}>2</Text>;
        </Text>
        <Text style={{marginLeft: 12 }}>
          <Text style={{ color: '#008800', fontStyle: 'italic'}}>// equivale a x = x / 3;</Text>{'\n'}
          x /= <Text style={{ color: '#0000FF' }}>3</Text>;
        </Text>
        <Text style={{marginLeft: 12 }}>
          <Text style={{ color: '#008800', fontStyle: 'italic'}}>// equivale a x = x % 2;</Text>{'\n'}
          x %= <Text style={{ color: '#0000FF' }}>2</Text>;{'\n'}
        </Text>
        
        <Text style={{ marginLeft: 12 }}>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> 0;
        </Text>
        <Text>{'}'}</Text>
    </Page>
  );
};

export default Aula06_02;
