$('#caseModal').on('show.bs.modal', function(e) {
    $('#caseModal .modal-title').text($(e.relatedTarget).closest('.card').find('.card-title').text())
    $('#caseModal .card-img').attr('src', $(e.relatedTarget).closest('.card').find('.card-img').attr('src'))
})