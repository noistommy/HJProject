import Vue from 'vue'
import Router from 'vue-router'
// import HomePage from '@/pages/HomePage'
import TotalStatus from '@/pages/TotalStatus'
import ProfitLossStatus from '@/pages/ProfitLossStatus'
import FinancialStatus from '@/pages/FinancialStatus'
import ProfitRatio from '@/pages/ProfitRatio'
import SalesStatus from '@/pages/SalesStatus'
import PurchaseStatus from '@/pages/PurchaseStatus'
import InventoryStatus from '@/pages/InventoryStatus'
import ShipmentStatus from '@/pages/ShipmentStatus'
import ShipmentNStock from '@/pages/ShipmentNStock'
import StockStatus from '@/pages/StockStatus'
import ProductionManagement from '@/pages/ProductionManagement'
import QualityManagement from '@/pages/QualityManagement'
// import CounterPage from '@/pages/CounterPage'
// import IcontrolPage from '@/pages/IcontrolPage'


Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: '/bi/service/',
  routes: [
    {
      path: '/',
      name: 'total-status',
      component: TotalStatus,
    },
    {
      path: '/ProfitLossStatus',
      name: 'profitloss-status',
      component: ProfitLossStatus,
    },
    {
      path: '/ShipmentStatus',
      name: 'shipment-status',
      component: ShipmentStatus,
    },
    {
      path: '/ShipmentNStock',
      name: 'shipment-n-stock',
      component: ShipmentNStock,
    },
    {
      path: '/StockStatus',
      name: 'stock-status',
      component: StockStatus,
    },
    {
      path: '/ProductionManagement',
      name: 'production-management',
      component: ProductionManagement,
    },
    {
      path: '/QualityManagement',
      name: 'quality-management',
      component: QualityManagement,
    },
    {
      path: '/FinancialStatus',
      name: 'financial-status',
      component: FinancialStatus,
    },
    {
      path: '/ProfitRatio',
      name: 'profit-ratio',
      component: ProfitRatio,
    },
    {
      path: '/SalesStatus',
      name: 'sales-status',
      component: SalesStatus,
    },
    {
      path: '/PurchaseStatus',
      name: 'purchase-status',
      component: PurchaseStatus,
    },
    {
      path: '/InventoryStatus',
      name: 'inventory-status',
      component: InventoryStatus,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
})
