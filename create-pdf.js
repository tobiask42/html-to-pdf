#!/usr/bin/env node
const puppeteer = require('puppeteer');
const readline = require('readline-sync');
const path = require('path');
const fs = require('fs');


(async () => {
  try {
    const inputArg = process.argv[2];
    const pageNumbers = process.argv.includes('--nums')
    const inputPath = inputArg
      ? inputArg.trim().replace(/"/g, '')
      : readline.question('Pfad zur HTML-Datei: ').trim().replace(/"/g, '');

    if (!fs.existsSync(inputPath)) {
      console.error('❌ Datei nicht gefunden. Bitte Pfad prüfen.');
      process.exit(2);
    }

    const absolutePath = path.resolve(inputPath);
    const outputPath = absolutePath.replace(/\.html?$/, '.pdf');

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(`file://${absolutePath}`, { waitUntil: 'networkidle0' });


    await page.pdf({
      path: outputPath,
      format: 'A4',
      margin: { top: '20mm', bottom: '20mm', left: '15mm', right: '15mm' },
      displayHeaderFooter: pageNumbers,
      footerTemplate: pageNumbers ? `
        <div style="font-size:12px; width:100%; text-align:center; color:gray;">
          Seite <span class="pageNumber"></span> von <span class="totalPages"></span>
        </div>` : '',
      headerTemplate: '<div></div>',
    });

    await browser.close();

    console.log(`✅ PDF erfolgreich generiert: ${outputPath}`);
  } catch (err) {
    console.error('❌ Fehler beim Generieren der PDF:', err.message);
    process.exit(3);
  }
})();
