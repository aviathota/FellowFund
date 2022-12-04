# FellowFund
![Logo](/app/pages/white_logo.png)

### Splitting expenses, made easy!  

Project by Avi Athota as part of the CREATE-X program at Georgia Tech in Fall '22 and Spring '23.  
Mentored by Professor Caleb Southern.

<p>&nbsp;</p>

## About the Project

FellowFund is an accounting and money sharing mobile application that vastly streamlines the process of splitting expenses within a group. 

Splitting expenses is an overly painful and tedious experience, and it's definitely been a personal grievance of mine over the years. I have five roommates, and we often purchase things together, whether it be at the grocery store or at a restaurant we eat at together. Obviously, we can't ask a Target employee to split the bill six different ways, so one of us usually has to pay the full amount and be reimbursed later, using an app like Venmo or Paypal. While this sounds like a good idea in theory, having to send multiple reimbursement requests EVERY TIME we buy something get extremely tedious very fast.  

FellowFund solves this issue. In FellowFund, users are be able to create groups with people they commonly share expenses with (for instance, my roommates). Within each group, users can log transactions -- for example, say I order $60 of pizza for our room, I can log that transaction within the FellowFund app. FellowFund is able to keep a history of all of these transactions, and uses this history to keep a running table of who owes who and how much money is owed. That way, whenever a group decides to balance out the expenses (whether that be weekly, biweekly, or monthly), the reimbursement process is made much simpler.

<p>&nbsp;</p>

## Features (in development)

### Integral Features
 - ability to create groups and add friends
 - ability to add transactions
 - transaction history
   - potentially stored on the Blockchain as a hash to be immutable / secure
 - voting system to verify transaction requests
 - balance table (to see who owes who money + how much)  
 
 ### Quality of Life + Additional Features
  - option to split a transaction evenly / split it manually (for uneven splitting)
  - receipt scanner
    - uses OCR to streamline the process of splitting a transaction manually
  - one click reimbursement
    - potentially using a Venmo API, Paypal, etc. if possible

<p>&nbsp;</p>

## Progress

### Timeline
Attached below is a general timeline of the progress I've made over the last semester.  

<p>&nbsp;</p>

![Timeline](/app/pages/timeline.png)

<p>&nbsp;</p>

### Development
Attached below are some examples of screens that have been prototyped / implemented.

<p>&nbsp;</p>

![image1](/app/pages/figma1.png)
These are the first four screens. The log-in/sign-up system utilizes Firebase Authentication to make sure that user accounts are secure.

<p>&nbsp;</p>

![image2](/app/pages/log_transaction.png)  
This is a rough mock-up of the transaction logging screen.

<p>&nbsp;</p>

## Future Plans

This is the first of two semesters I'll be working on this project, and I'm really excited to take the next steps in its development / outreach. Below are some things that I'll definitely be working on next semester.

### Development
 - secure data hosting for general group information (AWS)
 - smart contracting system for transaction history (Solidity)
 - one-click reimbursement (potentially using Venmo API, Paypal, etc.)

### Miscellaneous
 - create a FellowFund website
 - potentially present idea at other startup communities or startup accelerators  
 
 <p>&nbsp;</p>
 
 ## Thanks for checking us out!
 



