import { useFormContext } from 'react-hook-form';
import { Stack } from '../../Stack';
import { Text } from '../../../typography';
import { Button } from '../../../form';
import { Box } from '../../Box';
import {
  TOTAL_LAYOUT_HEADER_PROP_TYPES,
  TOTAL_LAYOUT_HEADER_DEFAULT_PROPS,
} from './TotalLayoutHeader.constants';
import { TotalLayoutHeaderStyles } from './TotalLayoutHeader.styles';
import CrossIcon from './crossIcon';

const TotalLayoutHeader = ({ title, icon, formTitlePlaceholder, children, compact = false }) => {
  const { watch } = useFormContext();
  const formValues = watch();
  const { classes } = TotalLayoutHeaderStyles({ compact, children });

  return (
    <Stack fullWidth fullHeight className={classes.headerContainer} direction="column">
      <Stack fullWidth justifyContent="space-between" className={classes.header}>
        {/* ICON & LABELS */}
        <Stack alignItems="center">
          <Stack
            spacing={compact ? 2 : 0}
            justifyContent="center"
            alignItems={compact ? 'center' : 'start'}
            direction={compact ? 'row' : 'column'}
          >
            <Stack alignItems="center">
              <Box className={classes.iconContainer}>{icon}</Box>
              <Text
                as="h3"
                className={classes.headerTitle}
                color="primary"
                strong
                transform="uppercase"
              >
                {compact ? `${title}:` : title}
              </Text>
            </Stack>

            <Text as="h3" className={classes.headerSubtitle} color="primary">
              {formValues.title || formTitlePlaceholder}
            </Text>
          </Stack>
        </Stack>
        {/* CANCEL BUTTON */}
        <Stack alingItems="center">
          <Button variant="link" type="button" leftIcon={<CrossIcon />}>
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
