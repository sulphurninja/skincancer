// pages/register.js

import { useState } from 'react';

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    diagnosis: {
      type: '',
      location: '',
      size: '',
      stage: '',
      description: ''
    },
    treatment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleDiagnosisChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      diagnosis: {
        ...prevState.diagnosis,
        [name]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can save the formData locally using localStorage or any other method
    console.log('Form data:', formData);
    // Clear form fields after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      diagnosis: {
        type: '',
        location: '',
        size: '',
        stage: '',
        description: ''
      },
      treatment: ''
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Patient Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">First Name</label>
              <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">Last Name</label>
              <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">Phone Number</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">Diagnosis</label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input type="text" name="type" placeholder="Type" value={formData.diagnosis.type} onChange={handleDiagnosisChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required />
              </div>
              <div>
                <input type="text" name="location" placeholder="Location" value={formData.diagnosis.location} onChange={handleDiagnosisChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required />
              </div>
              <div>
                <input type="text" name="size" placeholder="Size" value={formData.diagnosis.size} onChange={handleDiagnosisChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required />
              </div>
              <div>
                <input type="text" name="stage" placeholder="Stage" value={formData.diagnosis.stage} onChange={handleDiagnosisChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required />
              </div>
              <div className="col-span-2">
                <textarea name="description" placeholder="Description" value={formData.diagnosis.description} onChange={handleDiagnosisChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required />
              </div>
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="treatment" className="block text-gray-700 font-bold mb-2">Treatment</label>
            <textarea id="treatment" name="treatment" value={formData.treatment} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Register</button>
        </form>
      </div>
    </div>
  );
}
