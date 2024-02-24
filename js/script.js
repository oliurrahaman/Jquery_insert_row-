var products = [
    {'id': 1, 'name' : 'T Shirt', 'price': 1500, 'description': 'T Shirt description'},
    {'id': 2, 'name' : 'Sony Mobile', 'price': 85000, 'description': 'Sony Mobile description'},
    {'id': 3, 'name' : 'Jens Pant', 'price': 5500, 'description': 'Jens Pant description'},
    {'id': 4, 'name' : 'Apple Watch', 'price': 75500, 'description': 'Apple Watch description'},
    {'id': 5, 'name' : 'Apple Watch', 'price': 75500, 'description': 'Apple Watch description'},
];
var tr = '';
$.each(products, function (key, value) {
    tr += '<tr>';
        tr += '<td>'+value.id+'</td>';
        tr += '<td>'+value.name+'</td>';
        tr += '<td>'+value.price+'</td>';
        tr += '<td>'+value.description+'</td>';
    tr += '</tr>';
});
$('#productTbody').append(tr);

var option = '';
$.each(products, function (key, value) {
    option += '<option>'+value.name+'</option>';
});
$('#productName').append(option);


$('#addProductBtn').click(function () {
    var newTr = '';
    newTr += '<tr>';
        newTr += '<td>';
            newTr += '<select>';
                newTr += '<option value="" disabled selected>Select Product</option>';
                $.each(products, function (key, value) {
                    newTr += '<option>'+value.name+'</option>';
                });
            newTr += '</select>';
        newTr += '</td>';
        newTr += '<td><input type="number"/></td>';
        newTr += '<td><input type="number"/></td>';
        newTr += '<td><input type="number"/></td>';
        newTr += '<td><input type="button" value="-" class="remove-btn"/></td>';
    newTr += '</tr>';
    $('#invoiceTbody').append(newTr);
});


$(document).on('click', '.remove-btn', function () {
    $(this).closest('tr').remove();
});
