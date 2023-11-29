import { useFormContext } from 'react-hook-form';
import { StarIcon } from '@bubbles-ui/icons/solid';
import { Stack } from '../Stack';
import { Text, Title } from '../../typography';
import { Button } from '../../form';
import { Box } from '../Box';
import { TOTAL_LAYOUT_HEADER_PROP_TYPES } from './TotalLayout.constants';

const TotalLayoutHeader = ({ title, icon, formTitlePlaceholder, children, compact = true }) => {
  const { watch } = useFormContext();
  const formValues = watch();
  const containerStyle = {
    padding: '16px 24px',
  };
  if (!children) containerStyle.height = '72px';

  return (
    <Stack fullWidth fullHeight style={containerStyle} direction="column">
      <Stack fullWidth justifyContent="space-between">
        <Stack spacing={2}>
          <Stack style={{ width: '32px' }} fullHeight justifyContent="center">
            <Box style={{ fontSize: '1.4rem', padding: '2px' }}>{icon}</Box>
          </Stack>
          <Stack
            spacing={compact ? 2 : 0}
            justifyContent="center"
            alingItems="center"
            direction={compact ? 'row' : 'column'}
          >
            <Text strong as="h2" style={{ fontSize: '18px' }}>
              {compact ? `${title}:` : title}
            </Text>
            <Text as="h2" style={{ fontSize: '18px' }}>
              {formValues.title || formTitlePlaceholder}
            </Text>
          </Stack>
        </Stack>
        <Stack alingItems="center">
          <Button variant="link" type="button" leftIcon={<StarIcon />}>
            Cancelar
          </Button>
        </Stack>
      </Stack>
      {/* {children} */}
    </Stack>
  );
};

TotalLayoutHeader.propTypes = TOTAL_LAYOUT_HEADER_PROP_TYPES;

export { TotalLayoutHeader };
