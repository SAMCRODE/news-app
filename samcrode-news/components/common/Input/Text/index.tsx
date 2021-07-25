/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import styles from './text.module.scss';
import PropTypes from 'prop-types';

interface TextInputProps {
  value: string;
  onChange: any;
  invalidMsg: string;
  label: string;
  paddingTop?: number;
  type?: string;
  placeholder?: string;
  icon?: any;
  maxLength?: number;
}

const TextInput = ({
  value = '', onChange = () => { }, invalidMsg, label,
  paddingTop, type, placeholder, icon, maxLength = 256,
}: TextInputProps) => {
  const [initial, setInitial] = useState(value || '');
  const handleOnChange = (text: string) => {
    setInitial(text);
    onChange(text);
  };

  useEffect(() => {
    setInitial(value);
  }, [value]);

  return (
    <div className={styles.container} style={{ paddingTop }}>
      <span className={styles['label-input']}>{label}</span>
      <div className={styles['input-control']}>
        <input
          maxLength={maxLength}
          value={initial}
          onChange={(event) => handleOnChange(event.target.value)}
          type={type}
          placeholder={placeholder}
        />
        {
          invalidMsg && (
            <small className={styles.invalidLabel}>{invalidMsg}</small>
          )
        }
      </div>
      {
        icon && (
          <FontAwesomeIcon
            className={styles['input-icon']}
            icon={icon}
            color="#B51654"
          />
        )
      }
    </div>
  );
};

export default TextInput;
