# Setup Inazuma Backend

## 📋 En tu primer ordenador (una sola vez)

### 1. Crear el entorno virtual
```bash
python -m venv venv
```

### 2. Activar el entorno virtual
- **Windows (PowerShell):**
  ```powershell
  venv\Scripts\Activate.ps1
  ```
- **Windows (CMD):**
  ```cmd
  venv\Scripts\activate
  ```
- **Mac/Linux:**
  ```bash
  source venv/bin/activate
  ```

### 3. Instalar dependencias
```bash
pip install -r requirements.txt
```

### 4. Crear migraciones de la base de datos
```bash
python manage.py makemigrations
```

### 5. Aplicar migraciones
```bash
python manage.py migrate
```

### 6. Crear superusuario (admin)
```bash
python manage.py createsuperuser
```

### 7. Importar datos iniciales
```bash
python importar_jugadores.py
python importar_tecnicas.py
python importar_equipos.py
```

### 8. Arrancar el servidor
```bash
python manage.py runserver
```

---

## 🔄 En otro ordenador (después de clonar desde GitHub)

Una vez hayas hecho `git clone` del proyecto:

### 1. Crear el entorno virtual
```bash
python -m venv venv
```

### 2. Activar el entorno virtual
- **Windows (PowerShell):**
  ```powershell
  venv\Scripts\Activate.ps1
  ```
- **Windows (CMD):**
  ```cmd
  venv\Scripts\activate
  ```
- **Mac/Linux:**
  ```bash
  source venv/bin/activate
  ```

### 3. Instalar dependencias
```bash
pip install -r requirements.txt
```

### 4. Aplicar migraciones
```bash
python manage.py migrate
```

### 5. Crear superusuario (admin)
```bash
python manage.py createsuperuser
```

### 6. Importar datos (si es necesario)
```bash
python importar_jugadores.py
python importar_tecnicas.py
python importar_equipos.py
```

### 7. Arrancar el servidor
```bash
python manage.py runserver
```

---

## 🐘 Cuando instales PostgreSQL

### 1. Instalar el conector de PostgreSQL para Python
```bash
pip install psycopg2-binary
```

### 2. Crear un archivo `.env` en la raíz del proyecto
```bash
# .env
DB_NAME=inazuma_db
DB_USER=postgres
DB_PASSWORD=tu_contraseña
DB_HOST=localhost
DB_PORT=5432
```

### 3. Modificar `settings.py` para usar PostgreSQL

En `inazuma_backend/settings.py`, cambiar:

```python
# ANTES (SQLite)
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# DESPUÉS (PostgreSQL)
import os
from dotenv import load_dotenv

load_dotenv()

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.getenv('DB_NAME', 'inazuma_db'),
        'USER': os.getenv('DB_USER', 'postgres'),
        'PASSWORD': os.getenv('DB_PASSWORD'),
        'HOST': os.getenv('DB_HOST', 'localhost'),
        'PORT': os.getenv('DB_PORT', '5432'),
    }
}
```

### 4. Instalar dependencias actualizadas
```bash
pip install -r requirements.txt
pip install psycopg2-binary
```

### 5. Aplicar migraciones con PostgreSQL
```bash
python manage.py migrate
```

### 6. Crear superusuario en PostgreSQL
```bash
python manage.py createsuperuser
```

### 7. Importar datos
```bash
python importar_jugadores.py
python importar_tecnicas.py
python importar_equipos.py
```

---

## 📝 URLs de acceso

- **Admin:**  http://127.0.0.1:8000/admin
- **Personajes:**  http://127.0.0.1:8000/api/personajes/
- **Técnicas:**   http://127.0.0.1:8000/api/tecnicas/
- **Equipos:**    http://127.0.0.1:8000/api/equipos/

---

## 🔧 Comandos útiles diarios

```bash
# Activar entorno virtual (se hace primero siempre)
venv\Scripts\activate  # Windows

# Arrancar servidor
python manage.py runserver

# Crear migraciones cuando cambias un modelo
python manage.py makemigrations

# Aplicar migraciones a la BD
python manage.py migrate

# Consola interactiva de Django
python manage.py shell

# Ejecutar importadores
python importar_jugadores.py
python importar_tecnicas.py
python importar_equipos.py
```

---

## ⚠️ IMPORTANTE

