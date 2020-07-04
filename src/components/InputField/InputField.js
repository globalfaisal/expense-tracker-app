import React from 'react';
import PropTypes from 'prop-types';

import styles from './InputField.module.scss';

const InputField = ({
  name,
  type,
  value,
  placeholder,
  helperText,
  className,
  onChange,
}) => (
  <div className={`${styles.inputField} ${className}`}>
    <input
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
    <small className={styles.helperText}>{helperText}</small>
  </div>
);

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'number', 'email']),
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  helperText: PropTypes.string,
};
export default InputField;
