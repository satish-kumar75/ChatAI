import React from 'react'

const MainScreen = ({ isExpanded }) => {
  return (
    <div className={`w-full h-screen bg-secondary-100 dark:bg-secondary-400 p-4`}>
      <div className="bg-secondary-100 dark:bg-secondary-400 w-full h-full rounded-lg">
        {isExpanded ? "MainScreen with Sidebar" : "MainScreen (Full Width)"}
      </div>
    </div>
  );
};

export default MainScreen;