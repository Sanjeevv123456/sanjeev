document.addEventListener('DOMContentLoaded', function() {
    const convertBtn = document.getElementById('convertBtn');
    const celsiusInput = document.getElementById('celsius');
    const result = document.getElementById('result');
  
    convertBtn.addEventListener('click', function() {
      const celsius = parseFloat(celsiusInput.value);
      if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        result.textContent = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
      } else {
        result.textContent = 'Please enter a valid temperature in Celsius';
      }
    });
  });
  