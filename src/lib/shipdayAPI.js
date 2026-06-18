// Mock Integration for Shipday (Local Logistics)
// Used to route localized deliveries for Maroon Market vendors.

async function dispatchLocalDelivery(orderPayload) {
  console.log("Mock Shipday API: Dispatching local courier...");
  return { success: true, deliveryId: "shipday_del_888", estimated_arrival: "30 mins" };
}

module.exports = { dispatchLocalDelivery };
