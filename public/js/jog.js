function initJog() {

  $('#bounding').on('click', function() {
    var bbox2 = new THREE.Box3().setFromObject(object);
    console.log('bbox for Draw Bounding Box: '+ object +' Min X: ', (bbox2.min.x + (laserxmax / 2)), '  Max X:', (bbox2.max.x + (laserxmax / 2)), 'Min Y: ', (bbox2.min.y + (laserymax / 2)), '  Max Y:', (bbox2.max.y + (laserymax / 2)));
    printLog("Drawing Bounding Box...", msgcolor, "jog");
    var moves = `
    G90\n
    G0 X`+(bbox2.min.x + (laserxmax / 2))+` Y`+(bbox2.min.y + (laserymax / 2))+` F2000\n
    G0 X`+(bbox2.max.x + (laserxmax / 2))+` Y`+(bbox2.min.y + (laserymax / 2))+` F2000\n
    G0 X`+(bbox2.max.x + (laserxmax / 2))+` Y`+(bbox2.max.y + (laserymax / 2))+` F2000\n
    G0 X`+(bbox2.min.x + (laserxmax / 2))+` Y`+(bbox2.max.y + (laserymax / 2))+` F2000\n
    G0 X`+(bbox2.min.x + (laserxmax / 2))+` Y`+(bbox2.min.y + (laserymax / 2))+` F2000\n
    G90\n`
    sendGcode(moves)
});

    $('#xP').on('click', function() {
       if (isConnected) {
         var dist = $('input[name=stp]:checked', '#stepsize').val()
         var feedrate = $('#jogfeedxy').val() * 60
         console.log('Jog Distance', dist);
         sendGcode('G91\nG0 F'+ feedrate +' X'+ dist + '\nG90\n');
       }
    });

    $('#yP').on('click', function() {
       if (isConnected) {
         var dist = $('input[name=stp]:checked', '#stepsize').val()
         var feedrate = $('#jogfeedxy').val() * 60
         console.log('Jog Distance', dist);
         sendGcode('G91\nG0 F'+ feedrate +' Y'+ dist + '\nG90\n');
       }
    });

    $('#zP').on('click', function() {
       if (isConnected) {
         var dist = $('input[name=stp]:checked', '#stepsize').val()
         var feedrate = $('#jogfeedz').val() * 60
         console.log('Jog Distance', dist);
         sendGcode('G91\nG0 F'+ feedrate +' Z'+ dist + '\nG90\n');
       }
    });

    $('#xM').on('click', function() {
       if (isConnected) {
         var dist = $('input[name=stp]:checked', '#stepsize').val()
         var feedrate = $('#jogfeedxy').val() * 60
         console.log('Jog Distance', dist);
         sendGcode('G91\nG0 F'+ feedrate +' X-'+ dist + '\nG90\n');
       }
    });

    $('#yM').on('click', function() {
       if (isConnected) {
         var dist = $('input[name=stp]:checked', '#stepsize').val()
         var feedrate = $('#jogfeedxy').val() * 60
         console.log('Jog Distance', dist);
         sendGcode('G91\nG0 F'+ feedrate +' Y-'+ dist + '\nG90\n');
       }
    });

    $('#zM').on('click', function() {
       if (isConnected) {
         var dist = $('input[name=stp]:checked', '#stepsize').val()
         var feedrate = $('#jogfeedz').val() * 60
         console.log('Jog Distance', dist);
         sendGcode('G91\nG0 F'+ feedrate +' Z-'+ dist + '\nG90\n');
       }
    });

    // Jog Widget
    $('#stepsize input').on('change', function() {
       printLog('Jog will use ' +$('input[name=stp]:checked', '#stepsize').val() + ' mm per click', successcolor, "jog");
       $(".stepsizeval").empty();
       $(".stepsizeval").html($('input[name=stp]:checked', '#stepsize').val() + 'mm');
    });



}
