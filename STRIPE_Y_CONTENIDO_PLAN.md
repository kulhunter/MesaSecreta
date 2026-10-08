# Mesa Secreta — Guía de Operación, Stripe y Contenido Orgánico

Este documento contiene la hoja de ruta para operar `mesasecreta.cl`, configurar los cobros automáticos en Stripe y ejecutar el plan de contenidos en redes sociales con presupuesto $0.

---

## 1. Configuración de Stripe (Cobros 100% Automáticos)

Para que la gente agende y pague de inmediato con tarjeta de débito, crédito, Apple Pay o Google Pay sin que tengas que programar un backend:

### Paso a paso en tu cuenta de Stripe (5 minutos):
1. Inicia sesión en [Stripe Dashboard](https://dashboard.stripe.com).
2. Asegúrate de tener activada tu cuenta de Chile (permite cobrar en CLP).
3. Ve a **Productos (Products)** > **+ Agregar producto**:
   - **Producto 1:**
     * Nombre: `Mesa Secreta — La Dupla (2 Puestos)`
     * Descripción: `Taller de pasta fresca artesanal y cena para 2 personas con maridaje de vino curado.`
     * Precio: `$110.000 CLP` (Pago único).
   - **Producto 2:**
     * Nombre: `Mesa Secreta — Mesa Completa Cerrada (4 Puestos)`
     * Descripción: `Noche privada y exclusiva para 4 personas con taller de pasta fresca y cena con maridaje.`
     * Precio: `$210.000 CLP` (Pago único).
4. Ve a **Payment Links (Enlaces de pago)** > **+ Crear enlace de pago**:
   - Selecciona el producto "La Dupla" y crea el enlace (te dará una URL como `https://buy.stripe.com/abc...`).
   - Selecciona el producto "Mesa Completa" y crea el enlace (te dará otra URL como `https://buy.stripe.com/xyz...`).
5. Abre `index.html` en la línea ~585 y pega tus dos enlaces reales dentro de `STRIPE_CONFIG`:
   ```javascript
   const STRIPE_CONFIG = {
     duplaPaymentLink: 'https://buy.stripe.com/TU_LINK_DUPLA_AQUI',
     mesaCompletaPaymentLink: 'https://buy.stripe.com/TU_LINK_MESA_AQUI',
     notificationEmail: 'hola@mesasecreta.cl' // o tu email personal
   };
   ```

---

## 2. Política de Cancelación y Reagendamiento (Oficial)

* **72 Horas de anticipación:** El cliente puede reagendar para cualquier fecha dentro de los **próximos 7 días** o la siguiente fecha disponible.
* **Menos de 72 Horas:** No reembolsable (los insumos frescos ya fueron adquiridos y la mesa no se puede reasignar). Sin embargo, el cupo es **100% transferible** (pueden enviar a dos amigos en su lugar avisando sus nombres previamente).

---

## 3. Plan de Contenido Orgánico en Redes Sociales (Presupuesto $0)

Al no tener presupuesto inicial de pauta publicitaria, el algoritmo de **Instagram Reels** y **TikTok** premia tres cosas en gastronomía:
1. **El factor "Lugar Secreto / Speakeasy":** A la gente en Santiago le obsesiona descubrir lugares ocultos o no tradicionales.
2. **El romance de las parejas ("Date Night"):** Es el contenido más compartido entre novios/parejas por mensaje directo.
3. **El estímulo sensorial (ASMR de cocina):** Sonidos reales de amasado, corte de pasta, vino y vapor.

### Los 5 Videos Clave para Grabar con tu Celular:

#### Video 1: El Hook de Pareja (Para Instagram Reels y TikTok)
* **Visual:** Tomas rápidas de 1 segundo: harina cayendo en cámara lenta, dos manos amasando juntas, un brindis con vino tinto y velas, los fettuccine colgando del secador.
* **Texto grande en pantalla:** *"El date más secreto de Santiago: solo 4 personas por noche 🍝🍷"*
* **Audio:** Canción en tendencia cálida o jazz italiano suave.
* **Copy / Descripción:** *"Cerré los eventos masivos para abrir la mesa de mi depto. 2 duplas, pasta fresca amasada desde cero y cena con vino. Fechas limitadas en el link del perfil (@mesasecreta.cl)"*.

#### Video 2: La Historia Real (Storytelling del Anfitrión)
* **Visual:** Tú mirando a cámara mientras tienes las manos con un poco de harina o estás cortando la masa con la máquina manual.
* **Guion hablado:** *"Muchos me dijeron que estaba loco por dejar de hacer banquetes para 50 personas... pero sentía que cocinar se había vuelto una fábrica. Ahora solo recibo a 4 personas por noche en mi departamento. Vienes con tu pareja o amigo, te enseño la receta tradicional de pasta al huevo que aprendí, nos tomamos un buen vino y cenamos juntos a la luz de las velas. Si te gusta la buena mesa, te espero en Mesa Secreta"*.

#### Video 3: El Secreto Técnico que Provoca Comentarios (Generador de Alcance)
* **Visual:** Agua hirviendo a borbotones.
* **Hook:** *"Si le sigues echando aceite al agua de la pasta, los italianos están llorando 🇮🇹❌"*
* **Explicación:** Muestra cómo el aceite crea una capa que repele la salsa y por qué lo único que se necesita es abundante sal gruesa y usar el agua de cocción con almidón para emulsionar con la mantequilla o el ragù.
* **Cierre:** *"Esto y más lo aprendes con las manos en la masa en @mesasecreta.cl"*.

#### Video 4: ASMR Gastronómico Puro (Sin hablar)
* **Visual:** Primerísimos planos con luz cálida.
* **Sonidos nítidos:**
  1. Huevo partiéndose sobre el volcán de harina.
  2. El tenedor batiendo la yema.
  3. El crujido del rodillo de madera sobre la mesa.
  4. El descorche de la botella de vino.
  5. El queso Grana Padano cayendo rallado sobre la pasta humeante.
* **Texto final sutil:** *Mesa Secreta · Santiago*.

#### Video 5: El Momento "Orgullo Culinario"
* **Visual:** Grabar la reacción genuina de tus primeros comensales cuando sacan sus fettuccine de la máquina por primera vez y cuando prueban su primer bocado en la mesa.
* **Texto:** *"Llegaron diciendo 'yo quemo hasta el agua' y se fueron cenando pasta de restaurante hecha por ellos mismos"*.

---

## 4. El "Bucle Viral" (Cómo lograr que cada cena traiga la siguiente gratis)

1. **El Souvenir de la Cajita Kraft:**
   - Guarda una porción de la pasta cruda que cortaron en una cajita de cartón kraft con una base de sémola.
   - Pégale una nota escrita o sticker: *"Cocinaste esto con tus propias manos anoche. Disfruta tu almuerzo de mañana y etiquétanos en @mesasecreta.cl"*.
   - El 90% de las personas le saca una foto a su almuerzo al día siguiente y te etiqueta, duplicando la exposición con sus amigos.
2. **El "Photo Moment" de la Noche:**
   - Cuando tengan la tira larga de masa estirada, diles: *"¡Sostengan acá para una foto!"*. Todos quieren esa foto para sus historias.
3. **Comunidades Gratuitas:**
   - Publica en grupos de **Expats in Santiago** (Facebook) ofreciendo la experiencia en inglés/español. Los extranjeros en Santiago pagan este ticket con entusiasmo.
   - Puedes listar en paralelo tu experiencia en **Airbnb Experiences** (apunta a la misma disponibilidad).

---

## 5. El Protocolo de la Noche (Minuto a Minuto del Anfitrión)

* **19:40 - 20:00 (Preparación previa):**
  - Música puesta (volumen medio, jazz/italiano relajado).
  - Luz cálida (lámparas tenues, velas listas pero apagadas hasta la cena).
  - 2 estaciones preparadas: harina medida, huevos frescos a temperatura ambiente, rodillos y raspas de masa.
  - Salsas calientes a fuego mínimo listas para el montaje final.
  - Jarra de agua con rodajas de limón y menta lista.
* **20:00 - 20:15 (Recepción & Romper el hielo):**
  - Bienvenida, dejar abrigos, lavado de manos.
  - Entrega de delantales.
  - Servir la **Copa 1 (Vino blanco o espumante)**.
* **20:15 - 21:15 (Taller de Amasado & Corte):**
  - Técnica del volcán, batido de huevos, amasado de 10 minutos.
  - Reposo de la masa (momento para conversar y rellenar copas).
  - Estirado al rodillo o máquina y corte de tagliatelle.
* **21:15 - 21:30 (Cocción en Vivo):**
  - Agua con sal a ebullición viva.
  - Cocción de 2 a 3 minutos.
  - Emulsión en sartén frente a ellos con el Ragù y la Bechamel.
* **21:30 - 22:30 (La Cena & Maridaje):**
  - Encendido de velas.
  - Servir la **Copa 2 y 3 (Vino tinto estructurado)**.
  - Queso rallado fresco, conversación y sobremesa.
* **22:30 - 23:00 (Cierre):**
  - Espresso italiano en cafetera moka o bocadito dulce.
  - Entrega de su cajita kraft con la pasta cruda extra para llevar.
