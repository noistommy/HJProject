 if (this.chartId === 'SS001') {
      this.chartType = 'doughnut-type'
      this.datasets = [
        {
          label: 'chart2-D1',
          data: [200, (200 - 170)],
        },
        {
          label: 'chart2-D2',
          data: [150, 200 - 150],
        },
      ]
      this.labels = ['계획', '실적']
      this.chartTitle = '일일 출하 현황'
      // this.isLegend = true
      this.colorTheme = ColorTheme.dos1
    }
    if (this.chartId === 'STS001') {
      this.chartType = 'doughnut-type'
      this.datasets = [
        {
          label: 'chart2-D1',
          data: [150, (200 - 150)],
        },
        {
          label: 'chart2-D2',
          data: [180, 200 - 180],
        },
      ]
      this.labels = ['계획', '실적']
      this.chartTitle = '일일 입고 현황'
      // this.isLegend = true
      this.colorTheme = ColorTheme.dos2
    }
    if (this.chartId === 'SS002') {
      this.chartType = 'bar-type'
      this.datasets = [
        {
          label: '출하금액',
          data: ['100', '90', '80', '60', '50', '40', '30', '20', '10', '5'],
        },
      ]
      this.labels = ['거래처1', '거래처2', '거래처3', '거래처4', '거래처5', '거래처6', '거래처7', '거래처8', '거래처9', '거래처10']
      this.chartTitle = '고객사별 출하 금액'
      this.colorTheme = ColorTheme.dos2
    }
    if (this.chartId === 'STS002') {
      this.chartType = 'bar-type'
      this.datasets = [
        {
          label: '출하금액',
          data: ['100', '90', '80', '60', '50', '40', '30', '20', '10', '5'],
        },
      ]
      this.labels = ['거래처1', '거래처2', '거래처3', '거래처4', '거래처5', '거래처6', '거래처7', '거래처8', '거래처9', '거래처10']
      this.chartTitle = '고객사별 입고 금액'
      this.colorTheme = ColorTheme.dos1
    }
    if (this.chartId === 'SS003') {
      this.chartType = 'bar-type'
      this.datasets = [
        {
          label: '실적',
          data: [25, 25, 36, 26, 36, 47, 20],
        },
        {
          label: '계획',
         data: [15, 25, 46, 16, 46, 37, 10],
        },
      ]
     this.labels = ['1', '2', '3', '4', '5', '6', '7',
       '8', '9', '10', '11', '12', '13', '14',
        '15', '16', '17', '18', '19', '20', '21',
         '22', '23', '24', '25', '26', '27', '28',
          '29', '30', '31']
      this.chartTitle = '당월 출하 현황'
      this.colorTheme = ColorTheme.dos1
    }
    if (this.chartId === 'STS003') {
      this.chartType = 'bar-type'
      this.datasets = [
        {
          label: '실적',
          data: [25, 25, 36, 26, 36, 47, 20],
        },
        {
          label: '계획',
         data: [15, 25, 46, 16, 46, 37, 10],
        },
      ]
     this.labels = ['1', '2', '3', '4', '5', '6', '7',
       '8', '9', '10', '11', '12', '13', '14',
        '15', '16', '17', '18', '19', '20', '21',
         '22', '23', '24', '25', '26', '27', '28',
          '29', '30', '31']
      this.chartTitle = '당월 입고 현황'
      this.colorTheme = ColorTheme.dos2
    }
    if (this.chartId === 'PM101') {
      this.chartType = 'doughnut-type'
      this.datasets = [
        {
          data: [87, (200 - 87)],
        },
      ]
      this.labels = ['', '']
      this.chartTitle = '생산 계획 대비 실적 현황'
      this.colorTheme = ColorTheme.dos1
    }
    if (this.chartId === 'PM102') {
      this.chartType = 'horizontal-bar-type'
      this.datasets = [
        {
          label: '달성률',
          data: ['100', '90', '80', '60', '50', '40', '30', '20'],
        },
      ]
      this.labels = ['사출팀', '프레스1팀', '프레스2팀', '용접팀', '조립팀', '전착팀', '영업관리부', '구매팀']
      this.chartTitle = '라인별 달성률'
      this.colorTheme = [ColorTheme.dos1[1], ColorTheme.dos2[1]]
    }

    if (this.chartId === 'PM201') {
      this.chartType = 'doughnut-type'
      this.datasets = [
        {
          data: [125, (200 - 125)],
        },
      ]
      this.labels = ['', '']
      this.chartTitle = '종합 생산성 현황'
      this.colorTheme = ColorTheme.dos2
    }
    if (this.chartId === 'PM202') {
      this.chartType = 'horizontal-bar-type'
      this.datasets = [
        {
          label: '생산성',
          data: ['100', '90', '80', '60', '50', '40', '30', '20'],
        },
      ]
      this.labels = ['사출팀', '프레스1팀', '프레스2팀', '용접팀', '조립팀', '전착팀', '영업관리부', '구매팀']
      this.chartTitle = '라인별 생산성 현황'
      this.colorTheme = [ColorTheme.dos2[1], ColorTheme.dos1[1]]
    }
    if (this.chartId === 'PM301') {
      this.chartType = 'half-doughnut-type'
      this.datasets = [
        {
          data: [78, 22],
        },
      ]
      this.labels = ['가동설비', '비가동']
      this.chartTitle = '설비 가동률 현황'
      this.colorTheme = ColorTheme.dos4
    }
    if (this.chartId === 'QM001') {
      this.chartType = 'line-type'
      this.datasets = [
        {
          label: '사출팀',
          data: [25, 25, 36, 26, 36, 47, 20],
        },
        {
          label: '프레스1팀',
         data: [15, 25, 46, 16, 46, 37, 10],
        },
        {
          label: '프레스2팀',
         data: [23, 34, 41, 13, 23, 37, 20],
        },
        {
          label: '용접팀',
         data: [45, 23, 21, 23, 35, 23, 10],
        },
        {
          label: '조립팀',
          data: [10, 13, 15, 18, 30, 25, 46],
        },
        {
          label: '전착팀',
          data: [5, 12, 13, 15, 24, 62, 34],
        },
      ]
     this.labels = ['1', '2', '3', '4', '5', '6', '7',
       '8', '9', '10', '11', '12', '13', '14',
        '15', '16', '17', '18', '19', '20', '21',
         '22', '23', '24', '25', '26', '27', '28',
          '29', '30', '31']
      this.chartTitle = '공정별 불량 현황'
      this.colorTheme = ColorTheme.unos
    }
    if (this.chartId === 'QM002') {
      this.chartType = 'line-type'
      this.datasets = [
        {
          label: '사출팀',
          data: [25, 25, 36, 26, 36, 47, 20],
        },
        {
          label: '프레스1팀',
         data: [15, 25, 46, 16, 46, 37, 10],
        },
        {
          label: '프레스2팀',
         data: [23, 34, 41, 13, 23, 37, 20],
        },
        {
          label: '용접팀',
         data: [45, 23, 21, 23, 35, 23, 10],
        },
        {
          label: '조립팀',
          data: [10, 13, 15, 18, 30, 25, 46],
        },
        {
          label: '전착팀',
          data: [5, 12, 13, 15, 24, 62, 34],
        },
      ]
     this.labels = ['1', '2', '3', '4', '5', '6', '7',
       '8', '9', '10', '11', '12', '13', '14',
        '15', '16', '17', '18', '19', '20', '21',
         '22', '23', '24', '25', '26', '27', '28',
          '29', '30', '31']
      this.chartTitle = '불량 항목별 현황'
      this.colorTheme = ColorTheme.unos
    }
    if (this.chartId === 'QM003') {
      this.chartType = 'bar-type'
      this.datasets = [
        {
          label: '전체 불량률',
          data: [25, 25, 36, 26, 36, 47, 20],
        },
      ]
      this.labels = ['1', '2', '3', '4', '5', '6', '7',
       '8', '9', '10', '11', '12', '13', '14',
        '15', '16', '17', '18', '19', '20', '21',
         '22', '23', '24', '25', '26', '27', '28',
          '29', '30', '31']
      this.chartTitle = '당월 불량 현황'
      this.colorTheme = ColorTheme.dos2
    }

    if (this.chartId === 'QM004') {
      this.chartType = 'horizontal-bar-type'
      this.datasets = [
        {
          label: '월 불량률',
          data: [101, 115, 125, 136, 146, 166, 197, 220],
        },
      ]
      this.labels = ['사출팀', '프레스1팀', '프레스2팀', '용접팀', '조립팀', '전착팀', '영업관리부', '구매팀']
      this.chartTitle = '당월 공정별 불량 현황'
      this.colorTheme = ColorTheme.dos3
    }
    if (this.chartId === 'PLS001') {
      this.chartType = 'bar-type'
      this.datasets = [
        {
          label: '',
          data: [201474, 166540],
        },
      ]
      this.labels = ['5월', '6월 28일']
      this.chartTitle = '월별 손익 변동 현황'
    }
     if (this.chartId === 'PLS002') {
      this.chartType = 'stack-group-type'
      this.datasets = [
        {
          label: '영업이익',
         data: [25, 13, 21, 33, 15, 43],
          type: 'line',
        },
        {
          label: '당기순이익',
         data: [45, 23, 21, 23, 35, 23],
          type: 'line',
        },
        {
          label: '매출',
          data: [45, 45, 56, 46, 56, 67],
          type: 'bar',
        },
        {
          label: '매출원가',
         data: [7, 15, 26, 6, 26, 7],
          type: 'bar',
        },
        {
          label: '매출원가-제조공정',
         data: [5, 5, 6, 6, 6, 17],
          type: 'bar',
        },
        {
          label: '판관비',
         data: [13, 14, 21, 13, 13, 17],
          type: 'bar',
        },
      ]
      this.labels = ['1월', '2월', '3월', '4월', '5월', '6월']
      this.chartTitle = ''
      this.colorTheme = ColorTheme.seis
    }
    if (this.chartId === 'FS001') {
      this.chartType = 'bar-stack-type'
      this.datasets = [
        {
          label: '유동자산',
          data: [25, 25, 36, 26, 36, 47, 20],
        },
        {
          label: '당좌자산',
         data: [15, 25, 46, 16, 46, 37, 10],
        },
        {
          label: '재고자산',
         data: [23, 34, 41, 13, 23, 37, 20],
        },
        {
          label: '기타',
         data: [45, 23, 21, 23, 35, 23, 10],
        },
      ]
      this.labels = ['1월', '2월', '3월', '4월', '5월', '6월28일']
      this.chartTitle = '자산변동'
    }
    if (this.chartId === 'FS002') {
      this.chartType = 'bar-stack-type'
      this.datasets = [
        {
          label: '유동부채',
          data: [25, 25, 36, 26, 36, 47, 20],
        },
        {
          label: '비유동부채',
         data: [15, 25, 46, 16, 46, 37, 10],
        },
        {
          label: '차입금',
         data: [23, 34, 41, 13, 23, 37, 20],
        },
        {
          label: '자본',
         data: [45, 23, 21, 23, 35, 23, 10],
        },
      ]
      this.labels = ['1월', '2월', '3월', '4월', '5월', '6월28일']
      this.chartTitle = '자본과 부채'
    }
    if (this.chartId === 'SLS001') {
      this.chartType = 'pie-type'
      this.datasets = [
        {
          data: [58, 22, 18, 2],
        },
      ]
      this.labels = ['상품', '제품', '반제품', '기타']
      this.chartTitle = '유형별 매출 비율'
    }
    if (this.chartId === 'SLS002') {
      this.chartType = 'bar-type'
      this.datasets = [
        {
          label: '상품',
          data: [25, 25, 36, 26, 36, 47],
        },
        {
          label: '제품',
         data: [15, 25, 46, 16, 46, 37],
        },
        {
          label: '반제품',
         data: [23, 34, 41, 13, 23, 37],
        },
        {
          label: '기타',
         data: [45, 23, 21, 23, 35, 23],
        },
      ]
      this.labels = ['1월', '2월', '3월', '4월', '5월', '6월28일']
      this.chartTitle = '유형별 매출 금액 추이'
    }
    if (this.chartId === 'PCS001') {
      this.chartType = 'pie-type'
      this.datasets = [
        {
          data: [58, 22, 18, 2],
        },
      ]
      this.labels = ['상품', '제품', '반제품', '기타']
      this.chartTitle = '유형별 매입 비율'
    }
    if (this.chartId === 'PCS002') {
      this.chartType = 'bar-type'
      this.datasets = [
        {
          label: '상품',
          data: [25, 25, 36, 26, 36, 47],
        },
        {
          label: '제품',
         data: [15, 25, 46, 16, 46, 37],
        },
        {
          label: '반제품',
         data: [23, 34, 41, 13, 23, 37],
        },
        {
          label: '기타',
         data: [45, 23, 21, 23, 35, 23],
        },
      ]
      this.labels = ['1월', '2월', '3월', '4월', '5월', '6월28일']
      this.chartTitle = '유형별 매입 금액 추이'
    }
    if (this.chartId === 'IS001') {
      this.chartType = 'pie-type'
      this.datasets = [
        {
          data: [58, 22, 18, 2],
        },
      ]
      this.labels = ['상품', '제품', '반제품', '기타']
      this.chartTitle = '유형별 재고 비율'
    }
    if (this.chartId === 'IS002') {
      this.chartType = 'bar-type'
      this.datasets = [
        {
          label: '상품',
          data: [25, 25, 36, 26, 36, 47],
        },
        {
          label: '제품',
         data: [15, 25, 46, 16, 46, 37],
        },
        {
          label: '반제품',
         data: [23, 34, 41, 13, 23, 37],
        },
        {
          label: '기타',
         data: [45, 23, 21, 23, 35, 23],
        },
      ]
      this.labels = ['1월', '2월', '3월', '4월', '5월', '6월28일']
      this.chartTitle = '유형별 재고 금액 추이'
    }
    if (this.chartId === 'PR001') {
      this.chartType = 'line-type'
      this.datasets = [
        {
          label: '상품',
          data: [25, 25, 36, 26, 36, 47],
        },
        {
          label: '제품',
         data: [15, 25, 46, 16, 46, 37],
        },
        {
          label: '반제품',
         data: [23, 34, 41, 13, 23, 37],
        },
        {
          label: '기타',
         data: [45, 23, 21, 23, 35, 23],
        },
      ]
       this.labels = ['1월', '2월', '3월', '4월', '5월', '6월28일', '7월', '8월', '9월', '10월', '11월', '12월']
       this.chartTitle = '성장성(%)'
       this.colorTheme = ColorTheme.unos
    }
    if (this.chartId === 'PR002') {
      this.chartType = 'line-type'
      this.datasets = [
        {
          label: '상품',
          data: [25, 25, 36, 26, 36, 47],
        },
        {
          label: '제품',
         data: [15, 25, 46, 16, 46, 37],
        },
        {
          label: '반제품',
         data: [23, 34, 41, 13, 23, 37],
        },
        {
          label: '기타',
         data: [45, 23, 21, 23, 35, 23],
        },
      ]
       this.labels = ['1월', '2월', '3월', '4월', '5월', '6월28일', '7월', '8월', '9월', '10월', '11월', '12월']
       this.chartTitle = '수익성(%)'
       this.colorTheme = ColorTheme.unos
    }
    if (this.chartId === 'PR003') {
      this.chartType = 'line-type'
      this.datasets = [
        {
          label: '상품',
          data: [25, 25, 36, 26, 36, 47],
        },
        {
          label: '제품',
         data: [15, 25, 46, 16, 46, 37],
        },
        {
          label: '반제품',
         data: [23, 34, 41, 13, 23, 37],
        },
        {
          label: '기타',
         data: [45, 23, 21, 23, 35, 23],
        },
      ]
       this.labels = ['1월', '2월', '3월', '4월', '5월', '6월28일', '7월', '8월', '9월', '10월', '11월', '12월']
       this.chartTitle = '안정성(%)'
       this.colorTheme = ColorTheme.unos
    }
    if (this.chartId === 'PR004') {
      this.chartType = 'line-type'
      this.datasets = [
        {
          label: '상품',
          data: [25, 25, 36, 26, 36, 47],
        },
        {
          label: '제품',
         data: [15, 25, 46, 16, 46, 37],
        },
        {
          label: '반제품',
         data: [23, 34, 41, 13, 23, 37],
        },
        {
          label: '기타',
         data: [45, 23, 21, 23, 35, 23],
        },
      ]
       this.labels = ['1월', '2월', '3월', '4월', '5월', '6월28일', '7월', '8월', '9월', '10월', '11월', '12월']
       this.chartTitle = '활동성(%)'
       this.colorTheme = ColorTheme.unos
    }