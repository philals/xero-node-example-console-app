const xero = require('xero-node');
const fs = require('fs');
const config = require('./config.json');

//Private key can either be a path or a String so check both variables and make sure the path has been parsed.
if (config.privateKeyPath && !config.privateKey)
    config.privateKey = fs.readFileSync(config.privateKeyPath);

// Available application types are:
// xero.PrivateApplication
// xero.PublicApplication
// xero.PartnerApplication

const xeroClient = new xero.PrivateApplication(config);

//Print a count of invoices
xeroClient.core.invoices.getInvoices()
    .then(invoices => {
        console.log("Invoices: " + invoices.length);
    }).catch(err => {
        console.log(err);
    });