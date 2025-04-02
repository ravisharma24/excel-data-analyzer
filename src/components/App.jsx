import React, { useState } from 'react';
import FileUploader from './FileUploader';
import DataTable from './DataTable';
import DataVisualizer from './DataVisualizer';
import './styles/index.css';

const App = () => {
    const [data, setData] = useState([]);
    const [processedData, setProcessedData] = useState(null);

    const handleFileUpload = (uploadedData) => {
        setData(uploadedData);
        // Process the data here if needed
        // setProcessedData(processedDataFunction(uploadedData));
    };

    return (
        <div className="app-container">
            <h1>Excel Data Analyzer</h1>
            <FileUploader onFileUpload={handleFileUpload} />
            <DataTable data={data} />
            {processedData && <DataVisualizer data={processedData} />}
        </div>
    );
};

export default App;