# Flask Backend and Express Frontend Deployment (AWS & Kubernetes)

This project demonstrates multiple deployment strategies for a Flask backend and an Express (Node.js) frontend application. The application was first containerized using Docker and then deployed using Kubernetes (Minikube) and Amazon Web Services (EC2, ECR, ECS, and VPC).

The same application codebase is reused across all tasks to demonstrate different deployment architectures.

---

## Application Overview

- Flask backend provides REST APIs and MongoDB data storage
- Express frontend provides a web UI and communicates with the backend
- MongoDB Atlas is used as the database
- Docker is used for containerization
- Kubernetes and AWS services are used for orchestration and deployment

Backend Port: **5000**  
Frontend Port: **3000**

---


---

## Technologies Used

- Python (Flask)
- Node.js (Express)
- MongoDB Atlas
- Docker
- Kubernetes (Minikube)
- AWS EC2
- AWS ECR
- AWS ECS (Fargate)
- AWS VPC
- PM2
- GitHub

---

# Task 1: Deploy Flask Backend and Express Frontend on a Single EC2 Instance

## Implementation Details

- One EC2 instance was launched using Amazon Linux
- Backend and frontend code were cloned from GitHub
- Python, Node.js, and required dependencies were installed
- Flask backend runs on port 5000
- Express frontend runs on port 3000
- PM2 is used to manage both backend and frontend processes
- Frontend communicates with backend using `localhost`
- Security Group allows inbound traffic on ports 3000 and 5000
- Application was accessed using the EC2 public IP

## Deployment Verification

- PM2 status showing both services running
- Browser access to frontend URL
- Successful API calls between frontend and backend

---

# Task 2: Deploy Flask Backend and Express Frontend on Separate EC2 Instances

## Implementation Details

- Two EC2 instances were launched:
  - One for Flask backend
  - One for Express frontend
- Backend EC2 exposes port 5000
- Frontend EC2 exposes port 3000
- Frontend configured to use backend EC2 public IP
- PM2 used on both instances for process management
- Security Groups configured to allow inter-EC2 communication
- MongoDB Atlas used for shared database access

## Deployment Verification

- Backend API accessible via backend EC2 public IP
- Frontend accessible via frontend EC2 public IP
- Successful CRUD operations via frontend UI

---

# Task 3: Deploy Flask Backend and Express Frontend using AWS ECR, ECS, and VPC

## Implementation Details

- Docker images created for backend and frontend
- Images pushed to Amazon ECR repositories:
  - `flask-backend`
  - `node-frontend`
- ECS cluster created using AWS Fargate
- Separate task definitions created for backend and frontend
- ECS services created for both applications
- Services deployed inside the same VPC
- Public IP enabled for ECS tasks
- Security Groups configured for ports 3000 and 5000
- Frontend configured to communicate with backend service IP
- MongoDB Atlas used for database storage
- Services stopped after verification to avoid additional cost

## Deployment Verification

- ECS services in running state
- Tasks successfully pulling images from ECR
- Application accessible via ECS public IP
- Backend API responding correctly

---

## GitHub Repository

GitHub repository contains:
- Source code for backend and frontend
- Dockerfiles
- Kubernetes manifests
- AWS deployment configuration
- This README documentation

---

## Submission Notes

- All three tasks use the same project codebase
- Different deployment strategies are demonstrated without code duplication
- Screenshots included for:
  - Running applications
  - PM2 status
  - Kubernetes deployments
  - ECS services and tasks
- EC2 and ECS services were stopped after testing to minimize AWS cost

---

## Conclusion

This project demonstrates end-to-end deployment of a full-stack application using Docker, Kubernetes, and AWS services. It highlights single-node deployment, distributed EC2 deployment, and fully managed container orchestration using ECS and ECR.



