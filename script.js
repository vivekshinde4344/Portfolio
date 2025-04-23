// Hover effect for skill wheel
const skills = document.querySelectorAll('.skill');
skills.forEach(skill => {
  skill.addEventListener('mouseenter', () => {
    skill.style.transform = 'scale(1.2)';
  });
  skill.addEventListener('mouseleave', () => {
    skill.style.transform = 'scale(1)';
  });
});

