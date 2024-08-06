import React, { useState } from 'react';
import { FaBars, FaBell, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [view, setView] = useState('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const [product, setProduct] = useState({
    title: '',
    description: '',
    category: '',
    image: '',
  });

  const [products, setProducts] = useState([]);

  const data = {
    billing: { total: 1200, transactions: 30 },
    orders: [
      { id: 1, status: 'Shipped' },
      { id: 2, status: 'Processing' },
      { id: 3, status: 'Delivered' },
    ],
    totalRents: 45,
    rentedClothes: [
      { id: 101, name: 'Red Dress', status: 'Rented' },
      { id: 102, name: 'Blue Jeans', status: 'Returned' },
    ],
  };

  const handleLogin = () => {
    if (id === 'suparna' && password === 'suparna123') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid ID or password');
    }
  };

  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleProductSubmit = (e) => {
    e.preventDefault();
    setProducts((prevProducts) => [...prevProducts, product]);
    setProduct({ title: '', description: '', category: '', image: '' }); // Clear form
  };

  if (!isLoggedIn) {
    return (
      <div style={styles.loginContainer}>
        <div style={styles.loginBox}>
          <h2 style={styles.loginTitle}>Admin Login</h2>
          <div style={styles.formGroup}>
            <label style={styles.label}>ID:</label>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
          </div>
          <button onClick={handleLogin} style={styles.loginButton}>Login</button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <FaBars style={styles.navIcon} />
        <div style={styles.searchContainer}>
          <FaSearch style={styles.searchIcon} />
          <input type="text" placeholder="Search now" style={styles.searchInput} />
        </div>
        <FaBell style={styles.navIcon} />
      </nav>
      <div style={styles.mainContent}>
        <div style={styles.sidebar}>
          <ul style={styles.sidebarList}>
            <li style={styles.sidebarItem} onClick={() => setView('dashboard')}><button style={styles.sidebarButton}>Dashboard</button></li>
            <li style={styles.sidebarItem} onClick={() => setView('billing')}><button style={styles.sidebarButton}>Billing</button></li>
            <li style={styles.sidebarItem} onClick={() => setView('orderTracking')}><button style={styles.sidebarButton}>Order Tracking</button></li>
            <li style={styles.sidebarItem} onClick={() => setView('totalRents')}><button style={styles.sidebarButton}>Total Rents</button></li>
            <li style={styles.sidebarItem} onClick={() => setView('rentedClothes')}><button style={styles.sidebarButton}>Rented Clothes</button></li>
            <li style={styles.sidebarItem} onClick={() => setView('addProduct')}><button style={styles.sidebarButton}>Add Product</button></li>
          </ul>
          <div style={styles.footer}>
            <Link to="/" style={styles.backButton}>Go back</Link>
          </div>
        </div>
        <div style={styles.content}>
          {view === 'dashboard' && <Dashboard />}
          {view === 'billing' && <Billing data={data.billing} />}
          {view === 'orderTracking' && <OrderTracking data={data.orders} />}
          {view === 'totalRents' && <TotalRents data={data.totalRents} />}
          {view === 'rentedClothes' && <RentedClothes data={data.rentedClothes} />}
          {view === 'addProduct' && <AddProductForm onSubmit={handleProductSubmit} product={product} onChange={handleProductChange} />}
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => (
  <div style={styles.contentBox}>
    <h2>Dashboard</h2>
    <p>Welcome to the Admin Dashboard.</p>
  </div>
);

const Billing = ({ data }) => (
  <div style={styles.contentBox}>
    <h2>Billing Information</h2>
    <p>Total Billing: ${data.total}</p>
    <p>Transactions: {data.transactions}</p>
  </div>
);

const OrderTracking = ({ data }) => (
  <div style={styles.contentBox}>
    <h2>Order Tracking</h2>
    <ul>
      {data.map(order => (
        <li key={order.id}>Order ID: {order.id}, Status: {order.status}</li>
      ))}
    </ul>
  </div>
);

const TotalRents = ({ data }) => (
  <div style={styles.contentBox}>
    <h2>Total Rents</h2>
    <p>Total Rents: {data}</p>
  </div>
);

const RentedClothes = ({ data }) => (
  <div style={styles.contentBox}>
    <h2>Rented Clothes</h2>
    <ul>
      {data.map(item => (
        <li key={item.id}>ID: {item.id}, Name: {item.name}, Status: {item.status}</li>
      ))}
    </ul>
  </div>
);

const AddProductForm = ({ onSubmit, product, onChange }) => (
  <div style={styles.contentBox}>
    <h2>Add Product</h2>
    <form onSubmit={onSubmit}>
      <div style={styles.formGroup}>
        <label style={styles.label}>Title:</label>
        <input
          type="text"
          name="title"
          value={product.title}
          onChange={onChange}
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Description:</label>
        <textarea
          name="description"
          value={product.description}
          onChange={onChange}
          style={styles.textarea}
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Category:</label>
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={onChange}
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Image URL:</label>
        <input
          type="text"
          name="image"
          value={product.image}
          onChange={onChange}
          style={styles.input}
        />
      </div>
      <button type="submit" style={styles.submitButton}>Add Product</button>
    </form>
  </div>
);

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundImage: 'url(https://img.freepik.com/premium-photo/white-feathered-head-with-feathers-it_1290686-30990.jpg?w=1060)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'background-color 0.3s ease',
  },
  navbar: {
    width: '100%',
    padding: '10px 20px',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid #dee2e6',
    transition: 'background-color 0.3s ease',
  },
  navIcon: {
    fontSize: '20px',
    color: '#6c757d',
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: '5px 10px',
    borderRadius: '20px',
  },
  searchIcon: {
    marginRight: '5px',
    color: '#6c757d',
  },
  searchInput: {
    border: 'none',
    backgroundColor: 'transparent',
    outline: 'none',
  },
  mainContent: {
    display: 'flex',
    flex: 1,
    marginTop: '10px',
  },
  sidebar: {
    width: '200px',
    backgroundColor: '#f8f9fa',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100vh - 60px)', // Adjusted to account for navbar height
    position: 'fixed',
    top: '60px', // Adjusted to account for navbar height
    left: 0,
    justifyContent: 'space-between',
  },
  sidebarList: {
    listStyleType: 'none',
    padding: 0,
  },
  sidebarItem: {
    marginBottom: '10px',
  },
  sidebarButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#6c757d',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  content: {
    marginLeft: '220px',
    marginTop: '60px', // Adjusted to account for navbar height
    padding: '20px',
    width: 'calc(100% - 240px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  contentBox: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    border: '1px solid #dee2e6',
    width: '100%',
    maxWidth: '600px',
    textAlign: 'center',
  },
  footer: {
    marginTop: 'auto',
    paddingBottom: '20px',
  },
  backButton: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    backgroundColor: '#6c757d',
    padding: '10px 20px',
    borderRadius: '4px',
    textAlign: 'center',
    display: 'block',
  },
  loginContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundImage: 'url(https://img.freepik.com/premium-photo/white-feathered-head-with-feathers-it_1290686-30990.jpg?w=1060)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'background-color 0.3s ease',
    animation: 'fadeIn 1s ease-in-out',
  },
  loginBox: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    animation: 'slideUp 0.5s ease-out',
  },
  loginTitle: {
    marginBottom: '20px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
  },
  input: {
    width: '300px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  textarea: {
    width: '300px',
    height: '100px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  loginButton: {
    padding: '10px 20px',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  submitButton: {
    padding: '10px 20px',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  '@keyframes fadeIn': {
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
  },
  '@keyframes slideUp': {
    '0%': { transform: 'translateY(20px)', opacity: 0 },
    '100%': { transform: 'translateY(0)', opacity: 1 },
  },
};

export default AdminDashboard;
