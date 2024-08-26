import React, { useState } from "react";
import Header from "./Header"; // Importing the Header component
import Widget from "./widget";
import "./App.css";

const dashboardData = {
  categories: [
    {
      name: "CSPM Executive Dashboard",
      widgets: [
        {
          id: 1,
          name: "Cloud Accounts",
          text: "Connected: 2, Not Connected: 0",
        },
        {
          id: 2,
          name: "Cloud Account Risk Assessment",
          text: "Passed: 7235, Failed: 9698",
        },
      ],
    },
    {
      name: "CWPP Dashboard",
      widgets: [
        {
          id: 3,
          name: "Top 5 Namespace Specific Alerts",
          text: "No Graph data available!",
        },
        { id: 4, name: "Workload Alerts", text: "No Graph data available!" },
      ],
    },
  ],
};

function App() {
  const [dashboard, setDashboard] = useState(dashboardData);
  const [newWidget, setNewWidget] = useState({ name: "", text: "" });

  const handleAddWidget = (categoryIndex) => {
    const updatedDashboard = { ...dashboard };
    const newId = new Date().getTime(); // Unique ID
    updatedDashboard.categories[categoryIndex].widgets.push({
      id: newId,
      ...newWidget,
    });
    setDashboard(updatedDashboard);
    setNewWidget({ name: "", text: "" }); // Clear the input fields after adding
  };

  const handleRemoveWidget = (categoryIndex, widgetId) => {
    const updatedDashboard = { ...dashboard };
    updatedDashboard.categories[categoryIndex].widgets =
      updatedDashboard.categories[categoryIndex].widgets.filter(
        (widget) => widget.id !== widgetId
      );
    setDashboard(updatedDashboard);
  };

  return (
    <div className="App">
      <Header /> {/* Include the Header component */}
      {dashboard.categories.map((category, catIndex) => (
        <div key={catIndex} className="category">
          <h2>{category.name}</h2>
          <div className="widgets-container">
            {category.widgets.map((widget) => (
              <div key={widget.id} className="widget">
                <Widget
                  name={widget.name}
                  text={widget.text}
                  onRemove={() => handleRemoveWidget(catIndex, widget.id)}
                />
              </div>
            ))}
            <div className="widget add-widget">
              <input
                type="text"
                placeholder="Widget Name"
                value={newWidget.name}
                onChange={(e) =>
                  setNewWidget({ ...newWidget, name: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Widget Text"
                value={newWidget.text}
                onChange={(e) =>
                  setNewWidget({ ...newWidget, text: e.target.value })
                }
              />
              <button onClick={() => handleAddWidget(catIndex)}>
                + Add Widget
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
