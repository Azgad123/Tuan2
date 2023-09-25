document.getElementById('convertButton').addEventListener('click', function () {
    const textArea = document.getElementById('textArea');
    const variableNames = textArea.value.split('\n');
  ////Data Structures, Modern Operators and Strings
   
    variableNames.forEach((variableName, index) => {
      const words = variableName.split('_');
      let camelCaseName = words[0];
  
      for (let i = 1; i < words.length; i++) {
        camelCaseName += words[i][0].toUpperCase() + words[i].slice(1);
      }
  
      const checkmark = '✅'.repeat(index + 1);
      console.log(`${camelCaseName} ${checkmark}`);
    });
  });
  