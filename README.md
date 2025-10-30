## 📦 Installation & Deployment

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/k8s-flask-express.git
cd k8s-flask-express
```

### 2. Start Minikube
```bash
minikube start --driver=docker
```

### 3. Point Docker to Minikube
```bash
eval $(minikube docker-env)
```

### 4. Build Docker Images
```bash
# Backend
cd backend
docker build -t express-backend:latest .

# Frontend
cd ../frontend
docker build -t flask-frontend:latest .
cd ..
```

### 5. Deploy to Kubernetes
```bash
kubectl apply -f k8s/backend-deployment.yaml
kubectl apply -f k8s/backend-service.yaml
kubectl apply -f k8s/frontend-deployment.yaml
kubectl apply -f k8s/frontend-service.yaml
```

### 6. Verify Deployment
```bash
kubectl get deployments
kubectl get pods
kubectl get services
```

### 7. Access the Application
```bash
minikube service frontend-service --url
```

Or visit: `http://<minikube-ip>:30080`

## 🧪 Testing
```bash
# Test backend
kubectl port-forward service/backend-service 3000:3000
curl http://localhost:3000/api/message

# Test frontend
kubectl port-forward service/frontend-service 5000:5000
# Open http://localhost:5000 in browser
```

## 📸 Screenshots

Screenshots of the deployment are available in the `screenshots/` directory:
- Minikube status
- kubectl deployments
- kubectl pods
- kubectl services
- Running application

## 🛠️ Technologies Used

- **Frontend**: Flask 3.0.0, Python 3.9
- **Backend**: Express 4.18.2, Node.js 18
- **Containerization**: Docker
- **Orchestration**: Kubernetes, Minikube
- **Languages**: Python, JavaScript

## 📝 Kubernetes Resources

- **Deployments**: 2 replicas each for frontend and backend
- **Services**: 
  - Frontend: NodePort (30080)
  - Backend: ClusterIP (internal)

## 🧹 Cleanup
```bash
# Delete all resources
kubectl delete -f k8s/

# Stop Minikube
minikube stop

# Delete Minikube cluster
minikube delete
```

## 🐛 Troubleshooting

### Pods Not Starting
```bash
kubectl describe pod <pod-name>
kubectl logs <pod-name>
```

### Image Pull Issues
Ensure you're using Minikube's Docker daemon:
```bash
eval $(minikube docker-env)
```

### Service Not Accessible
```bash
kubectl get endpoints
minikube service list
```



## 🙏 Acknowledgments

- Kubernetes Documentation
- Flask Documentation
- Express.js Documentation
- 
