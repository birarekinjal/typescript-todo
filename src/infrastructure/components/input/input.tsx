import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';

type InputProps = {
  type?: string,
  placeholder?: string,
  isPassword?: boolean,
  iconClass?: boolean,
  onButtonClick?: boolean,
  tabindex?: number,
  controlId?: string,
  label?: boolean | string,
  isRequired?: boolean,
  hintText?: boolean | string | number,
  isControlled?: boolean,
  name?: string,
  onPaste?: Function,
  disabled?:boolean,
  onChange?: Function,
  onClick?: Function,
  accept?: any,
  id?: string,
}

function Input({
  type,
  placeholder,
  isPassword,
  iconClass,
  onButtonClick,
  tabindex,
  controlId,
  label,
  isRequired,
  hintText,
  isControlled,
  name,
  disabled,
  accept,
  id,
}: InputProps) {
  const [hidePassword, setHidePassword] = useState(true);

  const managePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  const showPassword = () => {
    if (isPassword) {
      return (
        <i
          className={
            hidePassword ? 'fas fa-eye-slash' : 'fa fa-eye show-icon-in-textbox'
          }
          aria-hidden="true"
          onClick={managePasswordVisibility}
        />
      );
    }
    return null;
  };

  return (
    <div>
      <Form.Group
        className={iconClass && !onButtonClick ? 'with-icon' : ''}
        tabIndex={tabindex}
        controlId={controlId}
      >
        {
        label && (
          <Form.Label>
            {label}
            {isRequired && <span className="required"> *</span>}
            {hintText && <span className="input-example">{hintText}</span>}
          </Form.Label>
        )
      }
        <InputGroup>
          {
        isControlled ? (
          <Form.Control
            name={name}
            type={type}
            id={id}
          //  onPaste={onPaste}
            placeholder={placeholder}
          // ref={inputRef}
            disabled={disabled}
          // onChange={onChange}
          // onBlur={onBlur}
          // value={value}
            accept={accept}
          // autoFocus={autoFocus}
          // onClick={onClick}
          />
        ) : (
          <Form.Control />
        )
      }
        </InputGroup>
      </Form.Group>
    </div>
  );
}

export default Input;
