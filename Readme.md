# Smart Hostel Management System

## 📌 Project Overview

**Smart Hostel Management System** is a web-based application designed to simplify and digitize hostel administration. It provides separate dashboards for students, parents, and wardens, allowing them to manage hostel-related activities efficiently through a centralized platform.

The system integrates a responsive frontend with a Spring Boot backend using REST APIs to handle data and operations dynamically.

## 🎯 Objectives

- Digitize hostel management activities.
- Improve communication between students, parents, and wardens.
- Simplify attendance and gate-pass management.
- Manage hostel fees and payment status.
- Improve mess management and reduce food wastage.
- Provide emergency assistance through SOS alerts.
- Manage complaints, cleaning requests, and laundry tracking.

## 👥 User Roles

### 1. Student Dashboard
Students can:
- View and edit their profile.
- Check campus presence status.
- Apply for gate passes.
- Track gate-pass approval status.
- Generate and use daily mess tokens.
- View the daily mess menu.
- Submit food feedback.
- Opt out of meals to reduce food wastage.
- Request food delivery during sick leave.
- View hostel fees and deadlines.
- Pay or mark fees as paid.
- Submit complaints.
- Track laundry progress.
- Request room cleaning.
- Trigger emergency SOS alerts.

### 2. Parent Dashboard
Parents can:
- Monitor their ward's hostel presence.
- View alerts and notifications.
- Check gate-pass history.
- Monitor gate-pass approval and return status.
- View fee details.
- Contact the warden.

### 3. Warden Dashboard
Wardens can:
- Manage student information.
- Monitor attendance.
- Upload daily attendance.
- Approve or reject gate-pass requests.
- Track students leaving and returning to campus.
- Manage complaints and their statuses.
- Monitor emergency alerts.
- Manage hostel fees and deadlines.
- Handle sick-food requests.
- Manage mess menu and meal-related activities.
- Manage laundry and cleaning requests.
- View and respond to parent messages.

## ✨ Features

- Role-based dashboards
- Responsive user interface
- REST API integration
- Student attendance tracking
- Gate-pass application and approval
- Daily mess token management
- Mess menu and food feedback
- Meal opt-out functionality
- Fee management and deadline notifications
- Complaint management
- Laundry progress tracking
- Room cleaning requests
- Emergency SOS system
- Parent monitoring dashboard
- Warden administration dashboard
- Profile management
- Notice board

## 🛠️ Technologies Used

### Frontend
- HTML5
- JavaScript
- Tailwind CSS
- Font Awesome

### Backend
- Java
- Spring Boot
- REST API

### Communication
- HTTP
- JSON

## 🏗️ System Architecture

The system follows a client-server architecture.

1. The user interacts with the frontend web application.
2. JavaScript sends HTTP requests to the backend using REST APIs.
3. The Spring Boot backend processes the requests.
4. The backend returns data in JSON format.
5. The frontend updates the dashboard dynamically.

```text
              ┌───────────────────────────┐
              │           User            │
              │ Student / Parent / Warden │
              └─────────────┬─────────────┘
                            │
                            ▼
              ┌───────────────────────────┐
              │      Frontend UI          │
              │ HTML, JavaScript, Tailwind│
              └─────────────┬─────────────┘
                            │
                       REST API
                    HTTP / JSON
                            │
                            ▼
              ┌───────────────────────────┐
              │    Spring Boot Backend    │
              │      REST Endpoints       │
              └─────────────┬─────────────┘
                            │
                            ▼
              ┌───────────────────────────┐
              │       Data Storage        │
              │ Backend-managed data      │
              └───────────────────────────┘
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- Java Development Kit (JDK)
- Spring Boot backend application
- Backend configured to run on port `8080`
- Internet connection for CDN-based frontend libraries

### Frontend Setup

1. Download or clone the project.
2. Save the frontend HTML file.
3. Open the HTML file in a browser or run it using a local web server.
4. Ensure the backend is running before logging in.

### Backend Setup

Start the Spring Boot backend and ensure it is accessible at:

```text
http://localhost:8080
```

The frontend communicates with the backend using the API base URL:

```javascript
const API_BASE = 'http://localhost:8080/api';
```

If the backend is hosted on a different address or port, update this URL in the frontend code.

## 🔗 API Integration

The frontend communicates with the backend using REST API endpoints.

| HTTP Method | Purpose |
|---|---|
| GET | Retrieve data |
| POST | Create or submit data |
| PUT | Update existing data |
| PATCH | Update specific fields or statuses |
| DELETE | Delete data |

### Major API Endpoints

| Endpoint | Description |
|---|---|
| `/api/auth/login` | User login |
| `/api/students` | Student information |
| `/api/warden-profile` | Warden profile |
| `/api/gate-passes` | Gate-pass management |
| `/api/complaints` | Complaint management |
| `/api/fees` | Hostel fee management |
| `/api/alerts` | Alerts and notifications |
| `/api/sick-food-requests` | Sick-food requests |
| `/api/meal-opt-outs` | Meal opt-out requests |
| `/api/food-feedback` | Food feedback |
| `/api/laundry` | Laundry information |
| `/api/mess-menu` | Mess menu |
| `/api/cleaning-requests` | Room cleaning requests |
| `/api/parent-messages` | Parent-warden communication |

## 🔐 Login System

The application provides login options for:

- Student
- Parent
- Warden

The login interface allows users to select their role and enter their login ID and password.

The frontend sends the login request to the backend:

```text
POST /api/auth/login
```

The backend returns the current user and role, which are used to load the corresponding dashboard.

> The frontend code uses the backend login endpoint. Actual authentication and credential validation depend on the backend implementation.

## 📱 User Interface

The application includes:

- Landing page
- Notice board
- Login modal
- Student dashboard
- Parent dashboard
- Warden dashboard
- Profile modal
- Role-specific navigation
- Dynamic dashboard sections

## ⚙️ Error Handling

The application includes error handling for API operations.

- Backend connection failures are displayed to the user.
- Failed API requests display appropriate error messages.
- Successful operations refresh dashboard data.
- HTTP error responses are handled by the API request utility.

## 🔄 Data Refresh

The application loads data from the backend and maintains a local JavaScript cache for dashboard rendering.

Data is refreshed after operations such as:

- Attendance updates
- Gate-pass submissions and approvals
- Fee payments
- Complaint submissions
- Mess token scans
- Food requests
- Meal opt-outs
- Feedback submissions
- Cleaning requests
- Parent messages

## 🔮 Future Enhancements

- Secure authentication with password encryption.
- Role-based authorization.
- Real QR code generation and scanning.
- Online payment gateway integration.
- Real-time notifications.
- Email and SMS alerts.
- Mobile application integration.
- Analytics and reporting.
- Improved security and data validation.
- Production deployment and hosting.

## 📄 License

This project is developed for educational and academic purposes.

---

**Smart Hostel Management System**  
*Making hostel administration smarter, simpler, and more efficient.*

