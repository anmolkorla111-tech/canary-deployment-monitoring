Canary Deployment & Infrastructure Monitoring 🚀
A comprehensive DevOps-driven project designed to monitor system health and manage traffic distribution using Canary deployment strategies. This project was developed as part of the BCA (Bachelor of Computer Applications) curriculum.

🏗 Project Architecture
The system is divided into three core layers:

Metrics Layer: Uses Python's psutil library to capture real-time CPU, RAM, and Disk utilization.

Monitoring Layer: Prometheus scrapes these metrics and provides a centralized view of infrastructure health.

Deployment Layer: Kubernetes-ready YAML configurations manage "Canary" vs "Stable" service traffic.

🛠 Technical Stack
Backend: FastAPI (Python) - High-performance asynchronous API for data streaming.

Frontend: Next.js (Tailwind CSS) - Modern dashboard for real-time visualization.

DevOps Tools: Prometheus, Jenkins (for CI/CD pipeline simulation), and Git/GitHub.

Infrastructure: Kubernetes YAMLs (Ingress, Service, and Deployment manifests).

📊 Core Functionalities
Real-time Monitoring: Captures system hardware metrics every second.

Infrastructure as Code (IaC): All deployment rules are defined in YAML files for version-controlled infrastructure.

Traffic Management: Configured Ingress rules to demonstrate how traffic splits between different versions of an application.

📂 Repository Structure
/backend: Contains the FastAPI application and metrics logic.

/frontend: Contains the Next.js dashboard source code.

/docs: Documentation and technical references.

Root Folder: Contains all Kubernetes and deployment YAML files.

🚀 Getting Started
Prerequisites: Ensure Python 3.x and Node.js are installed.

Launch Backend: Run python main.py within the backend directory.

Launch Frontend: Run npm run dev to start the monitoring dashboard.

Prometheus: Start the Prometheus service to begin scraping endpoint data.

Developed by Anmol | Expected Graduation: 2027
