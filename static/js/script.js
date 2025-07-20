document.addEventListener('DOMContentLoaded', function() {
    // 기존의 네비게이션 토글 및 부드러운 스크롤 코드...
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', mainNav.classList.contains('active'));
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- 제주 퀴즈 기능 추가 ---
    const submitQuizBtn = document.querySelector('.submit-quiz-btn');
    const quizFeedback = document.querySelector('.quiz-feedback');
    const correctAnswers = {
        quiz1: 'b' // Q1의 정답은 'b' (화산 활동)
    };

    if (submitQuizBtn && quizFeedback) {
        submitQuizBtn.addEventListener('click', function() {
            const selectedOption = document.querySelector('input[name="quiz1"]:checked');

            if (!selectedOption) {
                quizFeedback.textContent = '답을 선택해주세요!';
                quizFeedback.className = 'quiz-feedback wrong'; // 경고 메시지도 빨간색으로
                return;
            }

            const userAnswer = selectedOption.value;
            const questionId = selectedOption.name; // 'quiz1'

            if (userAnswer === correctAnswers[questionId]) {
                quizFeedback.textContent = '정답입니다! 👏';
                quizFeedback.className = 'quiz-feedback correct';
            } else {
                quizFeedback.textContent = '아쉽지만 오답입니다. 다시 도전해보세요! 🤔';
                quizFeedback.className = 'quiz-feedback wrong';
            }
        });
    }
});