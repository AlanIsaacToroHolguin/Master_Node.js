# MongoDB Setup Guide (Windows)

En el marco de este **master de Node.js** que estoy estudiando y desarrollando para llevar a cabo varios proyectos, es fundamental dominar **MongoDB** como base de datos.  

Por eso, aquí registro los pasos iniciales que he realizado para instalar, configurar y organizar MongoDB en mi PC, de manera que quede todo claro y documentado.  

Este documento es entonces una guía práctica de cómo he preparado el uso de esta tecnología, con el objetivo de posteriormente **integrarla con Node.js** y poder construir proyectos completos de backend y aplicaciones modernas.

---

## 📌 Instalación en mi PC
- **MongoDB Server:** 8.0.12  
- **Mongosh (Mongo Shell):** 2.5.6  
- **Ruta de instalación:**
  ```
  C:\Program Files\MongoDB\Server\8.0\bin
  ```

---

## 🚀 Archivos importantes
- **`mongod.exe`** → Arranca el servidor de MongoDB (daemon).
- **`mongosh.exe`** → Cliente interactivo para ejecutar comandos en MongoDB.
- **`mongo.exe`** → ⚠️ Ya no existe en MongoDB 8.x (antes era la shell).

---

## ▶️ Cómo iniciar MongoDB

### 1. Arrancar el servidor
Abrir PowerShell y ejecutar:

```powershell
cd "C:\Program Files\MongoDB\Server\8.0\bin"
.\mongod
```

Esto levanta el **servidor** en el puerto `27017`.  
(No cierres esta ventana, quedará mostrando logs).

---

### 2. Conectarse con la shell
Abrir otra terminal (nueva) y ejecutar:

```powershell
cd "C:\Program Files\MongoDB\Server\8.0\bin"
.\mongosh
```

Esto abre el **cliente interactivo** para trabajar con bases de datos.

---

## ⚡ Comandos básicos en `mongosh`

Una vez dentro de la shell (`test>`):

### 🔹 Bases de datos
```javascript
show dbs            // Lista todas las bases de datos
db                  // Muestra la base de datos actual
use myDatabase      // Cambia o crea una base de datos llamada "myDatabase"
```

### 🔹 Colecciones
```javascript
show collections     // Lista todas las colecciones de la BD actual
db.createCollection("users")  // Crea una colección llamada "users"
```

### 🔹 Insertar datos
```javascript
db.users.insertOne({ name: "Alan", age: 20 })
db.users.insertMany([
  { name: "Maria", age: 25 },
  { name: "Pedro", age: 30 }
])
```

### 🔹 Consultar datos
```javascript
db.users.find()                      // Muestra todos los documentos
db.users.find().pretty()             // Muestra con formato legible
db.users.find({ age: 20 })           // Filtra documentos con age = 20
db.users.find({ age: { $gt: 18 } })  // Filtra documentos con age > 18
```

### 🔹 Actualizar datos
```javascript
db.users.updateOne(
  { name: "Alan" }, 
  { $set: { age: 21 } }
)

db.users.updateMany(
  { age: { $lt: 30 } }, 
  { $set: { status: "young" } }
)
```

### 🔹 Eliminar datos
```javascript
db.users.deleteOne({ name: "Alan" })     // Borra un documento
db.users.deleteMany({ age: { $lt: 25 } }) // Borra varios documentos
```

---

## ⚠️ Errores comunes

- **Error `DBPathInUse`**  
  → Ya existe otra instancia de `mongod` corriendo.  
  ✅ Solución: cerrar la otra ventana o detener el proceso.

- **Error `"mongo.exe" no se reconoce`**  
  → En MongoDB 8.0 ya no existe `mongo.exe`. Se usa `mongosh`.

---

## ⚡ Opcional: Instalar MongoDB como Servicio en Windows
Para no tener que ejecutar `mongod` manualmente:

1. Abrir PowerShell como Administrador.  
2. Instalar servicio:
   ```powershell
   "C:\Program Files\MongoDB\Server\8.0\bin\mongod.exe" --config "C:\Program Files\MongoDB\Server\8.0\bin\mongod.cfg" --install
   ```
3. Iniciar servicio:
   ```powershell
   net start MongoDB
   ```
4. Detener servicio:
   ```powershell
   net stop MongoDB
   ```

---

## ✅ Resumen rápido
1. **Servidor:**  
   ```powershell
   .\mongod
   ```
2. **Cliente (mongosh):**  
   ```powershell
   .\mongosh
   ```
3. **Comandos dentro de `mongosh`:**
   ```javascript
   show dbs
   use myDatabase
   db.users.insertOne({ name: "Alan", age: 20 })
   db.users.find()
   ```

---

📂 Archivo organizado por **Alan** para recordar la configuración y comandos de MongoDB en mi equipi




// 1. Crear y seleccionar base de datos
use videojuegos

// 2. Crear colección (opcional)
db.createCollection("ps4")

// 3. Insertar documentos
// Insertar uno
db.ps4.insertOne({
  Titulo: "Call Of Duty 1",
  Genero: "Disparos",
  Anio: 2000
});

// Insertar varios
db.ps4.insertMany([
  { Titulo: "God of War", Genero: "Acción", Anio: 2005 },
  { Titulo: "Uncharted", Genero: "Aventura", Anio: 2007 }
]);

// 4. Verificar inserciones
show databases
show collections
db.ps4.find().pretty()

// 5. Practicar eliminaciones
// Eliminar un documento
db.ps4.deleteOne({ Anio: 2000 })

// Eliminar múltiples documentos
db.ps4.deleteMany({ Genero: "Disparos" })

// 6. Limpiar (al finalizar práctica)
db.ps4.drop()
db.dropDatabase()