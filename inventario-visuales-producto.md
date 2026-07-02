# heva — Inventario de capturas del producto, anonimización y plan de visuales

> Fuente: grabación de pantalla "Screen Recording 2026-07-01 at 6.22.56 p.m." (56:52 min) recorriendo el archivo de Figma **heva - Web**. Aparecen Maribel Escobosa y Eduardo Valles en la llamada. Este documento cataloga lo real que se ve, marca qué anonimizar y propone dónde usar cada pantalla en el sitio.

---

## 1. Catálogo de pantallas

El archivo de Figma tiene estas pestañas: **heva Store · heva Triage · CRM · Inbound · Practice Management · Calendar · heva Relay 2 · Account Settings · Payment Flow · HEVA Landing**. La app real tiene el nav: **Inbound · Practice · Analytics · Calendar · Assistant**.

### A. CRM / ficha de paciente
- Cabecera de paciente con ID y estado (ej. *Scheduling*), dueño (*Owner: Unassigned*).
- Tarjeta de consulta: *Upcoming Consultation* / *Past Consultation* con fecha, modalidad (In person) y pregunta "¿El paciente asistió? Sí/No".
- **Patient Details** (editable).
- **Care Graph**: procedimiento + pasos en secuencia — Initial Consultation → Payment → Prequalification → Internal Notes → Lab Clearance → Preop Consultation → Surgery. Pasos futuros aparecen *Locked*.
- Estados visibles de paso: *Scheduled*, *No Show*, *Ready*, *Locked*.
- Payment: Consultation Fee con badge *Paid* y monto/fecha.
- Prequalification: intake vinculado con estado *Screening in Progress*.

### B. Account Settings → Calendar and Scheduling
- **Event Types** con duración, precio y reglas: Initial Consultation (1h), Pre-Surgery Consultation (30min), Surgery (1h30), Follow-up Consultation (30min), Curation (45min). Etiquetas: providers, prereq, screening, asset.
- **Practice Operations**: días de operación (S M T W T F S) y horario de apertura.

### C. Crear / editar tipo de evento
- Campos: Description, Category, Duration, **Appointment Type** (In-Person / Virtual / Both), Price, Price Policy, Instructions ("dile a heva cómo comportarse en el flujo de conversación"), Materials (Upload File / Add Link).
- Secciones colapsables: **Event Details · Resources · Booking Rules · Patient Journey**.

### D. Resources (del tipo de evento)
- **Assigned Staff**: asignar providers específicos o "All Providers".
- **Physical Resources**: "Rooms or equipment needed" (toggle Required) con buscador y pills (OR Room 1, MRA Machine A, Recovery Bay).
- **Procedure List**: vincular procedimientos o "All Procedures" (Liposuction, Rhinoplasty, Botox, Tummy Tuck).

### E. Booking Rules
- **General Availability**: horarios por día (L-V 8:00–17:00, con doble bloque 13:00–18:00; Sáb/Dom Unavailable).
- **Scheduling Windows**: *Allow same day booking* (toggle), Minimum advance notice (días), Maximum booking window (días ahead, ej. 30).

### F. Pre-requisites / Prequalification / Post-Requisites
- Dropdowns con ayuda contextual: pre-requisitos (bloquean reserva si no se completan), prequalification (screening de intake que determina si califica), post-requisites (eventos de seguimiento con precio bloqueado a $0).

### G. Intake / Screening forms
- **Plastic Surgery Intake form** — condiciones de screening: Allergies=No, Significant Medical Conditions=No, Negative Reaction to Anesthesia=No, Smoker=No, Pregnant or Breastfeeding=No.
- Regla "si falla una condición": *Generate an escalation entry for the practice to review* / *Block patient from booking appointment*.
- **Bariatric Surgery Intake Form** — Form Details, Questions (edad, alergias a metal, cirugía previa, trastorno de sangrado), toggle *Screen* por pregunta.
- **Request Materials**: *Suggest with AI* / *Add Manually* (ej. Before Photos, Images/PDF).
- Formateo de pregunta con IA: "Formatted as: Age (number · years)", operadores (>, <, ≥, ≤, =, Between), botones Retry / Accept.
- Post-Requisites como items con cantidad: Follow-Up Consultation $0, Curation $0.

### H. Organization Settings
- Nav superior heva (Inbound / Practice / Calendar), selector de provider.
- **Clinic Details**: Clinic Name, About (con botón *Enhance with AI*).
- **Location**: dirección con mapa + Address Details.
- **Staff Directory**: Assigned Admins (Owner/Admin) y **Staff Pool** (Provider/Support, unidades).
- **Facilities and Equipment**: Facilities (OR Room 1/2, Recovery Bay) y Equipment and Machines (MRI Machine A, Laser Equipment Pool) con slots.
- Versionado de unidades en el panel de páginas de Figma.

