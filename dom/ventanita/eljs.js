function openModal() {
    document.getElementById('loginModal').style.display = 'block';
  }
  
  function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
  }
  
  document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que la página se recargue
    // Aquí puedes agregar código para procesar el inicio de sesión
    console.log('Iniciar Sesión:', document.getElementById('username').value, document.getElementById('password').value);
    closeModal();
  });
  