import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula03_02 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Comando do-while - Exemplo</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>Um dos usos da estrutura <Text style={{ fontWeight: 'bold' }}>do-while</Text> é para a criação de menus, nos quais você quer garantir que o valor digitado pelo usuário seja válido.</Paragraph>
        <Paragraph style={{ marginLeft: 10 }}>Se o usuário digita um valor válido, o laço termina (o menu é exibido apenas uma vez). </Paragraph>
        <Paragraph style={{ marginLeft: 10, marginBottom: 10 }}>Caso contrário, o laço é executado novamente (o menu é exibido novamente).</Paragraph>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> i;</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>do</Text> {'{'}</Text>
        <Text style={{ marginLeft: 20 }}>printf(<Text style={{ color: '#0000FF' }}>"Escolha uma opcao:\n"</Text>);</Text>
        <Text style={{ marginLeft: 20 }}>printf(<Text style={{ color: '#0000FF' }}>"(1) Opcao 1\n"</Text>);</Text>
        <Text style={{ marginLeft: 20 }}>printf(<Text style={{ color: '#0000FF' }}>"(2) Opcao 2\n";</Text>);</Text>
        <Text style={{ marginLeft: 20 }}>scanf(<Text style={{ color: '#0000FF' }}>"%d"</Text>, &i);</Text>
        <Text style={{ marginLeft: 10 }}>{'}'}<Text style={{ color: '#000080', fontWeight: 'bold' }}> while </Text>(( i {'<'} <Text style={{ color: '#0000FF' }}>1</Text> ) || (i {'>'}  <Text style={{ color: '#0000FF' }}>2</Text>));</Text>
        <Text style={{ marginLeft: 10, marginTop: 10 }}>printf(<Text style={{ color: '#0000FF' }}>"Opcao digitada: %d"</Text>, i);</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
        <Text>{'}'}</Text>
    </Page>
  );
};

export default Aula03_02;
