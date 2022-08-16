import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula04_01 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>A função free()</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>
        
        <Paragraph>
        Diferente das variáveis definidas durante a escrita do programa, as variáveis alocadas dinamicamente não são liberadas automaticamente pelo programa.{'\n'}
        Quando alocamos memória dinamicamente é necessário que nós a liberemos quando ela não for mais necessária.{'\n'}
        Para isto existe a função <Text style={{ fontWeight: 'bold' }}>free()</Text> cujo protótipo é:{'\n'}{'\n'}
        <Text style={{ color: '#000080', fontWeight: 'bold' }}>void</Text> free(<Text style={{ color: '#000080', fontWeight: 'bold' }}>void</Text> *p);{'\n'}{'\n'}
        Assim, para liberar a memória, basta passar como parâmetro para a função <Text style={{ fontWeight: 'bold' }}>free()</Text> o ponteiro que aponta para o início da memória a ser desalocada.
        </Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text style={{ fontWeight: 'bold' }}>Exemplo:{'\n'}</Text>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> *p;</Text>
        <Text style={{ marginLeft: 10 }}>p = malloc(<Text style={{ color: '#0000FF' }}>50</Text> * <Text style={{ color: '#000080', fontWeight: 'bold' }}>sizeof</Text>(<Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text>));</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>if</Text>(p == NULL) {'{'}</Text>
        <Text style={{ marginLeft: 20 }}>printf(<Text style={{ color: '#0000FF' }}>"Erro: memoria insuficiente!\n"</Text>);</Text>
        <Text style={{ marginLeft: 20 }}>exit(<Text style={{ color: '#0000FF' }}>1</Text>);</Text>
        <Text style={{ marginLeft: 10 }}>{'}'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> i;</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>for</Text>(i=<Text style={{ color: '#0000FF' }}>0</Text>; i{'<'}<Text style={{ color: '#0000FF' }}>50</Text>; i++) {'{'}</Text>
        <Text style={{ marginLeft: 20 }}>printf(<Text style={{ color: '#0000FF' }}>"Digite o valor da posicao %d:\n"</Text>,i);</Text>
        <Text style={{ marginLeft: 20 }}>scanf(<Text style={{ color: '#0000FF' }}>"%d"</Text>,{'&'}p[i]);</Text>
        <Text style={{ marginLeft: 10 }}>{'}'}</Text>
        <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic'}}>//Libera a memória alocada</Text>
        <Text style={{ marginLeft: 10 }}>free(p);</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
        <Text>{'};\n'}</Text>
    </Page>
  );
};

export default Aula04_01;
