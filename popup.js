document.getElementById('btn').addEventListener('click', () => {
    chrome.history.deleteAll(() => {
        const des = document.getElementById('des');
        des.textContent = "삭제 완료!";

        setTimeout(() => {
            des.textContent = "버튼 클릭시 삭제됩니다";
        }, 3000);
    })
})