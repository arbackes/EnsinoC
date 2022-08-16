import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula09_01 = () => {
  return (
    <Page nextRoute='Aula09_02'>
        <Title style={Styles.title}>Struct como parâmetro</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          Podemos passar uma <Text style={{ fontWeight: 'bold' }}>struct como parâmetro por valor ou por referência.{'\n'}{'\n'}</Text>

          <Text style={{ fontWeight: 'bold' }}>Além disso, podemos também:</Text>{'\n'}
          <Text style={{ fontWeight: 'bold' }}>- Passar por parâmetro toda a struct</Text>.{'\n'}
          <Text style={{ fontWeight: 'bold' }}>- Passar por parâmetro apenas um campo específico da struct</Text>.{'\n'}
        </Paragraph>
    </Page>
  );
};

export default Aula09_01;
