export default function decorate(block) {
  const button = block.querySelector('.spectrum-Button');
  if (button) {
    button.addEventListener('click', () => {
      alert('Spectrum button clicked!');
    });
  }
}
