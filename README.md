# Organizador de Tareas de Estudio 📚

## 1. Objetivo del Proyecto y Descripción Funcional
El **Organizador de Tareas de Estudio** es una aplicación web interactiva frontend diseñada para ayudar a estudiantes de Ingeniería en Informática a distribuir, planificar y realizar el seguimiento de sus deberes académicos según la asignatura. 

La aplicación permite registrar tareas ingresando información crítica (nombre, asignatura, fecha de entrega y estimación de horas). El sistema procesa y valida estos datos de forma estricta en el cliente antes de guardarlos de manera persistente. Almacena la información de forma local y renderiza dinámicamente un listado ordenado cronológicamente por la proximidad de la fecha de entrega, facilitando la priorización del tiempo de estudio. Adicionalmente, ofrece la posibilidad de eliminar tareas individualmente una vez completadas.

---

## 2. Lista de Control de Requerimientos Técnicos (Checklist)

A continuación se detalla el estado de cumplimiento de los requerimientos exigidos en la evaluación:

### 📑 Criterio 1: Integración con Maqueta y Estructura del Proyecto
- [x] **Proyecto creado desde cero:** Estructura limpia y manual.
- [x] **Interfaz Principal:** Maquetación original y de autoría propia en `index.html`.
- [x] **Separación estricta de responsabilidades:** Código desacoplado en `.html` (estructura), `.css` (presentación) y `.js` (comportamiento). Sin atributos en línea (`onclick`) ni estilos embebidos.
- [x] **Estructura de carpetas ordenada:** Sigue fielmente el directorio solicitado (`css/styles.css`, `js/script.js`, `index.html`).
- [x] **Diseño de Interfaz Profesional:** Jerarquía visual clara utilizando variables CSS (`:root`), estados definidos para botones (`:hover` / `:disabled`), espaciados uniformes y tipografía legible.

### ⚡ Criterio 2: Interacción con DOM y Eventos
- [x] **Manipulación del DOM:** Selección de elementos mediante selectores modernos (`getElementById`, `querySelectorAll`) y modificación dinámica de clases y texto.
- [x] **Manejo de Eventos:** Uso de al menos 3 eventos distintos registrados con `addEventListener()` (`DOMContentLoaded`, `submit`, `input`) respondiendo a distintas naturalezas.
- [x] **Generación dinámica de elementos:** Construcción interactiva mediante `document.createElement()`, inserción con `appendChild()` y destrucción de nodos individuales con `remove()`.

### 📋 Criterio 3: Formulario y Validaciones
- [x] **Campos del Formulario:** Cuenta con 4 campos independientes: Texto (Nombre), Selección (Asignatura), Fecha (Entrega) y Número (Horas estimadas).
- [x] **5 Reglas de Validación:**
  1. *Campo requerido:* Validación de campos no vacíos en todo el formulario.
  2. *Formato específico (Regex):* El nombre acepta solo caracteres alfanuméricos y espacios (`/^[a-zA-Z0-9\s]+$/`).
  3. *Longitud:* El nombre de la tarea debe poseer entre 5 y 50 caracteres.
  4. *Coincidencia cruzada:* El campo de horas estimadas restringe un mínimo de 5 horas de dedicación si la asignatura seleccionada es "Integración de Competencias I".
  5. *Regla de negocio propia:* La fecha de entrega ingresada no puede ser anterior al día de hoy.
- [x] **Mensajes de Error y Feedback:** Alertas específicas debajo de cada elemento dinámicamente mediante etiquetas `<span>` sin usar `alert()`. Cambios visuales de estados válidos (`.campo-valido` en verde) e inválidos (`.campo-invalido` en rojo).
- [x] **Control del Envío:** Implementación de `event.preventDefault()` que congela el envío ante cualquier inconsistencia detectada.

### 💾 Criterio 4: Datos y Persistencia (Opción 1: LocalStorage)
- [x] **Guardar datos:** Almacenamiento seguro usando `localStorage.setItem()` serializado en JSON bajo la clave `tareasEstudio`.
- [x] **Recuperar y renderizar:** Carga asíncrona simulada en el evento `DOMContentLoaded` mapeando los datos mediante `JSON.parse()`.
- [x] **Gestión CRUD básica:** Flujo completo que permite añadir registros y eliminar ítems de forma individual actualizando la persistencia local.
- [x] **Caso de borde:** Manejo controlado en la primera carga del navegador inicializando un arreglo vacío (`[]`) si el almacenamiento está vacío.

