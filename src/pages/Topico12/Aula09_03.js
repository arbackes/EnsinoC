import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula09_03 = () => {
  return (
    <Page nextRoute='Menu'>
          <Title style={Styles.title}>Struct como parâmetro</Title>
          <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

          <Paragraph>
            Passar por parâmetro toda a <Text style={{ fontWeight: 'bold' }}>struct:</Text>{'\n'}
          </Paragraph>

          <Paragraph>
            <Text style={{ fontWeight: 'bold' }}>Passagem por valor</Text>{'\n'}
            - Valem as mesmas regras vistas até o momento.{'\n'}
            - A <Text style={{ fontWeight: 'bold' }}>struct</Text>  é tratada com uma variável qualquer e seu valor é copiado para dentro da função.{'\n'}
          </Paragraph>

          <Paragraph>
            <Text style={{ fontWeight: 'bold' }}>Passagem por referência</Text>{'\n'}
            - Valem as regras de uso do asterisco “*” e operador de endereço “{'&'}”.{'\n'}
            - Devemos acessar o conteúdo da <Text style={{ fontWeight: 'bold' }}>struct</Text> para somente depois acessar os seus campos e modificá-los.{'\n'}
            - Uma alternativa é usar o operador <Text style={{ fontWeight: 'bold' }}>seta “-{'>'}”</Text>.
          </Paragraph>
          <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

          <Text style={{ fontWeight: 'bold' }}>Exemplo:{'\n'}</Text>
          <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>struct</Text> ponto {'{'}</Text>
          <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> x, y;</Text>
          <Text>{'};\n'}</Text>

          <Text style={{ color: '#008800', fontStyle: 'italic'}}>//passagem por valor</Text>
          <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>void</Text> imprime_por_valor(<Text style={{ color: '#000080', fontWeight: 'bold' }}>struct</Text> ponto p) {'{'}</Text>
          <Text style={{ marginLeft: 10 }}>printf(<Text style={{ color: '#0000FF' }}>"%d %d\n"</Text>, p.x, p.y);</Text>
          <Text>{'}\n'}</Text>

          <Text style={{ color: '#008800', fontStyle: 'italic'}}>//passagem por referência</Text>
          <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>void</Text> atribui_por_referencia(<Text style={{ color: '#000080', fontWeight: 'bold' }}>struct</Text> ponto *p) {'{'}</Text>
          <Text style={{ marginLeft: 10 }}>(*p).x = <Text style={{ color: '#0000FF' }}>10</Text>;</Text>
          <Text style={{ marginLeft: 10 }}>(*p).y = <Text style={{ color: '#0000FF' }}>20</Text>;</Text>
          <Text>{'}\n'}</Text>

          <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>void</Text> atribui_por_referencia_seta(<Text style={{ color: '#000080', fontWeight: 'bold' }}>struct</Text> ponto *p) {'{'}</Text>
          <Text style={{ marginLeft: 10 }}>p-{'>'}x = <Text style={{ color: '#0000FF' }}>10</Text>;</Text>
          <Text style={{ marginLeft: 10 }}>p-{'>'}y = <Text style={{ color: '#0000FF' }}>20</Text>;</Text>
          <Text>{'}\n'}</Text>

          <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
          <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>struct</Text> ponto po = {'{'}<Text style={{ color: '#0000FF' }}>10</Text>,<Text style={{ color: '#0000FF' }}>20</Text>{'}'};{'\n'}</Text>
          <Text style={{ marginLeft: 10 }}>imprime_por_valor(po);</Text>
          <Text style={{ marginLeft: 10 }}>atribui_por_referencia({'&'}po);</Text>
          <Text style={{ marginLeft: 10 }}>atribui_por_referencia_seta({'&'}po);{'\n'}</Text>
          <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
          <Text>{'};\n'}</Text>
    </Page>
  );
};

export default Aula09_03;
