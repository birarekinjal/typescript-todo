import { Button, Spinner } from 'react-bootstrap';
import { ButtonProps } from './buttonModel';

export function CustomButton({
  handleClick,
  label,
  isLoading,
  variant,
  prependIcon,
  iconClass,
}:ButtonProps) {
  return (
    <Button
      onClick={() => handleClick()}
      variant={variant || 'primary'}
    >
      {
      isLoading ? (
        <>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          <span>Loading...</span>
        </>
      ) : (
        <>
          {prependIcon && (
          <i className={iconClass} data-testId="prePendIcon" />
          )}
          {label}
          {!prependIcon && (
            <i className={iconClass} data-testId="postPendIcon" />
          )}
        </>
      )
    }
    </Button>
  );
}
