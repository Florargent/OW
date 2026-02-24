function openPopup() {
    document.querySelector('.popup-overlay').style.display = 'block';
    document.querySelector('.popup').style.display = 'block';
}

function closePopup() {
    document.querySelector('.popup-overlay').style.display = 'none';
    document.querySelector('.popup').style.display = 'none';
}

// 点击遮罩层关闭弹窗
document.querySelector('.popup-overlay').addEventListener('click', function(e) {
    if (e.target === this) {
        closePopup();
    }
});
