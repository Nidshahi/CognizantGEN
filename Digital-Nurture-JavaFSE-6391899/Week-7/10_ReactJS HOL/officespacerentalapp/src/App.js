import React from 'react';
function App() {
  // Object representing a featured office
  const featuredOffice = {
    name: "Innovate Hub",
    rent: 55000,
    address: "1st Floor, Sector 62, Noida",
    image: "https://via.placeholder.com/300x150?text=Office+Image"
  };

  // Array of multiple office spaces
  const officeList = [
    { name: "Alpha Tower", rent: 45000, address: "Delhi" },
    { name: "Beta Plaza", rent: 75000, address: "Mumbai" },
    { name: "Gamma Workspace", rent: 62000, address: "Bangalore" },
    { name: "Delta Hub", rent: 58000, address: "Hyderabad" }
  ];

  // Function to return rent color based on value
  const getRentColor = (rent) => {
    return rent < 60000 ? 'red' : 'green';
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial' }}>
      {/* Heading */}
      <h1>🏢 Office Space Rental App</h1>

      {/* Office image using JSX attributes */}
      <img src={featuredOffice.image} alt="Office Space" style={{ margin: '10px 0' }} />

      {/* Featured Office */}
      <h2>Featured Office</h2>
      <p><strong>Name:</strong> {featuredOffice.name}</p>
      <p>
        <strong>Rent:</strong>{' '}
        <span style={{ color: getRentColor(featuredOffice.rent) }}>
          ₹{featuredOffice.rent}
        </span>
      </p>
      <p><strong>Address:</strong> {featuredOffice.address}</p>

      {/* Office List using map() */}
      <h2>All Available Offices</h2>
      {officeList.map((office, index) => (
        <div key={index} style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
          <p><strong>Name:</strong> {office.name}</p>
          <p>
            <strong>Rent:</strong>{' '}
            <span style={{ color: getRentColor(office.rent) }}>
              ₹{office.rent}
            </span>
          </p>
          <p><strong>Address:</strong> {office.address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
