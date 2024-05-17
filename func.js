document.getElementById('btn-ads').addEventListener('click', function() {
    document.getElementById('ads-section').style.display = 'flex';
    document.getElementById('reviews-section').style.display = 'none';
    document.getElementById('btn-ads').classList.add('active');
    document.getElementById('btn-reviews').classList.remove('active');
});

document.getElementById('btn-reviews').addEventListener('click', function() {
    document.getElementById('ads-section').style.display = 'none';
    document.getElementById('reviews-section').style.display = 'block';
    document.getElementById('btn-ads').classList.remove('active');
    document.getElementById('btn-reviews').classList.add('active');
});
