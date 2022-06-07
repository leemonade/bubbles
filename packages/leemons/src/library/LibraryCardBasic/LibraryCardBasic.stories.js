import React from 'react';
import { Box, Text, Title } from '@bubbles-ui/components';
import { LibraryCardBasic } from './LibraryCardBasic';
import { LIBRARY_CARD_BASIC_DEFAULT_PROPS } from './LibraryCardBasic.constants';
import mdx from './LibraryCardBasic.mdx';
import {
  FamilyChildIcon,
  SingleActionsGraduateIcon,
  SchoolTeacherMaleIcon,
} from '@bubbles-ui/icons/outline';

export default {
  title: 'leemons/Library/LibraryCardBasic',
  parameters: {
    component: LibraryCardBasic,
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
    <Box style={{ width: 370, display: 'inline-block' }}>
      <LibraryCardBasic {...props} />
    </Box>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...LIBRARY_CARD_BASIC_DEFAULT_PROPS,
  children: (
    <Box
      style={{
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 12,
      }}
    >
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <Box style={{ display: 'flex', gap: 4, alignItems: 'center', padding: 2 }}>
          <FamilyChildIcon width={16} height={16} />
          <Text role="productive" color="primary">
            Familias:
          </Text>
          <Text role="productive" color="primary" strong>
            320
          </Text>
        </Box>
        <Box style={{ display: 'flex', gap: 4, alignItems: 'center', padding: 2 }}>
          <SingleActionsGraduateIcon width={16} height={16} />
          <Text role="productive" color="primary">
            Estudiantes:
          </Text>
          <Text role="productive" color="primary" strong>
            300
          </Text>
        </Box>
        <Box style={{ display: 'flex', gap: 4, alignItems: 'center', padding: 2 }}>
          <SchoolTeacherMaleIcon width={16} height={16} />
          <Text role="productive" color="primary">
            Docentes:
          </Text>
          <Text role="productive" color="primary" strong>
            36
          </Text>
        </Box>
      </Box>
      <Box style={{ display: 'flex' }}>
        <Box style={{ flex: 1 }}>
          <Title order={3}>4</Title>
          <Text role="productive" color="primary">
            Courses
          </Text>
        </Box>
        <Box style={{ flex: 1 }}>
          <Title order={3}>83</Title>
          <Text role="productive" color="primary">
            Asignaturas
          </Text>
        </Box>
      </Box>
    </Box>
  ),
  blur: 5,
  asset: {
    name: 'Eso',
    tagline: 'Curso 2022-2023',
    color: '#FABADA',
    fileType: 'audio',
    cover:
      'https://s3-alpha-sig.figma.com/img/eb37/89f0/596b7437979740e500e082a33e6ca9e0?Expires=1655683200&Signature=OdEKSCGmNe8Fj9RmnpdHlLd1D4tllBDuIXYGMJOTtcrVsJL0Ai3ELs0v77vb9bBMYCO-Iu3xzdyZ4rlUZVvrLpaJ36PakgJSzB7vVgRMsqS8ajhmdqQ6W04kzhLgKnGa6Rq-zNWylPrZemXFKRrQsfTvIpfN3eOJyk9-bw9BHrz7inDDq-yjd8SuOKazlixWq~Kwhjex4-qPPh2u0WIzW36OAb8I1yn8tg4vyMdOEBSU8ows6nwnMCjzo2IpRmWZxpPNbu8e-n9rnJLexnjeqNjIKLjEfm~mn3Wor1OxWUTwuFG3oMduB2uld5i8sWMnOarHkK7fbZHiInYG~k532g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
};
