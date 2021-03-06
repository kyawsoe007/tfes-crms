//====================
// CRM ROUTES
//====================

/**
 * Lead Pages
 */
export const leadListPage = '/app/crm/leads'
export const singleLead = (id) => `${leadListPage}/${id}`
export const leadNewPage = leadListPage + '/new'
export const leadEditPage = (id) => `${leadListPage}/${id}/edit`
export const leadImportPage = leadListPage + '/import'

/**
 * Customer Pages
 */
// export const customerListPage = '/app/crm/customers'
// export const singleCustomer = (id) => `${customerListPage}/${id}`
// export const customerNewPage = customerListPage + '/new'
// export const customerEditPage = (id) => `${customerListPage}/${id}/edit`
// export const customerImportPage = customerListPage + '/import'

/**
 * Customer2 Pages
 */

export const customerListPage = '/app/crm/customers'
export const customerNewPage = customerListPage + '/new'
export const singleCustomer = (id) => `${customerListPage}/${id}`

/**
 * Supplier Pages
 */

export const supplierListPage = '/app/crm/supplier'
export const supplierNewPage = supplierListPage + '/new'
export const singlesupplier = (id) => `${supplierListPage}/${id}`
/**
 * Purchase Pages
 */

export const purchaseListPage = '/app/crm/purchase'
export const purchaseNewPage = purchaseListPage + '/new'
export const singlePurchase = (id) => `${purchaseListPage}/${id}`

/**
 * Quotation Pages
 */
export const quotationListPage = '/app/crm/quotation'
export const quotationNewPage = quotationListPage + '/new'
export const quotationNewVersionPage = quotationListPage + '/new-version'
export const quotationEditPage = (id) => `${quotationListPage}/${id}`
export const singlequotation = (id) => `${quotationListPage}/${id}`
export const quotationNewVersionEditpage = (id) =>
  `${quotationNewVersionPage}/${id}`
/**
 * Sales Order Pages
 */
export const salesOrderListPage = '/app/crm/salesOrder'
export const salesOrderNewPage = salesOrderListPage + '/new'
export const salesOrderEditPage = (id) => `${salesOrderListPage}/${id}`
export const singlesalesorder = (id) => `${salesOrderListPage}/${id}`
/**
 * Inventory Enquiry Pages
 */
export const inventoryEnquiryListPage = '/app/crm/inventoryEnquiry'
export const inventoryEnquiryViewPage = inventoryEnquiryListPage + '/view'
// export const inventoryEnquiryEditPage = (id) => `${inventoryEnquiryListPage}/${id}`
export const singleInventoryEnquiry = (id) => `${inventoryEnquiryListPage}/${id}`

/**
 * Commercial Settings Pages
 */
 export const commercialSettingsPage = '/app/crm/commercialSettings'

/**
 * Account Pages
 */
export const accountListPage = '/app/crm/accounts'
export const singleAccount = (id) => `${accountListPage}/${id}`
export const accountNewPage = accountListPage + '/new'
export const accountEditPage = (id) => `${accountListPage}/${id}/edit`
export const accountImportPage = accountListPage + '/import'

/**
 * Deal Pages
 */
export const dealListPage = '/app/crm/deals'
export const singleDeal = (id) => `${dealListPage}/${id}`
export const dealNewPage = dealListPage + '/new'
export const dealEditPage = (id) => `${dealListPage}/${id}/edit`
export const dealImportPage = dealListPage + '/import'

export const configListPage = '/app/crm/carconfig'

export const paymentListPage = '/app/crm/payments'

/**
 * Team Pages
 */
export const teamListPage = '/app/crm/teams'
