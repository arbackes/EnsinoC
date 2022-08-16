import React from 'react'
import { Divider, Title, Text, Paragraph, Subheading } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula01_01 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Comando de atribuição</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
        O operador "=" (atribuição) armazena o valor (ou resultado de uma expressão) contida à sua direita na variável especificada à sua esquerda!{'\n'}
        </Paragraph>
        <Paragraph style={{ fontWeight: 'bold' }}>
        <Subheading>Forma geral:</Subheading>{'\n'}
        variável = valor ou expressão;
        </Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Subheading>Exemplo 1:{'\n'}</Subheading>
        <Text>
        <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> main() {'{'}
        </Text>
        <Text style={{marginLeft: 12 }}>
        <Text style={{ color: '#008800', fontStyle: 'italic'}}>//O valor 6 é armazenado na variável x!</Text>{'\n'}
        <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> x = <Text style={{ color: '#0000FF' }}>6</Text>;{'\n'}
        </Text>
        <Text style={{marginLeft: 12 }}>
        <Text style={{ color: '#008800', fontStyle: 'italic'}}>//y receberá 6 + 2!</Text>{'\n'}
        <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> y = x + <Text style={{ color: '#0000FF' }}>2</Text>;{'\n'}
        </Text>
        <Text style={{marginLeft: 12 }}>
        <Text style={{ fontWeight: 'bold', color: '#000080' }}>float</Text> valor = <Text style={{ color: '#0000FF' }}>36.6</Text>;{'\n'}
        </Text>
        <Text style={{marginLeft: 12 }}>
        <Text style={{ color: '#008800', fontStyle: 'italic'}}>//Caracteres são atribuidos entre aspas simples!</Text>{'\n'}
        <Text style={{ fontWeight: 'bold', color: '#000080' }}>char</Text> letra = <Text style={{ color: '#800080' }}>'a'</Text>;{'\n'}
        </Text>
        <Text style={{marginLeft: 12 }}>
        <Text style={{ color: '#008800', fontStyle: 'italic'}}>//Lembre-se: A linguagem C suporta múltiplas atribuições!</Text>{'\n'}
        x = y = <Text style={{ color: '#0000FF' }}>0</Text>;{'\n'}
        </Text>
        <Text style={{ marginLeft: 12 }}>
        <Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> 0;
        </Text>
        <Text>{'}'}</Text>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Subheading>Exemplo 2:{'\n'}</Subheading>
        <Text>Podemos atribuir um valor para uma variável no momento ou após sua declaração:{'\n'}</Text>
        <Text>
        <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> main() {'{'}
        </Text>
        <Text style={{marginLeft: 12 }}>
        <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> x;
        </Text>
        <Text style={{marginLeft: 12 }}>
        x = <Text style={{ color: '#0000FF' }}>10</Text>;{'\n'}
        </Text>
        <Text style={{marginLeft: 12 }}>
        <Text style={{ fontWeight: 'bold', color: '#000080' }}>float</Text> valor = <Text style={{ color: '#0000FF' }}>36.6</Text>;{'\n'}
        </Text>
        <Text style={{ marginLeft: 12 }}>
        <Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> 0;
        </Text>
        <Text>{'}'}</Text>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Subheading>Exemplo 3:{'\n'}</Subheading>
        <Text>Cuidado com atribuições entre tipos diferentes!</Text>
        <Text>Erros e alterações no funcionamento do programa poderão decorrer de atribuições entre tipos diferentes!{'\n'}</Text>
        <Text>
        <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> main() {'{'}
        </Text>
        <Text style={{marginLeft: 12 }}>
        <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> x = <Text style={{ color: '#0000FF' }}>6.5</Text>;
        </Text>
        <Text style={{marginLeft: 12 }}>
        <Text style={{ color: '#008800', fontStyle: 'italic'}}>// Nesse caso, como x é um inteiro, ele não poderá armazenar um valor float.</Text>{'\n'}
        <Text style={{ color: '#008800', fontStyle: 'italic'}}>// Assim, o que será armazenado em x é apenas o valor inteiro, que nesse caso é 6.</Text>{'\n'}
        </Text>
        <Text style={{ marginLeft: 12 }}>
        <Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> 0;
        </Text>
        <Text>{'}'}</Text>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>
    </Page>
  );
};

export default Aula01_01;
