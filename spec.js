var myFullpage = new fullpage('#fullpage', {
   //options here
    licenseKey: '83B41FD0-D3DB4374-B8C229EC-B1EA5822',
    autoScrolling: true,
    sectionsColor: [],
    //lockanchors: false,
    //anchors: ['section2', 'section3']
    //verticalCentered: false,
    anchors: ['firstPage', 'secondPage', '3rdPage'],
    //menu: '#menu',

    css3:false,
    responsiveWidth: 900,
    afterResponsive: function(isResponsive){

    }
   });
