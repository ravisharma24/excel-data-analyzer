import React from 'react';
import { Bar } from 'react-chartjs-2';

const DataVisualizer = ({ processedData }) => {
    const chartData = {
        labels: processedData.map(data => data.label),
        datasets: [
            {
                label: 'Data Visualization',
                data: processedData.map(data => data.value),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            <h2>Data Visualization</h2>
            <Bar data={chartData} />
        </div>
    );
};

export default DataVisualizer;