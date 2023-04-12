// document.getElementById("calcular-btn").addEventListener("click", function () {
//     let presupuesto = document.getElementById("presupuesto-input").value;

//     $.ajax({
//         url: "https://api.bluelytics.com.ar/v2/latest",
//         method: "GET",
//         success: function (data) {
//             let blueDolar = data.blue.value_buy;
//             let totalArs = presupuesto;
//             let totalUsd = totalArs / blueDolar;
//             document.getElementById("presupuesto").innerHTML = "El costo total del producto en pesos argentinos es: " + totalArs + "<br>El costo total del producto en dólares es: " + totalUsd;
//         }
//     });
// });


$(document).ready(function () {
    $("#calcular-btn").click(function () {
        let presupuesto = $("#presupuesto-input").val();
        $.ajax({
            url: "https://api.bluelytics.com.ar/v2/latest",
            method: "GET",
        })
            .done(function (data) {
                let blueDolar = data.blue.value_buy;
                let totalArs = presupuesto;
                let totalUsd = totalArs / blueDolar;
                $("#presupuesto").html("La conversion de : $" + totalArs + " pesos a dolares al cambio del dia es u$s " + totalUsd);

            });
    });
});

window.jsPDF = window.jspdf.jsPDF;

$('#send_pdf').click(function () {
    let doc = new jsPDF();
    let nombre = $("#form4Example1").val();
    let mail = $("#form4Example2").val();
    let form = $("#form4Example3").val();
    doc.setFontSize(14);
    doc.text(40, 30, nombre);
    doc.text(40, 40, mail);
    doc.text(40, 50, form);
    doc.save('formulario.pdf');
});



window.onload = function () {
    let contenedor = document.getElementById('contenedor_carga');
    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';
};

AOS.init();