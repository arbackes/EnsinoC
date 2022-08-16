import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import { Topico16Image1 } from '../../../images'
import ImageZoom from '../../components/ImageZoom'
import Page from '../../components/Page'

const Aula15_01 = () => {
  return (
    <Page nextRoute='Aula15_02'>
        <Title style={Styles.title}>Movendo-se pelo Arquivo</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
        De modo geral, o acesso a um arquivo é seqüencial. Porém, é possível fazer buscas e acessos randômicos em arquivos.{'\n'}
        Para isso, existe a função <Text style={{ fontWeight: 'bold' }}>fseek()</Text>. Seu protótipo é:{'\n'}{'\n'}
        <Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> fseek(<Text style={{ color: '#000080', fontWeight: 'bold' }}>FILE</Text> *fp, <Text style={{ color: '#000080', fontWeight: 'bold' }}>long int</Text> numbytes, <Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> origem);{'\n'}{'\n'}
        Basicamente, esta função move a posição aual no arquivo <Text style={{ fontWeight: 'bold' }}>fp</Text> em <Text style={{ fontWeight: 'bold' }}>numbytes</Text>, a partir de um ponto especificado pela <Text style={{ fontWeight: 'bold' }}>origem</Text>.
        Os valores possíveis para <Text style={{ fontWeight: 'bold' }}>origem</Text> são definidos pelas seguintes macros:{'\n'}
        </Paragraph>

        <ImageZoom image={Topico16Image1} />
    </Page>
  );
};

export default Aula15_01;
