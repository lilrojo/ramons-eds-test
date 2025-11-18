export default function decorate(block) {
  const button = block.querySelector('.fondue-button');
  if (button) {
    button.addEventListener('click', () => {
      alert('Fondue button clicked!');
    });
  }
}