- **Nunca** subas a GitHub: `venv/`, `db.sqlite3` (en SQLite), archivos `.env`
- Esto ya está en `.gitignore`, pero verifica que esté bien
- El `requirements.txt` se sube a GitHub para que otros puedan instalar las dependencias fácilmente

---

## 🏆 Sistema de Torneos

### 📊 Descripción General

El sistema de torneos permite a los usuarios jugar un torneo completo de 5 rondas (16 → 8 → 4 → 2 → 1 = Final).

**Estructura del torneo:**
- **Ronda 1:** Dieciseisavos (16 equipos → 8 ganadores)
- **Ronda 2:** Octavos (8 equipos → 4 ganadores)
- **Ronda 3:** Cuartos (4 equipos → 2 ganadores)
- **Ronda 4:** Semifinal (2 equipos → 1 ganador)
- **Ronda 5:** Final (2 equipos → 1 campeón)

### 🎮 Flujo de Uso

#### 1. **Crear un Torneo**
```
POST /partidos/crear-torneo/
{
  "nombre_equipo": "Mi Equipo Guardado"
}

Respuesta (201):
{
  "torneo_id": 123,
  "nombre_equipo": "Mi Equipo",
  "cuadro": {
    "ronda_1": [
      {
        "local": {"nombre": "Mi Equipo", "es_usuario": true},
        "visitante": {"nombre": "Rival 1", "es_real": true},
        "jugado": false
      },
      ...
    ]
  }
}
```

**Qué pasa:**
- Se valida que el usuario tenga un equipo guardado
- Se sortean 16 equipos (8 reales de la BD + 8 misteriosos)
- El usuario se coloca aleatoriamente en la posición
- Se crea el `Torneo` con estado `en_curso`
- Se inicializa `EstadisticasTorneo` (vacía)

---

#### 2. **Ver Cuadro Actual y Próximo Rival**
```
GET /partidos/torneo/123/

Respuesta (200):
{
  "torneo_id": 123,
  "estado": "en_curso",
  "ronda_actual": 1,
  "cuadro": {...cuadro con todos los enfrentamientos...},
  "proximo_rival": {
    "local": "Mi Equipo",
    "visitante": "Equipo Rival",
    "es_usuario_local": true
  },
  "estadisticas": {
    "partidos_jugados": 0,
    "partidos_ganados": 0,
    "goles_marcados": 0,
    "goles_recibidos": 0,
    "ronda_alcanzada": 1,
    "campeon": false,
    "goleadores": [],
    "porteros": [],
    "regates": []
  }
}
```

**Información útil:**
- `proximo_rival`: Te dice contra quién jugarás a continuación
- `cuadro`: Muestra todos los enfrentamientos de todas las rondas
- `estadisticas`: Acumuladas de todo el torneo

---

#### 3. **Simular Partido**
```
POST /partidos/torneo/123/simular/
{
  "nombre_equipo": "Mi Equipo"
}

Respuesta (200):
{
  "partido_id": 456,
  "equipo_local": "Mi Equipo",
  "equipo_visitante": "Equipo Rival",
  "goles_local": 2,
  "goles_visitante": 1,
  "resultado": "victoria",
  "eventos": [
    {
      "minuto": 12,
      "tipo": "regate",
      "equipo": "Mi Equipo",
      "jugador": "Gohan",
      "tecnica": {"regate": {"nombre": "Torbellino Encantador", "poder": 85}},
      "descripcion": "min 12' — Gohan supera a su rival con Torbellino Encantador!"
    },
    {
      "minuto": 25,
      "tipo": "tiro",
      "equipo": "Mi Equipo",
      "jugador": "Tsubasa",
      "tecnica": {
        "tiro": {"nombre": "Patada Ciclónica", "poder": 90},
        "parada": null
      },
      "descripcion": "min 25' ⚽ ¡GOL! Tsubasa marca con Patada Ciclónica!"
    },
    ...
  ],
  "estadisticas_partido": {
    "goleadores": [
      {"nombre": "Tsubasa", "goles": 2},
      {"nombre": "Gohan", "goles": 0}
    ],
    "porteros": [
      {"nombre": "Portero Rival", "paradas": 5}
    ],
    "regates": [
      {"nombre": "Gohan", "regates": 3}
    ]
  },
  "torneo_estado": "en_curso",
  "ronda_actual": 1,
  "es_campeon": false,
  "proximo_rival": {
    "local": "Mi Equipo",
    "visitante": "Equipo Siguiente",
    "es_usuario_local": true
  }
}
```

