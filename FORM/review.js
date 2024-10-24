// Review Submission Counter
window.onload = function () {
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);

    const reviewCountDiv = document.getElementById('review-count');
    reviewCountDiv.textContent = `You have submitted ${reviewCount} reviews so far.`;
}
