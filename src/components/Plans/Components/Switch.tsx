import { styled } from '@styles/index';
import * as SwitchPrimitive from '@radix-ui/react-switch';

const StyledSwitch = styled(SwitchPrimitive.Root, {
  all: 'unset',
  width: 104,
  height: 44,
  backgroundColor: '$offWhite',
  borderRadius: '9999px',
  position: 'relative',
  boxShadow: `0 2px 10px $black2`,
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&:focus': { boxShadow: `0 0 0 2px black` },
  '&[data-state="checked"]': { backgroundColor: '$offWhite' },

  '@bpDesktop': {
    height: 52,
  },
});

const StyledThumb = styled(SwitchPrimitive.Thumb, {
  display: 'block',
  width: 28,
  height: 28,
  backgroundColor: '$primary',
  borderRadius: '9999px',
  boxShadow: `0 2px 2px $black3`,
  transition: 'transform 100ms',
  transform: 'translateX(64px)',
  willChange: 'transform',
  '&[data-state="checked"]': { transform: 'translateX(12px)' },

  '@bpDesktop': {
    width: 36,
    height: 36,
    '&[data-state="checked"]': { transform: 'translateX(10px)' },
    transform: 'translateX(60px)',
  },
});

const Swtich = () => (
  <StyledSwitch defaultChecked id="s1">
    <StyledThumb />
  </StyledSwitch>
);

export default Swtich;
