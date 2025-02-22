import React, { useState } from 'react';
import TaskManagement from './TaskManagement';
import SchemaManagement from './SchemaManagement';
import SessionManagement from './SessionManagement';
import Leaderboard from './Leaderboard';
import CourseManagement from './CourseManagement'; // Import the CourseManagement component
import '../Styles/InstructorPanel.css';

function InstructorPanel() {
  const [activeTab, setActiveTab] = useState('Course Management');

  const renderContent = () => {
    switch (activeTab) {
      case 'Course Management':
        return <CourseManagement />;
      case 'Task Management':
        return <TaskManagement />;
      case 'Schema Management':
        return <SchemaManagement />;
      case 'Session Management':
        return <SessionManagement />;
      case 'Leaderboard':
        return <Leaderboard />;
      default:
        return <CourseManagement />;
    }
  };

  return (
    <div className="instructor-panel">
      <h1>Instructor Panel</h1>
      <div className="tabs">
        {['Course Management', 'Task Management', 'Schema Management', 'Session Management', 'Leaderboard'].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? 'active-tab' : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
}

export default InstructorPanel;