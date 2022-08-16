import React from 'react'
import { Divider, Title, Paragraph, Text, Subheading } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula05_01 = () => {
  return (
    <Page nextRoute='Aula05_02'>
        <Title style={Styles.title}>Comando switch</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph style={{marginBottom: 10 }}>
            O comando 
            <Text style={{ fontWeight: 'bold' }}> switch </Text> 
            é usado para testar uma variável 
            (<Text style={{ fontWeight: 'bold' }}>int </Text>  ou <Text style={{ fontWeight: 'bold' }}> char</Text>) 
            em relação a vários valores pré-estabelecidos. 
            utilizado para atribuições condicionais
        </Paragraph>

        <Paragraph>
            Como resultado, ele executa a sequência de comandos do comando 
            <Text style={{ fontWeight: 'bold' }}> case </Text> 
            que possui valor igual ao da variável testada.
        </Paragraph>

        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Subheading style={{ marginBottom: 10 }}><Text style={{ fontWeight: 'bold' }}>Forma geral:</Text></Subheading>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>switch</Text>(variavel){'{'}</Text>
        <Text style={{ marginLeft: 20 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>case</Text> valor1:</Text>
        <Text style={{ marginLeft: 30 }}>sequencia de comandos;</Text>
        <Text style={{ marginLeft: 30, color: '#000080', fontWeight: 'bold' }}>break;</Text>
        <Text style={{ marginLeft: 20 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>case</Text> valor2:</Text>
        <Text style={{ marginLeft: 30 }}>sequencia de comandos;</Text>
        <Text style={{ marginLeft: 30, color: '#000080', fontWeight: 'bold' }}>break;</Text>
        <Text style={{ marginLeft: 20 }}>default:</Text>
        <Text style={{ marginLeft: 30 }}>sequencia de comandos padrao;</Text>
        <Text style={{ marginLeft: 10 }}>{'}'}</Text>
        <Text style={{ marginLeft: 10, marginTop: 10 }}><Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> 0;</Text>
        <Text>{'}'}</Text>

        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>O comando <Text style={{ fontWeight: 'bold' }}>default</Text> é executado se a variável testada não for igual a nenhum dos valores dos <Text style={{ fontWeight: 'bold' }}>case</Text>.</Paragraph>
        <Paragraph>O comando <Text style={{ fontWeight: 'bold' }}>break</Text> interrompe o <Text style={{ fontWeight: 'bold' }}>switch</Text> assim que a sequência de comandos é executada.</Paragraph>
    </Page>
  );
};

export default Aula05_01;
