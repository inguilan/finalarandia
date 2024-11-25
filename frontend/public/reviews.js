const reviewForm = document.getElementById('review-form');
const reviewList = document.getElementById('review-list');

reviewForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const rating = document.getElementById('review-rating').value;
  const comment = document.getElementById('review-comment').value;

  const response = await fetch('/reviews/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ calificacion: parseInt(rating), comentario: comment, userId: 1 }), 
  });

  const result = await response.json();
  alert(result.message || 'Reseña añadida');
  loadReviews();
});

// Cargar y mostrar reseñas
async function loadReviews() {
  const response = await fetch('/reviews');
  const reviews = await response.json();

  reviewList.innerHTML = reviews
    .map(
      (r) => `<li>${r.calificacion} estrellas: "${r.comentario}"</li>`
    )
    .join('');
}

// Inicializar la lista de reseñas
loadReviews();
