const companyData = [
  {
    company: "Affirm",
    category: "Company Career Page",
    applyLink: "https://affirm.com/careers",
    contactEmail: "careers@affirm.com"
  },
  {
    company: "Stripe",
    category: "Company Career Page",
    applyLink: "https://stripe.com/jobs",
    contactEmail: "jobs@stripe.com"
  },
  { company: "Google", category: "Company Career Page", applyLink: "https://careers.google.com", contactEmail: "" },
  { company: "Meta", category: "Company Career Page", applyLink: "https://www.metacareers.com", contactEmail: "" },
  { company: "Amazon", category: "Company Career Page", applyLink: "https://amazon.jobs", contactEmail: "" },
  { company: "Microsoft", category: "Company Career Page", applyLink: "https://careers.microsoft.com", contactEmail: "" },
  { company: "Apple", category: "Company Career Page", applyLink: "https://jobs.apple.com", contactEmail: "" },

  { company: "NVIDIA", category: "Company Career Page", applyLink: "https://www.nvidia.com/en-us/about-nvidia/careers", contactEmail: "" },
  { company: "AMD", category: "Company Career Page", applyLink: "https://www.amd.com/en/corporate/careers", contactEmail: "" },
  { company: "Intel", category: "Company Career Page", applyLink: "https://jobs.intel.com", contactEmail: "" },
  { company: "Qualcomm", category: "Company Career Page", applyLink: "https://www.qualcomm.com/company/careers", contactEmail: "" },
  { company: "Broadcom", category: "Company Career Page", applyLink: "https://jobs.broadcom.com", contactEmail: "" },

  { company: "Texas Instruments", category: "Company Career Page", applyLink: "https://careers.ti.com", contactEmail: "" },
  { company: "Analog Devices", category: "Company Career Page", applyLink: "https://careers.analog.com", contactEmail: "" },
  { company: "Marvell", category: "Company Career Page", applyLink: "https://www.marvell.com/company/careers.html", contactEmail: "" },
  { company: "Micron", category: "Company Career Page", applyLink: "https://careers.micron.com", contactEmail: "" },
  { company: "Western Digital", category: "Company Career Page", applyLink: "https://jobs.westerndigital.com", contactEmail: "" },

  { company: "Samsung Electronics", category: "Company Career Page", applyLink: "https://www.samsung.com/global/careers", contactEmail: "" },
  { company: "Sony", category: "Company Career Page", applyLink: "https://www.sonyjobs.com", contactEmail: "" },
  { company: "Bosch", category: "Company Career Page", applyLink: "https://careers.bosch.com", contactEmail: "" },
  { company: "Siemens", category: "Company Career Page", applyLink: "https://jobs.siemens.com", contactEmail: "" },
  { company: "Honeywell", category: "Company Career Page", applyLink: "https://careers.honeywell.com", contactEmail: "" },

  { company: "SpaceX", category: "Company Career Page", applyLink: "https://www.spacex.com/careers", contactEmail: "" },
  { company: "Blue Origin", category: "Company Career Page", applyLink: "https://www.blueorigin.com/careers", contactEmail: "" },
  { company: "Tesla", category: "Company Career Page", applyLink: "https://www.tesla.com/careers", contactEmail: "" },

  { company: "Bloomberg", category: "Company Career Page", applyLink: "https://careers.bloomberg.com", contactEmail: "" },
  { company: "Oracle", category: "Company Career Page", applyLink: "https://careers.oracle.com", contactEmail: "" },
  { company: "SAP", category: "Company Career Page", applyLink: "https://jobs.sap.com", contactEmail: "" },
  { company: "Salesforce", category: "Company Career Page", applyLink: "https://careers.salesforce.com", contactEmail: "" },

  { company: "Cisco", category: "Company Career Page", applyLink: "https://jobs.cisco.com", contactEmail: "" },
  { company: "Juniper Networks", category: "Company Career Page", applyLink: "https://jobs.juniper.net", contactEmail: "" },
  { company: "Arista Networks", category: "Company Career Page", applyLink: "https://careers.arista.com", contactEmail: "" },

  { company: "VMware", category: "Company Career Page", applyLink: "https://careers.vmware.com", contactEmail: "" },
  { company: "Red Hat", category: "Company Career Page", applyLink: "https://careers.redhat.com", contactEmail: "" },

  { company: "Atlassian", category: "Company Career Page", applyLink: "https://www.atlassian.com/company/careers", contactEmail: "" },
  { company: "Databricks", category: "Company Career Page", applyLink: "https://www.databricks.com/company/careers", contactEmail: "" },
  { company: "Snowflake", category: "Company Career Page", applyLink: "https://careers.snowflake.com", contactEmail: "" },

  { company: "Cloudflare", category: "Company Career Page", applyLink: "https://www.cloudflare.com/careers", contactEmail: "" },
  { company: "Fastly", category: "Company Career Page", applyLink: "https://www.fastly.com/about/jobs", contactEmail: "" },

  { company: "Palantir", category: "Company Career Page", applyLink: "https://www.palantir.com/careers", contactEmail: "" },
  { company: "Stripe", category: "Company Career Page", applyLink: "https://stripe.com/jobs", contactEmail: "" },

  { company: "Uber", category: "Company Career Page", applyLink: "https://www.uber.com/careers", contactEmail: "" },
  { company: "Lyft", category: "Company Career Page", applyLink: "https://www.lyft.com/careers", contactEmail: "" },

  { company: "Airbnb", category: "Company Career Page", applyLink: "https://careers.airbnb.com", contactEmail: "" },
  { company: "DoorDash", category: "Company Career Page", applyLink: "https://careers.doordash.com", contactEmail: "" },

  { company: "Epic Games", category: "Company Career Page", applyLink: "https://www.epicgames.com/site/en-US/careers", contactEmail: "" },
  { company: "Unity", category: "Company Career Page", applyLink: "https://careers.unity.com", contactEmail: "" },
  { company: "Electronic Arts", category: "Company Career Page", applyLink: "https://www.ea.com/careers", contactEmail: "" },
  { company: "Ubisoft", category: "Company Career Page", applyLink: "https://www.ubisoft.com/en-us/company/careers", contactEmail: "" },

  { company: "Valve", category: "Company Career Page", applyLink: "https://www.valvesoftware.com/en/jobs", contactEmail: "" },

  { company: "Two Sigma", category: "Company Career Page", applyLink: "https://www.twosigma.com/careers", contactEmail: "" },
  { company: "Jane Street", category: "Company Career Page", applyLink: "https://www.janestreet.com/join-jane-street", contactEmail: "" },
  { company: "Citadel", category: "Company Career Page", applyLink: "https://www.citadel.com/careers", contactEmail: "" },
  { company: "IMC Trading", category: "Company Career Page", applyLink: "https://www.imc.com/careers", contactEmail: "" },
  { company: "Optiver", category: "Company Career Page", applyLink: "https://optiver.com/working-at-optiver/careers", contactEmail: "" },
  { company: "Hudson River Trading", category: "Company Career Page", applyLink: "https://www.hudsonrivertrading.com/careers", contactEmail: "" },
  { company: "Jump Trading", category: "Company Career Page", applyLink: "https://www.jumptrading.com/careers", contactEmail: "" },

  { company: "Goldman Sachs", category: "Company Career Page", applyLink: "https://www.goldmansachs.com/careers", contactEmail: "" },
  { company: "Morgan Stanley", category: "Company Career Page", applyLink: "https://www.morganstanley.com/careers", contactEmail: "" },

  { company: "BlackRock", category: "Company Career Page", applyLink: "https://careers.blackrock.com", contactEmail: "" },

  { company: "PayPal", category: "Company Career Page", applyLink: "https://careers.pypl.com", contactEmail: "" },
  { company: "Visa", category: "Company Career Page", applyLink: "https://jobs.visa.com", contactEmail: "" },
  { company: "Mastercard", category: "Company Career Page", applyLink: "https://careers.mastercard.com", contactEmail: "" },

  { company: "ServiceNow", category: "Company Career Page", applyLink: "https://careers.servicenow.com", contactEmail: "" },

  { company: "Dropbox", category: "Company Career Page", applyLink: "https://jobs.dropbox.com", contactEmail: "" },
  { company: "Box", category: "Company Career Page", applyLink: "https://careers.box.com", contactEmail: "" },

  { company: "Zoho", category: "Company Career Page", applyLink: "https://www.zoho.com/careers", contactEmail: "" },
  { company: "Freshworks", category: "Company Career Page", applyLink: "https://www.freshworks.com/company/careers", contactEmail: "" },

  { company: "TCS", category: "Company Career Page", applyLink: "https://www.tcs.com/careers", contactEmail: "" },
  { company: "Infosys", category: "Company Career Page", applyLink: "https://www.infosys.com/careers", contactEmail: "" },
  { company: "Wipro", category: "Company Career Page", applyLink: "https://careers.wipro.com", contactEmail: "" },
  { company: "HCLTech", category: "Company Career Page", applyLink: "https://www.hcltech.com/careers", contactEmail: "" },

  { company: "Capgemini", category: "Company Career Page", applyLink: "https://www.capgemini.com/careers", contactEmail: "" },
  { company: "Accenture", category: "Company Career Page", applyLink: "https://www.accenture.com/careers", contactEmail: "" },

  { company: "IBM", category: "Company Career Page", applyLink: "https://www.ibm.com/careers", contactEmail: "" },

  { company: "Dell", category: "Company Career Page", applyLink: "https://jobs.dell.com", contactEmail: "" },
  { company: "HP", category: "Company Career Page", applyLink: "https://jobs.hp.com", contactEmail: "" },

  { company: "NetApp", category: "Company Career Page", applyLink: "https://www.netapp.com/company/careers", contactEmail: "" },
  { company: "Seagate", category: "Company Career Page", applyLink: "https://www.seagate.com/careers", contactEmail: "" },

  { company: "Ericsson", category: "Company Career Page", applyLink: "https://www.ericsson.com/en/careers", contactEmail: "" },
  { company: "Nokia", category: "Company Career Page", applyLink: "https://www.nokia.com/about-us/careers", contactEmail: "" },

  { company: "Rakuten", category: "Company Career Page", applyLink: "https://global.rakuten.com/corp/careers", contactEmail: "" },
  { company: "Tencent", category: "Company Career Page", applyLink: "https://careers.tencent.com", contactEmail: "" },
  { company: "ByteDance", category: "Company Career Page", applyLink: "https://jobs.bytedance.com", contactEmail: "" }
];

export default companyData;