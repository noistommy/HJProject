import { Line } from 'vue-chartjs'
import zoom from 'chartjs-plugin-zoom'
import moment from 'moment'


export default {
  extends: Line,
  props: {
    chartData: {
      type: Array || Object,
      required: false,
    },
    chartLabels: {
      type: Array,
      required: true,
    },
  },
  data() {
    const timeFormat = 'MM/DD/YYYY HH:mm'
    return {
      options: {
        layout: {
          padding: {
            top: 20,
          },
        },
        pan: {
          enabled: true,
          mode: 'x',
          speed: 10,
          threshold: 10,
        },
        zoom: {
          enabled: true,
          mode: 'x',
          limits: {
            max: 10,
            min: 0.5,
          },
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              padding: 5,
              fontColor: '#ffffff',
            },
            gridLines: {
              display: true,
              color: 'rgba(255, 255, 255, .3)',
              zeroLineColor: 'rgba(255, 255, 255, .3)',
              zeroLineWidth: 2,
            },
          }],
          xAxes: [
            {
              type: 'time',
              time: {
                format: timeFormat,
                // round: 'day'
                tooltipFormat: 'll HH:mm',
              },
              ticks: {
                maxRotation: 0,
                fontColor: '#ffffff',
              },
              gridLines: {
                display: true,
                color: 'rgba(255, 255, 255, .3)',
                zeroLineColor: 'rgba(255, 255, 255, .3)',
              },
            },
          ],
        },
        legend: {
          display: true,
          labels: {
            fontColor: '#ffffff',
          },
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    }
  },
  mounted() {
    this.addPlugin(zoom)
    this.renderChart({
      labels: [this.newDate(0), this.newDate(1), this.newDate(2), this.newDate(3), this.newDate(4), this.newDate(5), this.newDate(6)],
      datasets: [
        {
          label: this.chartData[1].label,
          borderColor: '#DC704A',
          borderWidth: 1,
          // pointBackgroundColor: 'white',
          // pointBorderColor: '#DC704A',
          backgroundColor: '#DC704A',
          data: this.chartData[1].data,
          fill: false,
        },
        {
          label: this.chartData[0].label,
          borderColor: '#249ebf',
          pointBackgroundColor: 'white',
          borderWidth: 1,
          pointBorderColor: '#249Ebf',
          backgroundColor: '#4D82CD',
          data: this.chartData[0].data,
          fill: false,
        },
      ],
    }, this.options)
  },
  methods: {
    newDate: (data) => {
      return moment().add(data, 'd').toDate()
    },
    newDateString: (data) => {
      return moment().add(data, 'd').format('MM/DD/YYYY HH:mm')
    },
  },
}