### I. Analytics (dashboard)
- Nav completo: Inbound · Practice · **Analytics** · Calendar · Assistant.
- Selector de rango: 7D / 30D / 90D / YTD / Custom.
- Banner "Your profile is bringing in patient interest".
- Tarjetas: Profile views, Store visits, Shared link visits (estado *Pending*); New leads, Bookings, Lead value (estado *Live*).
- **Lead outcomes**: embudo profile visits → store visits → shared-link visits → new leads → bookings.
- Visits over time (gráfica). Badge "heva Tools activated".

### J. Inbox / Asistente (Inbound) — *pantalla clave*
- Pestaña **Inbound** activa. Nav de la app real en producción (no mockup de Figma).
- Panel izquierdo: lista de conversaciones con estado por lead (*Confirmed*, *New Contact*), *Conversation Threads*, contador de mensajes, filtros **All / Alerts / Assigned to me**, buscador. Sub-pestañas **List / Leads / Care Graph**.
- Panel central: **Conversation Summary** generado por heva (ej. "The patient has successfully booked a free in-person initial consultation for cosmetic Botox… awaiting the final confirmation details"), **Intent: payment_intent · $4,000**, hilo de chat con el paciente (agendado, confirmación) y botón **Send heva Relay**.
- Panel derecho: **Care Graph** del lead (Procedure, Initial Consultation *Confirmed* con fecha/hora y provider, **Payments** Initial Consultation *Pending/Free*, Internal Notes con Save/Cancel, pasos *Locked*).

### K. Care Graph completo (CRM) — secciones ampliadas
- Care Graph con estado global **Journey Complete** cuando todo está *Completed* (Initial Consultation, Lab Clearance, Surgery, Follow-ups).
- Secciones colapsables del panel derecho: **Escalations (3)**, **Notes (3)**, **Quote**, **Payments**.
- **Lab Clearance** en detalle: estado *Pending* → *Results* con archivos (CompleteBloodCountCBC.pdf, CoagulationPanelPTINRaPTT.pdf, ChestX-ray.pdf), botones **Clear patient / Not cleared**, resultado *Cleared · No risk*.
- **Follow-ups → Curations**: lista Curation 1–6 con fecha/hora y estado (*Completed* / *No Show* + Reschedule), contador "Curations: 6/6 Completed".

### L. Event Type Relationships (Calendar/Settings → Units)
- Vista de **grafo/flujo** que visualiza conexiones de prerequisito y postrequisito entre tipos de evento. Botón *Refresh*, zoom, *Legend*.
- Nodos con duración y precio (dental cleaning, Initial Consultation, Pre Checkup, Liposuction, Follow Up - Liposuction, Breast Augmentation, Follow Up - Breast Augmentation), aristas etiquetadas *completed*.
- Selector de unidades en la izquierda (varias clínicas).

---

## 2. Datos a anonimizar (antes de publicar)

> Regla del brief (§2): nada de nombres, contacto ni info médica reales. Reemplazar por datos ficticios y consistentes en todas las capturas.

| Dato real visto | Dónde aparece | Reemplazo sugerido |
|---|---|---|
| Jessica Ramirez (ID 12345) | CRM / ficha de paciente | Paciente demo: "Paula Ríos" / "Demo Patient" |
| Ana Castillo, Anuj Gupta, Juanita Perez, unknown****4b93 | Inbox/Asistente y CRM | nombres/contactos ficticios |
| Intent "payment_intent · $4,000", montos de curación/consulta | Inbox/Asistente, Care Graph | OK como demo, pero homogeneizar a set único |
| CompleteBloodCountCBC.pdf, CoagulationPanelPTINRaPTT.pdf, ChestX-ray.pdf | Lab Clearance | nombres de archivo genéricos (ej. LabResult_Demo.pdf) |
| Dr. Dariel Delgado (Updated), Clinic health4all 2, Vinkgrid Guridi | Analytics, Event Type Relationships, Units | clínica/provider ficticios |
| Dr. Gomez / Dr. Gómez's Plastics | Care Graph, Organization | "Dra. Demo" / "Clínica Demo" |
| Dr. Hector Terrero, Dr. José León, Dra. Danivel Céspedes | Selector de unidad / providers | Nombres ficticios (Dr. A. Ruiz, etc.) |
| Dr. Enrique Gomez | Physical Resources / providers | Nombre ficticio |
| Dr. Dariel Delgado | Analytics (encabezado) | "Dr. Demo" |
| Luis Perez — dr.perez@heva.com | Staff Directory (Owner) | correo ficticio (owner@clinicademo.com) |
| Maria García — mariagarcia@gmail.com | Staff Directory (Admin) | correo ficticio |
| Ana Rodriguez / Ana Sanchez — anasanchez@cespedes.com | Staff Directory / Staff Pool | correo ficticio |
| Juana Lopez, Dr. Juan Perez | Staff Pool | nombres ficticios |
| Dirección "Centro Médico…", "7th floor, suite 5C" + mapa con pin | Organization → Location | dirección genérica o mapa desenfocado |
| Bio real de la clínica ("board-certified plastic surgeon in the Dominican Republic…") | Organization → About | texto demo neutro |
| Condiciones médicas del intake (Allergies, Anesthesia, Pregnant/Breastfeeding, etc.) | Intake forms | OK como ejemplo genérico, pero sin ligarlas a un paciente nombrado |
| Fotos de rostro en la llamada (Maribel Escobosa, Eduardo Valles) | Burbuja de video de la grabación | No usar; recortar solo el área de la app |
| Barra de QuickTime, dock, reloj, escritorio | Toda la grabación | Recortar; exportar solo el frame de la app |

