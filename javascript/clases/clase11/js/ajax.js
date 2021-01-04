/* ==== Leyendo un archivo estatico ==== */
	$.ajax({
		url: '/js/ajax.txt',
		success: function (data, status, xhr) {
			console.log(xhr)
			console.log(status)
			console.log(data)

		},
		error: function (xhr, status, errorThrown) {
			console.log(xhr)
			console.log(status)
			console.log(errorThrown)

		}
	})