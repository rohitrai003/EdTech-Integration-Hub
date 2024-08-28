import React from "react";
import { abi } from "../../constant/abi";
import { useState } from "react";
import Web3 from "web3";
import { contractAddress } from "../../constant/contractAddress";
import "../RegisterView/RegisterView.css";

function RegisterView() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [account, setAccount] = useState("");
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);

  const connectMetaMask = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask!");
      return { web3: null, account: null };
    }

    try {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      setAccount(account);

      const contractInstance = new web3Instance.eth.Contract(
        abi,
        contractAddress
      );
      setContract(contractInstance);

      console.log("Connected to MetaMask with account:", account);
      return { web3: web3Instance, account };
    } catch (error) {
      console.error("Failed to connect to MetaMask:", error.message || error);
      setMessage(`Failed to connect to MetaMask: ${error.message || error}`);
      return { web3: null, account: null }; // Return null if there's an error
    }
  };

  //Register
  const handleRegister = async (e) => {
    e.preventDefault();

    const { web3, account } = await connectMetaMask();

    if (!web3 || !account) {
      alert("MetaMask connection failed. Please try again.");
      return;
    } else {
      console.log("Metamask Connected");
    }

    try {
      const tx = await contract.methods
        .registerTool(name, description)
        .send({ from: account });
      console.log("Transaction sent:", tx.transactionHash);
      setMessage(
        `Tool registered successfully! Transaction Hash: ${tx.transactionHash}`
      );
    } catch (error) {
      console.error("Failed to register tool:", error.message || error);
      setMessage(`Failed to register tool: ${error.message || error}`);
    }
  };

  return (
    <div className="registerview">
      <div className="connect">
        <button onClick={connectMetaMask} className="connectbutton">
          Connect Wallet
        </button>
        {account && <p>Successfully Connected.</p>}
      </div>
      <h2>Register Tool</h2>
      <form onSubmit={handleRegister}>
        <div className="text-input">
          <label>Tool Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="text-input">
          <label>Tool Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default RegisterView;
