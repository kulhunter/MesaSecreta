// ==============================================================================
// GOOGLE APPS SCRIPT PARA MESA SECRETA (BETA TESTERS)
// ==============================================================================
// INSTRUCCIONES RÁPIDAS (2 MINUTOS):
// 1. Abre tu Google Sheet: https://docs.google.com/spreadsheets/d/156ywXscwDUBkILX8jjY00rBIxymf-dgX3gYLXUKuSdI/edit
// 2. En el menú superior haz clic en: Extensiones -> Apps Script
// 3. Borra cualquier código que aparezca y pega este código completo.
// 4. Haz clic en "Implementar" (botón azul arriba a la derecha) -> "Nueva implementación"
// 5. En el engranaje "Seleccionar tipo", elige: "Aplicación web"
// 6. Configura:
//    - Descripción: Registro Beta Testers
//    - Ejecutar como: "Yo" (tu cuenta)
//    - Quién tiene acceso: "Cualquier usuario" (Anyone)  <--- ¡MUY IMPORTANTE!
// 7. Clic en "Implementar" y autoriza los permisos si te los pide.
// 8. Copia la "URL de la aplicación web" (termina en /exec) y pégala en betatester/index.html
// ==============================================================================

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Si la hoja está vacía, creamos los encabezados
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Fecha y Hora", 
        "Nombre", 
        "Apellido", 
        "Teléfono / WhatsApp", 
        "Instagram", 
        "En Santiago", 
        "Disponibilidad Noviembre"
      ]);
      sheet.getRange(1, 1, 1, 7).setFontWeight("bold").setBackground("#d8af56").setFontColor("#000000");
    }

    var data;
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter;
      }
    } else {
      data = e.parameter;
    }

    var timestamp = new Date();
    var nombre = data.nombre || "";
    var apellido = data.apellido || "";
    var telefono = data.telefono || "";
    var instagram = data.instagram || "";
    var confirma_santiago = data.confirma_santiago ? "Sí" : "No";
    var confirma_noviembre = data.confirma_noviembre ? "Sí" : "No";

    sheet.appendRow([
      timestamp, 
      nombre, 
      apellido, 
      telefono, 
      instagram, 
      confirma_santiago, 
      confirma_noviembre
    ]);

    // Opcional: enviar copia al correo dan.tagle@gmail.com
    try {
      MailApp.sendEmail({
        to: "dan.tagle@gmail.com",
        subject: "🍝 Nuevo Registro Beta Tester: " + nombre + " " + apellido,
        body: "Nuevo postulante a Mesa Secreta:\n\n" +
              "• Nombre: " + nombre + " " + apellido + "\n" +
              "• Teléfono / WhatsApp: " + telefono + "\n" +
              "• Instagram: " + instagram + "\n" +
              "• Confirma Santiago: " + confirma_santiago + "\n" +
              "• Confirma Noviembre: " + confirma_noviembre + "\n\n" +
              "Ver Google Sheet: https://docs.google.com/spreadsheets/d/156ywXscwDUBkILX8jjY00rBIxymf-dgX3gYLXUKuSdI/edit"
      });
    } catch(emailErr) {
      // Si falla el envío de correo, los datos ya quedaron guardados en la planilla
    }

    return ContentService.createTextOutput(JSON.stringify({ 
      result: "success", 
      message: "Registro guardado exitosamente" 
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ 
      result: "error", 
      error: error.toString() 
    })).setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}
