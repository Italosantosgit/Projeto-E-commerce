$(document).ready(function () {
    $("#DepartamentsId").change(function () {
        $("#CityId").empty();
        $("#CityId").append('<option value="0">[Selecione uma cidade...]</option>');
        $.ajax({
            type: 'POST',
            url: Url,
            dataType: 'json',
            data: { departmentId: $("#DepartamentsId").val() },
            success: function (data) {
                $.each(data, function (i, data) {
                    $("#CityId").append('<option value="'
                        + data.CityId + '">'
                        + data.Name + '</option>');
                });
            },
            error: function (ex) {
                alert('Falha ao recuperar cidades.' + ex);
            }
        });
        return false;
    })
});