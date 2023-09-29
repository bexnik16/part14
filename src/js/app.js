const tabs = document.querySelectorAll('.tab');
        const tabContents = document.querySelectorAll('.tab-content');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                const tabId = tab.id.replace('tab', 'content');
                tabContents.forEach(content => {
                    content.classList.remove('active');
                    if (content.id === tabId) {
                        content.classList.add('active');
                    }
                });
            });
        });

        // İlk tabı aktiv edin
        tabs[0].click();



// Muzeylər üçün To-Do List maddələri üçün massiv yaradırıq
const museumTasks = [];

// Yeni tapşırığı əlavə etmək üçün funksiya
function addMuseumTask() {
    const taskInput = document.getElementById('museumTaskInput');
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Boş iş əlavə etmək olmaz!');
        return;
    }

    museumTasks.push(taskText); // Tapşırığı massivə əlavə edirik
    displayMuseumTasks(); // Tapşırıqları göstərən funksiyaya yönləndiririk
    taskInput.value = '';
}

// Tapşırıqları göstərən və silən funksiya
function displayMuseumTasks() {
    const taskList = document.getElementById('museumTasksList');
    taskList.innerHTML = ''; // Əvvəlcədən göstərdiyimiz tapşırıqları təmizləyirik

    museumTasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${task}</span>
            <button onclick="removeMuseumTask(${index})">Sil</button>
        `;
        taskList.appendChild(listItem);
    });
}

// Tapşırığı silmək üçün funksiya
function removeMuseumTask(index) {
    museumTasks.splice(index, 1); // Massivdən tapşırığı silirik
    displayMuseumTasks(); // Tapşırıqları göstərən funksiyaya yönləndiririk
}
// Parklar üçün To-Do List maddələri üçün massiv yaradırıq
const parkTasks = [];

// Yeni tapşırığı əlavə etmək üçün funksiya
function addParkTask() {
    const taskInput = document.getElementById('parkTaskInput');
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Boş iş əlavə etmək olmaz!');
        return;
    }

    parkTasks.push(taskText); // Tapşırığı massivə əlavə edirik
    displayParkTasks(); // Tapşırıqları göstərən funksiyaya yönləndiririk
    taskInput.value = '';
}

// Tapşırıqları göstərən və silən funksiya
function displayParkTasks() {
    const taskList = document.getElementById('parkTasksList');
    taskList.innerHTML = ''; // Əvvəlcədən göstərdiyimiz tapşırıqları təmizləyirik

    parkTasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${task}</span>
            <button onclick="removeParkTask(${index})">Sil</button>
        `;
        taskList.appendChild(listItem);
    });
}

// Tapşırığı silmək üçün funksiya
function removeParkTask(index) {
    parkTasks.splice(index, 1); // Massivdən tapşırığı silirik
    displayParkTasks(); // Tapşırıqları göstərən funksiyaya yönləndiririk
}
// Şəhər turları üçün To-Do List maddələri üçün massiv yaradırıq
const tourTasks = [];

// Yeni tapşırığı əlavə etmək üçün funksiya
function addTourTask() {
    const taskInput = document.getElementById('tourTaskInput');
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Boş iş əlavə etmək olmaz!');
        return;
    }

    tourTasks.push(taskText); // Tapşırığı massivə əlavə edirik
    displayTourTasks(); // Tapşırıqları göstərən funksiyaya yönləndiririk
    taskInput.value = '';
}







let tasks = [];

// HTML elementlərini seçirik
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Yeni görev əlavə etmə funksiyası
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push(taskText);
        taskInput.value = "";
        updateTaskList();
    }
}

// Görevləri yeniləmə funksiyası
function updateTaskList() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${task}</span>
            <button onclick="removeTask(${index})">Sil</button>
        `;
        listItem.onclick = function () {
            listItem.style.textDecoration = "line-through";
        };
        taskList.appendChild(listItem);
    });
}

// Görevi silmək üçün funksiyası
function removeTask(index) {
    tasks.splice(index, 1);
    updateTaskList();
}

// Səhifə yükləndikdə görevləri yeniləyirik
window.onload = updateTaskList;



window.addEventListener("DOMContentLoaded", function () {
    let sliderImg = document.getElementById("slider-img");
    let prevBtn = document.getElementById("prevBtn");
    let nextBtn = document.getElementById("nextBtn");
    let sliderContainer = document.querySelector(".slider-container");

    let images1 = [
        "src/img/5.jpg",
        "src/img/1610077_667780266610517_9052614107376534734_n.webp",
        "src/images/1621337945_16213095291238851387_1000x669.jpg",
        "src/images/muzey.jpg"
    ];

    let images2 = [
        "src/img/1492151652_1225153_2f7994d80b510f8718d515606b301e1b_640x640.jpg",
        "src/img/1654683029_16546822461918864946_1000x669.jpg",
        "src/img/1654683098_16546822472915844421_1000x669.jpg",
        "src/img/park1 (1).jpg"
    ];

    let images3 = [
        "src/img/16231004823891760be8c429a75d.jpg",
        "src/img/16269539553323060f958e3194b0.jpeg",
        "src/img/1649995932389506258f09c68114.jpg",
        "src/img/download.jpg"
    ];

    let currentIndex = 0;

    function Slider() {
        if (currentIndex < 0) {
            currentIndex = images1.length - 1;
        } else if (currentIndex >= images1.length) {
            currentIndex = 0;
        }
        sliderImg.src = images1[currentIndex];
    }

    prevBtn.addEventListener("click", function () {
        currentIndex--;
        Slider();
    });

    let autoPlay = setInterval(function () {
        currentIndex++;
        Slider();
    }, 2000);

    sliderContainer.addEventListener("mouseover", function () {
        clearInterval(autoPlay);
    });

    sliderContainer.addEventListener("mouseout", function () {
        autoPlay = setInterval(function () {
            currentIndex++;
            Slider();
        }, 2000);
    });
});
