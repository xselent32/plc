$(document).ready(function() {
		$("input.phone").on('input', function(e){
			this.value = this.value.replace(/[^0-9]/g, '');
		});
		$("input.name").on('input', function(e){
			this.value = this.value.trim();
		});
     $('.btn-form').on('click', function() {
       let phoneValue = $('input.phone').val();
       let nameValue = $('input.name').val();

			 if (phoneValue.trim() != '' && nameValue.trim() != '') {
        $.ajax({
            method: "POST",
            url: "/form.php",
            data: { phone: phoneValue, name: nameValue }
          })
            .done(function(msg) {
               Swal.fire(
                'Спасибо!',
                msg,
                'success'
              )
            });

						$('input.name').val('');
						$('input.phone').val('');
			 }
     })
    })