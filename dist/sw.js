self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        var fetchRequest = event.request.clone()

        if (fetchRequest.url == 'http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg') {
          fetchRequest = new Request('http://cdn3-www.dogtime.com/assets/uploads/gallery/austalian-shepherd-dog-breed-pictures/5-puppy.jpg', { mode: 'no-cors' })
        }
        return fetch(fetchRequest);
      }
    )
  );
});
