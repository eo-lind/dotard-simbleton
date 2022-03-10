// HTML representation of purchasing agent object

export const AgentHTML = (agentObject) => {
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
