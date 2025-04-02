import { useMemo } from 'react';

export const calculateStatistics = (data) => {
    if (!data || data.length === 0) return {};

    const totalRows = data.length;
    const totalColumns = Object.keys(data[0]).length;

    const averages = {};
    const sums = {};

    data.forEach(row => {
        Object.keys(row).forEach(key => {
            if (typeof row[key] === 'number') {
                sums[key] = (sums[key] || 0) + row[key];
                averages[key] = sums[key] / totalRows;
            }
        });
    });

    return {
        totalRows,
        totalColumns,
        averages,
    };
};

export const filterData = (data, criteria) => {
    return data.filter(row => {
        return Object.keys(criteria).every(key => {
            return row[key] === criteria[key];
        });
    });
};

export const transformData = (data, transformFunction) => {
    return data.map(transformFunction);
};