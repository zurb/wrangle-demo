;(function($) {

	var Photo = function(id, title, url, album) {
		this.id = id;
		this.title = title;
		this.url = url;

		this.album = typeof album === 'number' ? album : null;
	}
	Photo.prototype.markup = function() {
		var elem = document.createElement('li');

		var img = document.createElement('img');
		img.setAttribute('data-photo', this.id);
		img.src = this.url;
		img.title = this.title;
		elem.appendChild(img);

		return elem;
	}
	Photo.prototype.star = function() {
		this.starred = !this.starred;
	}
	Photo.prototype.setAlbum = function(id) {
		if (typeof id === 'number');
	}

	var PhotoAlbum = function(id, name, thumbnail) {
		this.id = id;
		this.name = name;
		this.thumbnail = thumbnail;
	}
	PhotoAlbum.prototype.markup = function() {
		var elem = document.createElement('li');

		var img = document.createElement('img');
		img.src = this.thumbnail;
		img.setAttribute('data-album', this.id);

		var title = document.createElement('p');
		title.innerHTML = this.name;

		elem.appendChild(img);
		elem.appendChild(title);

		return elem;
	}

}(window.Zepto || window.jQuery));