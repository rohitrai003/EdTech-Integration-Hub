import React, { useState } from "react";
import Web3 from "web3";
import { abi } from "../../constant/abi";
import { contractAddress } from "../../constant/contractAddress";
import "./AccessView.css";

function AccessView() {
  const [message, setMessage] = useState("");
  const [toolId, setToolId] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const web3 = new Web3(window.ethereum);

  // Create contract instance
  const contract = new web3.eth.Contract(abi, contractAddress);

  const handleGrantAccess = async (e) => {
    e.preventDefault();

    if (!window.ethereum) {
      setMessage("Please install MetaMask!");
      return;
    }

    try {
      // Request account access
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];

      // Call the grantAccess function
      const tx = await contract.methods
        .grantAccess(parseInt(toolId), userAddress)
        .send({ from: account });

      // Display the transaction hash
      setMessage(
        `Access granted successfully! Transaction Hash: ${tx.transactionHash}`
      );
    } catch (error) {
      console.error("Error granting access:", error);
      setMessage(
        "Failed to grant access. Ensure you are the tool owner and the tool is active. Check the console for details."
      );
    }
  };

  return (
    <div className="accessview">
      <h2>Grant Access to Tool</h2>
      <form onSubmit={handleGrantAccess}>
        <div className="text-input">
          <label>Tool ID:</label>
          <input
            type="number"
            value={toolId}
            onChange={(e) => setToolId(e.target.value)}
            required
          />
        </div>
        <div className="text-input">
          <label>User Address:</label>
          <input
            type="text"
            value={userAddress}
            onChange={(e) => setUserAddress(e.target.value)}
            required
          />
        </div>
        <button type="submit">Grant Access</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default AccessView;
