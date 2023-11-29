import { useFormContext } from 'react-hook-form';
import { StarIcon } from '@bubbles-ui/icons/solid';
import { Stack } from '../../Stack';
import { Text } from '../../../typography';
import { Button } from '../../../form';
import { Box } from '../../Box';
import { TOTAL_LAYOUT_HEADER_PROP_TYPES } from '../TotalLayout.constants';

const TotalLayoutHeader = ({ title, icon, formTitlePlaceholder, children, compact = false }) => {
  const { watch } = useFormContext();
  const formValues = watch();

  // Set styles
  const containerStyle = {
    padding: `${!children ? '16px' : '12px'} 24px`,
    height: '72px',
  };
  if (!children) containerStyle.maxHeight = '72px';
  else containerStyle.minHeight = '120px';

  const formTitleTextStyle = {
    fontSize: '18px',
  };
  if (!compact) formTitleTextStyle.marginLeft = '32px';

  return (
    <Stack id="total-layout-header" fullWidth fullHeight style={containerStyle} direction="column">
      <Stack fullWidth justifyContent="space-between" style={{ height: '40px' }}>
        {/* ICON & LABELS */}
        <Stack spacing={1} alignItems="center">
          <Stack
            spacing={compact ? 2 : 0}
            justifyContent="center"
            alignItems={compact ? 'center' : 'start'}
            direction={compact ? 'row' : 'column'}
          >
            <Stack alignItems="center">
              <Box
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.4rem',
                  width: '32px',
                  height: '32px',
                  textAlign: 'center',
                }}
              >
                {icon}
              </Box>
              <Text as="h2" style={{ fontSize: '18px' }} color="primary" strong>
                {compact ? `${title}:` : title}
              </Text>
            </Stack>
            <Text as="h2" style={formTitleTextStyle} color="primary">
              {formValues.title || formTitlePlaceholder}
            </Text>
          </Stack>
        </Stack>
        {/* CANCEL BUTTON */}
        <Stack alingItems="center">
          <Button variant="link" type="button" leftIcon={<StarIcon />}>
            Cancelar
          </Button>
        </Stack>
      </Stack>

      {/* CHILDREN */}
      {children && <Stack style={{ height: '40px', marginTop: '12px' }}>{children}</Stack>}
    </Stack>
  );
};

TotalLayoutHeader.propTypes = TOTAL_LAYOUT_HEADER_PROP_TYPES;

export { TotalLayoutHeader };
