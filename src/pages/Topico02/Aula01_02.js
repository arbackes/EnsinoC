import React from 'react'
import { Divider, Title, Subheading, Text, Paragraph } from 'react-native-paper';
import Styles from '../../styles/styles'
import Page from '../../components/Page';

const Aula01_02 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Tipos Básicos</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Subheading>Char</Subheading>
        <Paragraph>
            <Text>Um byte que armazena o código de um <Text style={{fontWeight: 'bold'}}>caractere</Text> do conjunto de caracteres local.</Text>
            <Text>Sempre ficam entre <Text style={{fontWeight: 'bold'}}>‘aspas simples’</Text>.</Text>
        </Paragraph>
        <Paragraph>
            <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>char</Text> UnidadeTemperatura = <Text style={{ color: '#800080' }}>'F';</Text></Text>
            <Text style={{ color: '#008800', fontStyle: 'italic' }}>{'\n'}//pode receber ‘C’ para Celsius ou ‘F’ para Fahrenheit</Text>
        </Paragraph>
        <Paragraph>
            <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>char</Text> opcoes;</Text>
            <Text style={{ color: '#008800', fontStyle: 'italic' }}>{'\n'}// pode ser ‘1’, ‘2’, ‘3’</Text>
        </Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Subheading>Int</Subheading>
        <Text>Armazena um número <Text style={{fontWeight: "bold"}}>inteiro</Text> cujo tamanho depende do processador. Tipicamente de 16 ou 32 bits.</Text>
        <Paragraph>
            <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> NumeroAlunos;</Text>
            <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>{'\n'}int</Text> Idade;</Text>
            <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>{'\n'}int</Text> N = <Text style={{ color: '#800080' }}>10</Text>;</Text>
        </Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Subheading>Float</Subheading>
        <Text>Armazena um número <Text style={{fontWeight: "bold"}}>real</Text> com <Text style={{fontWeight: "bold"}}>precisão simples</Text>.</Text>
        <Paragraph>
            <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>float</Text> Temperatura = <Text style={{ color: '#800080' }}>23.30</Text>;</Text>
            <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>{'\n'}float</Text> MediaNotas = <Text style={{ color: '#800080' }}>7.98</Text>;</Text>
            <Text>{'\n'}Obs: a parte decimal usa <Text style={{ fontWeight: 'bold' }}>ponto</Text> e não vírgula!</Text>
        </Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Subheading>Double</Subheading>
        <Text>Armazena um número <Text style={{fontWeight: "bold"}}>real</Text> com <Text style={{fontWeight: "bold"}}>precisão dupla</Text>.</Text>
        <Paragraph>
            <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>double</Text> DistanciaGalaxias;<Text style={{ color: '#008800', fontStyle: 'italic' }}>//número muito grande</Text></Text>
            <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>{'\n'}double</Text> MassaMolecular = <Text style={{ color: '#800080' }}>0.000098</Text>;</Text>
            <Text>{'\n'}Obs: a parte decimal usa <Text style={{ fontWeight: 'bold' }}>ponto</Text> e não vírgula!</Text>
        </Paragraph>
    </Page>
  );
};

export default Aula01_02;
