const studentRoster = [
    "刘宗盛", "刘茂鑫", "陆文骏", "刘焕腾", "刘鹏翮", 
    "王宇航", "吴炫榆", "夏航", "徐楠", "张文龙",
    "袁正杰", "孙一宁", "孙辰昊", "孙潇慧", "孙浩宇",
    "牛振源", "宋兴明", "李昊东", "李鹏辉", "李俊锋",
    "李福超","赵子豪","阙雨豪","高梓洋","从艺涵","郭金磊",
    "高寒","刘少宸","刘涵","陈晓晴","史佳慧","高妍","徐子淇",
    "赵敏","韩策","韩运威","韩文韬","何志鹏","姜凯","黄麒阁",
    "孙运庚","任廷凯","王凌志","王义超","李向前"
    
];

const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const selectedStudent = document.getElementById('selectedStudent');
const rollingStudents = document.getElementById('rollingStudents');

let timer = null;
let isRolling = false;

function getRandomStudent() {
    const randomIndex = Math.floor(Math.random() * studentRoster.length);
    return studentRoster[randomIndex];
}

function startRolling() {
    if (isRolling) return;
    
    isRolling = true;
    startBtn.disabled = true;
    stopBtn.disabled = false;
    selectedStudent.textContent = "随机选择中...";
    selectedStudent.style.color = "#3498db";
    
    timer = setInterval(() => {
        const randomStudents = [];
        for (let i = 0; i < 3; i++) {
            randomStudents.push(getRandomStudent());
        }
        rollingStudents.textContent = randomStudents.join("  →  ");
    }, 100);
}

function stopRolling() {
    if (!isRolling) return;
    
    clearInterval(timer);
    isRolling = false;
    startBtn.disabled = false;
    stopBtn.disabled = true;
    
    const finalStudent = getRandomStudent();
    selectedStudent.textContent = finalStudent;
    selectedStudent.style.color = "#e74c3c";
    rollingStudents.textContent = `已选中: ${finalStudent}`;
}

startBtn.addEventListener('click', startRolling);
stopBtn.addEventListener('click', stopRolling);