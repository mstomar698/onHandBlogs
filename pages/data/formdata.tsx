import { useState, useEffect } from 'react';

interface FormData {
  name: string;
}

const FormData = () => {
  const [formData, setFormData] = useState<FormData[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/formData');
      const data = await response.json();
      setFormData(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Form Data</h1>
      {formData.map((item, index) => (
        <div key={index}>
          <p>Name: {item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default FormData;
