import { ActionButton } from '@bubbles-ui/components';

const Button = ({ icon, label, position, actived, onClick }) => {
  return <ActionButton icon={icon} label={position} onClick={onClick}></ActionButton>;
};

Button.defaultProps = {
  position: 'start',
};

export { Button };
