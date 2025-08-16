document.addEventListener('DOMContentLoaded', () => {
    const emailLink = document.getElementById('copy-email');
    const toast = document.getElementById('toast');

    emailLink.addEventListener('click', (e) => {
      e.preventDefault();
      navigator.clipboard.writeText('grace.sun.jiang [at] gmail [dot] com');
      toast.style.display = 'block';
      setTimeout(() => { toast.style.display = 'none'; }, 800);
    });
  });