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
