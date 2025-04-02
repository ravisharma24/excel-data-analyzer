import React, { useState } from 'react';

const FileUploader = ({ onFileUpload }) => {
    const [fileName, setFileName] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
            onFileUpload(file);
        }
    };

    return (
        <div className="file-uploader">
            <input
                type="file"
                accept=".xlsx, .xls"
                onChange={handleFileChange}
            />
            {fileName && <p>Uploaded: {fileName}</p>}
        </div>
    );
};

export default FileUploader;