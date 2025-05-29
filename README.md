# Ex-2025: Predictive Modeling of CNC Operator Tasks

This repository contains the code for my 2025 bachelor’s thesis, which focuses on predicting operator-dependent tasks (e.g., tool changes, quality checks) in CNC production lines using machine learning. Due to limitations in MES data, the project also includes a custom simulation to generate realistic machine signals.

## Project Overview

- 📈 Machine learning models: TCN, LSTM, and CNN
- 🏭 Simulation environment for generating synthetic production signals
- 🖥️ Web-based dashboard for visualizing machine and operator states
- 📊 Evaluation metrics: macro/micro F1, precision, recall
- 🔎 Hyperparameter tuning via grid search

## Project Structure

```md
- 📂 `simulation/`  
  - 📂 `components/`      – Python classes for machine logic, automation, operator, etc.  
  - 📂 `logs/`            – Output logs from simulation runs  
  - 📄 `config.py`        – Configuration for simulation behavior  
  - 📄 `main.py`          – Entry point for running the simulation  

- 📂 `dashboard_app/`  
  - 📂 `node_modules/`    – Auto-installed packages (do not modify manually)    
  - 📂 `public/`          – Static assets and the main HTML file 
  - 📂 `src/`             – All source code for the dashboard UI, including:
        - `components/`   – Modular React components for charts, tables, and task views  
        - `integration/`  – Components handling backend interaction and data sync 
        - `model/`        – Structures for representing simulation and ML model states
        - `pages/`        – Page-level views and routing targets 
        - `redux/`        – Redux state management logic (slices, actions, reducers) 
        - `styles/`       – CSS and styling utilities 
        - `util/`         – Helper functions and utilities for formatting, validation, etc. 
- 📂 `machinelearning/`  
  (- 📂 `models/`          – Implementations of TCN, LSTM, and CNN ) 
  (- 📂 `evaluation/`      – Metrics, plots, result storage)  
  - 📄 `model_factory.py` – Training and evaluation pipeline  
```


## Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/Ex-2025.git
   cd Ex-2025
2. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt
4. **Run the simulation (optional):** 
   ```bash
   cd simulation
   python main.py
   
5. **Start the dashboard (optional):**
    ```bash
    cd userinterface
    npm install
    npm run dev

Notes

- Simulation logic prioritizes machine behavior and treats tasks atomically.
- Operator task decisions and automation delays are simplified to reflect realistic but manageable assumptions.
- Some configuration files and output data are not included due to size or privacy constraints.

Author

Kaan Özsan

Bachelor of Science in Computer Science

KTH Royal Institute of Technology, 2025
