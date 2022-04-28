//--------------------------04/26/22-------------------------------

/**
 * Exercise: Node 101 - Medium 1: DNS Lookup
 * ---------------------------------------------------------
 * Write a program that prompts the user for a domain name, 
 * looks up the IP address for the domain, and prints it out.
 * 
Example Output: 
-----------------------
$ node dns_lookup.js
Domain Name: google.com
IP Address:  172.217.2.46
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 */

//Resource 1: https://nodejs.org/api/dns.html
//Resource 2: https://www.geeksforgeeks.org/node-js-dns/
//1. import method needed to access the dns of a given site
const dns = require('dns');
// const { hostname } = require('os');
const wrongWebsite = "googlee123.com";
const website = "google.com"
//2. Console.log out the Domain Name, Website, and the IP Address 
console.log("Example of a Valid Website\n--------------------------------------\n");
dns.lookup(website, (err, address, family)=> {
    
    if (err && err.code === 'ENOTFOUND'){
        console.log('PLEASE CHECK YOUR INTERNET CONNECTION');
    }else{
        console.log(`
        Domain Name: ${website}
        IP Address: ${address}
        Family: Iv${family}
    `);
    }
});
/**
 * Returns:
 * -------------
 * corcoding@JodysAppleWatch medium % node medium.js
Example of a Valid Website
--------------------------------------


        Domain Name: google.com
        IP Address: 142.251.15.139
        Family: Iv4
    
corcoding@JodysAppleWatch medium % 
 */

//3. Do the same but for a wrong websie:
console.log("\nExample of an Invalid Website\n--------------------------------------\n");
dns.lookup(wrongWebsite, (err, address, family)=> {
    
    if (err && err.code === 'ENOTFOUND'){
        console.log(err);
        console.log(err.code);
        console.log('PLEASE CHECK YOUR INTERNET CONNECTION\n');
    }else{
        console.log(`
        Domain Name: ${wrongWebsite}
        IP Address: ${address}
        Family: Iv${family}
    `);
    }
});
/**
 * Returns:
 * --------------------
 * Example of an Invalid Website
--------------------------------------

Error: getaddrinfo ENOTFOUND googlee123.com
    at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:71:26) {
  errno: -3008,
  code: 'ENOTFOUND',
  syscall: 'getaddrinfo',
  hostname: 'googlee123.com'
}
ENOTFOUND
PLEASE CHECK YOUR INTERNET CONNECTION
*/



