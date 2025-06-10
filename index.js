const tasks = [
  {
    "status": "In Progress",
    "dueDate": "2025-06-18",
    "title": "Update user settings module",
    "description": "Revamp the settings UI and handle edge cases.",
    "startDate": "2025-05-28"
  },
  {
    "status": "Done",
    "dueDate": "2025-06-01",
    "title": "Fix login bug",
    "description": "Resolved issue with token refresh logic.",
    "startDate": "2025-05-20"
  },
  {
    "status": "Pending",
    "dueDate": "2025-06-12",
    "title": "Write API documentation",
    "description": "Document all RESTful endpoints and request samples.",
    "startDate": "2025-06-05"
  },
  {
    "status": "Done",
    "dueDate": "2025-06-04",
    "title": "Email notifications",
    "description": "Enable templated emails for task updates.",
    "startDate": "2025-05-15"
  },
  {
    "status": "Pending",
    "dueDate": "2025-06-15",
    "title": "Mobile responsiveness",
    "description": "Make dashboard layout responsive for mobile.",
    "startDate": "2025-06-01"
  },
  {
    "status": "Done",
    "dueDate": "2025-06-05",
    "title": "Database migration",
    "description": "Migrate user table to new schema with foreign keys.",
    "startDate": "2025-05-29"
  },
  {
    "status": "In Progress",
    "dueDate": "2025-06-10",
    "title": "Setup Redis cache",
    "description": "Cache auth tokens for faster validation.",
    "startDate": "2025-06-01"
  },
  {
    "status": "Done",
    "dueDate": "2025-06-07",
    "title": "Refactor user controller",
    "description": "Break into smaller reusable services.",
    "startDate": "2025-05-24"
  },
  {
    "status": "Pending",
    "dueDate": "2025-06-20",
    "title": "Create test cases",
    "description": "Add unit and integration tests for APIs.",
    "startDate": "2025-06-06"
  },
  {
    "status": "Done",
    "dueDate": "2025-06-05",
    "title": "Optimize queries",
    "description": "Improve performance of data fetch logic.",
    "startDate": "2025-05-30"
  },
  {
    "status": "In Progress",
    "dueDate": "2025-06-11",
    "title": "Integrate SSO login",
    "description": "Allow authentication via OAuth providers.",
    "startDate": "2025-06-03"
  },
  {
    "status": "Done",
    "dueDate": "2025-06-06",
    "title": "Fix broken links",
    "description": "Check all static pages and update old URLs.",
    "startDate": "2025-05-26"
  },
  {
    "status": "Pending",
    "dueDate": "2025-06-13",
    "title": "User avatar upload",
    "description": "Allow profile pictures via S3.",
    "startDate": "2025-06-05"
  },
  {
    "status": "Done",
    "dueDate": "2025-06-05",
    "title": "Log cleanup script",
    "description": "Delete logs older than 30 days automatically.",
    "startDate": "2025-05-25"
  },
  {
    "status": "In Progress",
    "dueDate": "2025-06-09",
    "title": "Implement dark mode",
    "description": "Allow user toggle between light/dark themes.",
    "startDate": "2025-06-02"
  },
  {
    "status": "Done",
    "dueDate": "2025-06-03",
    "title": "Add contact form",
    "description": "Send form responses to backend API.",
    "startDate": "2025-05-27"
  },
  {
    "status": "Pending",
    "dueDate": "2025-06-14",
    "title": "Billing logic update",
    "description": "Handle multiple payment plans correctly.",
    "startDate": "2025-06-06"
  },
  {
    "status": "Done",
    "dueDate": "2025-06-05",
    "title": "Accessibility audit",
    "description": "Ensure compliance with WCAG standards.",
    "startDate": "2025-05-31"
  },
  {
    "status": "In Progress",
    "dueDate": "2025-06-08",
    "title": "Enable push notifications",
    "description": "Add support for web push alerts.",
    "startDate": "2025-06-01"
  },
  {
    "status": "Pending",
    "dueDate": "2025-06-19",
    "title": "Graph visualization",
    "description": "Show analytics using D3 or Chart.js.",
    "startDate": "2025-06-07"
  },
  {
    "status": "Done",
    "dueDate": "2025-06-04",
    "title": "Review PR #112",
    "description": "Code review and merge frontend fixes.",
    "startDate": "2025-05-28"
  },
  {
    "status": "Done",
    "dueDate": "2025-06-02",
    "title": "MFA authentication",
    "description": "Add support for OTP-based login.",
    "startDate": "2025-05-23"
  },
  {
    "status": "In Progress",
    "dueDate": "2025-06-17",
    "title": "User role permissions",
    "description": "Restrict views based on user role.",
    "startDate": "2025-06-04"
  },
  {
    "status": "Pending",
    "dueDate": "2025-06-21",
    "title": "Webhook support",
    "description": "Notify external services on data update.",
    "startDate": "2025-06-08"
  },
  {
    "status": "Done",
    "dueDate": "2025-06-05",
    "title": "Refine onboarding flow",
    "description": "Guide new users with a step-by-step wizard.",
    "startDate": "2025-05-30"
  }
];

