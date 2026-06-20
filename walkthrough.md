# Guía de Desarrollo - Sitio Web del Asesor de Inversiones (Bernat Bou)

La plataforma web de asesoría patrimonial ha sido completamente desarrollada, configurada y verificada. El proyecto compila con éxito sin ningún error ni advertencia, por lo que está listo para producción.

---

## Qué se ha Implementado

### 1. Inicialización y Arquitectura del Proyecto
*   Configuración inicial de un espacio de trabajo moderno con **Next.js (App Router)**, **Tailwind CSS (v4)**, **TypeScript** y **ESLint** bajo la carpeta `src/`.
*   Instalación del paquete `lucide-react` para incorporar iconografía financiera premium y de alta definición.
*   Cumplimiento estricto con los estándares de Next.js 16/15, aislando la configuración de `viewport` en su propia constante en `src/app/layout.tsx` para evitar advertencias en tiempo de compilación.

### 2. Sistema de Diseño y Estilos
*   Creación de un tema oscuro de nivel premium en `src/app/globals.css` usando las ventajas nativas de Tailwind v4.
*   Paleta de colores elegante basada en Azul Marino Profundo (`#050811`), contenedores oscuros de tarjeta (`#0E162A`) y acentos dorados sofisticados (`#D4AF37`, `#C5A880`).
*   Configuración de clases utilitarias personalizadas:
    *   **Efecto Glassmorphism (`.glass-effect`):** Fondos traslúcidos con desenfoque (`backdrop-blur`) y bordes dorados de precisión.
    *   **Gradientes Dorados (`.gold-gradient-text`, `.gold-gradient-bg`):** Diseñados para títulos e invitaciones a la acción (CTAs) con aspecto exclusivo.
    *   **Glow Dorado (`.gold-glow`):** Sutiles sombras de brillo dorado en elementos interactivos al pasar el cursor.

### 3. Componentes de UI Reutilizables
*   `Navbar.tsx` (en `src/components/`): Barra de navegación superior fija y traslúcida con logotipo de marca, indicador de página activa, botón de llamada a la acción y un menú de hamburguesa deslizante para dispositivos móviles.
*   `Footer.tsx` (en `src/components/`): Pie de página minimalista con enlaces rápidos, datos corporativos de contacto y avisos legales financieros realistas (necesarios para la regulación de asesores patrimoniales de grandes capitales).
*   `ContactForm.tsx` (en `src/components/`): Formulario de contacto confidencial con validación de campos del lado del cliente (Nombre, Email, Teléfono, Mensaje), control de errores interactivos y un estado de carga simulado que deriva en un mensaje de confirmación premium tras el envío.

### 4. Páginas Creadas
*   `Inicio` (en `src/app/page.tsx`):
    *   **Sección Hero:** Tipografía Serif de lujo enfocada en el legado del capital, botones interactivos de acción directa y estadísticas clave del negocio.
    *   **Pilares de Confianza:** Tres tarjetas de diseño premium destacando *Absoluta Confidencialidad*, *Rendimiento Consistente* y *Arquitectura Abierta e Independencia*.
*   `Servicios de Inversión` (en `src/app/productos/page.tsx`):
    *   Cuadrícula interactiva de 4 servicios clave: Gestión Discrecional, Inversiones Alternativas, Planificación Sucesoria y Consultoría de Multi-Family Office.
    *   Cada tarjeta incluye un listado de características con iconos dorados y enlaces de consulta.
*   `Contacto` (en `src/app/contacto/page.tsx`):
    *   Diseño responsive a doble columna que integra el formulario `ContactForm` a la izquierda y los datos de la oficina, horarios, protocolo de estacionamiento privado y mapa representativo a la derecha.

---

## Verificación y Compilación Exitosa

*   **Prueba de Compilación para Producción:** Ejecutado con éxito `npm run build` en local.
*   **Resultado:** Compilación exitosa completada con **0 errores y 0 advertencias**.
*   **Páginas Generadas:** Exportación estática prerenderizada de las rutas `/`, `/contacto` y `/productos`.

---

## Instrucciones Paso a Paso para Desplegar en Vercel

Sigue estos pasos para subir tu proyecto a GitHub y ponerlo en línea en una cuenta gratuita de Vercel:

### Paso A: Subir el Código a GitHub
1.  Inicializa el repositorio Git en la carpeta del proyecto (si no está inicializado):
    ```bash
    git init
    ```
2.  Agrega todos los archivos creados y realiza el primer commit:
    ```bash
    git add .
    git commit -m "feat: commit inicial del sitio web Bernat Bou Wealth Advisory"
    ```
3.  Crea un nuevo repositorio en tu cuenta de GitHub (por ejemplo, llámalo `bernat-bou`). Asegúrate de dejarlo vacío (no marques las casillas de añadir README o gitignore).
4.  Vincula tu repositorio local con el remoto de GitHub e introduce el código:
    ```bash
    git remote add origin https://github.com/TU_USUARIO_DE_GITHUB/TU_REPOSITORIO.git
    git branch -M main
    git push -u origin main
    ```

### Paso B: Conectar Vercel y Desplegar
1.  Accede a [Vercel](https://vercel.com) y regístrate. Elige la opción **Continue with GitHub** para que tu cuenta de Vercel se enlace directamente a tu cuenta de GitHub.
2.  Una vez dentro del panel de control, haz clic en **Add New...** -> **Project**.
3.  Vercel mostrará los repositorios de tu GitHub. Busca tu repositorio (ej. `bernat-bou`) y haz clic en **Import**.
4.  En la pantalla **Configure Project**:
    *   **Project Name:** Deja `bernat-bou` o el nombre que prefieras (este definirá tu subdominio gratuito `.vercel.app`).
    *   **Framework Preset:** Vercel detectará automáticamente que estás usando `Next.js`.
    *   **Root Directory:** Mantén `./`.
    *   **Build and Output Settings:** Déjalo por defecto (Vercel ejecutará automáticamente la compilación optimizada).
5.  Haz clic en **Deploy**.
6.  En menos de 2 minutos, Vercel terminará la compilación y te entregará tu enlace activo de producción (por ejemplo, `https://bernat-bou.vercel.app`).

*Cada vez que realices cambios en tu código local y hagas un `git push` a tu rama principal de GitHub, Vercel los detectará automáticamente y actualizará tu web en vivo en cuestión de segundos.*
