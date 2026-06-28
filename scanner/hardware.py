import platform
import socket
import psutil


def get_system_info():

    return {

        "hostname": socket.gethostname(),

        "os": platform.system(),

        "release": platform.release(),

        "architecture": platform.machine(),

        "processor": platform.processor(),

        "cores": psutil.cpu_count(),

        "ram": round(psutil.virtual_memory().total / (1024**3),2)

    }

