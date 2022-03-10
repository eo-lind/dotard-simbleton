import { useBusinesses } from "./BusinessData.js";
import { Business } from "./Business.js";

const contentTargetAll = document.querySelector(".allBusinesses");
const contentTargetNY = document.querySelector(".businessList--newYork");
const contentTargetManufacturing = document.querySelector(".businessList--manufacturing");

export const BusinessList = () => {
  const businessArray = useBusinesses();
  const nyBusinessArray = businessArray.filter(obj => obj.addressStateCode === "NY")
  const manufacturingArray = businessArray.filter(obj => obj.companyIndustry === "Manufacturing")

console.log(businessArray)
  // all businesses
  contentTargetAll.innerHTML += "<h1>Active Businesses</h1>";
  businessArray.forEach((businessObject) => {
    contentTargetAll.innerHTML += Business(businessObject);
  });

  // NY businesses
  contentTargetNY.innerHTML += "<h1>New York Businesses</h1>";
  nyBusinessArray.forEach((businessObject) => {
    contentTargetNY.innerHTML += Business(businessObject);
  });

  // manufacturing businesses
  contentTargetManufacturing.innerHTML += "<h1>Manufacturing Businesses</h1>";
  manufacturingArray.forEach((businessObject) => {
    contentTargetManufacturing.innerHTML += Business(businessObject);
  });

};

