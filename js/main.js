$(() => {
  console.log(1, '-----1-----')
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)
  isMobile && $('body').addClass('isMobile')

  changeLanguage('cn')
  initChart()

  $('#language').click(function () {
    const txt = $(this).text()
    changeLanguage(txt === '中文' ? 'cn' : 'en')
    $('body')[txt === '中文' ? 'removeClass' : 'addClass']('isEnglish')
  })

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  })

  $('#index').click(function(){
    scrollTo(0)
  })

  $('#about').click(function(){
    console.log(1, '-----1-----')
    const scrollTop = $('#section1').offset().top - 100
    scrollTo(scrollTop)
  })

  $('#token').click(function(){
    const scrollTop = $('#section3').offset().top - 140
    scrollTo(scrollTop)
  })

  $('#application').click(function(){
    const scrollTop = $('#section4').offset().top - 140
    scrollTo(scrollTop)
  })

  $('#group').click(function(){
    const scrollTop = $('#bgImg4').offset().top - 90
    scrollTo(scrollTop)
  })

  $('#cooperative').click(function(){
    const scrollTop = $('#section6').offset().top - 120
    scrollTo(scrollTop)
  })
  
})

function changeLanguage (type) {
  lan = type === 'cn' ? cn : en 

  $('#index').text(lan.index)
  $('#about').text(lan.about)
  $('#token').text(lan.token)
  $('#application').text(lan.application)
  $('#group').text(lan.group)
  $('#cooperative').text(lan.cooperative)
  $('#language').text(lan.language)

  $('#section1').text(lan.section1)
  $('#content1').text(lan.content1)
  $('#s1_title1').text(lan.s1_title1)
  $('#s1_desc1').text(lan.s1_desc1)
  $('#s1_title2').text(lan.s1_title2)
  $('#s1_desc2').text(lan.s1_desc2)
  $('#s1_title3').text(lan.s1_title3)
  $('#s1_desc3').text(lan.s1_desc3)
  $('#s1_title4').text(lan.s1_title4)
  $('#s1_desc4').html(lan.s1_desc4)

  $('#section2').text(lan.section2)
  $('#s2_title1').text(lan.s2_title1)
  $('#s2_desc1').text(lan.s2_desc1)
  $('#s2_title2').text(lan.s2_title2)
  $('#s2_desc2').text(lan.s2_desc2)
  $('#s2_title3').text(lan.s2_title3)
  $('#s2_desc3').text(lan.s2_desc3)
  $('#s2_title4').text(lan.s2_title4)
  $('#s2_desc4').text(lan.s2_desc4)
  $('#s2_title5').text(lan.s2_title5)
  $('#s2_desc5').text(lan.s2_desc5)
  $('#s2_title6').text(lan.s2_title6)
  $('#s2_desc6').text(lan.s2_desc6)

  $('#section3').text(lan.section3)
  $('#section4').text(lan.section4)
  $('#section5').text(lan.section5)
  $('#section6').text(lan.section6)
  $('#s6_content1').text(lan.s6_content1)
  $('#s6_content2').text(lan.s6_content2)
  $('#s6_content3').text(lan.s6_content3)
}

function initChart () {
  const dom = echarts.init($('#chart')[0])
  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    graphic:[{
      type:"text",
      left:"center",
      top:"38%",
      style:{
        text:"发行总量",
        textAlign:"center",
        fontSize:30,
        fontWeight:700,
        fill: '#fff'
      }
    },{
      type:"text",
      left:"center",
      top:"45%",
      left:'45%',
      style:{
        text:"6.8",
        textAlign:"center",
        fill:"#fff",
        fontSize:56,
        fontWeight:700
      }
    },{
      type:"text",
      left:"center",
      top:"50%",
      left:'53%',
      style:{
        text:"亿",
        textAlign:"center",
        fill:"#fff",
        fontSize:20,
        fontWeight:700
      }
    },{
      type:"text",
      left:"center",
      top:"58%",
      style:{
        text:"（且永不增发）",
        textAlign:"center",
        fill:"#fff",
        fontSize:20,
        fontWeight:700
      }
    }],
    series: [{
      name: '通证分配',
      type: 'pie',
      radius: ['40%', '65%'],
      minAngle: 15,
      label: {
        position: 'outer',
        alignTo: 'labelLine',
        bleedMargin: 5,
        distanceToLabelLine: 10,
        normal:{
          show: true,
          fontSize: 20,
          color: '#fff',
          fontWeight: 700,
        },
      },
      labelLine: {
        normal: {
          lineStyle: {
            color: '#fff',
            width: 2
          }
        }
      },
      itemStyle:{
        normal:{
          color: function(params) {
            //自定义颜色
            var colorList = ['#8a3ed0', '#aa71dd', '#c19bdf', '#d6c5e7', '#59278f', '#6d34bb'];
            return colorList[params.dataIndex]
          },
          //颜色渐变
          // color: new echarts.graphic.LinearGradient(
          //   0, 0, 0, 1,
          //   [
          //       {offset: 0, color: '#0095FF'},
          //       {offset: 0.5, color: '#0CB9FF'},
          //       {offset: 1, color: '#0095FF'}
          //   ]
          // )
        }
      },
      data: [{
        value: 30000000, 
        name: '基金会', 
        label: labelStyle('基金会{a|3000}{b|万}', [0, 0, 30, -65]),
        labelLine: {
          length: 60,
          length2: 60
        }
      }, {
        value: 10000000, 
        name: '机构',
        label: labelStyle('机构{a|1000}{b|万}', [0, 0, 30, -45]),
        labelLine: {
          length: 30,
          length2: 50,
        }
      }, {
        value: 10000000, 
        name: '技术',
        label: labelStyle('技术{a|1000}{b|万}')
      }, {
        value: 10000000, 
        name: '创世节点',
        label: labelStyle('创世节点{a|1000}{b|万}')
      }, {
        value: 490000000, 
        name: '机械挖矿4.9亿',
        label: labelStyle('机械挖矿{a|4.9}{b|亿}', [0, 0, 30, -80]),
        labelLine: {
          length: 30,
          length2: 80,
        }
      }, {
        value: 130000000, 
        name: '持币挖矿',
        label: labelStyle('{a|1.3}{b|亿}持币挖矿', [0, -85, 30, 0]),
        labelLine: {
          length: 30,
          length2: 80,
        }
      }]
    }]
  }
  dom.setOption(option)
}

function scrollTo(scrollTop){
  const currScrollTop = $(window).scrollTop()
  const scroll = Math.abs(parseInt(currScrollTop) - parseInt(scrollTop))
  const duration = scroll / 4
  $('html, body').animate({scrollTop}, duration)
}

function labelStyle (str, padding) {
  return {
    padding,
    formatter: [str].join('\n'),
    rich: {
      a: {
        color: '#e09fff',
        fontSize: 36,
        padding: [0,0,0,5]
      },
      b: {
        color: '#e09fff',
        fontSize: 20,
        padding: [0,5,10,0]
      }
    }
  }
}

