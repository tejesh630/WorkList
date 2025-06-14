const tasks = `[
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
]`;

const obj = JSON.parse(tasks);

console.log(obj.length)

console.log(obj[24].title);

