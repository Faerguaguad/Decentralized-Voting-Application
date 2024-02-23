// Voting.sol - 智能合约代码示例
pragma solidity ^0.8.0;

contract Voting {
    mapping(address => bool) public voters;
    mapping(bytes32 => uint256) public votesReceived;
    bytes32[] public candidateList;

    constructor(bytes32[] memory _candidateNames) {
        candidateList = _candidateNames;
    }

    function vote(bytes32 _candidate) external {
        require(!voters[msg.sender], "Already voted.");
        votesReceived[_candidate]++;
        voters[msg.sender] = true;
    }

    function totalVotesFor(bytes32 _candidate) external view returns (uint256) {
        require(validCandidate(_candidate), "Invalid candidate.");
        return votesReceived[_candidate];
    }

    function validCandidate(bytes32 _candidate) internal view returns (bool) {
        for(uint i = 0; i < candidateList.length; i++) {
            if (candidateList[i] == _candidate) {
                return true;
            }
        }
        return false;
    }
}
