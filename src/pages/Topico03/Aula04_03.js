import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper';
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula04_03 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Comando scanf() - Exemplos</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
        O exemplo abaixo solicita que o usuário digite um número real qualquer. O número digitado pelo usuário é armazenado na variável <Text style={{ fontWeight: 'bold' }}>valor</Text>.{'\n'}
        </Paragraph>

        <Text>
        <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> main() {'{'}
        </Text>
        <Text style={{marginLeft: 12 }}><Text style={{ fontWeight: 'bold', color: '#000080' }}>float</Text> valor;</Text>
        <Text style={{marginLeft: 12 }}>scanf(<Text style={{ color: '#0000FF' }}>"%f"</Text>,&valor);{'\n'}</Text>
        <Text style={{ marginLeft: 12 }}>
        <Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;
        </Text>
        <Text>{'}'}</Text>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
        O exemplo abaixo mostra a execução do comando <Text style={{ fontWeight: 'bold' }}>scanf()</Text> de várias formas{'\n'}
        </Paragraph>

        <Text>
        <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> main() {'{'}
        </Text>
        <Text style={{ marginLeft: 12 }}><Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> x, z;</Text>
        <Text style={{ marginLeft: 12 }}><Text style={{ fontWeight: 'bold', color: '#000080' }}>float</Text> y;{'\n'}</Text>
        <Text style={{ marginLeft: 12, color: '#008800', fontStyle: 'italic' }}>//Leitura de um valor inteiro</Text>
        <Text style={{ marginLeft: 12 }}>scanf(<Text style={{ color: '#0000FF' }}>"%d"</Text>,&x);{'\n'}</Text>
        <Text style={{ marginLeft: 12, color: '#008800', fontStyle: 'italic' }}>//Leitura de um valor real</Text>
        <Text style={{ marginLeft: 12 }}>scanf(<Text style={{ color: '#0000FF' }}>"%f"</Text>,&y);{'\n'}</Text>
        <Text style={{ marginLeft: 12, color: '#008800', fontStyle: 'italic' }}>//Leitura de um valor inteiro e outro valor real</Text>
        <Text style={{ marginLeft: 12 }}>scanf(<Text style={{ color: '#0000FF' }}>"%d%f"</Text>,&x,&y);{'\n'}</Text>
        <Text style={{ marginLeft: 12, color: '#008800', fontStyle: 'italic' }}>//Leitura de dois valor inteiros</Text>
        <Text style={{ marginLeft: 12 }}>scanf(<Text style={{ color: '#0000FF' }}>"%d%d"</Text>,&x,&z);{'\n'}</Text>
        <Text style={{ marginLeft: 12 }}>
        <Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;
        </Text>
        <Text>{'}\n'}</Text>

        <Paragraph>
        <Text style={{ fontWeight: 'bold' }}>Observações sobre esse exemplo:</Text>
        </Paragraph>

        <Paragraph style={{ marginLeft: 12 }}>
        O <Text style={{ fontWeight: 'bold' }}>primeiro scanf()</Text> atribui o valor inteiro recebido para a variável <Text style={{ fontWeight: 'bold' }}>x</Text>.{'\n'}
        O <Text style={{ fontWeight: 'bold' }}>segundo scanf()</Text> atribui o valor real para a variável <Text style={{ fontWeight: 'bold' }}>y</Text>.{'\n'}
        O <Text style={{ fontWeight: 'bold' }}>terceiro scanf()</Text> atribui o primeiro valor, que deve ser inteiro para <Text style={{ fontWeight: 'bold' }}>x</Text> e o segundo valor, que deve ser real, para <Text style={{ fontWeight: 'bold' }}>y</Text>.{'\n'}
        O <Text style={{ fontWeight: 'bold' }}>quarto scanf()</Text> atribui o primeiro valor inteiro recebido para <Text style={{ fontWeight: 'bold' }}>x</Text> e o segundo para <Text style={{ fontWeight: 'bold' }}>y</Text>.{'\n'}
        </Paragraph>
    </Page>
  );
};

export default Aula04_03;
