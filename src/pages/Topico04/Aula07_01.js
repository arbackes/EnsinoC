import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula07_01 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Casting</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          <Text style={{ fontWeight: 'bold' }}>Casts</Text> ou modeladores servem para forçar que os resultados de expressões sejam de um tipo especificado.{'\n'}
        </Paragraph>
        
        <Text>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> main() {'{'}
        </Text>
        <Text style={{marginLeft: 12 }}>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>float</Text> x, y, z = <Text style={{ color: '#0000FF' }}>25.5</Text>;{'\n'}
        </Text>
        <Text style={{marginLeft: 12 }}>
          <Text style={{ color: '#008800', fontStyle: 'italic'}}>// x = 2.55000</Text>{'\n'}
          x = z / <Text style={{ color: '#0000FF' }}>10.0</Text>;{'\n'}
        </Text>
        <Text style={{marginLeft: 12 }}>
          <Text style={{ color: '#008800', fontStyle: 'italic'}}>// y = 2.0000</Text>{'\n'}
          y = (<Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text>) (z / <Text style={{ color: '#0000FF' }}>10.0</Text>);{'\n'}
        </Text>
        
        <Text style={{ marginLeft: 12 }}>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> 0;
        </Text>
        <Text>{'}'}</Text>
    </Page>
  );
};

export default Aula07_01;