// Function to categorize tasks by status
function categorizeTasks() {
  const categorized = {
    pending: [],
    inProgress: [],
    done: []
  };

  tasks.forEach(task => {
    switch(task.status.toLowerCase()) {
      case 'pending':
        categorized.pending.push(task);
        break;
      case 'in progress':
        categorized.inProgress.push(task);
        break;
      case 'done':
        categorized.done.push(task);
        break;
    }
  });

  return categorized;
}

// Function to render tasks dynamically
function renderTasks() {
  const categorizedTasks = categorizeTasks();
  
  // Clear existing tasks (keep the hardcoded ones or replace them)
  const allTasksColumn = document.getElementById('column_1');
  const inProgressColumn = document.getElementById('column_2');
  const doneColumn = document.getElementById('column_3');

  // Clear columns but keep headers
  if (allTasksColumn) {
    const header = allTasksColumn.querySelector('h3');
    allTasksColumn.innerHTML = '';
    allTasksColumn.appendChild(header);
  }

  if (inProgressColumn) {
    const header = inProgressColumn.querySelector('h3');
    inProgressColumn.innerHTML = '';
    inProgressColumn.appendChild(header);
  }

  if (doneColumn) {
    const header = doneColumn.querySelector('h3');
    doneColumn.innerHTML = '';
    doneColumn.appendChild(header);
  }

  // Render Pending tasks in "All Tasks" column
  categorizedTasks.pending.forEach(task => {
    const taskElement = createTaskElement(task, 'task-card1');
    if (allTasksColumn) allTasksColumn.appendChild(taskElement);
  });

  // Render In Progress tasks
  categorizedTasks.inProgress.forEach(task => {
    const taskElement = createTaskElement(task, 'task-card');
    if (inProgressColumn) inProgressColumn.appendChild(taskElement);
  });

  // Render Done tasks
  categorizedTasks.done.forEach(task => {
    const taskElement = createTaskElement(task, 'task-card');
    if (doneColumn) doneColumn.appendChild(taskElement);
  });
}

// Function to create a task element
function createTaskElement(task, className) {
  const taskDiv = document.createElement('div');
  taskDiv.className = className;
  taskDiv.innerHTML = `
    <div style="font-weight: bold; margin-bottom: 5px;">${task.title}</div>
    <div style="font-size: 12px; color: #666; margin-bottom: 3px;">Due: ${formatDate(task.dueDate)}</div>
    <div style="font-size: 11px; color: #888;">${task.description}</div>
  `;
  
  // Add click event to show more details
  taskDiv.addEventListener('click', () => showTaskDetails(task));
  
  return taskDiv;
}

// Function to format date
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  });
}

// Function to show task details (optional enhancement)
function showTaskDetails(task) {
  alert(`Task: ${task.title}\nStatus: ${task.status}\nDue Date: ${formatDate(task.dueDate)}\nDescription: ${task.description}\nStart Date: ${formatDate(task.startDate)}`);
}

// Function to update pie chart based on actual data
function updatePieChart() {
  const categorizedTasks = categorizeTasks();
  const total = tasks.length;
  
  if (total === 0) return;
  
  const pendingPercent = (categorizedTasks.pending.length / total) * 100;
  const inProgressPercent = (categorizedTasks.inProgress.length / total) * 100;
  const donePercent = (categorizedTasks.done.length / total) * 100;
  
  const pieChart = document.querySelector('.pie-chart');
  if (pieChart) {
    pieChart.style.background = `conic-gradient(
      #f87171 0% ${pendingPercent}%,
      #60a5fa ${pendingPercent}% ${pendingPercent + inProgressPercent}%,
      #34d399 ${pendingPercent + inProgressPercent}% 100%
    )`;
  }
  
  // Update legend with actual counts
  const legend = document.querySelector('.legend');
  if (legend) {
    legend.innerHTML = `
      <div><div class="color-box todo"></div> Pending (${categorizedTasks.pending.length})</div>
      <div><span class="color-box inprogress"></span> In Progress (${categorizedTasks.inProgress.length})</div>
      <div><span class="color-box done"></span> Done (${categorizedTasks.done.length})</div>
    `;
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  renderTasks();
  updatePieChart();
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { tasks, categorizeTasks, renderTasks, updatePieChart };
}