const readline = require('readline');
const { execSync } = require('child_process');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getUserInput(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

function isValidHexColor(colorCode) {
  const hexColorRegex = /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
  return hexColorRegex.test(colorCode);
}

(async () => {
  try {
    let colorCode = '';
    while (!isValidHexColor(colorCode)) {
      colorCode = await getUserInput('Introduce el código hexadecimal de un color (e.g., #RRGGBB): ');
      if (!isValidHexColor(colorCode)) {
        console.log('Código hexadecimal incorrecto. Introduce un código válido.');
      }
    }

    let iconPath = 'assets/icon.png';
    if (!fs.existsSync(iconPath)) {
      console.log(`El archivo ${iconPath} no existe. Probando con assets/icon.svg`);
      if (fs.existsSync('assets/icon.svg')) {
        iconPath = 'assets/icon.svg';
        console.log(`El archivo ${iconPath} existe`);
      } else {
        console.log(`El archivo ${iconPath} tampoco no existe. Por favor, introduce un archivo PNG o SVG.`);
        process.exit(1);
      }
    }

    const command = `yarn react-native generate-bootsplash ${iconPath} \
      --platforms=ios,android \
      --background=${colorCode} \
      --logo-width=192`;

    execSync(command, { stdio: 'ignore' });

    console.log('¡El comando se ha ejecutado correctamente!');
  } catch (error) {
    console.error('Ha ocurrido un error:', error.message);
    console.error('\n¿Has ejecutado "yarn" previamente?');
  } finally {
    rl.close();
  }
})();