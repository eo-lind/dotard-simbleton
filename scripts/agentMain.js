// bring in the entire array of business objects
import { useBusinesses } from "./BusinessData.js"

// point to where the agents will display on the DOM
const contentTargetPurchasingAgents = document.querySelector(".purchasingAgents");

// declare a variable that invokes the function bringing in the original array
const fullBizArray = useBusinesses();

//this function creates a new array full of objects that just contain the purchasing agent details
const purchasingAgent = () => fullBizArray.map(businessObject => {
	let agentObj = {}
	agentObj.fullname = `${businessObject.purchasingAgent.nameFirst} ${businessObject.purchasingAgent.nameLast}`
	agentObj.company = businessObject.companyName
	agentObj.phone = businessObject.phoneWork

  return agentObj
})

// this creates the HTML representation of purchasing agent object

const AgentHTML = (agentObject) => {
    return `
        <section class="agent">
            <h2 class="agentName">${agentObject.fullname}</h2>
            <div class="agentCompany">
                ${agentObject.company}
            </div>
            <div class="agentPhone">
                ${agentObject.phone}
            </div>
            <hr>
        </section>
    `;
  };

// this function pushes the purchasing agent info onto the DOM

const populatePurchasingAgents = () => {
    const purchasingAgentArr = purchasingAgent()
    
    // contentTargetPurchasingAgents.innerHTML += "<div class='agent'><h1>Purchasing Agents</h1></div>";
    purchasingAgentArr.forEach((agentObject) => {
      contentTargetPurchasingAgents.innerHTML += AgentHTML(agentObject);
    });
  }

  populatePurchasingAgents()