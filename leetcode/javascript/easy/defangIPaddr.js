/*
** Source : https://leetcode.com/problems/defanging-an-ip-address/
** Date   : 10-16-2019
*/

/*
** Given a valid (IPv4) IP address, return a defanged version of that IP address.
**
** A defanged IP address replaces every period "." with "[.]".
**
**
**
** Example 1:
**
** Input: address = "1.1.1.1"
** Output: "1[.]1[.]1[.]1"
** Example 2:
**
** Input: address = "255.100.50.0"
** Output: "255[.]100[.]50[.]0"
**
**
** Constraints:
**
** The given address is a valid IPv4 address.
*/

/**
 * @param {string} address
 * @return {string}
 */

var defangIPaddr = function(address) {
    let addressArr = address.split('');
    let defangedAddress = addressArr.map(element => (element === '.' ? '[.]' : element)).join('');
    return defangedAddress;
};

//--------------------------------------------------------------------------------
//or

var defangIPaddr = function(address) {
    return address.split('.').join('[.]');
};

let address = '1.1.1.1';

defangIPaddr(address);
