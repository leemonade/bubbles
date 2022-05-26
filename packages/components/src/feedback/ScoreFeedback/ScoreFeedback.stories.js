import React from 'react';
import { Box, ContextContainer, Stack } from '../../layout';
import { Paragraph, Text, Title } from '../../typography';
import { ScoreFeedback } from './ScoreFeedback';
import { SCORE_FEEDBACK_DEFAULT_PROPS } from './ScoreFeedback.constants';
import mdx from './ScoreFeedback.mdx';

export default {
  title: 'Molecules/Feedback/ScoreFeedback',
  parameters: {
    component: ScoreFeedback,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {},
};

const Template = ({ ...props }) => {
  return (
    <Stack
      direction="column"
      spacing={5}
      sx={(theme) => ({ background: theme.colors.ui02, padding: theme.spacing[9] })}
    >
      <ScoreFeedback {...props}>
        <Stack
          fullWidth
          fullHeight
          direction="column"
          justifyContent="center"
          style={{
            padding: 24,
          }}
        >
          <Text size="md" role="productive" strong>
            Test
          </Text>
          <Title order={3}>[BME 697]Independent Study</Title>
        </Stack>
      </ScoreFeedback>

      <ScoreFeedback {...props}>
        <Box
          style={{
            padding: 24,
          }}
        >
          <Text size="md" role="productive" stronger>
            Comentarios
          </Text>
          <ContextContainer>
            <Paragraph size="md" color="primary">
              ¡Enhorabuena! Has hecho un gran trabajo con el video de explicación de tu cuadro.
              Demuestras un conocimiento excelente no solo sobre la obra sino también sobre su
              contextos histórico, me gusta como la has enmarcado en el estilo pictórico del
              movimiento al que pertenece el artista así como la enumeración que haces de las
              características del movimiento y su relación son el momento en que fue creada.
            </Paragraph>
            <Paragraph size="md" color="primary">
              Una recomendación para subir nota en la siguiente ocasión: prepara el discurso y hazlo
              tuyo, utilizando tus propias palabras, en tu grabación se percibe como hay partes del
              discurso que lees y ello hace que pierdas el ritmo.
            </Paragraph>
            <Paragraph size="md" color="primary">
              Sigue así.
            </Paragraph>
          </ContextContainer>
        </Box>
      </ScoreFeedback>
    </Stack>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...SCORE_FEEDBACK_DEFAULT_PROPS,
  calification: {
    minimumGrade: 5,
    grade: 5.2,
    label: 'SB',
  },
};