### 💻 Criterio 5: Usabilidad, Compatibilidad y Depuración
- [x] **Compatibilidad Multi-Navegador:** Probado en entornos basados en Chromium (Google Chrome / Microsoft Edge) y Gecko (Mozilla Firefox).
- [x] **Diseño Adaptable:** Estructura flexible probada en resoluciones de escritorio y emuladores móviles de las DevTools.
- [x] **Depuración de Código:** Consola totalmente limpia, libre de advertencias y de errores en tiempo de ejecución (`runtime errors`).

---

## 3. Instrucciones Operativas para Despliegue y Ejecución 🚀

Para ejecutar de manera local esta aplicación web, no se requieren dependencias de servidores ni configuraciones complejas. Siga los pasos enumerados a continuación:

1. **Clonar o descargar el repositorio:**
   ```bash
   git clone https://github.com/msthtdpipe/Evaluacion3WEB.git
   ```
2. **Navegar al directorio raíz del proyecto:**
   ```bash
   cd mi-proyecto
   ```
3. **Ejecutar la aplicación:**
   - Puede abrir directamente el archivo `index.html` haciendo doble clic en él desde su gestor de archivos.
   - Alternativamente (recomendado), puede usar la extensión **Live Server** de Visual Studio Code para levantar un servidor de desarrollo local ágil haciendo clic derecho sobre `index.html` y seleccionando *“Open with Live Server”*.

---

## 4. Evidencias de Funcionamiento (Capturas de Pantalla) 📸


* **Vista General e Interfaz Principal:**
  ![Interfaz Base](https://i.imgur.com/5coLFYI.png)
* **Validaciones de Error en Acción (Campos Inválidos):**
  ![Validaciones fallidas](https://i.imgur.com/jwEGNRI.png)
* **Estados de Éxito en Formulario (Campos Válidos):**
  ![Validaciones exitosas](https://i.imgur.com/ucVepCr.png)
* **Persistencia en LocalStorage (Application DevTools):**
  ![LocalStorage](https://i.imgur.com/iRoNgzM.png)
* **Todas las validaciones:**
  ![Validaciones] (https://imgur.com/a/Lubxl4W)

---

## 5. Preguntas de Cierre (Reflexión Brief) 🧠

### 1. ¿Por qué elegiste esta temática y cómo influyó en el diseño del formulario y de las validaciones?
Hice la selección de esta temática debido a que me pareció una solución más escalable, a la que posiblemente pueda realizarle un uso futuro si se hacen las respectivas mejoras con tiempo. Como estudiantes muchas veces es dificil mantener un orden y gestión en nuestros tiempos, llevandonos a tener problemas con las entregas de tareas y avances de nuestros proyectos. El diseño del formulario y validaciones se trató de hacer lo más comprensible posible para alguien que no conozca tanto de tecnología, haciendo un uso efectivo de texto y validaciones visibles para el usuario.

### 2. ¿Qué validación fue la más compleja de implementar y cómo la resolviste?
La validación más compleja fue la de "coincidencia cruzada" entre la asignatura "Integración de Competencias I" y la exigencia de un mínimo de 5 horas de dedicación al ser una asignatura relacionada al proyecto de titulo, donde normalmente se realiza un proyecto durante todo el semestre. Lo resolví mediante una condiciones (`if/else`) que evalúan si el valor seleccionado en el componente `<select>` equivale estrictamente a dicha asignatura y, en caso de ser afirmativo, verifica mediante operadores lógicos que el entero del campo numérico sea menor a 5 para el mensaje de error especifico.

### 3. ¿Qué parte de la manipulación del DOM mejoró más la experiencia de usuario en tu aplicación?
El hecho de procesar el arreglo nativo con el método `.sort()` ordenando las fechas por proximidad antes de inyectarlas al contenedor del DOM, evita que el usuario deba ordenar manualmente su agenda, dándole prioridad visual inmediata a los deberes más urgentes, ordenandolas de menor a mayor tiempo de proximidad a la entrega en un orden de arriba(menor) hacia abajo(mayor).

### 4. ¿Por qué elegiste LocalStorage o Fetch como opción de persistencia, y qué limitación técnica intrínseca tiene esa elección?
Se seleccionó **LocalStorage** porque permite un flujo CRUD completo e inmediato del lado del cliente sin depender de una API externa. Su limitación técnica intrínseca es que es una persistencia de tipo local ligada estrictamente al navegador.

### 5. Si tuvieras 2 horas más de desarrollo autónomo, ¿qué mejora implementarías y por qué?
Implementaría un **estado de completado (Checkbox)** junto con un contador estadístico de progreso general en la cabecera (ej: "3 de 5 tareas completadas"). Me gustaría también agregar cambios en el estilo de las tareas más cercanas a la fecha de entrega, donde las tareas con fecha menor a dos dias restantes para la entrega aparezcan con los bordes rojos en lugar del color principal de la pagina, dando como entendimiento al usuario la importancia de la pronta realización de la tarea.