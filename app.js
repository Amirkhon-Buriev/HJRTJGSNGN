const correctPassword = "12345"; // Задайте свой пароль

document.getElementById('loginBtn').addEventListener('click', function() {
    const passwordInput = document.getElementById('passwordInput').value;
    
    if (passwordInput === correctPassword) {
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('todoContainer').style.display = 'block';
    } else {
        document.getElementById('errorMsg').textContent = "Неверный пароль!";
    }
});

document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;

        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        document.getElementById('taskList').appendChild(li);
        taskInput.value = '';
    }
});