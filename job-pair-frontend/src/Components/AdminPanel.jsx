import React, { useState } from 'react';
import '../Styles/AdminPanel.css'; // Import the separate CSS file
import Dropdown from 'react-bootstrap/Dropdown';

const flaggedConversations = [
  { id: 1, companyLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", user: 'James Halpert', reason: 'Message Overflow', date: '10 Sept 2024' },
  { id: 2, companyLogo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg", user: 'Victoria Kazakis', reason: 'Message Overflow', date: '21 Nov 2024' },
  { id: 3, companyLogo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg", user: 'Jakob Soto', reason: 'Message Overflow', date: '1 Jan 2023' },
];

const AdminPanel = () => {
  const [openDropdownId, setOpenDropdownId] = useState(null);

  const toggleDropdown = (conversationId) => {
    setOpenDropdownId(openDropdownId === conversationId ? null : conversationId);
  };

  const handleOptionSelect = (conversationId, action) => {
    // Perform action based on the selected option
    if (action === 'delete') {
      deleteConversation(conversationId);
    } else if (action === 'resolve') {
      resolveConversation(conversationId);
    }
    // After performing the action, you might want to hide the dropdown
    setOpenDropdownId(null);
  };

  const deleteConversation = (conversationId) => {
    // Implement delete logic here
    console.log(`Deleting conversation with ID ${conversationId}`);
  };

  const resolveConversation = (conversationId) => {
    // Implement resolve logic here
    console.log(`Resolving conversation with ID ${conversationId}`);
  };

  return (
    <div className="admin-panel">
      <main className="main">
        <h1 className="title">Flagged Conversations (Admin)</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Company</th>
              <th>User</th>
              <th>Flagging Reason</th>
              <th>Date</th>
              <th></th> {/* For the options button */}
            </tr>
          </thead>
          <tbody>
            {flaggedConversations.map((conversation) => (
              <tr key={conversation.id}>
                <td className="logo-cell">
                  <img 
                    src={conversation.companyLogo} 
                    alt={`${conversation.company} logo`} 
                    className="company-logo"
                  />
                </td>
                <td>{conversation.user}</td>
                <td>{conversation.reason}</td>
                <td>{conversation.date}</td>
                <td className="options" style={{ position: 'relative' }}>
                  <Dropdown>
                    <Dropdown.Toggle>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => handleOptionSelect(conversation.id, 'delete')}>Delete</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleOptionSelect(conversation.id, 'resolve')}>Resolve</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default AdminPanel;
