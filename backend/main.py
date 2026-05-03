from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from prometheus_client import generate_latest, CONTENT_TYPE_LATEST, Gauge
from fastapi.responses import Response
import random
import psutil

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


CPU_USAGE = Gauge('system_cpu_usage', 'Actual CPU usage in percent')
RAM_USAGE = Gauge('system_ram_usage', 'Actual RAM usage in percent')

@app.get("/metrics")
def metrics():
    
    CPU_USAGE.set(psutil.cpu_percent())
    RAM_USAGE.set(psutil.virtual_memory().percent)
    return Response(generate_latest(), media_type=CONTENT_TYPE_LATEST)

@app.get("/api/stats")
async def get_stats():
    v1_load = random.randint(80, 95)
    v2_load = 100 - v1_load
    return {
        "v1": {"load": v1_load, "status": "ACTIVE_STABLE", "latency": "24ms"},
        "v2": {"load": v2_load, "status": "TESTING_V2", "latency": "42ms"},
        "real_metrics": {
            "cpu": psutil.cpu_percent(),
            "ram": psutil.virtual_memory().percent
        }
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
