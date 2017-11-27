window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer",
    {
        title:{
            text: "Presidential Election Results"
        },
                animationEnabled: true,
        data: [
        {
            type: "doughnut",
            startAngle: 60,
            toolTipContent: "{legendText}: {y} - <strong>#percent% </strong>",
            showInLegend: true,
          explodeOnClick: false, //**Change it to true
            dataPoints: [
                {y: 65899660, indexLabel: "Barack Obama #percent%", legendText: "Barack Obama" },
                {y: 60929152, indexLabel: "Mitt Romney #percent%", legendText: "Mitt Romney" },
                {y: 2175850,  indexLabel: "Others #percent%", legendText: "Others" }
            ]
        }
        ]
    });
    chart.render();
    }
/*-----scroll nav----*/  

var $star_rating = $('.star-rating .fa');

var SetRatingStar = function() {
  return $star_rating.each(function() {
    if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
      return $(this).removeClass('fa-star-o').addClass('fa-star');
    } else {
      return $(this).removeClass('fa-star').addClass('fa-star-o');
    }
  });
};

$star_rating.on('click', function() {
  $star_rating.siblings('input.rating-value').val($(this).data('rating'));
  return SetRatingStar();
});

SetRatingStar();
$(document).ready(function() {

});




