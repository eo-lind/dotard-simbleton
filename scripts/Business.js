export const Business = (businessObject) => {
    return `
        <section class="business">
            <h2 class="companyName">${businessObject.companyName}</h2>
            <div class="companyIndustry">
                Industry: ${businessObject.companyIndustry}
            </div>
            <div class="purchasingAgent">
                Purchasing Agent: ${businessObject.purchasingAgent.nameFirst} ${businessObject.purchasingAgent.nameLast}
            </div>
            <div class="phoneWork">
                Phone: ${businessObject.phoneWork}
            </div>
            <div class="orders">
                Orders: ${businessObject.orders}
            </div>
            <div class="address">
                Address: ${businessObject.addressFullStreet} <br>
                ${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}
            </div>
            <hr>
        </section>
    `;
  };
  