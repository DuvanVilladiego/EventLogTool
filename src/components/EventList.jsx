import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./EventList.module.css"

const EventList = () => {
  const [dataList, setDataList] = useState([]);
  const [description, setDescription] = useState('');
  const [source, setSource] = useState('');
  const [date, setDate] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetchData();
    fetchCategories();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/logs/?limit=10&offset=0');
      setDataList(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get('/api/logs/categories'); // Replace with actual endpoint
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newEntry = {
      description,
      source,
      date,
      type: selectedCategory,
    };

    try {
      await axios.post('/api/logs/', newEntry);
      setDescription('');
      setSource('');
      setDate('');
      fetchData(); // Refresh the data after adding a new entry
    } catch (error) {
      console.error('Error adding new entry:', error);
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <h2>Add New Event Log</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Description:
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
          </label>
          <br />
          <label>
            Source:
            <input type="text" value={source} onChange={(e) => setSource(e.target.value)} />
          </label>
          <br />
          <label>
            Category:
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">Select a category</option>
            {categories.map((category, index) => (
              <option key={index} value={category.id_category}>
                {category.description}
              </option>
            ))}
          </select>
          </label>
          <br />
          <label>
            Date:
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <h1>EventLog list</h1>
        <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Description</th>
            <th>Source</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((item, index) => (
            <tr key={index}>
              <td>{item.type}</td>
              <td>{item.description}</td>
              <td>{item.source}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default EventList;
