// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EdTechIntegrationHub {

    // Struct to represent an EdTech tool
    struct Tool {
        string name;
        string description;
        address owner;
        bool isActive;
    }

    // Mapping to store tools with their respective IDs
    mapping(uint256 => Tool) public tools;

    // Mapping to store user access to tools
    mapping(address => mapping(uint256 => bool)) public userAccess;

    uint256 public toolCount;

    // Events
    event ToolRegistered(uint256 toolId, string name, address owner);
    event AccessGranted(uint256 toolId, address user);
    event AccessRevoked(uint256 toolId, address user);

    // Modifier to check if the caller is the tool owner
    modifier onlyToolOwner(uint256 _toolId) {
        require(tools[_toolId].owner == msg.sender, "Not the tool owner");
        _;
    }

    // Register a new EdTech tool
    function registerTool(string memory _name, string memory _description) public {
        toolCount++;
        tools[toolCount] = Tool(_name, _description, msg.sender, true);

        emit ToolRegistered(toolCount, _name, msg.sender);
    }

    // Grant access to a user for a specific tool
    function grantAccess(uint256 _toolId, address _user) public onlyToolOwner(_toolId) {
        require(tools[_toolId].isActive, "Tool is not active");
        userAccess[_user][_toolId] = true;

        emit AccessGranted(_toolId, _user);
    }

    // Revoke access from a user for a specific tool
    function revokeAccess(uint256 _toolId, address _user) public onlyToolOwner(_toolId) {
        require(userAccess[_user][_toolId], "User does not have access");
        userAccess[_user][_toolId] = false;

        emit AccessRevoked(_toolId, _user);
    }

    // Check if a user has access to a tool
    function hasAccess(uint256 _toolId, address _user) public view returns (bool) {
        return userAccess[_user][_toolId];
    }

    // Deactivate a tool
    function deactivateTool(uint256 _toolId) public onlyToolOwner(_toolId) {
        tools[_toolId].isActive = false;
    }

    // Reactivate a tool
    function reactivateTool(uint256 _toolId) public onlyToolOwner(_toolId) {
        tools[_toolId].isActive = true;
    }
}
