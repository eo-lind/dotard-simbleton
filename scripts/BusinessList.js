import { useBusinesses } from "./BusinessData.js";
import { Business } from "./Business.js";
import  { AgentHTML } from "./PurchasingAgent.js"

const contentTargetAll = document.querySelector(".allBusinesses");
const contentTargetNY = document.querySelector(".businessList--newYork");
const contentTargetManufacturing = document.querySelector(".businessList--manufacturing");

export const BusinessList = () => {
  const businessArray = useBusinesses();
  const nyBusinessArray = businessArray.filter(obj => obj.addressStateCode === "NY")
  const manufacturingArray = businessArray.filter(obj => obj.companyIndustry === "Manufacturing")

  // all businesses
  // contentTargetAll.innerHTML += "<div class='businessheading'><h1>Active Businesses</h1></div>";
  businessArray.forEach((businessObject) => {
    contentTargetAll.innerHTML += Business(businessObject);
  });

  // NY businesses
  // contentTargetNY.innerHTML += "<div class='businessheading'><h1>New York Businesses</h1></div>";
  nyBusinessArray.forEach((businessObject) => {
    contentTargetNY.innerHTML += Business(businessObject);
  });

  // manufacturing businesses
  // contentTargetManufacturing.innerHTML += "<div class='businessheading'><h1>Manufacturing Businesses</h1></div>";
  manufacturingArray.forEach((businessObject) => {
    contentTargetManufacturing.innerHTML += Business(businessObject);
  });

};


// purchasing agents


// const contentTargetPurchasingAgents = document.querySelector(".purchasingAgents");
// const fullBizArray = useBusinesses();

// const purchasingAgent = () => fullBizArray.map(businessObject => {
// 	let agentObj = {}
// 	agentObj.fullname = `${businessObject.purchasingAgent.nameFirst} ${businessObject.purchasingAgent.nameLast}`
// 	agentObj.company = businessObject.companyName
// 	agentObj.phone = businessObject.phoneWork

//   return agentObj
// })


// purchasingAgent() logged the right results from here


// export const populatePurchasingAgents = () => {
//   const purchasingAgentArr = purchasingAgent()
  
//   // contentTargetPurchasingAgents.innerHTML += "<div class='agent'><h1>Purchasing Agents</h1></div>";
//   purchasingAgentArr.forEach((agentObject) => {
//     contentTargetPurchasingAgents.innerHTML += AgentHTML(agentObject);
//   });
// }