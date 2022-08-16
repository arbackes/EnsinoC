import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula14_01 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Apagando um Arquivo</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
        Além de permitir manipular arquivos, a linguagem C também permite apagá-lo do disco.{'\n'}
        Isso pode ser feito utilizando a função <Text style={{ fontWeight: 'bold' }}>remove()</Text>. Seu protótipo é:{'\n'}{'\n'}
        <Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> remove(<Text style={{ color: '#000080', fontWeight: 'bold' }}>char</Text> *nome_do_arquivo);{'\n'}{'\n'}
        Diferente das funções vistas até aqui, esta função recebe o caminho e nome do arquivo a ser excluído, e não um ponteiro para o tipo FILE.{'\n'}
        Como retorno temos um valor inteiro, o qual será igual a 0 se o arquivo for excluído com sucesso.
        </Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>
        <Text style={{ fontWeight: 'bold' }}>Exemplo:{'\n'}</Text>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> status;</Text>
        <Text style={{ marginLeft: 10 }}>status = remove(<Text style={{ color: '#0000FF' }}>"ArqGrav.txt"</Text>);</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>if</Text>(status != 0) {'{'}</Text>
        <Text style={{ marginLeft: 20 }}>printf(<Text style={{ color: '#0000FF' }}>"Erro na remocao do arquivo.\n"</Text>);</Text>
        <Text style={{ marginLeft: 20 }}>exit(<Text style={{ color: '#0000FF' }}>1</Text>);</Text>
        <Text style={{ marginLeft: 10 }}>{'}'} else {'{'}</Text>
        <Text style={{ marginLeft: 20 }}>printf(<Text style={{ color: '#0000FF' }}>"Arquivo removido com sucesso.\n"</Text>);</Text>
        <Text style={{ marginLeft: 10 }}>{'}\n'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
        <Text>{'};\n'}</Text>
    </Page>
  );
};

export default Aula14_01;
