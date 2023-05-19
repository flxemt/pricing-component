const switchInput = document.querySelector('.switch input')
const annually = document.querySelectorAll('.annually')
const monthly = document.querySelectorAll('.monthly')

function handleChange() {
  if (switchInput.checked) {
    annually.forEach(item => item.classList.add('hidden'))
    monthly.forEach(item => item.classList.remove('hidden'))
  } else {
    annually.forEach(item => item.classList.remove('hidden'))
    monthly.forEach(item => item.classList.add('hidden'))
  }
}

switchInput.addEventListener('change', handleChange)
handleChange()
