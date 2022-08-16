import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula06_02 = () => {
  return (
    <Page nextRoute='Aula06_03'>
        <Title style={Styles.title}>A função realloc()</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
        Um ponteiro para o bloco é devolvido porque a função realloc() pode precisar mover o bloco para aumentar seu tamanho.{'\n'}{'\n'}
        <Text style={{ color: '#000080', fontWeight: 'bold' }}>void</Text>* realloc(<Text style={{ color: '#000080', fontWeight: 'bold' }}>void</Text> *ptr, <Text style={{ color: '#000080', fontWeight: 'bold' }}>unsigned int</Text> num);{'\n'}{'\n'}
        Se isso ocorrer, o conteúdo do bloco antigo é copiado para o novo bloco, e nenhuma informação é perdida.{'\n'}
        </Paragraph>

        <Text style={{ fontWeight: 'bold' }}>Exemplo:{'\n'}</Text>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> i;</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> *p = malloc(<Text style={{ color: '#0000FF' }}>5</Text> * <Text style={{ color: '#000080', fontWeight: 'bold' }}>sizeof</Text>(<Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text>));</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>for</Text>(i = <Text style={{ color: '#0000FF' }}>0</Text>; i {'<'} <Text style={{ color: '#0000FF' }}>5</Text>; i++) {'{'}</Text>
        <Text style={{ marginLeft: 20 }}>p[i] = i +<Text style={{ color: '#0000FF' }}>1</Text>;</Text>
        <Text style={{ marginLeft: 10 }}>{'}\n'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>for</Text>(i = <Text style={{ color: '#0000FF' }}>0</Text>; i {'<'} <Text style={{ color: '#0000FF' }}>5</Text>; i++) {'{'}</Text>
        <Text style={{ marginLeft: 20 }}>printf(<Text style={{ color: '#0000FF' }}>"%d\n"</Text>,p[i]);</Text>
        <Text style={{ marginLeft: 10 }}>{'}\n'}</Text>
        <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic'}}>//Diminui o tamanho do array</Text>
        <Text style={{ marginLeft: 10 }}>p = realloc(p, <Text style={{ color: '#0000FF' }}>3</Text> * <Text style={{ color: '#000080', fontWeight: 'bold' }}>sizeof</Text>(<Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text>));</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>for</Text>(i = <Text style={{ color: '#0000FF' }}>0</Text>; i {'<'} <Text style={{ color: '#0000FF' }}>3</Text>; i++) {'{'}</Text>
        <Text style={{ marginLeft: 20 }}>printf(<Text style={{ color: '#0000FF' }}>"%d\n"</Text>,p[i]);</Text>
        <Text style={{ marginLeft: 10 }}>{'}\n'}</Text>
        <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic'}}>//Aumenta o tamanho do array</Text>
        <Text style={{ marginLeft: 10 }}>p = realloc(p, <Text style={{ color: '#0000FF' }}>10</Text> * <Text style={{ color: '#000080', fontWeight: 'bold' }}>sizeof</Text>(<Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text>));</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>for</Text>(i = <Text style={{ color: '#0000FF' }}>0</Text>; i {'<'} <Text style={{ color: '#0000FF' }}>10</Text>; i++) {'{'}</Text>
        <Text style={{ marginLeft: 20 }}>printf(<Text style={{ color: '#0000FF' }}>"%d\n"</Text>,p[i]);</Text>
        <Text style={{ marginLeft: 10 }}>{'}\n'}</Text>
        <Text style={{ marginLeft: 10 }}>free(p);</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
        <Text>{'};\n'}</Text>
    </Page>
  );
};

export default Aula06_02;
