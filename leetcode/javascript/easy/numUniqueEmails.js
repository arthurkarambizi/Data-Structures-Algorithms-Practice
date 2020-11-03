/*
** Source : https://leetcode.com/problems/unique-email-addresses/
** Date   : 10-16-2019
*/

/*
** Every email consists of a local name and a domain name, separated by the @ sign.
**
** For example, in alice@leetcode.com, alice is the local name, and leetcode.com is the domain name.
**
** Besides lowercase letters, these emails may contain '.'s or '+'s.
**
** If you add periods ('.') between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name.  For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.  (Note that this rule does not apply for domain names.)
**
** If you add a plus ('+') in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered, for example m.y+name@email.com will be forwarded to my@email.com.  (Again, this rule does not apply for domain names.)
**
** It is possible to use both of these rules at the same time.
**
** Given a list of emails, we send one email to each address in the list.  How many different addresses actually receive mails?
**
** Example 1:
**
** Input: ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
** Output: 2
** Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails
**
** Note:
**
** 1 <= emails[i].length <= 100
** 1 <= emails.length <= 100
** Each emails[i] contains exactly one '@' character.
** All local and domain names are non-empty.
** Local names do not start with a '+' character.
*/

/**
 * @param {string[]} emails
 * @return {number}
 */

//using array map
var numUniqueEmails = function(emails) {
    let finalArray = [];
    let filteredEmails = emails.map(email => {
        let splitEmail = email.split('@');
        let [localName, domainName] = splitEmail;
        // newLocalName : join localName for every (.),
        //ignore everything after (+)
        let newLocalName = localName
            .split('.')
            .join('')
            .split('+')[0];
        let resultsEmail = `${newLocalName}@${domainName}`;
        //add no resultsEmail duplicates in finalArray
        if (!finalArray.includes(resultsEmail)) {
            finalArray.push(resultsEmail);
        }
        return resultsEmail;
    });
    return finalArray.length;
};

//--------------------------------------------------------------------------------
//using array a for loop

var numUniqueEmails = function(emails) {
    let resultsArray = [];
    for (let index = 0; index < emails.length; index++) {
        const email = emails[index];
        let splitEmail = email.split('@');
        let [localName, domainName] = splitEmail;
        let newLocalName = localName
            .split('.')
            .join('')
            .split('+')[0];
        let resultsEmail = `${newLocalName}@${domainName}`;

        if (!resultsArray.includes(resultsEmail)) {
            resultsArray.push(resultsEmail);
        }
    }
    return resultsArray.length;
};

let emails = ['test.email+alex@leetcode.com', 'test.e.mail+bob.cathy@leetcode.com', 'testemail+david@lee.tcode.com'];

numUniqueEmails(emails);
