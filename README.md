# Excel Data Analyzer

This project is a web application designed to analyze data primarily stored in Excel files. It allows users to upload Excel files, view the data in a tabular format, and visualize the data using charts and graphs.

## Features

- **File Uploading**: Users can upload Excel files through a user-friendly interface.
- **Data Display**: The application displays the uploaded data in a structured table format.
- **Data Visualization**: Users can visualize the data using various charts and graphs for better insights.
- **Data Analysis**: The application includes functionalities for analyzing the data, such as calculating statistics and filtering.

## Project Structure

```
excel-data-analyzer
├── src
│   ├── components
│   │   ├── App.jsx
│   │   ├── DataTable.jsx
│   │   ├── DataVisualizer.jsx
│   │   └── FileUploader.jsx
│   ├── utils
│   │   ├── excelParser.js
│   │   └── dataAnalytics.js
│   ├── styles
│   │   └── index.css
│   └── index.js
├── public
│   └── index.html
├── server
│   └── index.js
├── package.json
├── .gitignore
└── README.md
```

## Getting Started

To get started with the project, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd excel-data-analyzer
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Application**:
   - To start the React application:
     ```bash
     npm start
     ```
   - To start the Node.js server:
     ```bash
     cd server
     node index.js
     ```

## Usage

1. Open the application in your web browser.
2. Use the File Uploader component to upload an Excel file.
3. View the data in the Data Table component.
4. Utilize the Data Visualizer component to see graphical representations of the data.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features you would like to add.

## License

This project is licensed under the MIT License. See the LICENSE file for details.