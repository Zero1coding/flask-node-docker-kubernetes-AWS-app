# Flask Backend and Express Frontend on Kubernetes (Minikube)

This project deploys a Flask backend and an Express (Node.js) frontend on a local Kubernetes cluster using Minikube. The application was originally containerized using Docker and is now orchestrated using Kubernetes Deployments and Services.

## Project Overview
- Flask backend runs on port 5000
- Express frontend runs on port 3000
- Kubernetes Deployments manage application pods
- Kubernetes Services enable communication and external access
- Minikube is used for local Kubernetes execution

## Project Structure
kubernetes-flask-node-app/
├── backend/
│   ├── app.py
│   ├── Dockerfile
│   └── requirements.txt
├── frontend/
│   ├── server.js
│   ├── package.json
│   └── views/index.ejs
├── k8s/
│   ├── flask-deployment.yaml
│   ├── flask-service.yaml
│   ├── node-deployment.yaml
│   └── node-service.yaml
└── README.md

## Technologies Used
- Python (Flask)
- Node.js (Express)
- Docker
- Kubernetes
- Minikube
- kubectl

## Run Instructions 

Follow the steps below in order. All commands can be run from the project root directory.

```bash
# STEP 1: Start Minikube using Docker driver
# This creates a local Kubernetes cluster
minikube start --driver=docker

# STEP 2: Verify Kubernetes node is running
# Status should be Ready
kubectl get nodes

# STEP 3: Configure Docker to use Minikube environment
# This ensures Docker images are built inside Minikube
minikube -p minikube docker-env

# If you are using Windows PowerShell, run this command instead:
# & minikube -p minikube docker-env | Invoke-Expression

# STEP 4: Build Docker image for Flask backend
docker build -t flask-backend:1.0 ./backend

# STEP 5: Build Docker image for Express frontend
docker build -t node-frontend:1.0 ./frontend

# STEP 6: Deploy all Kubernetes resources (Deployments and Services)
kubectl apply -f k8s/

# STEP 7: Verify that pods are running
# Status should be Running
kubectl get pods

# STEP 8: Verify deployments
kubectl get deployments

# STEP 9: Verify services
# Frontend service should be of type NodePort
kubectl get services

# STEP 10: Access the frontend application in browser
# This command opens the application automatically
minikube service node-frontend-service
```
