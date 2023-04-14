const mp = new MercadoPago('CLAVE DE API');

const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', async (event) => {
	event.preventDefault();

	const nombre = document.getElementById('nombre').value;
	const email = document.getElementById('email').value;
	const fecha = document.getElementById('fecha').value;
	const hora = document.getElementById('hora').value;
	const precio = document.getElementById('precio').value;

	const preference = await mp.createPreference({
		items: [{
			title: 'Turno de Barbería',
			quantity: 1,
			unit_price: parseInt(precio)
		}],
		payer: {
			name: nombre,
			email: email
		},
		back_urls: {
			success: 'https://mi-barberia.com/exito',
			failure: 'https://mi-barberia.com/error',
			pending: 'https://mi-barberia.com/pendiente'
		},
		auto_return: 'approved'
	});

	const idPago = preference.id;

	window.location = `https://www.mercadopago.com.ar/checkout/v1
