import React from 'react'
import { Topico13Image1 } from '../../../images'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import ImageZoom from '../../components/ImageZoom'
import Page from '../../components/Page'

const Aula01_02 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Recursividade</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
        O cálculo do fatorial prossegue até chegarmos ao fatorial de 0, nosso <Text style={{ fontWeight: 'bold' }}>caso-base</Text>, que é igual a 1.
        </Paragraph>

        <ImageZoom image={Topico13Image1} />
        
        <Paragraph>
        A primeira etapa do cálculo é o <Text style={{ fontWeight: 'bold' }}>caminho de ida da recursão</Text>.{'\n'}
        - É onde as chamadas da função são executadas até chegar ao <Text style={{ fontWeight: 'bold' }}>caso-base</Text>.{'\n'}
        </Paragraph>
        
        <Paragraph>
        Quando a recursão para, é chegado o momento de fazer o <Text style={{ fontWeight: 'bold' }}>caminho de volta da recursão</Text>.{'\n'}
        - Consite em fazer o caminho inverso devolvendo o valor obtido para quem fez aquela chamada de função.{'\n'}
        </Paragraph>

        <Paragraph>
        <Text style={{ fontWeight: 'bold' }}>Obs:</Text> O <Text style={{ fontWeight: 'bold' }}>caso-base</Text> é quando a função para de chamar a si mesma!
        </Paragraph>

    </Page>
  );
};

export default Aula01_02;