**Qué pasa automáticamente:**
- Se simula el partido usando el motor de simulación
- Se generan eventos minuto a minuto (regate, robo, ocasión, tiro, penaltis)
- Se calculan estadísticas del partido (goles, paradas, regates)
- **Si ganas:** Avanzas a la siguiente ronda
- **Si pierdes:** El torneo termina y se marca como `finalizado`
- Se guardan todas las estadísticas en `EstadisticasTorneo`
- Se devuelve el `proximo_rival` si sigues en carrera

---

#### 4. **Continuar al Siguiente Partido**
Después de ver los resultados, el usuario:
1. Hace `GET /partidos/torneo/123/` para ver el cuadro actualizado
2. Lee el `proximo_rival` del GET
3. Vuelve a hacer `POST simular/` para el siguiente partido

**Esto se repite hasta:**
- ✅ **Ganar 5 partidos consecutivos** → `es_campeon: true` → 🏆 Campeón
- ❌ **Perder un partido** → `torneo_estado: "finalizado"` → 💔 Eliminado

---

### 📈 Estadísticas Guardadas

Cada vez que se juega un partido, se guardan automáticamente en `EstadisticasTorneo`:

| Campo | Descripción |
|-------|-------------|
| `partidos_jugados` | Total de partidos |
| `partidos_ganados` | Total de victorias |
| `goles_marcados` | Suma de todos los goles |
| `goles_recibidos` | Suma de todos los goles recibidos |
| `ronda_alcanzada` | Última ronda completada |
| `campeon` | `true` si ganó el torneo |
| `goleadores` | Dict con top 5 goleadores |
| `porteros` | Dict con top 5 paradas |
| `regates` | Dict con top 5 regates |

**Ejemplo:**
```json
{
  "goleadores": [
    {"nombre": "Tsubasa", "goles": 5},
    {"nombre": "Gohan", "goles": 3}
  ],
  "porteros": [
    {"nombre": "Portero A", "paradas": 12}
  ],
  "regates": [
    {"nombre": "Gohan", "regates": 8},
    {"nombre": "Endou", "regates": 4}
  ]
}
```

---

### 🎯 Endpoints Principales

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `POST` | `/partidos/crear-torneo/` | Crear nuevo torneo |
| `GET` | `/partidos/torneo/{id}/` | Ver estado y próximo rival |
| `POST` | `/partidos/torneo/{id}/simular/` | Simular un partido |
| `GET` | `/partidos/torneos/historial/` | Ver torneos anteriores |

---

### 🔄 Flujo Completo de Ejemplo

```
1. Usuario: POST /partidos/crear-torneo/
   → Recibe: torneo_id=123, cuadro con ronda_1
   
2. Usuario: GET /partidos/torneo/123/
   → Ve: próximo_rival = "Mi Equipo vs Rival 1"
   
3. Usuario: POST /partidos/torneo/123/simular/
   → Ve: eventos de la simulación, resultado 2-1 VICTORIA
   → Nuevo estado: ronda_actual=2
   
4. Usuario: GET /partidos/torneo/123/
   → Ve: próximo_rival = "Mi Equipo vs Ganador Semifinal"
   
5. Repite 3-4 hasta ganar o perder...
   
6. Si gana 5 veces: es_campeon=true, torneo_estado="finalizado"
   → Ve: estadísticas finales, goleadores, porteros, regates
```

---

### 💾 Base de Datos

**Modelos principales:**

- `Torneo`: Contiene el cuadro, estado, ronda actual
- `Partido`: Registro de cada partido simulado
- `EstadisticasTorneo`: Acumuladas del usuario en el torneo

**Estado del torneo:**
- `en_curso`: Usuario aún jugando
- `finalizado`: Torneo terminado (ganó o perdió)

---

### 🧪 Testing Manual

```bash
# 1. Activar entorno y arrancar servidor
venv\Scripts\activate
python manage.py runserver

# 2. En Postman/Insomnia:
# Crear torneo
POST http://localhost:8000/partidos/crear-torneo/

# Ver estado
GET http://localhost:8000/partidos/torneo/{id}/

# Simular partido
POST http://localhost:8000/partidos/torneo/{id}/simular/

# Historial
GET http://localhost:8000/partidos/torneos/historial/
```
