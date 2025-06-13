/**
 * Dashboard JavaScript - Task Management System
 * Handles task rendering, filtering, and user interactions
 */

// ==========================================================================
// Global Variables and Data
// ==========================================================================

const TASK_DATA = `[
  {
    "status": "In Progress",
    "dueDate": "2025-06-18",
    "title": "Update user settings module",
    "description": "Revamp the settings UI and handle edge cases.",
    "startDate": "2025-05-28",
    "priority": "High"
  },
  {
    "status": "Done",
    "dueDate": "2025-06-01",
    "title": "Fix login bug",
    "description": "Resolved issue with token refresh logic.",
    "startDate": "2025-05-20",
    "priority": "High"
  },
  {
    "status": "Pending",
    "dueDate": "2025-06-12",
    "title": "Write API documentation",
    "description": "Document all RESTful endpoints and request samples.",
    "startDate": "2025-06-05",
    "priority": "Medium"
  },
  {
    "status": "Done",
    "dueDate": "2025-06-04",
    "title": "Email notifications",
    "description": "Enable templated emails for task updates.",
    "startDate": "2025-05-15",
    "priority": "Low"
  },
  {
    "status": "Pending",
    "dueDate": "2025-06-15",
    "title": "Mobile responsiveness",
    "description": "Make dashboard layout responsive for mobile.",
    "startDate": "2025-06-01",
    "priority": "Medium"
  },
  {
    "status": "Done",
    "dueDate": "2025-06-05",
    "title": "Database migration",
    "description": "Migrate user table to new schema with foreign keys.",
    "startDate": "2025-05-29",
    "priority": "High"
  },
  {
    "status": "In Progress",
    "dueDate": "2025-06-10",
    "title": "Setup Redis cache",
    "description": "Cache auth tokens for faster validation.",
    "startDate": "2025-06-01",
    "priority": "Medium"
  },
  {
    "status": "Done",
    "dueDate": "2025-06-07",
    "title": "Refactor user controller",
    "description": "Break into smaller reusable services.",
    "startDate": "2025-05-24",
    "priority": "Low"
  },
  {
    "status": "Pending",
    "dueDate": "2025-06-20",
    "title": "Create test cases",
    "description": "Add unit and integration tests for APIs.",
    "startDate": "2025-06-06",
    "priority": "Medium"
  },
  {
    "status": "Done",
    "dueDate": "2025-06-05",
    "title": "Optimize queries",
    "description": "Improve performance of data fetch logic.",
    "startDate": "2025-05-30",
    "priority": "High"
  }
]`;

let userTasks = [
  {
    title: "Make a news Homepage",
    status: "Pending",
    priority: "High",
    dueDate: "2025-06-25",
    startDate: "2025-06-01"
  },
  {
    title: "Make Wireframe & Sketch",
    status: "In Progress",
    priority: "Medium",
    dueDate: "2025-06-20",
    startDate: "2025-06-05"
  },
  {
    title: "Website redesign",
    status: "Pending",
    priority: "Low",
    dueDate: "2025-06-30",
    startDate: "2025-06-10"
  }
];

// ==========================================================================
// Utility Functions
// ==========================================================================

function isTaskOverdue(dueDate, status) {
  const today = new Date();
  const taskDueDate = new Date(dueDate);
  return taskDueDate < today && status !== "Done";
}

function getAllTasks() {
  const tasksFromJSON = JSON.parse(TASK_DATA);
  return [...userTasks, ...tasksFromJSON];
}

function formatStatusForCSS(status) {
  return status.toLowerCase().replace(/\s+/g, '');
}

function createTaskRow(task) {
  const row = document.createElement("tr");
  const isOverdue = isTaskOverdue(task.dueDate, task.status);
  
  row.innerHTML = `
    <td>${escapeHtml(task.title)}</td>
    <td>
      <span class="status-badge status-${formatStatusForCSS(task.status)}">
        ${task.status}
      </span>
    </td>
    <td>
      <span class="priority-${task.priority.toLowerCase()}">
        ${task.priority}
      </span>
    </td>
    <td class="${isOverdue ? 'overdue' : 'due-date'}">
      ${task.dueDate}
    </td>
    <td>${task.startDate}</td>
  `;
  
  return row;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}


function renderTaskTable() {
  const allTasks = getAllTasks();
  const tableBody = document.getElementById("taskTableBody");
  
  // Clear existing content
  tableBody.innerHTML = "";
  
  // Add each task as a row
  allTasks.forEach(task => {
    const row = createTaskRow(task);
    tableBody.appendChild(row);
  });
}

/**
 * Filter and display tasks based on the selected filter
 * @param {string} filterType - The type of filter to apply
 */
function filterTasks(filterType) {
  // Update active filter button
  updateActiveFilterButton(filterType);
  
  const allTasks = getAllTasks();
  let filteredTasks = allTasks;
  
  // Apply filter based on type
  switch (filterType) {
    case 'pending':
      filteredTasks = allTasks.filter(task => task.status === 'Pending');
      break;
    case 'progress':
      filteredTasks = allTasks.filter(task => task.status === 'In Progress');
      break;
    case 'done':
      filteredTasks = allTasks.filter(task => task.status === 'Done');
      break;
    case 'overdue':
      filteredTasks = allTasks.filter(task => 
        isTaskOverdue(task.dueDate, task.status)
      );
      break;
    case 'all':
    default:
      // Show all tasks
      break;
  }
  
  // Render filtered tasks
  renderFilteredTasks(filteredTasks);
}

/**
 * Update the active state of filter buttons
 * @param {string} activeFilter - The currently active filter
 */
function updateActiveFilterButton(activeFilter) {
  // Remove active class from all buttons
  document.querySelectorAll('.filters button').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Add active class to the selected button
  const activeButton = document.getElementById(`filter-${activeFilter}`);
  if (activeButton) {
    activeButton.classList.add('active');
  }
}

/**
 * Render filtered tasks in the table
 * @param {Array} tasks - Array of tasks to render
 */
function renderFilteredTasks(tasks) {
  const tableBody = document.getElementById("taskTableBody");
  
  // Clear existing content
  tableBody.innerHTML = "";
  
  // Show message if no tasks found
  if (tasks.length === 0) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td colspan="5" style="text-align: center; padding: 40px; color: #6b7280;">
        No tasks found for the selected filter
      </td>
    `;
    tableBody.appendChild(row);
    return;
  }
  
  // Add each task as a row
  tasks.forEach(task => {
    const row = createTaskRow(task);
    tableBody.appendChild(row);
  });
}

// ==========================================================================
// Event Listeners and Initialization
// ==========================================================================

/**
 * Initialize the dashboard when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
  // Close modal when clicking outside of it
  window.addEventListener('click', function(event) {
    const modal = document.getElementById("myForm");
    if (event.target === modal) {
      closeForm();
    }
  });
  
  // Handle Enter key in the input field
  document.getElementById("inputfield").addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      addNewTask();
    }
  });
  
  // Handle Escape key to close modal
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      const modal = document.getElementById("myForm");
      if (modal.style.display === 'block') {
        closeForm();
      }
    }
  });
});

// ==========================================================================
// Global Functions (for backward compatibility)
// ==========================================================================

// These functions are called from HTML onclick attributes
window.openForm = openForm;
window.closeForm = closeForm;
window.addNewTask = addNewTask;
window.filterTasks = filterTasks;
window.renderTaskTable = renderTaskTable;