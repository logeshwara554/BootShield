# BootShield

A web-based cybersecurity system monitoring platform built with **Python** and **Flask** that provides real-time system information, hardware monitoring, and security insights. BootShield is designed as a prototype security dashboard to help users understand the health and security status of their systems.

---

# Overview

BootShield is a lightweight security monitoring application that collects system information and displays it through an interactive dashboard. The platform demonstrates how cybersecurity tools can monitor hardware resources, operating system details, and security-related information in one centralized interface.

The project was developed to strengthen practical skills in Python, Flask, cybersecurity, and dashboard development.

---

# Features

* System Information Dashboard
* Memory (RAM) Monitoring
* CPU Usage Monitoring
* Disk Usage Analysis
* Hardware Information Display
* Operating System Details
* Interactive Dashboard
* Real-Time Resource Monitoring
* Modern Responsive User Interface

---

# Technologies Used

## Backend

* Python
* Flask
* psutil

## Frontend

* HTML5
* CSS3
* JavaScript

## Libraries

* psutil
* Flask

---

# Project Structure

```text
BootShield/
│
├── app.py
├── requirements.txt
├── scanner/
│   ├── hardware.py
│   ├── monitor.py
│   └── system.py
├── static/
│   ├── css/
│   ├── js/
│   └── images/
├── templates/
├── screenshots/
└── README.md
```

---

# Installation

## Clone the repository

```bash
git clone https://github.com/logeshwara554/BootShield.git
```

## Navigate to the project

```bash
cd BootShield
```

## Create a virtual environment

```bash
python -m venv venv
```

## Activate the virtual environment

### Linux/macOS

```bash
source venv/bin/activate
```

### Windows

```bash
venv\Scripts\activate
```

## Install dependencies

```bash
pip install -r requirements.txt
```

## Run the application

```bash
python app.py
```

Open your browser:

```text
http://127.0.0.1:5000
```

---

# Dashboard

The dashboard displays important system information, including:

* CPU Utilization
* Memory Usage
* Disk Usage
* Operating System Information
* Processor Details
* System Uptime
* Hardware Overview

The dashboard updates dynamically, providing a simple demonstration of how security monitoring tools present live system information.

---

# Project Objectives

* Learn Python system programming
* Build a cybersecurity dashboard
* Monitor hardware resources
* Practice Flask web development
* Understand basic host monitoring concepts
* Create an interactive security-focused application

---

# Future Enhancements

* Real-Time Threat Detection
* Suspicious Process Monitoring
* Network Connection Monitoring
* Malware Signature Detection
* Security Event Logging
* Email & Desktop Alerts
* File Integrity Monitoring
* Windows Event Log Integration
* Linux Syslog Integration
* Authentication & User Roles
* Historical Performance Charts
* PDF Security Reports

---

# Screenshots

Application screenshots are available in the `screenshots/` folder.

---

# Use Cases

BootShield can be used as a prototype for:

* Security Operations Center (SOC) dashboards
* Endpoint Monitoring
* System Health Monitoring
* Cybersecurity Demonstrations
* Academic Projects
* Learning Flask and Python System Programming

---

# Disclaimer

This project is intended for educational purposes and cybersecurity portfolio demonstrations. It is not a replacement for enterprise-grade endpoint detection and response (EDR) or security monitoring solutions.

---

# Author

**Logeshwara**

**Aiswarya N**

GitHub: https://github.com/logeshwara554
GitHub: https://github.com/N-Aiswarya149

---

# License

This project is released for educational and portfolio purposes.