**Nota:** varias capturas muestran datos que parecen ya de prueba (montos $120/$500, procedimientos genéricos). Aun así conviene homogeneizar a un set demo único.

---

## 3. Plan de visuales por sección

> Estilo Apple, mobile-first, producto al centro. Usar capturas fieles ya anonimizadas y limpias (sin barra de QuickTime ni escritorio).

### Landing (long-scroll)
- **Hero** — **Inbox / Asistente** (pantalla J): Conversation Summary + Intent + chat + "Send heva Relay". Es el mejor hero: muestra al agente atendiendo y cobrando. Refuerza "cobra antes de que llegue".
- **Qué hace heva (3–4 ideas)** — íconos + micro-capturas: (1) Asistente/Inbox 24/7, (2) Care Graph, (3) Payment/Paid + Quote, (4) Analytics/leads.
- **Producto real** — carrusel/stack con: Inbox/Asistente, CRM (Care Graph "Journey Complete"), Analytics dashboard.
- **Prueba social** — captura de @yourheva (ya recibida), no de este video.
- **Cierre / CTA** — sin captura o con el Analytics como "resultado".

### Sub-página · plataforma (CRM)
- Principal: **ficha de paciente + Care Graph** (Initial Consultation → Lab Clearance → Surgery → Follow-ups; estado "Journey Complete").
- Secundario: **Analytics dashboard** (New leads, Bookings, Lead outcomes) para mostrar visibilidad del negocio.
- Apoyo: Escalations, Notes, **Quote**, **Payments**; Lab Clearance con resultados y "Clear patient / Not cleared"; estados del lead (Scheduling, No Show, Ready, Locked); **Event Type Relationships** (grafo) como cierre visual de profundidad.

### Sub-página · asistente
- Principal: **Inbox / Asistente** (pantalla J) — Conversation Summary + Intent + heva Relay: la prueba viva del agente.
- Secundario: **Instructions / "cómo se comporta heva"** del tipo de evento + **Request Materials → Suggest with AI** + formateo de pregunta con IA (Retry/Accept).
- Apoyo: **screening con escalación** ("Generate an escalation entry" / "Block patient from booking") y sección **Escalations** del Care Graph como muestra de la lógica del agente.

### Sub-página · financiamiento
- El video **no** muestra financiamiento (Klarna/Afterpay/PayPal). Se necesita otra captura o diseño propio; por ahora apoyar con la tarjeta **Payment / Consultation Fee $ · Paid** para el concepto de cobro.

### Sub-página · wallet
- No hay assets de Wallet en el video (pendientes por el brief). Dejar placeholder.

### Config / "backstage" (opcional, para credibilidad)
- **Account Settings**: Event Types con precios, Booking Rules, Facilities & Equipment, Organization → Staff Directory. Útil como prueba de profundidad del producto en la sub-página de plataforma.

---

## 4. Faltantes para completar los visuales
- **Inbox / Asistente** ✅ ya lo tenemos (pantalla J) — solo falta limpiarlo/anonimizarlo.
- **Cotización (Quote)** y **Pagos** ✅ existen como secciones del Care Graph; falta una captura enfocada del panel de Quote y de Invoices con estados pendiente/cancelado/pagado.
- Pantalla dedicada de **heva Relay** (el envío en sí de cotización/factura/link de pago); aquí solo se ve el botón "Send heva Relay".
- Assets de **heva Wallet** (pendientes).
- Vista de **financiamiento** (Klarna/Afterpay/PayPal) para la sub-página — no aparece en el video.
