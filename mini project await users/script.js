window.addEventListener('DOMContentLoaded', async () => {
    try {
      const res = await fetch('users.json');
      const users = await res.json();
  
      const tableBody = document.getElementById('tableBody');
  
      users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.username}</td>
          <td>${user.email}</td>
          <td>${user.address.city}</td>
          <td>${user.phone}</td>
          <td>${user.company.name}</td>
        `;
        tableBody.appendChild(row);
      });
    } catch (error) {
      console.error('Error loading JSON:', error);
    }
  });
  