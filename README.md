
# 🚀 Infrastructure Monitoring & Canary Deployment (IaC)

A practical project demonstrating real-time system observability and declarative infrastructure configuration. This project focuses on capturing hardware metrics and defining deployment strategies using industry-standard YAML manifests.

---

### 📂 Repository Architecture

| Component | Path | Technical Responsibility |
| :--- | :--- | :--- |
| 🐍 **Backend** | `/backend` | FastAPI server for hardware metrics collection. |
| ⚛️ **Frontend** | `/frontend` | Next.js dashboard for real-time visualization. |
| 📄 **Docs** | `/docs` | Project documentation and technical snapshots. |
| ☸️ **Infrastructure** | `/*.yaml` | Kubernetes manifests for Ingress & Service setup. |
| 🛡️ **Security** | `.gitignore` | Excludes local environments like `venv` and `node_modules`. |

---

### 🛠 Tools & Technologies Used

*   **Python (FastAPI):** Used to create the backend and the metrics API endpoint.
*   **Next.js:** Used to build the frontend dashboard for live monitoring.
*   **Prometheus:** Used as the monitoring tool to scrape system metrics.
*   **psutil:** Python library used to fetch real-time CPU, RAM, and Disk data.
*   **YAML (Kubernetes Manifests):** Used to define the infrastructure, including Ingress rules for Canary traffic splitting.
*   **Git & GitHub:** Used for version control and project hosting.

---

### 🌟 Key Functional Features

🔹 **Live System Profiling**
Captures and exports hardware utilization data via a dedicated `/metrics` endpoint.

🔹 **Infrastructure as Code (IaC)**
Uses YAML files to define how the application should be deployed and accessed.

🔹 **Canary Strategy Simulation**
Ingress configurations designed to demonstrate how traffic can be split between different versions.

🔹 **Centralized Monitoring**
Prometheus integration to pull data from the backend and monitor system health.

---

### 🚀 How to Run Locally

1️⃣ **Clone the Project**
`git clone https://github.com/anmolkorla111-tech/canary-deployment-monitoring.git`

2️⃣ **Start Backend (API)**
`cd backend && python main.py`

3️⃣ **Start Frontend (UI)**
`cd frontend && npm run dev`

4️⃣ **Check Prometheus**
Ensure Prometheus is running and scraping `localhost:8000`.

---

**Developed by Anmol**  
**Focus:** DevOps, Cloud computing (BCA 2027) 🎓
