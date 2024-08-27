![image](https://github.com/user-attachments/assets/31af6246-6648-4e61-86a9-236961a0e499)


<h1>EdTech Integration Hub</h1>
<h3>Vision</h3>
<p>The EdTech Integration Hub aims to revolutionize the educational landscape by providing a secure, decentralized platform for integrating and managing EdTech tools. Through blockchain technology, the platform ensures transparent access control, fosters trust, and enhances collaboration between educators, students, and institutions.</p>

<h3>Flowchart</h3>
+---------------------+     +---------------------+ <br/>
|  Register Tool      |      |  Grant/Revoke Access| </br>
|                     |      |                     |</br>
+---------+-----------+      +----------+----------+</br>
          |                           |</br>
          v                           v</br>
+---------+-----------+      +----------+----------+</br>
|  Store on Blockchain|      |  Check User Access   |</br>
+---------------------+      +---------------------+</br>
          |                           |</br>
          v                           v</br>
+---------------------+      +---------------------+</br>
|  Manage Tools       |      |  Secure Data Exchange|</br>
+---------------------+      +---------------------+</br>

Contract Address <br/>
The smart contract for the EdTech Integration Hub is deployed at the following address on the Ethereum blockchain:<br/>

Contract Address: 0x7ef1052feb6b3ab0ed20ebe8f64667323915b9ee7a461ec70194dc5ef4023ff0<br/>

Features<br/>
  1) Tool Registration: Securely register EdTech tools on the blockchain.<br/>
  2) Access Control: Grant or revoke user access to specific tools.<br/>
  3) Tool Management: Deactivate or reactivate tools as needed.<br/>
  4) User Verification: Verify if a user has access to a tool.<br/>

Future Scope<br/>
1) Payment Integration: Enable micropayments for tool usage.<br/>
2) Role-Based Access: Implement advanced role-based access control for institutions.<br/>
3) Inter-Tool Communication: Facilitate communication between different EdTech tools.<br/>
4) Cross-Chain Compatibility: Expand support for multiple blockchain networks.<br/>
5) Analytics Dashboard: Provide insights on tool usage and access patterns.<br/>
<br/><br/>
Getting Started <br/>
    Prerequisites<br/>
      1) Solidity (v0.8.0+)<br/>
      2) Node.js (v12.x+)<br/>
      3) Truffle or Hardhat<br/>
      4) Ganache (for local testing)<br/>
      5) MetaMask (for interaction)<br/>
    Installation<br/>
      1) Clone the repository:<br/>
          git clone git@github.com:rohitrai003/EdTech-Integration-Hub.git<br/>
          cd edtech-integration-hub<br/>
      2) Install dependencies<br/>
          npm install<br/>
      3) Compile and deploy the contract:<br/>
          truffle compile<br/>
          truffle migrate<br/>
