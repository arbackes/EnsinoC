import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula04_03 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Atribuição entre Ponteiros</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
        <Text style={{ fontWeight: 'bold' }}>Exemplo</Text>{'\n'}
        Nesse exemplo um endereço de uma variável do tipo <Text style={{ fontWeight: 'bold' }}>float</Text> é atribuído a um ponteiro de inteiro <Text style={{ fontWeight: 'bold' }}>(int*)</Text>.{'\n'}
        </Paragraph>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> *p, *p1, x = <Text style={{ color: '#0000FF' }}>10</Text>;</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>float</Text> y = <Text style={{ color: '#0000FF' }}>20.0</Text>;</Text>
        <Text style={{ marginLeft: 10 }}>p = {'&x'};</Text>
        <Text style={{ marginLeft: 10 }}>printf(<Text style={{ color: '#0000FF' }}>"Conteudo apontado p: %d"</Text>), {'*p)'};</Text>
        <Text style={{ marginLeft: 10 }}>p1 = p;</Text>
        <Text style={{ marginLeft: 10 }}>printf(<Text style={{ color: '#0000FF' }}>"Conteudo apontado p1: %d"</Text>), {'*p1)'};</Text>
        <Text style={{ marginLeft: 10 }}>p = {'&y'};</Text>
        <Text style={{ marginLeft: 10 }}>printf(<Text style={{ color: '#0000FF' }}>"Conteudo apontado p: %d"</Text>), {'*p)'};</Text>
        <Text style={{ marginLeft: 10 }}>printf(<Text style={{ color: '#0000FF' }}>"Conteudo apontado p: %f"</Text>), {'*p)'};</Text>
        <Text style={{ marginLeft: 10 }}>printf(<Text style={{ color: '#0000FF' }}>"Conteudo p: %f"</Text>), *((<Text style={{ color: '#000080', fontWeight: 'bold' }}>float</Text>*)p){')'};</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
        <Text>{'}\n'}</Text>

        <Paragraph>
            <Text style={{ fontWeight: 'bold' }}>Saída:</Text>{'\n'}
            <Text style={{ marginLeft: 10 }}>
                Conteudo apontado p: 10{'\n'}
                Conteudo apontado p1: 10{'\n'}
                Conteudo apontado p: 11010048000{'\n'}
                Conteudo apontado p: 0.000000{'\n'}
                Conteudo p: 20.000000{'\n'}{'\n'}
            </Text>
            Só conseguimos acessar o conteúdo quando utilizamos o operador de <Text style={{ fontWeight: 'bold' }}>typecast</Text> sobre o ponteiro antes de acessar seu conteúdo.
        </Paragraph>

    </Page>
  );
};

export default Aula04_03;
