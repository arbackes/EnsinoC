import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import { Topico15Image5 } from '../../../images'
import ImageZoom from '../../components/ImageZoom'
import Page from '../../components/Page'

const Aula07_02 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Alocação de Arrays</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
        <Text style={{ fontWeight: 'bold' }}>Alocação de matriz</Text>{'\n'}{'\n'}
        Para alocarmos arrays com mais de uma dimensão, utilizamos o conceito de "ponteiro para ponteiro".{'\n'}{'\n'}
        Para cada nível do ponteiro, fazemos a alocação de uma dimensão do array.{'\n'}{'\n'}
        Cada nível do ponteiro permite criar uma nova dimensão no array.{'\n'}{'\n'}
        <Text style={{ fontWeight: 'bold' }}>Atenção:</Text> é preciso liberar a memória alocada em cada uma de suas dimensões, na ordem inversa da que foi alocada.{'\n'}
        </Paragraph>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> **p; <Text style={{ color: '#008800', fontStyle: 'italic'}}>//2 "*" = 2 níveis = 2 dimensões</Text></Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> i, j, N = <Text style={{ color: '#0000FF' }}>2</Text>;{'\n'}</Text>
        <Text style={{ marginLeft: 10 }}>p = (<Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text>**) malloc(N * <Text style={{ color: '#000080', fontWeight: 'bold' }}>sizeof</Text>(<Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> *));</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>for</Text>(i = <Text style={{ color: '#0000FF' }}>0</Text>; i {'<'} N; i++) {'{'}</Text>
        <Text style={{ marginLeft: 20 }}>p[i] = (<Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> *) malloc(N * <Text style={{ color: '#000080', fontWeight: 'bold' }}>sizeof</Text>(<Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text>));</Text>
        <Text style={{ marginLeft: 20 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>for</Text>(j = <Text style={{ color: '#0000FF' }}>0</Text>; j {'<'} N; j++) {'{'}</Text>
        <Text style={{ marginLeft: 30 }}>scanf(<Text style={{ color: '#0000FF' }}>"%d"</Text>,{'&'}p[i][j]);</Text>
        <Text style={{ marginLeft: 20 }}>{'}'}</Text>
        <Text style={{ marginLeft: 10 }}>{'}\n'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>for</Text>(i = <Text style={{ color: '#0000FF' }}>0</Text>; i {'<'} N; i++) {'{'}</Text>
        <Text style={{ marginLeft: 20 }}>free(p[i]);</Text>
        <Text style={{ marginLeft: 10 }}>{'}\n'}</Text>
        <Text style={{ marginLeft: 10 }}>free(p);</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
        <Text>{'};\n'}</Text>

        <ImageZoom image={Topico15Image5} />
    </Page>
  );
};

export default Aula07_02;
