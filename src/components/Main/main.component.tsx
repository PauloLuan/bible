import {
  Button,
  Container,
  Heading,
  Spacer,
  Stack,
  Text
} from '@chakra-ui/react'
import { useCopyToClipboard } from 'react-use'

export interface MainProps {
  testId?: string
}

const Main = ({ testId }: MainProps) => {
  const [_, copyToClipboard] = useCopyToClipboard()

  return (
    <>
      <Container>
        <Stack>
          <Heading size="3xl">O começo</Heading>
          <Spacer />
          <Text fontSize="xl" fontWeight="light">
            1 No princípio Deus criou os céus e a terra.
            <Button onClick={() => copyToClipboard('mindingo')} ml={2}>
              Copiar
            </Button>
          </Text>
          <Text fontSize="xl" fontWeight="light">
            2 Era a terra sem forma e vazia; trevas co­briam a face do abismo, e
            o Espírito de Deus se movia sobre a face das águas.
          </Text>
          <Text fontSize="xl" fontWeight="light">
            3 Disse Deus: "Haja luz", e houve luz.
          </Text>
          <Text fontSize="xl" fontWeight="light">
            4 Deus viu que a luz era boa, e separou a luz das trevas.
          </Text>
          <Text fontSize="xl" fontWeight="light">
            5 Deus chamou à luz dia, e às trevas cha­mou noite. Passaram-se a
            tarde ­e a manhã; esse foi o primeiro dia.
          </Text>
          <Text fontSize="xl" fontWeight="light">
            6 Depois disse Deus: "Haja entre as águas um firmamento que separe
            águas de águas".
          </Text>
          <Text fontSize="xl" fontWeight="light">
            7 En­tão Deus fez o firmamento e separou as águas que ficaram abaixo
            do firmamento das que ficaram por cima. E assim foi.
          </Text>
          <Text fontSize="xl" fontWeight="light">
            8 Ao firma­mento, Deus chamou céu. Passaram-se a tarde e a manhã;
            esse foi o segundo dia.
          </Text>
          <Text fontSize="xl" fontWeight="light">
            9 E disse Deus: "Ajuntem-se num só lugar as águas que estão debaixo
            do céu, e apareça a parte seca". E assim foi.
          </Text>
          <Text fontSize="xl" fontWeight="light">
            10 À parte seca De­us chamou terra, e cha­mou mares ao conjunto das
            águas. E Deus viu que ficou bom.
          </Text>
          <Text fontSize="xl" fontWeight="light">
            11 Então disse Deus: "Cubra-se a terra de vegetação: plantas que
            deem sementes e árvores cujos frutos produzam sementes de acor­do
            com as suas espé­cies". E assim foi.
          </Text>
          <Text fontSize="xl" fontWeight="light">
            12 A terra fez bro­tar a vegetação: plantas que dão sementes de
            acordo com as suas espé­cies, e árvores cujos frutos produzem
            sementes de acordo com as suas espécies. E Deus viu que ficou bom.
          </Text>
          <Text fontSize="xl" fontWeight="light">
            13 Passaram-se­ a tarde e a manhã; esse foi o ter­ceiro dia.
          </Text>
          <Text fontSize="xl" fontWeight="light">
            14 Disse Deus: "Haja luminares no firma­mento do céu para separar o
            dia da noite. Sir­vam eles de sinais para marcar estações, dias e
            anos,
          </Text>
          <Text fontSize="xl" fontWeight="light">
            15 e sirvam de lu­minares no firmamento do céu para ilu­minar a
            terra". E assim foi.
          </Text>
          <Text fontSize="xl" fontWeight="light">
            16 Deus fez os dois gran­des lumi­nares: o maior para go­vernar o
            dia e o menor para gover­nar a noite; fez também as estrelas.
          </Text>
          <Text fontSize="xl" fontWeight="light">
            17 Deus os colo­cou no firmamento do céu para iluminar a terra,
          </Text>
          <Text fontSize="xl" fontWeight="light">
            18 governa­r o dia e a noite, e separar a luz das tre­vas. E Deus
            viu que ficou bom.
          </Text>
          <Text fontSize="xl" fontWeight="light">
            19 Passaram-se a tarde e a manhã; esse foi o quarto dia.
          </Text>
          <Text fontSize="xl" fontWeight="light">
            20 Disse também Deus: "Encham-se as águas de seres vivos, e voem as
            aves sobre a terra, sob o firmamento do céu".
          </Text>
          <Text fontSize="xl" fontWeight="light">
            21 Assim Deus criou os gran­des animais aquáti­cos e os demais seres
            vivos que povoam as á­guas, de acor­do com as suas espécies; e todas
            as aves, de acordo com as suas espécies. E Deus viu que ficou bom.
          </Text>
          <Text fontSize="xl" fontWeight="light">
            22 En­tão De­us os abençoou, dizendo: "Sejam férteis e
            multipliquem-se! Encham as águas dos mares! E multipli­quem-se as
            aves na terra".
          </Text>
          <Text fontSize="xl" fontWeight="light">
            23 Passaram-se a tarde e a manhã; esse foi o quinto dia.
          </Text>
          <Text fontSize="xl" fontWeight="light">
            24 E disse Deus: "Produza a terra seres vivos de acordo com as suas
            espécies: rebanhos domésticos, ani­mais selvagens e os demais seres
            vivos da terra, cada um de acor­do com a sua espécie". E assim foi.
          </Text>
          <Text fontSize="xl" fontWeight="light">
            25 Deus fez os animais sel­vagens de acordo com as suas espé­cies,
            os reba­nhos domésticos de acor­do com as suas espécies, e os demais
            seres vivos da terra de acordo com as suas espécies. E Deus viu que
            ficou bom.
          </Text>
          <Text fontSize="xl" fontWeight="light">
            26 Então disse Deus: "Façamos o homem à nossa imagem, con­for­me a
            nossa semelhança. Domine ele sobre os peixes do mar, sobre as aves
            do céu, sobre os grandes animais de toda a terra e sobre todos os
            pequenos animais ­que se movem rente ao chão".
          </Text>
          <Text fontSize="xl" fontWeight="light">
            27 Criou Deus o homem à sua imagem, à imagem de Deus o criou; homem
            e mulher os criou.
          </Text>
          <Text fontSize="xl" fontWeight="light">
            28 Deus os abençoou e lhes disse: "Sejam férteis e multipliquem-se!
            Encham e subjuguem a terra! Dominem sobre os peixes do mar, sobre as
            aves do céu e sobre todos os animais que se movem pela terra".
          </Text>
          <Text fontSize="xl" fontWeight="light">
            29 Disse Deus: "Eis que dou a vocês todas as plantas que nascem em
            toda a terra e produzem sementes, e todas as árvores que dão frutos
            com se­mentes. Elas servirão de alimento para vocês.
          </Text>
          <Text fontSize="xl" fontWeight="light">
            30 E dou todos os vegetais como alimento a tudo o que tem em si
            fôlego de vida: a todos os gran­des animais da terra­, a todas as
            aves do céu e a todas as criaturas que ­se movem rente ao chão". E
            assim foi.
          </Text>
          <Text fontSize="xl" fontWeight="light">
            31 E Deus viu tudo o que havia feito, e tudo havia ficado muito bom.
            Passaram-se a tarde e a ma­nhã; esse foi o sexto dia.
          </Text>
        </Stack>
      </Container>
    </>
  )
}

export { Main }
