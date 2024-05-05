import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function CSVReader() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data.csv');
      const text = await response.text();
      const rows = text.split('\n').map(row => row.split(','));
      // Assuming the first row contains headers
      const headers = rows[0];
      const rowsData = rows.slice(1);
      const formattedData = rowsData.map(row => {
        return headers.reduce((obj, header, index) => {
          obj[header] = row[index];
          return obj;
        }, {});
      });
      setData(formattedData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {data.map((row, index) => (
          <div key={index} style={{ margin: '10px' }}>
              <img src={require('../src/images/'+ row.Nombre +'.png')} alt={row[0]} style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
          </div>
        ))}
      </div>
    </div>
  );


  return (
    <div>
      <h1>CSV Data</h1>
      <ul>
        {data.map((row, index) => (
          <li key={index}>
            {Object.keys(row).map((key, index) => (
              <span key={index}>
                <strong>{key}: </strong> {row[key]}
                <br />
              </span>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );

   return (
    <div>
      <h1>Images from CSV</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {data.map((row, index) => (
          <div key={index} style={{ margin: '10px' }}>
            <img src={row.image} alt={`Image ${index}`} style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
          </div>
        ))}
      </div>
    </div>
  );
}


function App() {
  return (
    <div className="App">

      <header className="App-header">
      <div>
        <img src={require('../src/images/title.png')} alt="Title" />
       </div>
      </header>
      <body className="App-body">
        
        <CSVReader></CSVReader>
      </body>

    </div>

  );
}

export default App;
