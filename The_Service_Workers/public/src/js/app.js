// Validate Server Worker is available in the browser

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js')
        .then(function () {
            console.log('Service Worker registeresd');
        });
}