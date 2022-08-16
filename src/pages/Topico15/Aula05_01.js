import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula05_01 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>A função calloc()</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>
        
        <Paragraph>
        A função <Text style={{ fontWeight: 'bold' }}>calloc()</Text> também serve para alocar memória.{'\n'}
        Dado a quantidade de posições que queremos alocar, <Text style={{ fontWeight: 'bold' }}>num</Text>, e o número de bytes cada posição, <Text style={{ fontWeight: 'bold' }}>tamanho</Text>, ela aloca na memória e retorna um ponteiro void* para o primeiro byte alocado.{'\n'}{'\n'}
        Seu protótipo é:{'\n'}{'\n'}
        <Text style={{ color: '#000080', fontWeight: 'bold' }}>void</Text>* calloc(<Text style={{ color: '#000080', fontWeight: 'bold' }}>unsigned int</Text> num, <Text style={{ color: '#000080', fontWeight: 'bold' }}>unsigned int</Text> tamanho);{'\n'}{'\n'}
        O ponteiro <Text style={{ fontWeight: 'bold' }}>void*</Text> pode ser atribuído a qualquer tipo de ponteiro via <Text style={{ fontWeight: 'bold' }}>type cast</Text>.{'\n'}
        Se não houver memória suficiente para alocar a memória requisitada a função malloc() retorna um ponteiro <Text style={{ fontWeight: 'bold' }}>NULL</Text>.
        </Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text style={{ fontWeight: 'bold' }}>Exemplo:{'\n'}</Text>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> *p;</Text>
        <Text style={{ marginLeft: 10 }}>p = calloc(<Text style={{ color: '#0000FF' }}>50</Text> * <Text style={{ color: '#000080', fontWeight: 'bold' }}>sizeof</Text>(<Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text>));</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>if</Text>(p == NULL) {'{'}</Text>
        <Text style={{ marginLeft: 20 }}>printf(<Text style={{ color: '#0000FF' }}>"Erro: memoria insuficiente!\n"</Text>);</Text>
        <Text style={{ marginLeft: 20 }}>exit(<Text style={{ color: '#0000FF' }}>1</Text>);</Text>
        <Text style={{ marginLeft: 10 }}>{'}'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> i;</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>for</Text>(i=<Text style={{ color: '#0000FF' }}>0</Text>; i{'<'}<Text style={{ color: '#0000FF' }}>50</Text>; i++) {'{'}</Text>
        <Text style={{ marginLeft: 20 }}>printf(<Text style={{ color: '#0000FF' }}>"Digite o valor da posicao %d:\n"</Text>,i);</Text>
        <Text style={{ marginLeft: 20 }}>scanf(<Text style={{ color: '#0000FF' }}>"%d"</Text>,{'&'}p[i]);</Text>
        <Text style={{ marginLeft: 10 }}>{'}'}</Text>
        <Text style={{ marginLeft: 10 }}>free(p);</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
        <Text>{'};\n'}</Text>
    </Page>
  );
};

export default Aula05_01;
