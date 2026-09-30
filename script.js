const CONFIG = {
  whatsappUrl: "https://chat.whatsapp.com/KcYF7G6k0LXF6HaNodbKml"
};

const toast = document.querySelector(".toast");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 4200);
}

document.querySelectorAll(".js-whatsapp").forEach((link) => {
  if (CONFIG.whatsappUrl) {
    link.href = CONFIG.whatsappUrl;
    link.target = "_blank";
    link.rel = "noopener";
    return;
  }

  link.addEventListener("click", (event) => {
    event.preventDefault();
    showToast("Der WhatsApp-Einladungslink wird vor der Veröffentlichung ergänzt.");
  });
});

const dialog = document.querySelector("#info-dialog");
const dialogContent = dialog.querySelector(".dialog-content");
const dialogCopy = {
  impressum: `
    <h2>Impressum</h2>
    <p class="dialog-meta">Angaben gemäß § 5 DDG</p>
    <address>
      <strong>Quant Foku Ltd.</strong>
      <span>Konrad-Adenauer-Ufer 21</span>
      <span>50668 Köln</span>
      <span>Deutschland</span>
    </address>
    <h3>Kontakt</h3>
    <p>
      Telefon: <a href="tel:+492214981">0221 / 498 - 1</a><br>
      E-Mail: <a href="mailto:Tony@quant-fokus.com">Tony@quant-fokus.com</a>
    </p>
    <h3>Inhaltlicher Hinweis</h3>
    <p>Die bereitgestellten Inhalte dienen ausschließlich allgemeinen Informations- und Diskussionszwecken. Sie stellen keine individuelle Anlage-, Steuer- oder Rechtsberatung dar.</p>
    <h3>Haftung für externe Links</h3>
    <p>Diese Website enthält Links zu externen Angeboten. Für deren Inhalte und Datenverarbeitung sind ausschließlich die jeweiligen Anbieter verantwortlich.</p>
  `,
  datenschutz: `
    <h2>Datenschutzerklärung</h2>
    <p class="dialog-meta">Stand: 30. September 2026</p>

    <h3>1. Verantwortlicher</h3>
    <address>
      <strong>Quant Foku Ltd.</strong>
      <span>Konrad-Adenauer-Ufer 21</span>
      <span>50668 Köln, Deutschland</span>
      <span>Telefon: <a href="tel:+492214981">0221 / 498 - 1</a></span>
      <span>E-Mail: <a href="mailto:Tony@quant-fokus.com">Tony@quant-fokus.com</a></span>
    </address>

    <h3>2. Aufruf dieser Website</h3>
    <p>Beim Aufruf dieser Website können technisch erforderliche Verbindungsdaten verarbeitet werden. Dazu gehören insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Datei, übertragene Datenmenge, Browsertyp, Betriebssystem und verweisende Seite. Die Verarbeitung ist erforderlich, um die Website sicher und fehlerfrei bereitzustellen.</p>
    <p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der sicheren, stabilen und technisch funktionsfähigen Bereitstellung unseres Internetangebots. Server-Protokolldaten werden nur so lange gespeichert, wie dies für Betrieb, Sicherheit und Fehleranalyse erforderlich ist, und anschließend gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.</p>

    <h3>3. Cookies, Analyse und Formulare</h3>
    <p>Diese Website setzt derzeit keine Analyse- oder Marketing-Cookies ein. Es werden keine Tracking-Dienste verwendet und auf dieser Website keine Kontakt- oder Registrierungsformulare angeboten.</p>

    <h3>4. Kontaktaufnahme</h3>
    <p>Wenn Sie uns telefonisch oder per E-Mail kontaktieren, verarbeiten wir die von Ihnen übermittelten Angaben zur Bearbeitung Ihrer Anfrage und möglicher Anschlussfragen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit die Kommunikation der Anbahnung oder Durchführung eines Vertrags dient, andernfalls Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse besteht in der sachgerechten Bearbeitung Ihrer Anfrage.</p>

    <h3>5. Weiterleitung zu WhatsApp</h3>
    <p>Beim Anklicken einer WhatsApp-Schaltfläche verlassen Sie diese Website und werden zu einem Angebot von WhatsApp weitergeleitet. Für Nutzer im Europäischen Wirtschaftsraum wird der Dienst von WhatsApp Ireland Limited bereitgestellt. Dabei kann WhatsApp insbesondere Konto-, Geräte-, Verbindungs-, Nutzungs- und Kommunikationsdaten sowie Ihre Mobiltelefonnummer verarbeiten. Die weitere Verarbeitung erfolgt in eigener Verantwortung von WhatsApp und kann auch eine Verarbeitung außerhalb des Europäischen Wirtschaftsraums umfassen.</p>
    <p>Der Aufruf von WhatsApp erfolgt erst nach Ihrer aktiven Auswahl der entsprechenden Schaltfläche. Informationen zur Verarbeitung durch WhatsApp finden Sie in der <a href="https://www.whatsapp.com/legal/privacy-policy-eea" target="_blank" rel="noopener">Datenschutzrichtlinie von WhatsApp</a>.</p>

    <h3>6. Speicherdauer</h3>
    <p>Wir speichern personenbezogene Daten nur so lange, wie dies für den jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen. Entfällt der Verarbeitungszweck und besteht keine gesetzliche Pflicht zur weiteren Speicherung, werden die Daten gelöscht.</p>

    <h3>7. Ihre Rechte</h3>
    <p>Sie haben nach Maßgabe der DSGVO insbesondere folgende Rechte:</p>
    <ul>
      <li>Auskunft über Ihre verarbeiteten personenbezogenen Daten,</li>
      <li>Berichtigung unrichtiger oder unvollständiger Daten,</li>
      <li>Löschung oder Einschränkung der Verarbeitung,</li>
      <li>Datenübertragbarkeit, soweit die gesetzlichen Voraussetzungen vorliegen,</li>
      <li>Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen,</li>
      <li>Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft.</li>
    </ul>
    <p>Zur Ausübung Ihrer Rechte genügt eine Nachricht an <a href="mailto:Tony@quant-fokus.com">Tony@quant-fokus.com</a>.</p>

    <h3>8. Beschwerderecht</h3>
    <p>Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren. Für Nordrhein-Westfalen können Sie sich an die Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen wenden. Das offizielle Beschwerdeangebot finden Sie unter <a href="https://www.ldi.nrw.de/kontakt/ihre-beschwerde" target="_blank" rel="noopener">ldi.nrw.de</a>.</p>

    <h3>9. Aktualisierung</h3>
    <p>Wir passen diese Datenschutzerklärung an, wenn sich unsere Website, die eingesetzten Dienste oder die rechtlichen Anforderungen ändern.</p>
  `
};

document.querySelectorAll("[data-dialog]").forEach((button) => {
  button.addEventListener("click", () => {
    dialogContent.innerHTML = dialogCopy[button.dataset.dialog];
    dialog.showModal();
    document.body.classList.add("dialog-open");
  });
});

function closeDialog() {
  dialog.close();
  document.body.classList.remove("dialog-open");
}

dialog.querySelector(".dialog-close").addEventListener("click", closeDialog);
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) closeDialog();
});
