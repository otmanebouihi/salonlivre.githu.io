// Fonction pour afficher ou masquer le menu de navigation sur mobile
function toggleMenu() {
	var nav = document.querySelector('nav');
	nav.classList.toggle('active');
}

// Fonction pour valider le formulaire de contact
function validateForm() {
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var message = document.getElementById('message').value;

	if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
		alert('Veuillez remplir tous les champs du formulaire.');
		return false;
	}

	if (!validateEmail(email)) {
		alert('Veuillez saisir une adresse email valide.');
		return false;
	}

	return true;
}

// Fonction pour valider l'adresse email saisie
function validateEmail(email) {
	var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return re.test(email);
}

// Événements pour le menu de navigation et le formulaire de contact
document.getElementById('menu-button').addEventListener('click', toggleMenu);
document.getElementById('contact-form').addEventListener('submit', validateForm);
