import { useFormContext } from 'react-hook-form';
import { StarIcon } from '@bubbles-ui/icons/solid';
import { Stack } from '../../Stack';
import { Text } from '../../../typography';
import { Button } from '../../../form';
import { Box } from '../../Box';
import {
  TOTAL_LAYOUT_HEADER_PROP_TYPES,
  TOTAL_LAYOUT_HEADER_DEFAULT_PROPS,
} from './TotalLayoutHeader.constants';

const TotalLayoutHeader = ({ title, icon, formTitlePlaceholder, children, compact = false }) => {
  const { watch } = useFormContext();
  const formValues = watch();

  // Set styles
  const containerStyle = {
    padding: `${!children ? '16px' : '12px'} 24px`,
    minHeight: !children ? '72px' : '120px',
    maxHeight: !children ? '72px' : '120px',
    backgroundColor: 'white',
  };

  const formTitleTextStyle = {
    fontSize: '18px',
  };
  if (!compact) formTitleTextStyle.marginLeft = '40px';

  return (
    <Stack id="total-layout-header" fullWidth fullHeight style={containerStyle} direction="column">
      <Stack fullWidth justifyContent="space-between" style={{ height: '40px', maxHeight: '40px' }}>
        {/* ICON & LABELS */}
        <Stack alignItems="center">
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
                  marginRight: '8px',
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
      {children && (
        <Stack style={{ maxHeight: '40px', minHeight: '40px', marginTop: '12px' }}>
          {children}
        </Stack>
      )}
    </Stack>
  );
};

TotalLayoutHeader.defaultProps = TOTAL_LAYOUT_HEADER_DEFAULT_PROPS;
TotalLayoutHeader.propTypes = TOTAL_LAYOUT_HEADER_PROP_TYPES;

export { TotalLayoutHeader };
