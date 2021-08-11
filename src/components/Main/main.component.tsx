import { CopyIcon } from '@chakra-ui/icons'
import { Container, Heading, Spacer, Stack, Text } from '@chakra-ui/react'
// import data from '@assets/biblia/json/min'
import { BibleChapter } from '@types/Bible'
import { useCopyToClipboard } from 'react-use'

export interface MainProps {
  testId?: string
}

const data = [
  {
    abbrev: 'gn',
    chapters: [
      [
        'No princípio criou Deus os céus e a terra.',
        'A terra era sem forma e vazia; e havia trevas sobre a face do abismo, mas o Espírito de Deus pairava sobre a face das águas.',
        'Disse Deus: haja luz. E houve luz.',
        'Viu Deus que a luz era boa; e fez separação entre a luz e as trevas.',
        'E Deus chamou à luz dia, e às trevas noite. E foi a tarde e a manhã, o dia primeiro.',
        'E disse Deus: haja um firmamento no meio das águas, e haja separação entre águas e águas.',
        'Fez, pois, Deus o firmamento, e separou as águas que estavam debaixo do firmamento das que estavam por cima do firmamento. E assim foi.',
        'Chamou Deus ao firmamento céu. E foi a tarde e a manhã, o dia segundo.',
        'E disse Deus: Ajuntem-se num só lugar as águas que estão debaixo do céu, e apareça o elemento seco. E assim foi.',
        'Chamou Deus ao elemento seco terra, e ao ajuntamento das águas mares. E viu Deus que isso era bom.',
        'E disse Deus: Produza a terra relva, ervas que dêem semente, e árvores frutíferas que, segundo as suas espécies, dêem fruto que tenha em si a sua semente, sobre a terra. E assim foi.',
        'A terra, pois, produziu relva, ervas que davam semente segundo as suas espécies, e árvores que davam fruto que tinha em si a sua semente, segundo as suas espécies. E viu Deus que isso era bom.',
        'E foi a tarde e a manhã, o dia terceiro.',
        'E disse Deus: haja luminares no firmamento do céu, para fazerem separação entre o dia e a noite; sejam eles para sinais e para estações, e para dias e anos;',
        'e sirvam de luminares no firmamento do céu, para alumiar a terra. E assim foi.',
        'Deus, pois, fez os dois grandes luminares: o luminar maior para governar o dia, e o luminar menor para governar a noite; fez também as estrelas.',
        'E Deus os pôs no firmamento do céu para alumiar a terra,',
        'para governar o dia e a noite, e para fazer separação entre a luz e as trevas. E viu Deus que isso era bom.',
        'E foi a tarde e a manhã, o dia quarto.',
        'E disse Deus: Produzam as águas cardumes de seres viventes; e voem as aves acima da terra no firmamento do céu.',
        'Criou, pois, Deus os monstros marinhos, e todos os seres viventes que se arrastavam, os quais as águas produziram abundantemente segundo as suas espécies; e toda ave que voa, segundo a sua espécie. E viu Deus que isso era bom.',
        'Então Deus os abençoou, dizendo: Frutificai e multiplicai-vos, e enchei as águas dos mares; e multipliquem-se as aves sobre a terra.',
        'E foi a tarde e a manhã, o dia quinto.',
        'E disse Deus: Produza a terra seres viventes segundo as suas espécies: animais domésticos, répteis, e animais selvagens segundo as suas espécies. E assim foi.',
        'Deus, pois, fez os animais selvagens segundo as suas espécies, e os animais domésticos segundo as suas espécies, e todos os répteis da terra segundo as suas espécies. E viu Deus que isso era bom.',
        'E disse Deus: Façamos o homem à nossa imagem, conforme a nossa semelhança; domine ele sobre os peixes do mar, sobre as aves do céu, sobre os animais domésticos, e sobre toda a terra, e sobre todo réptil que se arrasta sobre a terra.',
        'Criou, pois, Deus o homem à sua imagem; à imagem de Deus o criou; homem e mulher os criou.',
        'Então Deus os abençoou e lhes disse: Frutificai e multiplicai-vos; enchei a terra e sujeitai-a; dominai sobre os peixes do mar, sobre as aves do céu e sobre todos os animais que se arrastam sobre a terra.',
        'Disse-lhes mais: Eis que vos tenho dado todas as ervas que produzem semente, as quais se acham sobre a face de toda a terra, bem como todas as árvores em que há fruto que dê semente; ser-vos-ão para mantimento.',
        'E a todos os animais da terra, a todas as aves do céu e a todo ser vivente que se arrasta sobre a terra, tenho dado todas as ervas verdes como mantimento. E assim foi.',
        'E viu Deus tudo quanto fizera, e eis que era muito bom. E foi a tarde e a manhã, o dia sexto.'
      ]
    ],
    name: 'Gênesis'
  }
]

interface VerseProps {
  text: string
  index: number
}

const Verse = ({ text, index }: VerseProps) => {
  const [_, copyToClipboard] = useCopyToClipboard()

  return (
    <Text fontSize="xl" fontWeight="light">
      <Text as="i" fontSize="xs">
        {index} {'  -  '}
      </Text>
      {text}
      <CopyIcon
        onClick={() => copyToClipboard(text)}
        w={4}
        h={4}
        ml={2}
        cursor="pointer"
      />
    </Text>
  )
}

interface ChapterProps {
  chapters: string[][]
  name: string
}

const Chapters = ({ chapters, name }: ChapterProps) => {
  return (
    <>
      <Heading size="3xl" pb={5}>
        {name}
      </Heading>

      {chapters.map((chapter) =>
        chapter.map((verse, index) => (
          <Verse key={index} text={verse} index={index} />
        ))
      )}
    </>
  )
}

const Main = ({ testId }: MainProps) => {
  return (
    <>
      <Container>
        <Stack>
          <Spacer />

          {data.map(({ chapters, name }: BibleChapter, index: number) => (
            <Chapters key={index} name={name} chapters={chapters} />
          ))}
        </Stack>
      </Container>
    </>
  )
}

export { Main }
