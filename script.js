document.getElementById('add-todo').addEventListener('click', function() {
    const todoText = document.getElementById('new-todo').value;
    if (todoText !== "") {
        const li = document.createElement('li');
        li.textContent = todoText;

        // 삭제 버튼 추가
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '삭제';
        deleteBtn.style.marginLeft = '10px';
        li.appendChild(deleteBtn);

        document.getElementById('todo-list').appendChild(li);
        document.getElementById('new-todo').value = "";

        // 삭제 버튼 클릭 이벤트
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });
    }
});
