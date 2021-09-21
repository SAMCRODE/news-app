import React, { useEffect, useRef, useState } from 'react';
import makeRequest from '../../../../api/axios';
import * as requestFactory from '../../../../api/requestFactory';
import { UploadApiEndpoint } from '../../../../config';
import styles from './file.module.scss';

interface FileInputProps {
  src: string;
  onChange: any;
}

const FileInput = ({src, onChange}: FileInputProps) => {
  const inputFile = useRef(null);
  const [file, setFile] = useState('https://cdn.codechef.com/download/small-banner/SEPT21B/1630247193.png');

  const handleChange = (file: FileList) => {
    if (!file[0]) return;

    // setValue(event.target.value);
    // onChange(event.target.value);
    // alert(config.UploadApiEndpoint);
    const formData = new FormData();

    formData.append('img', file[0], file[0].name);
    makeRequest(requestFactory.uploadFile(UploadApiEndpoint, formData))
      .then((response) => {
        if(onChange){
          onChange(response.url);
        }
      });
  };

  useEffect(() => {
    setFile(src);
  }, [src]);

  return (
    <div
        className={styles.container}
        style={{backgroundImage: `url(${file})`}}
        onClick={() => {
          if(inputFile !== null){
            inputFile.current.click();
          }
        }}
    >
        <input
        type="file"
        onChange={(e) => {
            handleChange(e.target.files || new FileList());
        }}
        accept="image/x-png,image/jpeg"
        style={{ display: 'none' }}
        ref={inputFile}
        />
    </div>
  );
};

export default FileInput;
