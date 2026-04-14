# vitalAi
```graph TD
    %% -- Data Sources & Ingestion --
    subgraph Data_Source ["1. Data Layer (MIMIC-IV)"]
        RawData[(MIMIC-IV <br/> GCS/Local)]
        DemoData[(MIMIC-IV Demo <br/> Local CSV)]
    end

    %% -- Offline Training Pipeline --
    subgraph Batch_Layer ["2. Batch Layer (Offline Training)"]
        direction TB
        IngestEngine[Python ETL <br/> Pandas/Spark]
        FeatStore[Feature Engineering <br/> Temporal Windows/NEWS2]
        ModelTrain[Model Training <br/> PyTorch/XGBoost]
        SHAPGen[Explainability Engine <br/> SHAP]
        ModelReg[(Model Registry <br/> MLflow/S3)]
    end

    %% -- Online Prediction Serving --
    subgraph Serving_Layer ["3. Serving Layer (Real-time Simulation)"]
        direction TB
        TimeSeriesDB[(TimeSeries DB <br/> InfluxDB/Postgres)]
        APIServer[Backend API <br/> FastAPI]
        Cache[Cache <br/> Redis]
    end

    %% -- Presentation --
    subgraph Presentation_Layer ["4. Clinician Interface"]
        direction RL
        Dashboard[React Dashboard <br/> Tailwind/Recharts]
    end

    %% -- Connections --
    RawData --> IngestEngine
    DemoData --> IngestEngine
    IngestEngine --> FeatStore
    FeatStore --> ModelTrain
    ModelTrain --> SHAPGen
    SHAPGen --> ModelReg
    
    ModelReg -.-> APIServer
    TimeSeriesDB <--> APIServer
    APIServer <--> Cache
    APIServer <--> Dashboard

    %% -- Styling --
    classDef main fill:#f9f,stroke:#333,stroke-width:2px;
    classDef db fill:#85C1E9,stroke:#333,stroke-width:1px,rx:10,ry:10;
    classDef api fill:#F9E79F,stroke:#333,stroke-width:1px;
    classDef ui fill:#ABEBC6,stroke:#333,stroke-width:1px;

    class RawData,DemoData,TimeSeriesDB,ModelReg db;
    class APIServer,IngestEngine,ModelTrain api;
    class Dashboard ui;
```
