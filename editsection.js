$('.info-input').hide()
$('#basic-details').show()
$('.bds').click(function(obj){
  $('.option-tab').removeClass('mark-tab tab-active')
  $('.bds').addClass('mark-tab tab-active')
  $('.info-input').hide()
  $('#basic-details').show()
})
$('.gal').click(function(obj){
  $('.option-tab').removeClass('mark-tab tab-active')
  $('.gal').addClass('mark-tab tab-active')
  $('.info-input').hide()
  $('#gallery').show()
})
$('.fac').click(function(obj){
  $('.option-tab').removeClass('mark-tab tab-active')
  $('.fac').addClass('mark-tab tab-active')
  $('.info-input').hide()
  $('#faculty').show()
})
$('.mis').click(function(obj){
  $('.option-tab').removeClass('mark-tab tab-active')
  $('.mis').addClass('mark-tab tab-active')
  $('.info-input').hide()
  $('#miscellaneous').show()
})

var states = 'New Delhi|Andaman/Nicobar Islands|Andhra Pradesh|Arunachal Pradesh|Assam|Bihar|Chandigarh|Chhattisgarh|Dadra/Nagar Haveli|Daman/Diu|Goa|Gujarat|Haryana|Himachal Pradesh|Jammu/Kashmir|Jharkhand|Karnataka|Kerala|Lakshadweep|Madhya Pradesh|Maharashtra|Manipur|Meghalaya|Mizoram|Nagaland|Orissa|Pondicherry|Punjab|Rajasthan|Sikkim|Tamil Nadu|Tripura|Uttaranchal|Uttar Pradesh|West Bengal'.split('|')
console.log(states);
for(state in states){
  console.log(state);
  $('#states').append(
      $('<option></option>').val(states[state]).html(states[state])
  );
}

// Images Gallery
$(document).ready(function() {
    document.getElementById('pro-image').addEventListener('change', readImage, false);

    $( ".preview-images-zone" ).sortable();

    $(document).on('click', '.image-cancel', function() {
        var no = $(this).data('no');
        $(".preview-image.preview-show-"+no).remove();
    });
});
var num = 4;
function readImage() {
    if (window.File && window.FileList && window.FileReader) {
        var files = event.target.files; //FileList object
        var output = $(".preview-images-zone");

        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            if (!file.type.match('image')) continue;

            var picReader = new FileReader();

            picReader.addEventListener('load', function (event) {
                var picFile = event.target;
                var html =  '<div class="preview-image preview-show-' + num + '">' +
                            '<div class="image-cancel" data-no="' + num + '">x</div>' +
                            '<div class="image-zone"><img id="pro-img-' + num + '" src="' + picFile.result + '"></div>' +
                            '<div class="tools-edit-image"><a href="javascript:void(0)" data-no="' + num + '" class="btn btn-light btn-edit-image">edit</a></div>' +
                            '</d  iv>';

                output.append(html);
                num = num + 1;
            });

            picReader.readAsDataURL(file);
        }
        $("#pro-image").val('');
    } else {
        console.log('Browser not support');
    }
}

//Faculty Cards
var noOfCards = 1
function addNewFacultyCard(){
  var fac = $('#add-faculty-card')
  console.log(fac);
  noOfCards++
  fac.before('<div class="faculty-card faculty-'+noOfCards+'"><div class="card mb-3  bg-secondary">'+
                '<div class="row no-gutters bg-secondary"><div class="col-md-4">'+
                '<img src="aa.png" class="card-img" alt=""/></div><div class="col-md-8"><div class="card-body">'+
                '<div class="form-group">'+'<input type="text" class="form-control" placeholder="Faculty Name*" value="" />'+
                '</div><div class="form-group"><input type="number" class="form-control" placeholder="Experience*" value="" /></div>'+
                '<div class="form-group"><textarea rows = "3" cols = "80" class="form-control" placeholder="Specifications*" value=""></textarea>'+
                '</div></div></div></div></div></div>')
}
