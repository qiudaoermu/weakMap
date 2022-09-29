console.log($)
$(function(){
  $("#btnsubmit").click(function(event){
    event.preventDefault();
    $.ajax({
      url:'/receive',
      data: {
        username:$("#username").val()
      },
      success:function(data) {
        console.info(data)
      },
      error:function(){
        alert('error')
      }
    })
  })
})
