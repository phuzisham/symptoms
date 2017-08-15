$(document).ready(function() {
  $("#survey").submit(function(event){
    event.preventDefault();
    var warningPoints = 0;
    var symptomPoints = 0;
    var reliefPoints = 0;
    $("input:checkbox[name=warning]:checked").each(function() {
      var warningSigns = $(this).val();
      $("#warning").append(warningSigns + "<br>");
      warningPoints += 1;
    });
    $("input:checkbox[name=symptoms]:checked").each(function() {
      var symptoms = $(this).val();
      $("#symptoms").append(symptoms + "<br>");
      symptomPoints += 1;
    });
    $("input:checkbox[name=stressRelief]:checked").each(function() {
      var stressRelief = $(this).val();
      $("#stress").append(stressRelief + "<br>");
      reliefPoints += 1;
    });
    var warningResults = warningPoints - reliefPoints;
    var symptomResults = symptomPoints - reliefPoints;
    if (warningResults > symptomResults && warningResults > reliefPoints) {
      alert('You are warned!');
    } else if (symptomResults > warningResults && symptomResults > reliefPoints) {
      alert('You have symptoms!');
    } else if (reliefPoints > symptomResults && reliefPoints > warningResults) {
      alert('You are relieved!');
    }
  });
});
