function buscarHerois() {
    const url = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json';
    const botaoContainer = document.getElementById('botao-container');
    const heroisContainer = document.getElementById('herois-container');

    botaoContainer.innerHTML = '<p>Carregando...</p>';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            botaoContainer.remove(); // Remove o botão após o clique

            heroisContainer.innerHTML = ''; // Limpa o container
            
            data.forEach(heroi => {
                const card = document.createElement('div');
                card.classList.add('heroi-card');

                card.innerHTML = `
                    <img src="${heroi.images.md}" alt="${heroi.name}" class="heroi-imagem">
                    <h2>${heroi.name}</h2>
                    <p>Nome Real: ${heroi.biography.fullName || 'confidência'}</p>
                `;

                heroisContainer.appendChild(card);
            });
            
            console.table(data);
        })

}