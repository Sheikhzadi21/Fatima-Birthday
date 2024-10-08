function showSurprise() {
    const surpriseDiv = document.querySelector('.surprise');
    surpriseDiv.style.display = 'block';
    surpriseDiv.innerHTML = '🎉🎈Again Happy Birthday, Noor Fatima! 🎈🎉';

    // Adding balloons to the background
    const balloonsContainer = document.createElement('div');
    balloonsContainer.className = 'balloons';
    document.body.appendChild(balloonsContainer);

    for (let i = 0; i < 5; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloonsContainer.appendChild(balloon);
    }
}
